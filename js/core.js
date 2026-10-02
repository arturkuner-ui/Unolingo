'use strict';
/* Holzwort – core: data registry, parsing, helpers, storage */

const FD = window.FD = {
  subjects: [], byId: {}, words: [], wordById: {}, diagrams: {}, compounds: [],
  UNIT_SIZE: 8,
};

/* ---------- Data registration ---------- */

FD.subject = function (def) {
  const s = Object.assign({ quiz: [], diagram: null, lecture: null, semester: 1 }, def);
  s.words = parseWords(def.words || '', s.id);
  s.sentences = parseSentences(def.sentences || '', s.id);
  FD.subjects.push(s);
  FD.byId[s.id] = s;
};

function parseWords(txt, sid) {
  const out = [];
  txt.split('\n').forEach(raw => {
    const line = raw.trim();
    if (!line || line.startsWith('//')) return;
    const i = line.indexOf(' = ');
    if (i < 0) { console.warn('Bad word line', sid, line); return; }
    const de = line.slice(0, i).trim();
    const en = line.slice(i + 3).trim();
    const m = de.match(/^(der|die|das) (.+)$/);
    const pl = /\(Pl\.\)/.test(de);
    const clean = de.replace(/\s*\([^)]*\)/g, '').trim();
    const abbr = (de.match(/\(([A-ZÄÖÜ][A-ZÄÖÜ0-9-]+[a-z]?)\)/) || [])[1] || null;
    const base = m ? clean.replace(/^(der|die|das) /, '') : clean;
    out.push({
      id: sid + ':' + out.length, sid, de, en,
      art: m && !pl ? m[1] : null, artRaw: m ? m[1] : null, pl,
      clean, base, abbr,
      noun: !!m,
      typable: !clean.includes('.') && clean.length <= 42,
    });
  });
  return out;
}

function parseSentences(txt, sid) {
  const out = [];
  txt.split('\n').forEach(raw => {
    const line = raw.trim();
    if (!line || line.startsWith('//')) return;
    const i = line.indexOf(' = ');
    if (i < 0) { console.warn('Bad sentence line', sid, line); return; }
    out.push({ id: sid + ':s' + out.length, sid, de: line.slice(0, i).trim(), en: line.slice(i + 3).trim() });
  });
  return out;
}

/* Called once after all data files are loaded */
FD.init = function () {
  FD.subjects.forEach(s => {
    // units of ~8 words, last small chunk merged
    const units = [];
    for (let i = 0; i < s.words.length; i += FD.UNIT_SIZE) units.push(s.words.slice(i, i + FD.UNIT_SIZE));
    if (units.length > 1 && units[units.length - 1].length < 4) {
      const last = units.pop();
      units[units.length - 1] = units[units.length - 1].concat(last);
    }
    s.units = units;
    units.forEach((u, ui) => u.forEach(w => { w.unit = ui; }));
    const n = units.length;
    s.sentences.forEach((x, i) => { x.unit = Math.floor(i * n / Math.max(1, s.sentences.length)); });
    s.quiz.forEach((q, i) => { q.unit = Math.floor(i * n / Math.max(1, s.quiz.length)); q.sid = s.id; });
    s.words.forEach(w => { FD.words.push(w); FD.wordById[w.id] = w; });
    s.path = buildPath(s);
  });
  findCompounds();
};

function buildPath(s) {
  const nodes = s.units.map((u, i) => ({ key: 'u' + i, type: 'unit', unit: i, title: 'Lektion ' + (i + 1) }));
  if (s.diagram && FD.diagrams[s.diagram]) {
    nodes.splice(1, 0, { key: 'dia', type: 'diagram', title: 'Bild-Lektion: ' + FD.diagrams[s.diagram].title });
  }
  if (s.lecture) {
    const pos = Math.min(nodes.length, Math.max(2, Math.round(nodes.length * 0.55)));
    nodes.splice(pos, 0, { key: 'lec', type: 'lecture', title: 'Hörsaal: ' + s.lecture.title });
  }
  nodes.push({ key: 'exam', type: 'exam', title: 'Abschlussprüfung' });
  return nodes;
}

