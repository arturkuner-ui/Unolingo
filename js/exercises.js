'use strict';
/* Holzwort – Übungstypen, Lektionsgenerator und Lektionsablauf */

const EX = window.EX = { R: {} };
const esc = FD.esc;

/* ============================================================
   Helpers
   ============================================================ */

function wordHTML(w, { withEn = false } = {}) {
  let h = w.artRaw
    ? `<span class="art art-${w.artRaw}">${w.artRaw}</span> ${esc(w.base)}`
    : esc(w.clean);
  if (w.abbr) h += ` <span class="abbr">${esc(w.abbr)}</span>`;
  if (w.pl) h += ` <span class="tag">Pl.</span>`;
  if (withEn) h += ` <span class="en">— ${esc(w.en)}</span>`;
  return h;
}
EX.wordHTML = wordHTML;

function sayBtns(text, big = false) {
  const t = esc(text);
  return `<span class="say-group${big ? ' big' : ''}"><button class="say" data-say="${t}" aria-label="Anhören" title="Anhören">🔊</button>` +
    `<button class="say" data-say="${t}" data-slow="1" aria-label="Langsam anhören" title="Langsam">🐢</button></span>`;
}
EX.sayBtns = sayBtns;

function wireSay(root) {
  root.querySelectorAll('[data-say]').forEach(b => {
    b.onclick = e => { e.stopPropagation(); Speech.say(b.dataset.say, { slow: b.dataset.slow === '1' }); };
  });
}
EX.wireSay = wireSay;

