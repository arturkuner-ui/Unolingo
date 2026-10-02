/* Bild-Lektionen: SVG-Diagramme mit nummerierten Hotspots.
   Punkt: { x, y, de, en, lx?, ly? }  (lx/ly = Position der Markierung, sonst x/y) */

FD.diagrams.stamm = {
  title: 'Stammquerschnitt', en: 'Cross-section of a tree trunk', viewBox: '0 0 360 260',
  svg: `
  <circle cx="180" cy="130" r="120" fill="#6b4226"/>
  <circle cx="180" cy="130" r="106" fill="#a8784a"/>
  <circle cx="180" cy="130" r="98" fill="#ecd3a0"/>
  <circle cx="180" cy="130" r="99" fill="none" stroke="#3f8f4f" stroke-width="3"/>
  <circle cx="180" cy="130" r="60" fill="#c98d4a"/>
  <g fill="none" stroke="#8a5a2b" stroke-opacity=".55">
    <circle cx="180" cy="130" r="12"/><circle cx="180" cy="130" r="22"/><circle cx="180" cy="130" r="32"/>
    <circle cx="180" cy="130" r="42"/><circle cx="180" cy="130" r="52"/>
  </g>
  <g fill="none" stroke="#c9a46a" stroke-width="1.4">
    <circle cx="180" cy="130" r="68"/><circle cx="180" cy="130" r="78"/><circle cx="180" cy="130" r="88"/>
  </g>
  <g stroke="#7d5330" stroke-opacity=".5">
    ${[20, 65, 110, 160, 200, 245, 290, 335].map(a => {
      const r = a * Math.PI / 180;
      return `<line x1="${180 + 6 * Math.cos(r)}" y1="${130 + 6 * Math.sin(r)}" x2="${180 + 97 * Math.cos(r)}" y2="${130 + 97 * Math.sin(r)}"/>`;
    }).join('')}
  </g>
  <circle cx="180" cy="130" r="4" fill="#4a2e16"/>`,
  points: [
    { x: 180, y: 17, de: 'die Rinde', en: 'bark' },
    { x: 269, y: 79, lx: 322, ly: 40, de: 'der Bast', en: 'bast (inner bark)' },
    { x: 266, y: 180, lx: 322, ly: 220, de: 'das Kambium', en: 'cambium' },
    { x: 111, y: 170, de: 'das Splintholz', en: 'sapwood' },
    { x: 150, y: 105, de: 'das Kernholz', en: 'heartwood' },
    { x: 180, y: 130, lx: 214, ly: 145, de: 'das Mark', en: 'pith' },
    { x: 141, y: 62, de: 'der Jahrring', en: 'annual ring' },
    { x: 100, y: 101, lx: 36, ly: 92, de: 'der Holzstrahl', en: 'wood ray' },
  ],
};

FD.diagrams.traeger = {
  title: 'Einfeldträger', en: 'Single-span beam', viewBox: '0 0 360 225',
  svg: `
  <rect x="40" y="70" width="280" height="18" fill="#d9a86c" stroke="#7a5230" stroke-width="1.5"/>
  <line x1="40" y1="79" x2="320" y2="79" stroke="#7a5230" stroke-dasharray="5 4"/>
  <polygon points="60,88 47,110 73,110" fill="#9aa1a8" stroke="#4d555c" stroke-width="1.5"/>
  <line x1="40" y1="112" x2="80" y2="112" stroke="#4d555c" stroke-width="2"/>
  <g stroke="#4d555c">${[44, 52, 60, 68, 76].map(x => `<line x1="${x}" y1="112" x2="${x - 6}" y2="119"/>`).join('')}</g>
  <polygon points="300,88 288,104 312,104" fill="#9aa1a8" stroke="#4d555c" stroke-width="1.5"/>
  <circle cx="292" cy="108" r="3.5" fill="#fff" stroke="#4d555c"/><circle cx="308" cy="108" r="3.5" fill="#fff" stroke="#4d555c"/>
  <line x1="280" y1="112" x2="320" y2="112" stroke="#4d555c" stroke-width="2"/>
  <g stroke="#4d555c">${[284, 292, 300, 308, 316].map(x => `<line x1="${x}" y1="112" x2="${x - 6}" y2="119"/>`).join('')}</g>
  <line x1="180" y1="16" x2="180" y2="60" stroke="#c0392b" stroke-width="3"/>
  <polygon points="180,69 173,57 187,57" fill="#c0392b"/>
  <text x="190" y="26" font-size="15" font-style="italic" fill="#c0392b">F</text>
  <line x1="60" y1="138" x2="300" y2="138" stroke="#555"/>
  <line x1="60" y1="131" x2="60" y2="145" stroke="#555"/><line x1="300" y1="131" x2="300" y2="145" stroke="#555"/>
  <text x="176" y="132" font-size="13" font-style="italic" fill="#555">l</text>
  <polygon points="60,160 180,208 300,160" fill="#3c78d8" fill-opacity=".22" stroke="#3c78d8" stroke-width="1.5"/>
  <line x1="60" y1="160" x2="300" y2="160" stroke="#3c78d8"/>
  <text x="186" y="203" font-size="13" font-style="italic" fill="#3c78d8">M</text>`,
  points: [
    { x: 120, y: 74, lx: 105, ly: 40, de: 'der Träger', en: 'beam' },
    { x: 250, y: 79, lx: 255, ly: 45, de: 'die neutrale Faser', en: 'neutral axis' },
    { x: 60, y: 100, lx: 22, ly: 140, de: 'das Festlager', en: 'pinned support' },
    { x: 300, y: 100, lx: 338, ly: 140, de: 'das Loslager', en: 'roller support' },
    { x: 180, y: 38, lx: 148, ly: 30, de: 'die Einzellast', en: 'point load' },
    { x: 240, y: 138, de: 'die Spannweite', en: 'span' },
    { x: 180, y: 182, de: 'das Biegemoment', en: 'bending moment' },
  ],
};

