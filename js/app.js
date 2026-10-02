'use strict';
/* Holzwort – App: Navigation und Ansichten */

(function () {
  const esc = FD.esc;
  const $ = (sel, root = document) => root.querySelector(sel);
  const view = $('#view');

  const SEMESTERS = {
    0: ['Vor dem Studienstart', 'Studienorganisation & Fachsprache – damit fängst du am besten an.'],
    1: ['1. Semester', 'Holzphysik, Statik, Mathe, Physik, Chemie, Metalle'],
    2: ['2. Semester', 'Holzchemie, Holzwerkstoffe, Möbelfertigung, Bauphysik'],
    3: ['3. Semester', 'Maschinen, Trocknung, Elektrotechnik, Energie'],
    4: ['4. Semester', 'Oberflächen, Kleben, Lean & Produktion'],
    6: ['6. Semester', 'Nachhaltigkeit & Umweltschutz'],
  };

  /* ---------- small helpers ---------- */
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600);
  }
  function applyTheme() {
    const th = FD.state.settings.theme;
    if (th === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', th);
  }
  function ring(pct, label, size = 64) {
    const r = (size - 8) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.min(1, pct / 100));
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`;
  }
  function baseTier(s, unit) { return Math.min(3, 1 + Math.floor(3 * unit / s.units.length)); }
  function tierFor(s, node) {
    if (node.type !== 'unit') return 3;
    return Math.min(3, baseTier(s, node.unit) + FD.nodeCount(s.id, node.key));
  }
  const TIER_NAME = { 1: 'Einstieg', 2: 'Aufbau', 3: 'Profi' };

  /* ---------- Top bar ---------- */
  function renderTop() {
    const li = FD.levelInfo();
    $('#stat-streak').textContent = FD.currentStreak();
    $('#stat-xp').textContent = FD.state.xp;
    $('#stat-level').textContent = li.lvl;
    $('#stat-due').textContent = FD.dueWords().length;
    $('#stat-due').parentElement.classList.toggle('zero', !FD.dueWords().length);
  }

  /* ---------- Library ---------- */
  function nextNodeIndex(s) {
    const i = s.path.findIndex(n => FD.nodeCount(s.id, n.key) === 0);
    return i < 0 ? s.path.length - 1 : i;
  }

  function renderHome() {
    const st = FD.state, li = FD.levelInfo();
    const today = st.days[FD.today()] || 0;
    const goal = st.settings.goal;
    const due = FD.dueWords().length;
    const last = FD.byId[st.lastSubject] || FD.byId.studium;
    const totalWords = FD.words.length;
    const learned = Object.values(st.srs).filter(r => r[0] >= 1).length;
    const bySem = {};
    FD.subjects.forEach(s => (bySem[s.semester] = bySem[s.semester] || []).push(s));

    view.innerHTML = `
    <section class="hero card">
      <div class="hero-main">
        <div class="kicker">TH Rosenheim · Holztechnik B.Eng.</div>
        <h1>Hallo! 👋</h1>
        <div class="lvl-line"><span class="lvl-badge">Level ${li.lvl}</span> ${esc(li.title)}</div>
        <div class="bar thin"><div class="bar-fill" style="width:${li.pct}%"></div></div>
        <div class="muted small">${st.xp - li.from} / ${li.to - li.from} XP bis Level ${li.lvl + 1} · ${learned} von ${totalWords} Fachbegriffen gelernt</div>
        <div class="small cloud-line">${window.Cloud && window.Cloud.user
          ? `☁️ Angemeldet als <b>${esc(window.Cloud.name)}</b> – Fortschritt wird gespeichert`
          : `☁️ <a href="#/profile">Anmelden</a>, um deinen Fortschritt auf allen Geräten zu speichern`}</div>
      </div>
      <div class="hero-goal" title="Tagesziel">${ring(100 * today / goal, `${today}/${goal}`, 76)}<div class="muted small">Tagesziel XP</div></div>
      <div class="hero-actions">
        <button class="btn primary" id="btn-continue">▶ Weiterlernen: ${esc(last.title)}</button>
        <button class="btn ${due ? 'accent' : 'ghost'}" id="btn-review">🔁 Wiederholen${due ? ` (${due} fällig)` : ''}</button>
      </div>
    </section>
    ${Object.keys(SEMESTERS).filter(k => bySem[k]).map(k => `
      <section class="sem">
        <h2>${SEMESTERS[k][0]}</h2>
        <p class="muted">${SEMESTERS[k][1]}</p>
        <div class="grid">
          ${bySem[k].map(s => {
            const p = FD.subjectProgress(s);
            return `<a class="subj card" href="#/s/${s.id}">
              <div class="subj-icon">${s.icon}</div>
              <div class="subj-body">
                <div class="subj-title">${esc(s.title)}</div>
                <div class="subj-en">${esc(s.en)}</div>
                <div class="subj-meta">${s.words.length} Begriffe · ${s.units.length} Lektionen${s.diagram ? ' · 🖼️' : ''}${s.lecture ? ' · 🎧' : ''}</div>
                <div class="bar thin"><div class="bar-fill" style="width:${p.pct}%"></div></div>
              </div></a>`;
          }).join('')}
        </div>
      </section>`).join('')}
    <section class="card info">
      <h3>So funktioniert’s</h3>
      <ul>
        <li><b>Bibliothek:</b> Wähle ein Fach. Die Fächer folgen dem Modulplan der SPO Holztechnik (2023).</li>
        <li><b>Lernpfad:</b> Jede Lektion schaltet die nächste frei. Wiederholst du eine Lektion, wird sie schwerer (Stufe Einstieg → Aufbau → Profi).</li>
        <li><b>Übungen:</b> Paare finden, Multiple Choice, Hören, Diktat, Artikel, Lückentext, Sätze bauen, freie Übersetzung, Komposita, Aussprache, Bild-Lektionen und Hörsaal-Vorträge.</li>
        <li><b>Wiederholen:</b> Wörter, die du falsch hattest, kommen nach dem Prinzip der verteilten Wiederholung zurück.</li>
      </ul>
    </section>`;
    $('#btn-continue').onclick = () => { location.hash = '#/s/' + last.id; setTimeout(() => openNode(last, nextNodeIndex(last)), 50); };
    $('#btn-review').onclick = () => { location.hash = '#/review'; };
  }

  /* ---------- Subject path ---------- */
  const NODE_ICON = { unit: '★', diagram: '🖼️', lecture: '🎧', exam: '🏆' };

  function renderSubject(id) {
    const s = FD.byId[id];
    if (!s) { location.hash = '#/'; return; }
    FD.state.lastSubject = s.id; FD.save();
    const p = FD.subjectProgress(s);
    const cur = nextNodeIndex(s);
    view.innerHTML = `
      <div class="subj-head card">
        <a class="back" href="#/">← Bibliothek</a>
        <div class="subj-head-row">
          <div class="subj-icon big">${s.icon}</div>
          <div>
            <h1>${esc(s.title)}</h1>
            <div class="muted">${esc(s.en)}</div>
            <div class="mod">${esc(s.modules || '')}</div>
          </div>
        </div>
        <div class="bar"><div class="bar-fill" style="width:${p.pct}%"></div></div>
        <div class="muted small">${p.done} von ${p.total} Stationen · ${s.words.length} Fachbegriffe · ${s.sentences.length} Beispielsätze
          · <a href="#/words?s=${s.id}">Wortliste ansehen</a></div>
      </div>
      <div class="path">
        ${s.path.map((n, i) => {
          const cnt = FD.nodeCount(s.id, n.key);
          const unlocked = FD.nodeUnlocked(s, i);
          const off = Math.round(Math.sin(i * 0.9) * 70);
          const cls = cnt ? 'done' : (unlocked ? 'open' : 'locked');
          const stars = n.type === 'unit' ? `<div class="stars">${[1, 2, 3].map(k => `<span class="${cnt >= k ? 'on' : ''}">★</span>`).join('')}</div>` : '';
          return `<div class="node-wrap" style="transform:translateX(${off}px)">
            ${i === cur && unlocked ? '<div class="start-bubble">START</div>' : ''}
            <button class="node ${cls} ${n.type} ${i === cur ? 'current' : ''}" data-i="${i}" aria-label="${esc(n.title)}">
              <span>${cnt || unlocked ? NODE_ICON[n.type] : '🔒'}</span></button>
            <div class="node-label">${esc(n.type === 'unit' ? n.title : n.title.split(':')[0])}</div>${stars}
          </div>`;
        }).join('')}
      </div>`;
    view.querySelectorAll('.node').forEach(b => b.onclick = () => openNode(s, +b.dataset.i));
    const curEl = view.querySelector('.node.current');
    if (curEl) setTimeout(() => curEl.scrollIntoView({ block: 'center', behavior: 'smooth' }), 80);
  }

  function openNode(s, i) {
    const n = s.path[i];
    const unlocked = FD.nodeUnlocked(s, i);
    const cnt = FD.nodeCount(s.id, n.key);
    let desc = '', btn = '';
    if (n.type === 'unit') {
      const t = tierFor(s, n);
      desc = `<p>${s.units[n.unit].length} neue Begriffe: <span class="muted">${s.units[n.unit].map(w => esc(w.base)).join(', ')}</span></p>
        <p>Schwierigkeit: <b>${TIER_NAME[t]}</b>${cnt ? ` · ${cnt}× abgeschlossen` : ''}</p>`;
      btn = cnt >= 3 ? 'Nochmal üben (Profi)' : cnt ? `Stufe ${Math.min(3, cnt + 1)} spielen` : 'Lektion starten';
    } else if (n.type === 'diagram') {
      const d = FD.diagrams[s.diagram];
      desc = `<p>Lerne die Teile von <b>${esc(d.title)}</b> am Bild: ansehen, anhören, dann zuordnen.</p>`;
      btn = 'Bild-Lektion starten';
    } else if (n.type === 'lecture') {
      desc = `<p>Ein kurzer Fachvortrag zum Anhören – mit Untertiteln, Fragen zum Hörverstehen und einem Diktat.</p>`;
      btn = 'In den Hörsaal';
    } else {
      desc = `<p>15 gemischte Aufgaben aus dem ganzen Fach auf Profi-Niveau. Bestanden ab <b>80 %</b>.</p>`;
      btn = cnt ? 'Prüfung wiederholen' : 'Prüfung starten';
    }
    let actions;
    if (unlocked) actions = `<button class="btn primary wide" id="sheet-go">${btn}</button>`;
    else {
      const prevWords = s.units.slice(0, Math.max(1, (n.unit ?? s.units.length))).flat();
      actions = `<p class="muted">🔒 Gesperrt – schließe zuerst die vorherige Station ab.</p>
        <button class="btn ghost wide" id="sheet-jump">⏩ Hierher springen (Einstufungstest, ${prevWords.length} Begriffe)</button>`;
    }
    showSheet(`<h2>${esc(n.title)}</h2>${desc}${actions}`);
    const g = $('#sheet-go');
    if (g) g.onclick = () => { hideSheet(); startNode(s, i); };
    const j = $('#sheet-jump');
    if (j) j.onclick = () => { hideSheet(); startJump(s, i); };
  }

  function complete(s, key) {
    const k = s.id + ':' + key;
    FD.state.nodes[k] = (FD.state.nodes[k] || 0) + 1;
  }

  function startNode(s, i) {
    const n = s.path[i];
    let items, mode = 'lesson', passPct = 0, tag = s.icon + ' ' + s.title;
    if (n.type === 'unit') { items = EX.unitLesson(s, n.unit, tierFor(s, n)); tag += ' · ' + TIER_NAME[tierFor(s, n)]; }
    else if (n.type === 'diagram') { items = EX.diagramLesson(FD.diagrams[s.diagram]); mode = 'diagram'; }
    else if (n.type === 'lecture') { items = EX.lectureLesson(s); mode = 'lecture'; }
    else { items = EX.examLesson(s, s.words); mode = 'exam'; passPct = 80; }
    EX.run({
      items, mode, passPct, tag,
      doneTitle: n.type === 'exam' ? 'Prüfung bestanden! 🎓' : null,
      onFinish: r => {
        if (r.passed) complete(s, n.key);
        FD.addXP(r.xp);
        FD.save(); renderTop();
      },
      onClose: route,
    });
  }

  function startJump(s, i) {
    const n = s.path[i];
    const upto = n.type === 'unit' ? n.unit : s.units.length;
    const words = s.units.slice(0, Math.max(1, upto)).flat();
    EX.run({
      items: EX.examLesson(s, words), mode: 'jump', passPct: 80, tag: '⏩ Einstufungstest',
      doneTitle: 'Test bestanden – Stationen freigeschaltet!',
      onFinish: r => {
        if (r.passed) for (let k = 0; k < i; k++) if (!FD.nodeCount(s.id, s.path[k].key)) complete(s, s.path[k].key);
        FD.addXP(r.xp); FD.save(); renderTop();
      },
      onClose: route,
    });
  }

  /* ---------- Bottom sheet ---------- */
  function showSheet(html) {
    const sh = $('#sheet');
    sh.querySelector('.sheet-body').innerHTML = html;
    sh.hidden = false;
    requestAnimationFrame(() => sh.classList.add('open'));
  }
  function hideSheet() {
    const sh = $('#sheet');
    sh.classList.remove('open');
    setTimeout(() => { sh.hidden = true; }, 200);
  }
  $('#sheet').addEventListener('click', e => { if (e.target.id === 'sheet' || e.target.classList.contains('sheet-close')) hideSheet(); });

  /* ---------- Review ---------- */
  function renderReview() {
    const due = FD.dueWords();
    const entries = Object.entries(FD.state.srs).filter(([id]) => FD.wordById[id]);
    const boxes = [0, 0, 0, 0, 0, 0, 0];
    entries.forEach(([, r]) => boxes[r[0]]++);
    const max = Math.max(1, ...boxes);
    const weak = entries.filter(([, r]) => r[3] > 0).sort((a, b) => b[1][3] - a[1][3] || a[1][0] - b[1][0]).slice(0, 12).map(([id]) => FD.wordById[id]);
    view.innerHTML = `
      <div class="card">
        <h1>🔁 Wiederholen</h1>
        <p class="muted">Verteilte Wiederholung (Leitner-System): Richtige Antworten schieben ein Wort in ein höheres Fach – es kommt seltener. Fehler schicken es zurück in Fach 0.</p>
        ${entries.length ? `
        <div class="boxes">${boxes.map((b, i) => `<div class="box-col"><div class="box-bar" style="height:${Math.round(90 * b / max) + 4}px"></div><b>${b}</b><span>${i === 0 ? 'neu/falsch' : 'Fach ' + i}</span></div>`).join('')}</div>
        <div class="row gap">
          <button class="btn primary" id="rv-due" ${due.length ? '' : 'disabled'}>Fällige Wörter üben (${due.length})</button>
          <button class="btn ghost" id="rv-weak" ${weak.length >= 4 ? '' : 'disabled'}>Schwächste Wörter (${weak.length})</button>
        </div>
        ${!due.length ? '<p class="ok-msg">✅ Alles wiederholt! Komm später wieder oder lerne neue Lektionen.</p>' : ''}
        ${weak.length ? `<h3>Deine Problemwörter</h3><ul class="wordlist compact">${weak.map(w => wordRow(w)).join('')}</ul>` : ''}
        ` : '<p>Noch keine Wörter gelernt. Starte eine Lektion in der Bibliothek – danach erscheinen deine Wörter hier.</p><a class="btn primary" href="#/">Zur Bibliothek</a>'}
      </div>`;
    EX.wireSay(view);
    const run = (words, tag) => EX.run({
      items: EX.reviewLesson(FD.shuffle(words).slice(0, 12)), mode: 'review', tag,
      doneTitle: 'Wiederholung geschafft!',
      onFinish: r => { FD.addXP(r.xp); renderTop(); }, onClose: route,
    });
    const a = $('#rv-due'); if (a) a.onclick = () => run(due.slice(0, 20), '🔁 Wiederholung');
    const b = $('#rv-weak'); if (b) b.onclick = () => run(weak, '🎯 Schwache Wörter');
  }

  /* ---------- Words ---------- */
  function boxDots(w) {
    const r = FD.state.srs[w.id];
    if (!r) return '<span class="dots" title="noch nicht geübt"></span>';
    return `<span class="dots" title="Fach ${r[0]}">${[1, 2, 3, 4, 5, 6].map(i => `<i class="${r[0] >= i ? 'on' : ''}"></i>`).join('')}</span>`;
  }
  function wordRow(w) {
    return `<li><div class="w-main">${EX.wordHTML(w)}<div class="w-en">${esc(w.en)}</div></div>
      ${boxDots(w)}<button class="say" data-say="${esc(w.clean)}" aria-label="Anhören">🔊</button></li>`;
  }
  function renderWords(params) {
    const sid = params.get('s') || '';
    view.innerHTML = `
      <div class="card">
        <h1>📖 Wortschatz</h1>
        <p class="muted">${FD.words.length} Fachbegriffe aus ${FD.subjects.length} Fächern. Artikel-Farben: <span class="art art-der">der</span> <span class="art art-die">die</span> <span class="art art-das">das</span></p>
        <div class="filters">
          <input id="w-q" type="search" placeholder="Suchen (Deutsch oder Englisch) …" autocomplete="off">
          <select id="w-s"><option value="">Alle Fächer</option>${FD.subjects.map(s => `<option value="${s.id}" ${s.id === sid ? 'selected' : ''}>${s.icon} ${esc(s.title)}</option>`).join('')}</select>
        </div>
        <div id="w-count" class="muted small"></div>
        <ul class="wordlist" id="w-list"></ul>
      </div>`;
    const q = $('#w-q'), sel = $('#w-s'), list = $('#w-list');
    const draw = () => {
      const term = FD.norm(q.value);
      const ws = FD.words.filter(w => (!sel.value || w.sid === sel.value) &&
        (!term || FD.norm(w.de).includes(term) || FD.norm(w.en).includes(term)));
      $('#w-count').textContent = `${ws.length} Treffer`;
      list.innerHTML = ws.map(wordRow).join('');
      EX.wireSay(list);
    };
    q.oninput = draw; sel.onchange = draw;
    draw();
  }

  /* ---------- Account (js/cloud.js) ---------- */
  function accountCard() {
    const C = window.Cloud;
    if (location.protocol === 'file:') {
      return `<div class="card account"><h3>☁️ Konto</h3><p class="muted small">Die Anmeldung funktioniert nur, wenn die App über eine Web-Adresse geöffnet wird (z. B. GitHub Pages oder localhost), nicht als lokale Datei.</p></div>`;
    }
    if (!C) {
      return `<div class="card account"><h3>☁️ Konto</h3><p class="muted small">${navigator.onLine ? 'Konto-Funktion wird geladen …' : 'Offline – zum Anmelden brauchst du Internet. Dein Fortschritt wird lokal gespeichert.'}</p></div>`;
    }
    if (C.user) {
      const st = { syncing: '🔄 Synchronisiere …', ok: `✅ Synchronisiert${C.lastSync ? ' um ' + C.lastSync.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) : ''}`, error: '⚠️ ' + esc(C.error || 'Fehler'), idle: '…' }[C.status];
      return `<div class="card account">
        <h3>☁️ Konto</h3>
        <p>Angemeldet als <b>${esc(C.name)}</b></p>
        <p class="small ${C.status === 'error' ? 'err' : 'muted'}">${st}</p>
        <p class="muted small">Dein Fortschritt wird nach jeder Lektion automatisch gespeichert und auf allen Geräten geladen, auf denen du dich anmeldest.</p>
        <div class="row gap">
          <button class="btn ghost small" id="acc-sync">🔄 Jetzt synchronisieren</button>
          <button class="btn ghost small" id="acc-out">Abmelden</button>
        </div>
      </div>`;
    }
    return `<div class="card account">
      <h3>☁️ Konto</h3>
      <p class="muted small">Melde dich an, damit dein Fortschritt auf allen Geräten gespeichert wird. Du kannst einen Benutzernamen oder deine E-Mail-Adresse verwenden (mit E-Mail ist „Passwort vergessen“ möglich).</p>
      <form id="acc-form" class="acc-form" autocomplete="on">
        <input id="acc-id" name="username" type="text" autocomplete="username" autocapitalize="off" spellcheck="false" placeholder="Benutzername oder E-Mail" required>
        <input id="acc-pw" name="password" type="password" autocomplete="current-password" placeholder="Passwort (mind. 6 Zeichen)" required minlength="6">
        <div class="row gap">
          <button class="btn primary" type="submit" id="acc-login">Anmelden</button>
          <button class="btn ghost" type="button" id="acc-reg">Neues Konto erstellen</button>
          <button class="link small" type="button" id="acc-reset">Passwort vergessen?</button>
        </div>
        <p class="small err" id="acc-msg" hidden></p>
      </form>
    </div>`;
  }

  function wireAccount() {
    const C = window.Cloud;
    if (!C) return;
    const msg = (t, ok) => { const m = $('#acc-msg'); if (!m) return; m.hidden = false; m.textContent = t; m.classList.toggle('err', !ok); m.classList.toggle('ok-text', !!ok); };
    const busy = on => document.querySelectorAll('#acc-form button').forEach(b => { b.disabled = on; });
    const form = $('#acc-form');
    if (form) {
      const run = async fn => {
        const id = $('#acc-id').value.trim(), pw = $('#acc-pw').value;
        if (!id || !pw) { msg('Bitte Benutzername/E-Mail und Passwort eingeben.'); return; }
        busy(true); msg('Bitte warten …', true);
        try { await fn(id, pw); } catch (e) { msg(C.message(e)); busy(false); }
      };
      form.onsubmit = e => { e.preventDefault(); run(C.login); };
      $('#acc-reg').onclick = () => run(C.register);
      $('#acc-reset').onclick = async () => {
        const id = $('#acc-id').value.trim();
        if (!C.canReset(id)) { msg('„Passwort vergessen“ geht nur bei Konten mit E-Mail-Adresse. Gib oben deine E-Mail ein.'); return; }
        try { await C.reset(id); msg('E-Mail zum Zurücksetzen wurde gesendet.', true); } catch (e) { msg(C.message(e)); }
      };
    }
    const s = $('#acc-sync'); if (s) s.onclick = () => C.sync().catch(() => {});
    const o = $('#acc-out'); if (o) o.onclick = async () => { await C.logout(); toast('Abgemeldet – dein Fortschritt bleibt in der Cloud gespeichert.'); };
  }

  /* ---------- Profile ---------- */
  function renderProfile() {
    const st = FD.state, li = FD.levelInfo();
    const srs = Object.values(st.srs);
    const learned = srs.filter(r => r[0] >= 1).length, mastered = srs.filter(r => r[0] >= 4).length;
    const lessons = Object.values(st.nodes).reduce((a, b) => a + b, 0);
    const days = [];
    for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push([d, st.days[FD.today(d)] || 0]); }
    const maxDay = Math.max(st.settings.goal, ...days.map(d => d[1]));
    const voices = Speech.voices;
    view.innerHTML = accountCard() + `
      <div class="card">
        <h1>👤 Profil</h1>
        <div class="lvl-line"><span class="lvl-badge">Level ${li.lvl}</span> ${esc(li.title)}</div>
        <div class="stats">
          <div><b>${st.xp}</b><span>XP gesamt</span></div>
          <div><b>${FD.currentStreak()} 🔥</b><span>Tage-Serie</span></div>
          <div><b>${learned}</b><span>Wörter gelernt</span></div>
          <div><b>${mastered}</b><span>sicher (Fach 4+)</span></div>
          <div><b>${lessons}</b><span>Stationen</span></div>
          <div><b>${FD.subjects.filter(s => FD.subjectProgress(s).pct === 100).length}</b><span>Fächer fertig</span></div>
        </div>
        <h3>Letzte 7 Tage</h3>
        <div class="week">${days.map(([d, x]) => `<div class="day"><div class="day-bar ${x >= st.settings.goal ? 'met' : ''}" style="height:${Math.round(80 * x / maxDay) + 3}px"></div><b>${x}</b><span>${d.toLocaleDateString('de-DE', { weekday: 'short' })}</span></div>`).join('')}</div>
      </div>
      <div class="card">
        <h3>Fortschritt nach Fach</h3>
        <ul class="progress-list">${FD.subjects.map(s => { const p = FD.subjectProgress(s); return `<li><a href="#/s/${s.id}">${s.icon} ${esc(s.title)}</a><div class="bar thin"><div class="bar-fill" style="width:${p.pct}%"></div></div><span>${p.pct} %</span></li>`; }).join('')}</ul>
      </div>
      <div class="card settings">
        <h3>Einstellungen</h3>
        <label>Tagesziel
          <select id="set-goal">${[10, 20, 30, 50, 80].map(g => `<option ${g === st.settings.goal ? 'selected' : ''} value="${g}">${g} XP</option>`).join('')}</select></label>
        <label>Design
          <select id="set-theme">${[['auto', 'Automatisch'], ['light', 'Hell'], ['dark', 'Dunkel']].map(([v, t]) => `<option value="${v}" ${v === st.settings.theme ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
        <label>Stimme
          <select id="set-voice"><option value="">Automatisch</option>${voices.map(v => `<option ${v.name === st.settings.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select></label>
        ${!voices.length ? '<p class="muted small">Keine deutsche Stimme gefunden. Unter Windows: Einstellungen → Zeit & Sprache → Sprache → Deutsch hinzufügen (mit Sprachausgabe). Chrome bringt „Google Deutsch“ mit.</p>' : ''}
        <label>Sprechtempo <input id="set-rate" type="range" min="0.6" max="1.3" step="0.05" value="${st.settings.rate}"> <span id="rate-val">${st.settings.rate}</span></label>
        <button class="btn ghost small" id="set-test">🔊 Stimme testen</button>
        <label class="check"><input type="checkbox" id="set-audio" ${st.settings.audio ? 'checked' : ''}> Hörübungen</label>
        <label class="check"><input type="checkbox" id="set-speak" ${st.settings.speak ? 'checked' : ''} ${Speech.SR ? '' : 'disabled'}> Sprechübungen ${Speech.SR ? '' : '<span class="muted small">(in diesem Browser nicht verfügbar – Chrome/Edge nutzen)</span>'}</label>
      </div>
      <div class="card settings">
        <h3>Daten</h3>
        <p class="muted small">Ohne Konto wird dein Fortschritt nur in diesem Browser gespeichert. Mit Export/Import kannst du ihn auch ohne Konto auf ein anderes Gerät mitnehmen.</p>
        <div class="row gap">
          <button class="btn ghost" id="d-export">⬇ Exportieren</button>
          <label class="btn ghost">⬆ Importieren<input type="file" id="d-import" accept="application/json" hidden></label>
          <button class="btn danger" id="d-reset">Zurücksetzen</button>
        </div>
      </div>
      <div class="card info">
        <h3>Über Holzwort</h3>
        <p class="small">Inhalte orientieren sich an der Studien- und Prüfungsordnung (14.08.2023) und am Modulhandbuch des Bachelorstudiengangs Holztechnik der TH Rosenheim. Inoffizielles Lernprojekt – keine Verbindung zur Hochschule.</p>
      </div>`;
    wireAccount();
    const set = (k, v) => { st.settings[k] = v; FD.save(); };
    $('#set-goal').onchange = e => { set('goal', +e.target.value); renderTop(); };
    $('#set-theme').onchange = e => { set('theme', e.target.value); applyTheme(); };
    $('#set-voice').onchange = e => set('voice', e.target.value);
    $('#set-rate').oninput = e => { set('rate', +e.target.value); $('#rate-val').textContent = e.target.value; };
    $('#set-test').onclick = () => Speech.say('Die Rohdichte von Fichtenholz beträgt etwa vierhundertfünfzig Kilogramm pro Kubikmeter.');
    $('#set-audio').onchange = e => set('audio', e.target.checked);
    $('#set-speak').onchange = e => set('speak', e.target.checked);
    $('#d-export').onclick = () => {
      const blob = new Blob([JSON.stringify(st, null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = `holzwort-fortschritt-${FD.today()}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $('#d-import').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => {
        try {
          const data = JSON.parse(t);
          if (!data || typeof data.xp !== 'number' || !data.srs) throw new Error('format');
          FD.state = Object.assign(FD.defaultState(), data);
          FD.save(); toast('Fortschritt importiert ✔'); route();
        } catch (err) { toast('Datei konnte nicht gelesen werden.'); }
      });
    };
    $('#d-reset').onclick = () => {
      if (confirm('Wirklich den gesamten Fortschritt löschen?')) {
        FD.state = FD.defaultState(); FD.save(); toast('Fortschritt zurückgesetzt'); route();
      }
    };
  }

  /* ---------- Router ---------- */
  function route() {
    renderTop();
    const h = location.hash || '#/';
    const [path, query] = h.slice(1).split('?');
    const params = new URLSearchParams(query || '');
    const parts = path.split('/').filter(Boolean);
    document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('active',
      a.dataset.tab === (parts[0] || 'home') || (a.dataset.tab === 'home' && parts[0] === 's')));
    if (parts[0] === 's') renderSubject(parts[1]);
    else if (parts[0] === 'review') renderReview();
    else if (parts[0] === 'words') renderWords(params);
    else if (parts[0] === 'profile') renderProfile();
    else renderHome();
    if (parts[0] !== 's') window.scrollTo(0, 0);
  }

  /* ---------- Boot ---------- */
  FD.load();
  FD.init();
  Speech.init();
  applyTheme();
  window.addEventListener('hashchange', () => { hideSheet(); route(); });
  const onProfile = () => (location.hash || '').startsWith('#/profile');
  const lessonOpen = () => !$('#lesson').hidden;
  window.addEventListener('cloud-change', () => {
    if (lessonOpen()) return;
    // don't wipe what the user is typing into the login form
    if (onProfile()) { if (!(window.Cloud && !window.Cloud.user && $('#acc-form'))) renderProfile(); }
    else if (!location.hash || location.hash === '#/') renderHome();
  });
  window.addEventListener('cloud-synced', () => {
    applyTheme();
    if (!lessonOpen()) route();
  });
  if (Speech.tts) speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => { if (location.hash.startsWith('#/profile')) renderProfile(); });
  route();
})();