function similarity(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  let p = 0; while (p < a.length && p < b.length && a[p] === b[p]) p++;
  let s = 0; while (s < a.length && s < b.length && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
  return p + s;
}

function distractors(w, n, tier, pool) {
  pool = (pool || FD.byId[w.sid].words).filter(x => x !== w && x.en !== w.en && x.base !== w.base);
  let same = pool.filter(x => x.noun === w.noun);
  if (same.length < n) same = pool;
  if (tier >= 2) {
    return same.map(x => [x, similarity(x.base, w.base) + Math.random() * 2])
      .sort((a, b) => b[1] - a[1]).slice(0, n).map(a => a[0]);
  }
  return FD.sample(same, n);
}

const audioOn = () => Speech.tts && FD.state.settings.audio;

/* ---------- Answer checking ---------- */

function checkWord(input, w) {
  const raw = input.trim();
  if (!raw) return { ok: false };
  const ni = FD.norm(raw);
  const full = FD.norm(w.clean), base = FD.norm(w.base);
  if (ni === full || (w.abbr && ni === FD.norm(w.abbr))) return { ok: true };
  if (w.artRaw) {
    const m = raw.toLowerCase().match(/^(der|die|das|den|dem|des)\s+(.+)$/);
    if (m) {
      const rest = FD.norm(m[2]);
      if (m[1] !== w.artRaw && FD.near(rest, base)) {
        return { ok: false, note: `Falscher Artikel – richtig ist „${w.artRaw} ${w.base}“.` };
      }
    } else {
      if (ni === base) return { ok: true, note: `Denk an den Artikel: <b>${w.artRaw}</b> ${esc(w.base)}` };
      if (FD.near(ni, base)) return { ok: true, almost: true, note: `Fast! Richtig geschrieben: <b>${esc(w.clean)}</b>` };
    }
  }
  if (FD.near(ni, full)) return { ok: true, almost: true, note: `Fast! Richtig geschrieben: <b>${esc(w.clean)}</b>` };
  return { ok: false };
}

const EN_STOP = new Set('the a an of is are was were be been to in on at by for with as that this it its and or than from into can must'.split(' '));
const DE_STOP = new Set('der die das des dem den ein eine einer eines einem einen und ist sind wird werden wurde zu im in am an auf mit von vom zum zur fuer bei als es sich'.split(' '));

function gradeText(input, ref, lang, need = 0.75) {
  const stop = lang === 'en' ? EN_STOP : DE_STOP;
  const toks = s => FD.norm(s).split(' ').filter(t => t && !stop.has(t));
  const r = toks(ref), a = toks(input);
  if (!a.length) return { ok: false, score: 0 };
  const used = new Set();
  let hit = 0;
  r.forEach(t => {
    const j = a.findIndex((x, k) => !used.has(k) && (x === t
      || (t.length > 4 && FD.lev(x, t) <= 1)
      || (t.length > 5 && x.length > 5 && x.slice(0, 5) === t.slice(0, 5))));
    if (j >= 0) { hit++; used.add(j); }
  });
  const score = r.length ? hit / r.length : 0;
  const extra = a.length - used.size;
  return { ok: score >= need && extra <= Math.max(2, Math.ceil(r.length * 0.4)), score };
}
EX.gradeText = gradeText;

/* ============================================================
   Exercise factories
   ============================================================ */

const F = {};

F.mc_de_en = (w, c) => {
  const opts = FD.shuffle([w, ...distractors(w, 3, c.tier)]);
  return {
    type: 'mc', word: w, title: 'Was bedeutet das?',
    promptHTML: `<div class="big-word">${wordHTML(w)}</div>${audioOn() ? sayBtns(w.clean) : ''}`,
    speak: audioOn() ? w.clean : null,
    options: opts.map(x => ({ label: x.en, ok: x === w })),
    solution: `${wordHTML(w)} = ${esc(w.en)}`,
  };
};

F.mc_en_de = (w, c) => {
  const opts = FD.shuffle([w, ...distractors(w, 3, c.tier)]);
  return {
    type: 'mc', word: w, title: 'Wie heißt das auf Deutsch?',
    promptHTML: `<div class="big-word en-word">${esc(w.en)}</div>`,
    options: opts.map(x => ({ html: wordHTML(x), ok: x === w, speak: x.clean })),
    optSpeak: audioOn(),
    solution: wordHTML(w),
  };
};

F.listen_choose = (w, c) => {
  if (!audioOn()) return null;
  const opts = FD.shuffle([w, ...distractors(w, 3, Math.max(2, c.tier))]);
  return {
    type: 'mc', word: w, title: 'Was hörst du?', audio: true,
    promptHTML: `<div class="listen-big">${sayBtns(w.clean, true)}</div>`,
    speak: w.clean,
    options: opts.map(x => ({ html: wordHTML(x), ok: x === w })),
    solution: `${wordHTML(w)} = ${esc(w.en)}`,
  };
};

F.article = (w) => {
  if (!w.art) return null;
  return {
    type: 'mc', word: w, title: 'Welcher Artikel?', layout: 'row',
    promptHTML: `<div class="big-word">___ ${esc(w.base)}</div><div class="sub">${esc(w.en)}</div>`,
    options: ['der', 'die', 'das'].map(a => ({ html: `<span class="art art-${a}">${a}</span>`, ok: a === w.art })),
    solution: wordHTML(w),
    note: FD.genderTip(w),
  };
};

F.type = (w, c) => {
  if (!w.typable) return null;
  const hint = `Beginnt mit „${esc(w.base.slice(0, 2))}…“ · ${w.base.replace(/\s/g, '').length} Buchstaben`;
  return {
    type: 'type', word: w, title: 'Übersetze ins Deutsche',
    promptHTML: `<div class="big-word en-word">${esc(w.en)}</div>${w.art ? '<div class="sub">Nomen – mit Artikel schreiben</div>' : ''}`,
    placeholder: w.art ? 'der/die/das …' : 'Auf Deutsch …', lang: 'de',
    hint: c.tier < 3 ? hint : null,
    grade: v => checkWord(v, w),
    solution: wordHTML(w),
  };
};

F.listen_type = (w) => {
  if (!audioOn() || !w.typable) return null;
  return {
    type: 'type', word: w, title: 'Schreib, was du hörst', audio: true,
    promptHTML: `<div class="listen-big">${sayBtns(w.clean, true)}</div>`,
    speak: w.clean, placeholder: 'Diktat …', lang: 'de',
    grade: v => checkWord(v, w),
    solution: `${wordHTML(w)} = ${esc(w.en)}`,
  };
};

F.speak = (w) => {
  if (!Speech.canListen() || !w.typable) return null;
  return {
    type: 'speak', word: w, title: 'Sprich das Wort aus', target: w.clean, audio: true,
    promptHTML: `<div class="big-word">${wordHTML(w)}</div><div class="sub">${esc(w.en)}</div>${audioOn() ? sayBtns(w.clean) : ''}`,
    solution: wordHTML(w),
  };
};

function findCloze(sent, words) {
  const toks = sent.de.split(/\s+/);
  for (const w of words) {
    if (!w.noun || w.base.includes(' ') || w.base.length < 4) continue;
    const b = w.base.toLowerCase();
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i].replace(/[.,;:!?„“"]/g, '');
      const tl = t.toLowerCase();
      if (tl === b || (tl.startsWith(b) && tl.length - b.length <= 2)) return { i, token: t, word: w, toks, suffix: t.slice(w.base.length) };
    }
  }
  return null;
}

F.cloze = (sent, c, typed) => {
  const s = FD.byId[sent.sid];
  const cand = c.lessonWords.concat(FD.shuffle(s.words.filter(w => !c.lessonWords.includes(w))));
  const f = findCloze(sent, cand);
  if (!f) return null;
  const shown = f.toks.map((t, i) => i === f.i ? t.replace(f.token, '<span class="gap">_____</span>') : esc(t)).join(' ');
  const base = {
    word: f.word, sentence: sent,
    promptHTML: `<div class="sentence">${shown}</div><div class="sub">${esc(sent.en)}</div>`,
    solution: `${esc(sent.de)}`,
  };
  if (typed) {
    return Object.assign(base, {
      type: 'type', title: 'Ergänze das fehlende Wort', placeholder: 'fehlendes Wort …', lang: 'de',
      hint: `Gesucht: ${esc(f.word.en)}`,
      grade: v => {
        const ni = FD.norm(v.replace(/^(der|die|das|den|dem|des)\s+/i, ''));
        if (ni === FD.norm(f.token)) return { ok: true };
        if (FD.near(ni, FD.norm(f.token))) return { ok: true, almost: true, note: `Richtig geschrieben: <b>${esc(f.token)}</b>` };
        return { ok: false };
      },
    });
  }
  const others = distractors(f.word, 3, 2, s.words.filter(w => w.noun && !w.base.includes(' ')));
  const opts = FD.shuffle([f.token, ...others.map(o => o.base + f.suffix)]);
  return Object.assign(base, {
    type: 'mc', title: 'Welches Wort passt in die Lücke?',
    options: opts.map(o => ({ label: o, ok: o === f.token })),
  });
};

F.build = (sent, c) => {
  const toks = sent.de.split(/\s+/);
  if (toks.length > 15) return null;
  const others = FD.shuffle(FD.byId[sent.sid].sentences.filter(x => x !== sent).flatMap(x => x.de.split(/\s+/)))
    .filter(t => !toks.some(u => FD.norm(u) === FD.norm(t)));
  const extra = [...new Set(others)].slice(0, c.tier >= 2 ? 3 : 2);
  const tiles = FD.shuffle(toks.concat(extra)).map((t, i) => ({ t, id: i }));
  return {
    type: 'build', sentence: sent, title: 'Bilde den Satz auf Deutsch',
    promptHTML: `<div class="sentence en-word">${esc(sent.en)}</div>`,
    tiles, answer: sent.de, joiner: ' ',
    solution: esc(sent.de), speakAfter: sent.de,
  };
};

F.translate = (sent, c, dir) => {
  const toEn = dir === 'de_en';
  return {
    type: 'type', sentence: sent, multiline: true, lang: toEn ? 'en' : 'de',
    title: toEn ? 'Übersetze ins Englische' : 'Übersetze ins Deutsche',
    promptHTML: toEn
      ? `<div class="sentence">${esc(sent.de)}</div>${audioOn() ? sayBtns(sent.de) : ''}`
      : `<div class="sentence en-word">${esc(sent.en)}</div>`,
    speak: toEn && audioOn() ? sent.de : null,
    placeholder: toEn ? 'Type the English translation …' : 'Deutsche Übersetzung …',
    grade: v => gradeText(v, toEn ? sent.en : sent.de, toEn ? 'en' : 'de'),
    solution: esc(toEn ? sent.en : sent.de),
    selfCheck: true, speakAfter: sent.de,
  };
};

F.dictation = (sentDe) => {
  if (!audioOn()) return null;
  return {
    type: 'type', multiline: true, lang: 'de', title: 'Diktat: Schreib den Satz', audio: true,
    promptHTML: `<div class="listen-big">${sayBtns(sentDe, true)}</div>`,
    speak: sentDe, placeholder: 'Was hörst du?',
    grade: v => gradeText(v, sentDe, 'de', 0.8),
    solution: esc(sentDe), selfCheck: true,
  };
};

F.compound = (c) => {
  const inLesson = FD.compounds.filter(x => c.lessonWords.includes(x.word));
  const inSubject = FD.compounds.filter(x => x.word.sid === c.s.id);
  const pool = inLesson.length ? inLesson : inSubject;
  if (!pool.length) return null;
  const cp = FD.pick(pool);
  const others = FD.shuffle(FD.compounds.filter(x => x !== cp).flatMap(x => x.parts))
    .filter(p => !cp.parts.includes(p));
  const extra = [...new Set(others)].slice(0, 2);
  const tiles = FD.shuffle(cp.parts.concat(extra)).map((t, i) => ({ t, id: i }));
  const w = cp.word;
  return {
    type: 'build', word: w, title: 'Baue das zusammengesetzte Wort', compact: true,
    promptHTML: `<div class="big-word en-word">${esc(w.en)}</div><div class="sub">Komposita: Bestimmungswort + Grundwort</div>`,
    tiles, answer: w.base, joiner: '',
    solution: wordHTML(w),
    note: `Das Grundwort bestimmt den Artikel: ${cp.head.artRaw} ${esc(cp.head.base)} → <b>${w.artRaw} ${esc(w.base)}</b>`,
    speakAfter: w.clean,
  };
};

F.match = (words) => {
  const uniq = [];
  words.forEach(w => { if (!uniq.some(u => u.en === w.en || u.base === w.base)) uniq.push(w); });
  if (uniq.length < 3) return null;
  return { type: 'match', words: uniq.slice(0, 5), title: 'Finde die Paare' };
};

F.quiz = (q, title) => {
  const opts = FD.shuffle(q.o.map((t, i) => ({ label: t, ok: i === q.a })));
  return {
    type: 'mc', title: title || 'Grammatik & Fachsprache', quiz: true,
    promptHTML: `<div class="sentence">${esc(q.q)}</div>`,
    options: opts, solution: esc(q.o[q.a]), note: q.ex ? esc(q.ex) : null,
  };
};

/* ============================================================
   Lesson builders
   ============================================================ */

const PLANS = {
  1: ['match', 'mc_de_en', 'listen_choose', 'mc_en_de', 'article', 'mc_de_en', 'cloze_choice', 'listen_choose', 'mc_en_de', 'build', 'mc_de_en'],
  2: ['match', 'mc_en_de', 'type', 'listen_choose', 'article', 'type', 'cloze_choice', 'build', 'listen_type', 'compound', 'type', 'translate_de_en'],
  3: ['type', 'listen_type', 'cloze_type', 'build', 'type', 'translate_de_en', 'article', 'speak', 'translate_en_de', 'listen_type', 'type', 'compound'],
};
const WORD_TYPES = ['mc_de_en', 'mc_en_de', 'listen_choose', 'type', 'listen_type', 'article', 'speak'];

function makeCycle(focus, review) {
  let q = [];
  let rounds = 0;
  return {
    next() {
      if (review.length && rounds > 0 && Math.random() < 0.25) return FD.pick(review);
      if (!q.length) { q = FD.shuffle(focus); rounds++; }
      return q.shift();
    },
  };
}

function makeEx(t, c, cycle, nextSent) {
  if (WORD_TYPES.includes(t)) {
    for (let k = 0; k < 8; k++) {
      const w = cycle.next();
      if (!w) return null;
      const ex = F[t](w, c);
      if (ex) return ex;
    }
    if (t === 'article') {
      const w = FD.pick(c.lessonWords.concat(c.s.words).filter(x => x.art));
      return w ? F.article(w) : null;
    }
    return null;
  }
  if (t === 'match') return F.match(FD.shuffle(c.focus).concat(c.review));
  if (t === 'compound') return F.compound(c);
  // sentence based
  for (let k = 0; k < 4; k++) {
    const sent = nextSent();
    if (!sent) return null;
    let ex = null;
    if (t === 'cloze_choice') ex = F.cloze(sent, c, false);
    else if (t === 'cloze_type') ex = F.cloze(sent, c, true);
    else if (t === 'build') ex = F.build(sent, c);
    else if (t === 'translate_de_en') ex = F.translate(sent, c, 'de_en');
    else if (t === 'translate_en_de') ex = F.translate(sent, c, 'en_de');
    if (ex) return ex;
  }
  return null;
}

EX.fromPlan = function (plan, c) {
  const items = [];
  const cycle = makeCycle(c.focus, c.review);
  const used = new Set();
  const nextSent = () => {
    const free = c.sents.filter(x => !used.has(x));
    const x = free.length ? FD.pick(free) : (c.sents.length ? FD.pick(c.sents) : null);
    if (x) used.add(x);
    return x;
  };
  plan.forEach(t => {
    let ex = makeEx(t, c, cycle, nextSent);
    if (!ex) ex = makeEx(c.tier >= 2 ? 'type' : 'mc_en_de', c, cycle, nextSent);
    if (!ex) ex = makeEx('mc_de_en', c, cycle, nextSent);
    if (ex) items.push(ex);
  });
  (c.quiz || []).forEach(q => items.splice(1 + Math.floor(Math.random() * Math.max(1, items.length - 1)), 0, F.quiz(q)));
  return items;
};

EX.unitLesson = function (s, ui, tier) {
  const focus = s.units[ui];
  const prev = s.units.slice(0, ui).flat();
  const review = FD.sample(prev, Math.min(3, prev.length));
  let sents = s.sentences.filter(x => x.unit === ui);
  if (sents.length < 2) sents = sents.concat(FD.sample(s.sentences.filter(x => x.unit < ui), 2));
  if (!sents.length) sents = FD.sample(s.sentences, 2);
  const quiz = s.quiz.filter(q => q.unit === ui);
  return EX.fromPlan(PLANS[tier], { s, focus, review, lessonWords: focus.concat(review), sents, tier, quiz });
};

EX.examLesson = function (s, words) {
  const plan = ['mc_en_de', 'type', 'listen_choose', 'article', 'cloze_choice', 'type', 'build', 'mc_de_en',
    'listen_type', 'type', 'translate_de_en', 'article', 'cloze_type', 'type', 'compound'];
  const maxUnit = Math.max(...words.map(w => w.unit));
  const focus = FD.sample(words, 14);
  return EX.fromPlan(plan, {
    s, focus, review: [], lessonWords: focus, tier: 3,
    sents: s.sentences.filter(x => x.unit <= maxUnit),
    quiz: FD.sample(s.quiz.filter(q => q.unit <= maxUnit), 2),
  });
};

EX.reviewLesson = function (words) {
  const items = [];
  if (words.length >= 5) { const m = F.match(words.slice(0, 5)); if (m) items.push(m); }
  words.slice(0, 12).forEach(w => {
    const r = FD.state.srs[w.id];
    const box = r ? r[0] : 0;
    const s = FD.byId[w.sid];
    const c = { s, focus: [w], review: [], lessonWords: [w], sents: s.sentences, tier: box >= 3 ? 3 : 2, quiz: [] };
    const types = box <= 1 ? ['mc_en_de', 'listen_choose', 'mc_de_en', 'article']
      : box <= 3 ? ['type', 'article', 'listen_type', 'mc_en_de'] : ['type', 'cloze_type', 'listen_type', 'speak'];
    const cycle = { next: () => w };
    const nextSent = () => FD.pick(s.sentences);
    for (const t of FD.shuffle(types)) {
      let ex;
      if (t === 'cloze_type') {
        const sent = s.sentences.find(x => findCloze(x, [w]));
        ex = sent ? F.cloze(sent, c, true) : null;
      } else ex = makeEx(t, c, cycle, nextSent);
      if (ex) { items.push(ex); break; }
    }
  });
  return items;
};

EX.diagramLesson = function (d) {
  const items = [{ type: 'dstudy', d }];
  FD.shuffle(d.points.map((_, i) => i)).forEach((i, k) => {
    if (k % 2 === 0) items.push({ type: 'dtap', d, idx: i, title: 'Tippe auf die richtige Stelle' });
    else {
      const p = d.points[i];
      const others = FD.sample(d.points.filter(x => x !== p), 3);
      items.push({
        type: 'mc', title: 'Was ist hier markiert?', diagram: true,
        promptHTML: `<div class="diagram-box">${FD.renderDiagram(d, { highlight: i })}</div>`,
        options: FD.shuffle([p, ...others]).map(x => ({ label: x.de, ok: x === p, speak: x.de })),
        optSpeak: audioOn(),
        solution: `${esc(p.de)} = ${esc(p.en)}`, speakAfter: p.de,
      });
    }
  });
  return items;
};

EX.lectureLesson = function (s) {
  const L = s.lecture;
  const items = [{ type: 'lecture', s, L }];
  L.questions.forEach(q => items.push(F.quiz(q, 'Frage zum Vortrag')));
  const sents = L.text.split(/(?<=[.!?])\s+/).filter(x => x.split(' ').length >= 6);
  const shortest = sents.sort((a, b) => a.length - b.length)[0];
  const dict = shortest && F.dictation(shortest);
  if (dict) items.push(dict);
  return items;
};

/* ============================================================
   Renderers
   ============================================================ */

const R = EX.R;
const div = (cls, html = '') => { const d = document.createElement('div'); d.className = cls; d.innerHTML = html; return d; };
const head = ex => `<h2 class="ex-title">${esc(ex.title || '')}</h2>`;

R.mc = (ex, api) => {
  const el = div('ex ex-mc', `${head(ex)}<div class="ex-prompt">${ex.promptHTML || ''}</div>
    <div class="options ${ex.layout === 'row' ? 'row' : ''}">
    ${ex.options.map((o, i) => `<button class="opt" data-i="${i}"><kbd>${i + 1}</kbd><span>${o.html || esc(o.label)}</span></button>`).join('')}
    </div>`);
  let sel = -1;
  const btns = [...el.querySelectorAll('.opt')];
  btns.forEach(b => b.onclick = () => {
    if (api.locked()) return;
    sel = +b.dataset.i;
    btns.forEach(x => x.classList.toggle('sel', x === b));
    const o = ex.options[sel];
    if (ex.optSpeak && o.speak) Speech.say(o.speak);
    api.ready(true);
  });
  ex.key = n => btns[n - 1] && btns[n - 1].click();
  ex.check = () => {
    const o = ex.options[sel];
    btns.forEach((b, i) => {
      if (ex.options[i].ok) b.classList.add('good');
      else if (i === sel) b.classList.add('bad');
    });
    return { ok: !!(o && o.ok) };
  };
  wireSay(el);
  if (ex.speak) setTimeout(() => Speech.say(ex.speak), 300);
  return el;
};

const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
R.type = (ex, api) => {
  const field = ex.multiline
    ? `<textarea class="answer" rows="3" spellcheck="false" autocapitalize="off" placeholder="${esc(ex.placeholder || '')}"></textarea>`
    : `<input class="answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(ex.placeholder || '')}">`;
  const el = div('ex ex-type', `${head(ex)}<div class="ex-prompt">${ex.promptHTML || ''}</div>
    <div class="type-wrap">${field}
      ${ex.lang === 'de' ? `<div class="umlauts">${UMLAUTS.map(u => `<button tabindex="-1" data-u="${u}">${u}</button>`).join('')}</div>` : ''}
      ${ex.hint ? `<button class="link hint-btn">💡 Tipp anzeigen</button><div class="hint-text" hidden>${ex.hint}</div>` : ''}
    </div>`);
  const inp = el.querySelector('.answer');
  inp.oninput = () => api.ready(inp.value.trim().length > 0);
  el.querySelectorAll('[data-u]').forEach(b => b.onmousedown = e => {
    e.preventDefault();
    const { selectionStart: a, selectionEnd: z, value } = inp;
    inp.value = value.slice(0, a) + b.dataset.u + value.slice(z);
    inp.selectionStart = inp.selectionEnd = a + 1;
    inp.dispatchEvent(new Event('input'));
  });
  const hb = el.querySelector('.hint-btn');
  if (hb) hb.onclick = () => { el.querySelector('.hint-text').hidden = false; hb.remove(); };
  ex.check = () => { inp.disabled = true; return ex.grade(inp.value); };
  ex.answerText = () => inp.value;
  wireSay(el);
  if (ex.speak) setTimeout(() => Speech.say(ex.speak), 300);
  setTimeout(() => inp.focus(), 60);
  return el;
};

R.build = (ex, api) => {
  const el = div('ex ex-build' + (ex.compact ? ' compact' : ''), `${head(ex)}<div class="ex-prompt">${ex.promptHTML}</div>
    <div class="build-line" aria-label="Deine Antwort"></div><div class="tiles"></div>`);
  const line = el.querySelector('.build-line'), bank = el.querySelector('.tiles');
  const chosen = [];
  const draw = () => {
    line.innerHTML = chosen.map(t => `<button class="tile in" data-id="${t.id}">${esc(t.t)}</button>`).join('');
    bank.innerHTML = ex.tiles.map(t => `<button class="tile ${chosen.includes(t) ? 'used' : ''}" data-id="${t.id}" ${chosen.includes(t) ? 'disabled' : ''}>${esc(t.t)}</button>`).join('');
    line.querySelectorAll('.tile').forEach(b => b.onclick = () => {
      if (api.locked()) return;
      const i = chosen.findIndex(t => t.id === +b.dataset.id); chosen.splice(i, 1); draw();
    });
    bank.querySelectorAll('.tile:not(.used)').forEach(b => b.onclick = () => {
      if (api.locked()) return;
      chosen.push(ex.tiles.find(t => t.id === +b.dataset.id)); draw();
    });
    api.ready(chosen.length > 0);
  };
  draw();
  ex.check = () => {
    const ans = chosen.map(t => t.t).join(ex.joiner);
    return { ok: FD.norm(ans) === FD.norm(ex.answer) };
  };
  return el;
};

R.match = (ex, api) => {
  const left = FD.shuffle(ex.words), right = FD.shuffle(ex.words);
  const el = div('ex ex-match', `${head(ex)}<div class="match-grid">
    <div class="col">${left.map(w => `<button class="tile m" data-side="l" data-id="${w.id}">${wordHTML(w)}</button>`).join('')}</div>
    <div class="col">${right.map(w => `<button class="tile m" data-side="r" data-id="${w.id}">${esc(w.en)}</button>`).join('')}</div>
  </div>`);
  let selL = null, selR = null, mistakes = 0, matched = 0;
  const bad = new Set();
  const tryPair = () => {
    if (!selL || !selR) return;
    const a = selL, b = selR; selL = selR = null;
    if (a.dataset.id === b.dataset.id) {
      [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('done'); x.disabled = true; });
      matched++;
      if (matched === ex.words.length) setTimeout(() => api.submit(), 350);
    } else {
      mistakes++; bad.add(a.dataset.id); bad.add(b.dataset.id);
      [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 400); });
    }
  };
  el.querySelectorAll('.tile.m').forEach(b => b.onclick = () => {
    if (b.classList.contains('done')) return;
    if (b.dataset.side === 'l') {
      el.querySelectorAll('[data-side=l]').forEach(x => x.classList.remove('sel'));
      selL = b; b.classList.add('sel');
      if (audioOn()) Speech.say(FD.wordById[b.dataset.id].clean);
    } else {
      el.querySelectorAll('[data-side=r]').forEach(x => x.classList.remove('sel'));
      selR = b; b.classList.add('sel');
    }
    tryPair();
  });
  ex.auto = true;
  ex.check = () => ({
    ok: mistakes <= 1,
    note: mistakes ? `${mistakes} Fehlversuch${mistakes > 1 ? 'e' : ''}` : 'Alle Paare auf Anhieb!',
    perWord: ex.words.map(w => [w.id, !bad.has(w.id)]),
  });
  return el;
};