FD.diagrams.korpus = {
  title: 'Möbelkorpus', en: 'Cabinet carcass (front view)', viewBox: '0 0 360 240',
  svg: `
  <rect x="106" y="36" width="148" height="150" fill="#efe3cf"/>
  <g stroke="#d8c6a6" stroke-width="1">${Array.from({ length: 14 }, (_, i) => `<line x1="${106 + i * 12}" y1="36" x2="${106 + i * 12 - 30}" y2="186" />`).join('')}</g>
  <rect x="106" y="36" width="148" height="150" fill="none" stroke="#c9b08a"/>
  <g fill="#d4a373" stroke="#7a5230" stroke-width="1.5">
    <rect x="90" y="20" width="16" height="200"/>
    <rect x="254" y="20" width="16" height="200"/>
    <rect x="106" y="20" width="148" height="16"/>
    <rect x="106" y="186" width="148" height="16"/>
    <rect x="106" y="105" width="148" height="12"/>
  </g>
  <rect x="112" y="202" width="136" height="18" fill="#a8743f" stroke="#6b4423" stroke-width="1.5"/>
  <g fill="#7a5230">${[44, 56, 68, 80, 92, 128, 140, 152, 164, 176].map(y => `<circle cx="114" cy="${y}" r="2.2"/><circle cx="246" cy="${y}" r="2.2"/>`).join('')}</g>`,
  points: [
    { x: 262, y: 150, lx: 305, ly: 150, de: 'die Seitenwand', en: 'side panel' },
    { x: 180, y: 28, de: 'der Oberboden', en: 'top panel' },
    { x: 180, y: 194, de: 'der Boden', en: 'bottom panel' },
    { x: 180, y: 211, de: 'der Sockel', en: 'plinth' },
    { x: 180, y: 111, de: 'der Fachboden', en: 'shelf' },
    { x: 205, y: 70, de: 'die Rückwand', en: 'back panel' },
    { x: 114, y: 152, lx: 55, ly: 152, de: 'die Lochreihe', en: 'row of holes' },
  ],
};