/* Compound detection: Holz + werkstoff -> Holzwerkstoff */
function findCompounds() {
  const nouns = FD.words.filter(w => w.noun && !w.base.includes(' ') && !w.base.includes('-'));
  const heads = new Map();
  nouns.forEach(w => { if (w.base.length >= 4) heads.set(w.base.toLowerCase(), w); });
  // also known first parts (incl. verbs/stems)
  const firsts = new Set(FD.words.filter(w => !w.base.includes(' ')).map(w => w.base.toLowerCase()));
  const seen = new Set();
  nouns.forEach(w => {
    const lw = w.base.toLowerCase();
    for (const [hb, head] of heads) {
      if (head === w || lw.length < hb.length + 3 || !lw.endsWith(hb)) continue;
      const prefix = w.base.slice(0, w.base.length - hb.length);
      const pl = prefix.toLowerCase();
      const stems = [pl, pl.replace(/(es|s|en|n|e)$/, '')];
      if (stems.some(p => p.length >= 3 && (firsts.has(p) || firsts.has(p + 'en') || firsts.has(p + 'n') || firsts.has(p + 'e')))) {
        if (seen.has(w.id)) continue;
        seen.add(w.id);
        FD.compounds.push({ word: w, parts: [prefix, head.base.toLowerCase()], head });
        break;
      }
    }
  });
};

/* ---------- Helpers ---------- */

FD.norm = function (s) {
  return String(s).toLowerCase()
    .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
    .replace(/[„“”"'’‚‘`´]/g, '')
    .replace(/[^a-z0-9%²³ ]+/g, ' ')
    .replace(/\s+/g, ' ').trim();
};

FD.lev = function (a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
};

FD.near = function (a, b) {
  const d = FD.lev(a, b);
  return d === 0 || (b.length >= 5 && d <= 1) || (b.length >= 11 && d <= 2);
};

FD.shuffle = function (arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
FD.sample = (arr, n) => FD.shuffle(arr).slice(0, n);
FD.pick = arr => arr[Math.floor(Math.random() * arr.length)];
FD.esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

FD.today = function (d = new Date()) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
};

/* Gender hints for the article exercise */
FD.genderTip = function (w) {
  const b = w.base.split(' ').pop();
  const comp = FD.compounds.find(c => c.word === w);
  if (comp) return `Kompositum: Das Grundwort bestimmt den Artikel → ${comp.head.artRaw} ${comp.head.base} → ${w.artRaw} ${w.base}.`;
  const rules = [
    [/(ung|heit|keit|schaft|ion|tät|ik|ur|enz|anz|ie|ei)$/i, 'die', 'Nomen auf -ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ur, -enz, -ie sind fast immer feminin (die).'],
    [/(chen|lein|ment|um|nis)$/i, 'das', 'Nomen auf -chen, -lein, -ment, -um und meist -nis sind neutral (das).'],
    [/(ling|or|ismus|ant|ent)$/i, 'der', 'Nomen auf -ling, -or, -ismus, -ant, -ent sind meist maskulin (der).'],
  ];
  for (const [re, art, tip] of rules) if (re.test(b) && w.art === art) return tip;
  if (/^[A-ZÄÖÜ][a-zäöü]+en$/.test(b) && w.art === 'das') return 'Nominalisierte Verben (das Härten, das Fräsen) sind immer neutral (das).';
  return null;
};

/* ---------- Storage ---------- */

const STORE_KEY = 'holzwort.v1';
FD.defaultState = () => ({
  v: 1, xp: 0, days: {}, streak: 0, lastDay: null, nodes: {}, srs: {}, lastSubject: null,
  settings: { rate: 0.95, voice: '', audio: true, speak: true, goal: 30, theme: 'auto' },
});
FD.load = function () {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const st = JSON.parse(raw);
      const d = FD.defaultState();
      FD.state = Object.assign(d, st, { settings: Object.assign(d.settings, st.settings || {}) });
      return;
    }
  } catch (e) { console.warn(e); }
  FD.state = FD.defaultState();
};
FD.save = function () {
  FD.state.updatedAt = Date.now();
  try { localStorage.setItem(STORE_KEY, JSON.stringify(FD.state)); } catch (e) { console.warn(e); }
  if (FD.onSave) FD.onSave();   // cloud sync hook (js/cloud.js)
};