R.speak = (ex, api) => {
  const el = div('ex ex-speak', `${head(ex)}<div class="ex-prompt">${ex.promptHTML}</div>
    <button class="mic" aria-label="Mikrofon starten">🎤</button><div class="mic-status">Tippe aufs Mikrofon und sprich deutlich.</div>`);
  const mic = el.querySelector('.mic'), status = el.querySelector('.mic-status');
  let result = null;
  mic.onclick = () => {
    if (api.locked()) return;
    mic.classList.add('rec'); status.textContent = 'Ich höre zu …';
    Speech.listen({
      onresult: alts => {
        const tgt = FD.norm(ex.target), base = ex.word ? FD.norm(ex.word.base) : tgt;
        const ok = alts.some(a => { const n = FD.norm(a); return FD.lev(n, tgt) <= Math.max(1, Math.round(tgt.length * 0.2)) || FD.lev(n, base) <= Math.max(1, Math.round(base.length * 0.2)); });
        result = { ok, note: `Erkannt: „${esc(alts[0])}“` };
        status.textContent = `Erkannt: „${alts[0]}“`;
        api.ready(true);
      },
      onerror: err => { status.textContent = err === 'not-allowed' ? 'Mikrofon nicht erlaubt – du kannst die Übung überspringen.' : 'Nichts verstanden – nochmal versuchen.'; },
      onend: () => mic.classList.remove('rec'),
    });
  };
  ex.check = () => result || { ok: false };
  wireSay(el);
  return el;
};