FD.diagrams.wand = {
  title: 'Außenwand im Holzrahmenbau', en: 'Timber-frame exterior wall (horizontal section)', viewBox: '0 0 360 240',
  svg: `
  <defs><pattern id="pat-daemm" width="16" height="12" patternUnits="userSpaceOnUse">
    <path d="M0,6 L4,0 L8,12 L12,0 L16,6" fill="none" stroke="#c9a227" stroke-width="1.2"/></pattern></defs>
  <rect x="30" y="20" width="16" height="190" fill="#e8e4dc" stroke="#9a948a"/>
  <rect x="52" y="20" width="150" height="190" fill="#f6dc6e"/>
  <rect x="52" y="20" width="150" height="190" fill="url(#pat-daemm)"/>
  <rect x="52" y="95" width="150" height="40" fill="#d4a373" stroke="#7a5230" stroke-width="1.5"/>
  <g stroke="#a87445">${[103, 111, 119, 127].map(y => `<line x1="56" y1="${y}" x2="198" y2="${y}"/>`).join('')}</g>
  <line x1="49" y1="20" x2="49" y2="210" stroke="#d35454" stroke-width="3" stroke-dasharray="7 4"/>
  <rect x="202" y="20" width="24" height="190" fill="#a9744f" stroke="#6b4423"/>
  <rect x="226" y="40" width="12" height="22" fill="#c9965f" stroke="#6b4423"/>
  <rect x="226" y="160" width="12" height="22" fill="#c9965f" stroke="#6b4423"/>
  <g stroke="#5b8def" stroke-width="2" fill="#5b8def">
    <line x1="251" y1="196" x2="251" y2="34"/><polygon points="251,26 246,36 256,36"/>
  </g>
  <rect x="262" y="20" width="14" height="190" fill="#8b5a2b" stroke="#5a3a1a"/>
  <g stroke="#5a3a1a">${[50, 85, 120, 155, 190].map(y => `<line x1="262" y1="${y}" x2="276" y2="${y}"/>`).join('')}</g>
  <text x="26" y="230" font-size="12" fill="#666">innen</text>
  <text x="250" y="230" font-size="12" fill="#666">außen</text>`,
  points: [
    { x: 38, y: 60, de: 'die Innenbekleidung', en: 'interior lining' },
    { x: 49, y: 172, lx: 16, ly: 150, de: 'die Dampfbremse', en: 'vapour retarder' },
    { x: 127, y: 60, de: 'die Wärmedämmung', en: 'thermal insulation' },
    { x: 127, y: 115, de: 'der Ständer', en: 'stud' },
    { x: 214, y: 175, de: 'die Holzfaserplatte', en: 'wood-fibre board' },
    { x: 244, y: 110, de: 'die Hinterlüftung', en: 'rear ventilation' },
    { x: 269, y: 70, lx: 315, ly: 70, de: 'die Fassade', en: 'facade' },
  ],
};

FD.diagrams.schneidkeil = {
  title: 'Der Schneidkeil', en: 'The cutting wedge', viewBox: '0 0 360 250',
  svg: `
  <rect x="10" y="150" width="340" height="90" fill="#e8c48f" stroke="#a0703f"/>
  <g stroke="#cfa36b">${[165, 180, 195, 210, 225].map(y => `<line x1="14" y1="${y}" x2="346" y2="${y}"/>`).join('')}</g>
  <rect x="10" y="136" width="170" height="14" fill="#e8c48f"/>
  <line x1="10" y1="136" x2="178" y2="136" stroke="#a0703f"/>
  <path d="M178,138 C170,104 150,82 124,78 C104,75 96,88 104,99" fill="none" stroke="#d9b07a" stroke-width="13" stroke-linecap="round"/>
  <path d="M178,138 C170,104 150,82 124,78 C104,75 96,88 104,99" fill="none" stroke="#a0703f" stroke-width="1"/>
  <polygon points="180,150 220,40 340,40 340,124" fill="#9aa5b1" stroke="#4a5560" stroke-width="2"/>
  <line x1="180" y1="150" x2="180" y2="58" stroke="#555" stroke-dasharray="4 3"/>
  <path d="M180,105 A45,45 0 0,1 195.4,107.7" fill="none" stroke="#c0392b" stroke-width="1.6"/>
  <text x="183" y="99" font-size="12" fill="#c0392b">γ</text>
  <path d="M189.6,123.7 A28,28 0 0,1 207.6,145.5" fill="none" stroke="#1f6fb2" stroke-width="1.6"/>
  <text x="197" y="134" font-size="12" fill="#1f6fb2">β</text>
  <path d="M249.1,138.8 A70,70 0 0,1 250,150" fill="none" stroke="#2e7d32" stroke-width="1.6"/>
  <text x="254" y="148" font-size="12" fill="#2e7d32">α</text>
  <line x1="340" y1="22" x2="258" y2="22" stroke="#c0392b" stroke-width="3"/>
  <polygon points="248,22 260,15 260,29" fill="#c0392b"/>`,
  points: [
    { x: 300, y: 80, de: 'das Werkzeug', en: 'tool' },
    { x: 80, y: 200, de: 'das Werkstück', en: 'workpiece' },
    { x: 128, y: 80, lx: 58, ly: 58, de: 'der Span', en: 'chip' },
    { x: 200, y: 95, lx: 158, ly: 36, de: 'die Spanfläche', en: 'rake face' },
    { x: 272, y: 136, lx: 305, ly: 180, de: 'die Freifläche', en: 'flank (clearance face)' },
    { x: 180, y: 150, lx: 150, ly: 185, de: 'die Schneide', en: 'cutting edge' },
    { x: 300, y: 22, de: 'die Schnittrichtung', en: 'cutting direction' },
    { x: 186, y: 102, lx: 200, ly: 62, de: 'der Spanwinkel', en: 'rake angle (γ)' },
    { x: 200, y: 132, lx: 232, ly: 112, de: 'der Keilwinkel', en: 'wedge angle (β)' },
    { x: 252, y: 145, lx: 262, ly: 205, de: 'der Freiwinkel', en: 'clearance angle (α)' },
  ],
};