/* Combine two progress states (e.g. this device + cloud) without losing anything */
FD.mergeStates = function (a, b) {
  const d = FD.defaultState();
  a = Object.assign(FD.defaultState(), a || {});
  b = Object.assign(FD.defaultState(), b || {});
  const out = Object.assign(d, a);
  out.xp = Math.max(a.xp || 0, b.xp || 0);
  out.days = Object.assign({}, a.days);
  Object.entries(b.days || {}).forEach(([k, v]) => { out.days[k] = Math.max(out.days[k] || 0, v); });
  out.nodes = Object.assign({}, a.nodes);
  Object.entries(b.nodes || {}).forEach(([k, v]) => { out.nodes[k] = Math.max(out.nodes[k] || 0, v); });
  out.srs = Object.assign({}, a.srs);
  Object.entries(b.srs || {}).forEach(([k, r]) => {
    const m = out.srs[k];
    if (!m || r[2] > m[2] || (r[2] === m[2] && r[1] > m[1])) out.srs[k] = r;   // more reviews wins
  });
  const newer = (b.updatedAt || 0) > (a.updatedAt || 0) ? b : a;
  if ((b.lastDay || '') > (a.lastDay || '') || (b.lastDay === a.lastDay && b.streak > a.streak)) {
    out.lastDay = b.lastDay; out.streak = b.streak;
  } else { out.lastDay = a.lastDay; out.streak = a.streak; }
  out.settings = Object.assign({}, d.settings, newer.settings);
  out.lastSubject = newer.lastSubject || a.lastSubject || b.lastSubject;
  out.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
  return out;
};

/* ---------- Progress ---------- */

FD.nodeCount = (sid, key) => FD.state.nodes[sid + ':' + key] || 0;
FD.nodeUnlocked = function (s, idx) {
  if (idx === 0) return true;
  return FD.nodeCount(s.id, s.path[idx - 1].key) > 0;
};
FD.subjectProgress = function (s) {
  const done = s.path.filter(n => FD.nodeCount(s.id, n.key) > 0).length;
  return { done, total: s.path.length, pct: Math.round(100 * done / s.path.length) };
};

/* Spaced repetition (Leitner boxes) */
const INTERVAL_DAYS = [0, 1, 2, 4, 8, 16, 32];
FD.srsUpdate = function (wordId, ok) {
  if (!wordId) return;
  const now = Date.now();
  const r = FD.state.srs[wordId] || [0, now, 0, 0];   // [box, due, seen, wrong]
  if (ok) r[0] = Math.min(6, r[0] + 1); else { r[0] = 0; r[3]++; }
  r[2]++;
  r[1] = now + INTERVAL_DAYS[r[0]] * 864e5 - 36e5; // a bit early
  FD.state.srs[wordId] = r;
};
FD.dueWords = function () {
  const now = Date.now();
  return Object.entries(FD.state.srs)
    .filter(([id, r]) => FD.wordById[id] && r[1] <= now)
    .sort((a, b) => a[1][0] - b[1][0] || a[1][1] - b[1][1])
    .map(([id]) => FD.wordById[id]);
};

/* XP, levels, streak */
FD.levelInfo = function (xp = FD.state.xp) {
  let lvl = 1;
  const need = n => 25 * n * (n + 1);   // cumulative XP needed to reach level n+1
  while (xp >= need(lvl)) lvl++;
  const from = need(lvl - 1), to = need(lvl);
  const titles = [[1, 'Praktikant/in'], [3, 'Azubi'], [5, 'Geselle/Gesellin'], [7, 'Techniker/in'], [9, 'Meister/in'], [12, 'Ingenieur/in (B.Eng.)'], [16, 'Holztechnik-Profi'], [21, 'Professor/in']];
  let title = titles[0][1];
  titles.forEach(([l, t]) => { if (lvl >= l) title = t; });
  return { lvl, title, from, to, pct: Math.round(100 * (xp - from) / (to - from)) };
};
FD.addXP = function (xp) {
  const st = FD.state, today = FD.today();
  const y = new Date(); y.setDate(y.getDate() - 1);
  if (st.lastDay !== today) {
    st.streak = st.lastDay === FD.today(y) ? st.streak + 1 : 1;
    st.lastDay = today;
  }
  st.xp += xp;
  st.days[today] = (st.days[today] || 0) + xp;
  FD.save();
};
FD.currentStreak = function () {
  const st = FD.state, y = new Date(); y.setDate(y.getDate() - 1);
  return (st.lastDay === FD.today() || st.lastDay === FD.today(y)) ? st.streak : 0;
};