R.dstudy = (ex, api) => {
  const d = ex.d;
  const el = div('ex ex-dstudy', `<h2 class="ex-title">Bild-Lektion: ${esc(d.title)}</h2>
    <div class="sub center">${esc(d.en)} · Tippe auf eine Nummer, um den Begriff zu hören.</div>
    <div class="diagram-box">${FD.renderDiagram(d)}</div>
    <ol class="legend">${d.points.map((p, i) => `<li data-i="${i}"><b>${i + 1}</b> <span>${esc(p.de)}</span> <em>${esc(p.en)}</em></li>`).join('')}</ol>`);
  const focus = i => {
    el.querySelectorAll('.legend li').forEach(li => li.classList.toggle('on', +li.dataset.i === i));
    el.querySelectorAll('.hot').forEach(h => h.classList.toggle('picked', +h.dataset.i === i));
    if (audioOn()) Speech.say(d.points[i].de);
  };
  el.querySelectorAll('.hot, .legend li').forEach(h => h.onclick = () => focus(+h.dataset.i));
  ex.info = true;
  api.ready(true, 'Los geht’s');
  ex.check = () => ({ ok: true, info: true });
  return el;
};

R.dtap = (ex, api) => {
  const p = ex.d.points[ex.idx];
  const el = div('ex ex-dtap', `${head(ex)}<div class="ex-prompt"><div class="big-word">${esc(p.de)}</div><div class="sub">${esc(p.en)}</div></div>
    <div class="diagram-box"></div>`);
  const box = el.querySelector('.diagram-box');
  let picked = -1;
  const draw = (states = {}) => {
    box.innerHTML = FD.renderDiagram(ex.d, { numbered: false, picked, states });
    box.querySelectorAll('.hot').forEach(h => h.onclick = () => {
      if (api.locked()) return;
      picked = +h.dataset.i; draw(); api.ready(true);
    });
  };
  draw();
  if (audioOn()) setTimeout(() => Speech.say(p.de), 300);
  ex.check = () => {
    const ok = picked === ex.idx;
    const st = { [ex.idx]: 'good' }; if (!ok) st[picked] = 'bad';
    picked = -1; draw(st);
    return { ok };
  };
  ex.solution = `${esc(p.de)} = ${esc(p.en)}`;
  return el;
};