FD.diagrams.absaugung = {
  title: 'Absauganlage', en: 'Dust & chip extraction system', viewBox: '0 0 360 240',
  svg: `
  <rect x="20" y="170" width="90" height="50" rx="3" fill="#b8c4cc" stroke="#56626b" stroke-width="1.5"/>
  <circle cx="65" cy="168" r="12" fill="#e4e8eb" stroke="#56626b"/>
  <path d="M52,152 L78,152 L72,140 L58,140 Z" fill="#56626b"/>
  <path d="M65,140 L65,74 Q65,60 79,60 L142,60" fill="none" stroke="#8d99a6" stroke-width="12" stroke-linejoin="round"/>
  <path d="M178,60 L240,60" fill="none" stroke="#8d99a6" stroke-width="12"/>
  <polygon points="104,54 116,60 104,66" fill="#fff"/>
  <polygon points="204,54 216,60 204,66" fill="#fff"/>
  <circle cx="160" cy="60" r="19" fill="#fff" stroke="#56626b" stroke-width="3"/>
  <g fill="#56626b">
    <path d="M160,60 L160,44 Q168,48 160,60Z"/><path d="M160,60 L174,68 Q166,74 160,60Z"/><path d="M160,60 L146,68 Q146,58 160,60Z"/>
  </g>
  <rect x="240" y="40" width="60" height="50" fill="#cfd8de" stroke="#56626b" stroke-width="1.5"/>
  <polygon points="240,90 300,90 278,160 262,160" fill="#cfd8de" stroke="#56626b" stroke-width="1.5"/>
  <path d="M270,40 L270,26 L312,26" fill="none" stroke="#8d99a6" stroke-width="10"/>
  <rect x="312" y="8" width="40" height="64" fill="#fff" stroke="#56626b" stroke-width="1.5"/>
  <path d="M316,16 L348,22 L316,28 L348,34 L316,40 L348,46 L316,52 L348,58 L316,64" fill="none" stroke="#9aa5ad"/>
  <g fill="#c9965f">${[[266, 166], [272, 170], [268, 174]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8"/>`).join('')}</g>
  <rect x="245" y="178" width="50" height="44" fill="#f0dfbd" stroke="#8a6a3a" stroke-width="1.5"/>
  <g fill="#c9965f">${[[254, 212], [262, 206], [272, 214], [282, 207], [288, 214], [258, 216], [278, 200]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="2"/>`).join('')}</g>`,
  points: [
    { x: 65, y: 146, lx: 22, ly: 130, de: 'die Absaugung', en: '(dust) extraction (hood)' },
    { x: 68, y: 64, lx: 34, ly: 44, de: 'der Krümmer', en: 'pipe bend (elbow)' },
    { x: 122, y: 60, de: 'die Rohrleitung', en: 'pipeline' },
    { x: 160, y: 60, lx: 160, ly: 104, de: 'der Ventilator', en: 'fan' },
    { x: 270, y: 75, de: 'der Zyklon', en: 'cyclone (separator)' },
    { x: 270, y: 200, de: 'die Späne', en: 'chips / shavings' },
    { x: 332, y: 46, de: 'der Filter', en: 'filter' },
  ],
};

FD.renderDiagram = function (d, opts = {}) {
  const { highlight = -1, numbered = true, picked = -1, states = {} } = opts;
  const marks = d.points.map((p, i) => {
    const mx = p.lx ?? p.x, my = p.ly ?? p.y;
    const cls = ['hot', i === highlight ? 'hl' : '', highlight >= 0 && i !== highlight ? 'dim' : '',
      i === picked ? 'picked' : '', states[i] || ''].join(' ');
    const line = (p.lx != null) ? `<line x1="${p.x}" y1="${p.y}" x2="${mx}" y2="${my}" class="leader"/><circle cx="${p.x}" cy="${p.y}" r="2.5" class="leader-dot"/>` : '';
    const label = highlight >= 0 ? (i === highlight ? '?' : '') : (numbered ? i + 1 : '');
    return `${line}<g class="${cls}" data-i="${i}" tabindex="0" role="button" aria-label="Markierung ${i + 1}">
      <circle cx="${mx}" cy="${my}" r="11.5"/><text x="${mx}" y="${my + 4.2}" text-anchor="middle">${label}</text></g>`;
  }).join('');
  return `<svg class="diagram" viewBox="${d.viewBox}" xmlns="http://www.w3.org/2000/svg">${d.svg}${marks}</svg>`;
};