R.lecture = (ex, api) => {
  const { s, L } = ex;
  const sentences = L.text.split(/(?<=[.!?])\s+/);
  const tokens = (L.text.match(/[A-Za-zÄÖÜäöüß-]+/g) || []).map(t => t.toLowerCase());
  const hit = (w, t) => t.startsWith(w.base.toLowerCase()) && t.length - w.base.length <= 3;
  const terms = s.words.filter(w => w.noun && !w.base.includes(' ') && w.base.length > 3 && tokens.some(t => hit(w, t)))
    .sort((a, b) => b.base.length - a.base.length);
  const mark = txt => txt.split(/([A-Za-zÄÖÜäöüß-]+)/).map((part, i) => {
    if (i % 2 === 0) return esc(part);
    const pl = part.toLowerCase();
    const w = terms.find(t => pl.startsWith(t.base.toLowerCase()) && pl.length - t.base.length <= 3);
    return w ? `<span class="term" data-id="${w.id}">${esc(part)}</span>` : esc(part);
  }).join('');
  const el = div('ex ex-lecture', `
    <div class="slide">
      <div class="slide-kicker">🎧 Hörsaal · ${esc(s.title)}</div>
      <h2>${esc(L.title)}</h2>
      <div class="slide-terms">${terms.slice(0, 8).map(w => `<button class="chip" data-id="${w.id}">${wordHTML(w)}</button>`).join('')}</div>
      ${s.diagram && FD.diagrams[s.diagram] ? `<div class="diagram-box small">${FD.renderDiagram(FD.diagrams[s.diagram])}</div>` : ''}
    </div>
    <div class="player">
      <button class="btn primary play">${Speech.tts ? '▶ Vortrag abspielen' : 'Audio nicht verfügbar'}</button>
      <button class="btn ghost slow">🐢 Langsam</button>
      <label class="subs-toggle"><input type="checkbox" class="subs" checked> Untertitel</label>
    </div>
    <div class="transcript">${sentences.map((x, i) => `<p data-i="${i}">${mark(x)}</p>`).join('')}</div>
    <div class="term-pop" hidden></div>`);
  const ps = [...el.querySelectorAll('.transcript p')];
  let playing = false;
  const run = (i, slow) => {
    if (!playing || i >= sentences.length) { playing = false; ps.forEach(p => p.classList.remove('now')); return; }
    ps.forEach(p => p.classList.toggle('now', +p.dataset.i === i));
    ps[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    Speech.say(sentences[i], { slow, onend: () => run(i + 1, slow) });
  };
  el.querySelector('.play').onclick = () => { if (!Speech.tts) return; playing = true; run(0, false); };
  el.querySelector('.slow').onclick = () => { if (!Speech.tts) return; playing = true; run(0, true); };
  el.querySelector('.subs').onchange = e => el.querySelector('.transcript').classList.toggle('hidden-subs', !e.target.checked);
  const pop = el.querySelector('.term-pop');
  el.querySelectorAll('.term, .chip').forEach(t => t.onclick = () => {
    const w = FD.wordById[t.dataset.id];
    pop.hidden = false; pop.innerHTML = `${wordHTML(w)} <span class="en">— ${esc(w.en)}</span>`;
    if (audioOn()) Speech.say(w.clean);
  });
  ex.info = true;
  ex.stop = () => { playing = false; Speech.stop(); };
  api.ready(true, 'Weiter zu den Fragen');
  ex.check = () => { ex.stop(); return { ok: true, info: true }; };
  return el;
};

/* ============================================================
   Lesson runner
   ============================================================ */

const PRAISE = ['Richtig!', 'Super!', 'Genau!', 'Klasse!', 'Sehr gut!', 'Prima!'];

EX.run = function (cfg) {
  const root = document.getElementById('lesson');
  root.hidden = false;
  document.body.classList.add('in-lesson');
  root.innerHTML = `
  <div class="lesson">
    <div class="lesson-top">
      <button class="icon-btn close" aria-label="Lektion beenden">✕</button>
      <div class="bar"><div class="bar-fill"></div></div>
      <span class="lesson-tag">${esc(cfg.tag || '')}</span>
    </div>
    <div class="lesson-body"></div>
    <div class="lesson-foot">
      <div class="feedback" hidden></div>
      <div class="foot-row">
        <button class="btn ghost skip" hidden>Kann gerade nicht hören/sprechen</button>
        <button class="btn primary go" disabled>Prüfen</button>
      </div>
    </div>
  </div>`;
  const body = root.querySelector('.lesson-body');
  const fb = root.querySelector('.feedback');
  const go = root.querySelector('.go');
  const skip = root.querySelector('.skip');
  const fill = root.querySelector('.bar-fill');
  const foot = root.querySelector('.lesson-foot');

  const items = cfg.items.filter(Boolean);
  const queue = items.slice();
  const total = items.length;
  const firstResult = new Map();
  const retried = new Set();
  let resolved = 0, cur = null, phase = 'answer', startedAt = Date.now();
  const practiced = new Set();

  const api = {
    ready(on, label) { if (phase === 'answer') { go.disabled = !on; if (label) go.textContent = label; } },
    locked: () => phase !== 'answer',
    submit: () => doCheck(),
  };

  function progress() { fill.style.width = Math.round(100 * resolved / Math.max(1, total)) + '%'; }

  function next() {
    fb.hidden = true; fb.className = 'feedback';
    foot.classList.remove('good', 'bad');
    if (!queue.length) return finish();
    cur = queue.shift();
    phase = 'answer';
    go.disabled = true; go.textContent = 'Prüfen';
    skip.hidden = !cur.audio;
    body.innerHTML = '';
    const view = R[cur.type](cur, api);
    body.appendChild(view);
    body.scrollTop = 0;
    if (cur.auto) { go.hidden = true; } else go.hidden = false;
  }

  function record(ex, ok) {
    if (!firstResult.has(ex)) firstResult.set(ex, ok);
    if (ex.word) { practiced.add(ex.word.id); if (!retried.has(ex) || ok) FD.srsUpdate(ex.word.id, ok); }
  }

  function doCheck() {
    if (phase !== 'answer') return;
    const res = cur.check() || { ok: false };
    phase = 'feedback';
    if (res.info) { resolved++; progress(); return next(); }
    if (res.perWord) res.perWord.forEach(([id, ok]) => { FD.srsUpdate(id, ok); practiced.add(id); });
    showFeedback(res);
  }

  function showFeedback(res) {
    const ok = res.ok;
    record(cur, ok);
    const sol = cur.solution || '';
    const canOverride = !ok && cur.selfCheck;
    const speakText = cur.speakAfter || (cur.word && cur.word.clean);
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'good' : 'bad');
    foot.classList.add(ok ? 'good' : 'bad');
    fb.innerHTML = `
      <div class="fb-head">${ok ? (res.almost ? '👍 Fast richtig!' : '✅ ' + FD.pick(PRAISE)) : '❌ Nicht ganz.'}</div>
      ${!ok || cur.selfCheck || cur.type === 'build' ? `<div class="fb-sol"><span class="lbl">${ok ? 'Musterlösung' : 'Richtige Lösung'}:</span> ${sol}</div>` : ''}
      ${ok && cur.word && cur.type !== 'match' ? `<div class="fb-sol">${wordHTML(cur.word, { withEn: true })}</div>` : ''}
      ${!ok && cur.answerText && cur.answerText() ? `<div class="fb-yours">Deine Antwort: ${esc(cur.answerText())}</div>` : ''}
      ${res.note ? `<div class="fb-note">${res.note}</div>` : ''}
      ${cur.note && (cur.type === 'mc' || !ok || cur.type === 'build') ? `<div class="fb-note">💡 ${cur.note}</div>` : ''}
      <div class="fb-actions">
        ${speakText && audioOn() ? sayBtns(speakText) : ''}
        ${canOverride ? '<button class="btn ghost small override">Meine Antwort war richtig</button>' : ''}
      </div>`;
    wireSay(fb);
    const ov = fb.querySelector('.override');
    if (ov) ov.onclick = () => {
      firstResult.set(cur, true);
      if (cur.word) FD.srsUpdate(cur.word.id, true);
      ov.remove();
      fb.className = 'feedback good'; foot.classList.remove('bad'); foot.classList.add('good');
      fb.querySelector('.fb-head').textContent = '✅ Als richtig gewertet';
      const qi = queue.indexOf(cur);
      if (qi >= 0) { queue.splice(qi, 1); resolved++; }
      retried.delete(cur);
      progress();
    };
    if (ok) { resolved++; }
    else if (cfg.mode !== 'exam' && !retried.has(cur)) { retried.add(cur); queue.push(cur); }
    else { resolved++; }
    progress();
    if (ok && audioOn() && speakText && cur.type !== 'match' && !cur.speak) Speech.say(speakText);
    go.hidden = false; go.disabled = false; go.textContent = 'Weiter';
    skip.hidden = true;
    go.focus({ preventScroll: true });
  }

  function finish() {
    const n = items.length;
    const correct = items.filter(x => firstResult.get(x) === true || x.info).length;
    const graded = items.filter(x => !x.info).length;
    const pct = graded ? Math.round(100 * items.filter(x => !x.info && firstResult.get(x) === true).length / graded) : 100;
    const passed = cfg.passPct ? pct >= cfg.passPct : true;
    const base = { lesson: 10, exam: 20, review: 5, lecture: 15, diagram: 10, jump: 15 }[cfg.mode] || 10;
    const xp = passed ? base + Math.min(15, correct) + (pct === 100 ? 5 : 0) : 3;
    const secs = Math.round((Date.now() - startedAt) / 1000);
    FD.save();
    body.innerHTML = `
      <div class="summary">
        <div class="sum-emoji">${passed ? (pct === 100 ? '🏆' : '🎉') : '📚'}</div>
        <h2>${passed ? (cfg.doneTitle || 'Lektion geschafft!') : 'Noch nicht bestanden'}</h2>
        ${!passed ? `<p class="sub">Für diese Prüfung brauchst du mindestens ${cfg.passPct} %. Wiederhole die Lektionen und versuch es nochmal!</p>` : ''}
        <div class="sum-stats">
          <div><b>+${xp}</b><span>XP</span></div>
          <div><b>${pct} %</b><span>Genauigkeit</span></div>
          <div><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b><span>Zeit</span></div>
          <div><b>${practiced.size}</b><span>Wörter</span></div>
        </div>
      </div>`;
    fb.hidden = true; skip.hidden = true; foot.classList.remove('good', 'bad');
    go.hidden = false; go.disabled = false; go.textContent = 'Weiter';
    phase = 'done';
    progress();
    cfg.onFinish && cfg.onFinish({ pct, passed, xp, correct, n });
  }

  function close() {
    Speech.stop();
    if (cur && cur.stop) cur.stop();
    document.removeEventListener('keydown', onKey);
    root.hidden = true; root.innerHTML = '';
    document.body.classList.remove('in-lesson');
    cfg.onClose && cfg.onClose();
  }

  go.onclick = () => {
    if (phase === 'answer') doCheck();
    else if (phase === 'feedback') next();
    else if (phase === 'done') close();
  };
  skip.onclick = () => {
    if (phase !== 'answer') return;
    const i = items.indexOf(cur); if (i >= 0) items.splice(i, 1);
    Speech.stop();
    resolved++; progress();
    next();
  };
  root.querySelector('.close').onclick = () => {
    if (phase === 'done' || confirm('Lektion abbrechen? Der Fortschritt dieser Lektion geht verloren.')) close();
  };
  function onKey(e) {
    const t = e.target;
    const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA');
    if (e.key === 'Enter') {
      if (typing && t.tagName === 'TEXTAREA' && e.shiftKey) return;
      if (!go.disabled && !go.hidden) { e.preventDefault(); go.click(); }
    } else if (!typing && phase === 'answer' && cur && cur.key && /^[1-9]$/.test(e.key)) {
      cur.key(+e.key);
    } else if (e.key === 'Escape') {
      root.querySelector('.close').click();
    }
  }
  document.addEventListener('keydown', onKey);
  progress();
  next();
};
