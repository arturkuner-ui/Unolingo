/* Holz: Anatomie & Physik, Holzchemie & Polymere, Holzwerkstoffe, Sägewerk & Trocknung */

FD.subject({
  id: 'holzphysik', icon: '🌳', semester: 1, diagram: 'stamm',
  title: 'Holzanatomie & Holzphysik', en: 'Wood anatomy & wood physics',
  modules: 'HT11 Holzphysik und Holzanatomie',
  words: `
das Holz = wood
der Stamm = trunk
die Rinde = bark
der Bast = bast (inner bark)
das Kambium = cambium
das Splintholz = sapwood
das Kernholz = heartwood
das Mark = pith
der Jahrring = annual (growth) ring
das Frühholz = earlywood
das Spätholz = latewood
der Holzstrahl = wood ray
die Zelle = cell
die Zellwand = cell wall
die Faser = fibre
der Faserverlauf = grain direction
die Tracheide = tracheid
das Gefäß = vessel (pore)
das Nadelholz = softwood (conifer)
das Laubholz = hardwood (deciduous)
ringporig = ring-porous
zerstreutporig = diffuse-porous
der Harzkanal = resin canal
der Ast = knot (branch)
das Hirnholz = end grain
der Hirnschnitt = cross section (transverse)
der Radialschnitt = radial section
der Tangentialschnitt = tangential section
die Holzart = wood species
die Fichte = spruce
die Kiefer = pine
die Tanne = fir
die Lärche = larch
die Douglasie = Douglas fir
die Buche = beech
die Eiche = oak
die Esche = ash
der Ahorn = maple
die Birke = birch
der Nussbaum = walnut
die Rohdichte = (bulk) density of wood
die Darrdichte = oven-dry density
die Holzfeuchte = wood moisture content
die Ausgleichsfeuchte = equilibrium moisture content
der Fasersättigungspunkt = fibre saturation point
darrtrocken = oven-dry
hygroskopisch = hygroscopic
die Sorption = sorption
quellen = to swell
schwinden = to shrink
das Schwindmaß = shrinkage rate
anisotrop = anisotropic
das Arbeiten des Holzes = movement of wood (dimensional change)
der Verzug = warping / distortion
der Riss = crack / check
parallel zur Faser = parallel to the grain
quer zur Faser = perpendicular to the grain
die Wärmeleitfähigkeit = thermal conductivity
das Brandverhalten = fire behaviour
die Abbrandrate = charring rate
die Dauerhaftigkeit = durability
der Holzschädling = wood pest
der Pilz = fungus
die Bläue = blue stain
die Fäule = rot / decay
der Hausbock = house longhorn beetle
der Holzschutz = wood protection (preservation)
das Holzfeuchtemessgerät = wood moisture meter
die Darrmethode = oven-dry method
`,
  sentences: `
Das Kambium bildet nach innen Holz und nach außen Bast. = The cambium forms wood towards the inside and bast towards the outside.
Ein Jahrring besteht aus Frühholz und Spätholz. = An annual ring consists of earlywood and latewood.
Nadelhölzer bestehen hauptsächlich aus Tracheiden. = Softwoods consist mainly of tracheids.
Eiche ist ein ringporiges Laubholz. = Oak is a ring-porous hardwood.
Fichte ist die wichtigste Holzart in Deutschland. = Spruce is the most important wood species in Germany.
Das Kernholz der Eiche ist dauerhafter als das Splintholz. = The heartwood of oak is more durable than the sapwood.
Holz ist hygroskopisch und nimmt Feuchtigkeit aus der Luft auf. = Wood is hygroscopic and absorbs moisture from the air.
Die Holzfeuchte wird auf die Darrmasse bezogen. = The wood moisture content is based on the oven-dry mass.
Die Ausgleichsfeuchte hängt von Temperatur und relativer Luftfeuchte ab. = The equilibrium moisture content depends on temperature and relative humidity.
Unterhalb des Fasersättigungspunkts quillt und schwindet das Holz. = Below the fibre saturation point, wood swells and shrinks.
Tangential schwindet Holz etwa doppelt so stark wie radial. = Wood shrinks about twice as much tangentially as radially.
In Längsrichtung ist das Schwinden vernachlässigbar. = Shrinkage in the longitudinal direction is negligible.
Äste verringern die Festigkeit des Holzes. = Knots reduce the strength of the wood.
Pilze benötigen eine Holzfeuchte von über zwanzig Prozent. = Fungi need a wood moisture content of over twenty percent.
`,
  lecture: {
    title: 'Holz und Wasser',
    text: 'Holz ist ein hygroskopischer Werkstoff. Das bedeutet, es nimmt Wasser aus der Umgebungsluft auf oder gibt es ab, bis es die Ausgleichsfeuchte erreicht. Die Holzfeuchte wird in Prozent bezogen auf die Darrmasse angegeben. Unterhalb des Fasersättigungspunkts, der bei etwa dreißig Prozent liegt, führt jede Feuchteänderung zu Quellen oder Schwinden. Weil Holz anisotrop ist, sind die Maßänderungen in tangentialer Richtung am größten und in Faserrichtung am kleinsten.',
    questions: [
      { q: 'Worauf bezieht man die Holzfeuchte?', o: ['auf die Darrmasse', 'auf das Volumen', 'auf die Nassmasse', 'auf die Temperatur'], a: 0 },
      { q: 'Wo liegt der Fasersättigungspunkt ungefähr?', o: ['bei 30 %', 'bei 10 %', 'bei 60 %', 'bei 100 %'], a: 0 },
      { q: 'In welcher Richtung schwindet Holz am stärksten?', o: ['tangential', 'radial', 'in Faserrichtung', 'in alle Richtungen gleich'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'holzchemie', icon: '🧬', semester: 2,
  title: 'Holzchemie & Polymere', en: 'Wood chemistry, plastics & adhesives',
  modules: 'HT21 Holzchemie und Polymere',
  words: `
die Cellulose = cellulose
die Hemicellulosen (Pl.) = hemicelluloses
das Lignin = lignin
die Extraktstoffe (Pl.) = extractives
die Glucose = glucose
die Mikrofibrille = microfibril
der Polymerisationsgrad = degree of polymerisation
der Gerbstoff = tannin
das Harz = resin
der Zellstoff = (chemical) pulp
die Bioraffinerie = biorefinery
die Holzmodifizierung = wood modification
das Thermoholz = thermally modified wood
die Acetylierung = acetylation
die Beständigkeit = resistance (chemical)
die Verfärbung = discolouration
die UV-Strahlung = UV radiation
vergrauen = to turn grey (weathering)
die Emission = emission
die Prüfkammer = test chamber
die Essigsäure = acetic acid
der Kunststoff = plastic
der Thermoplast = thermoplastic
der Duroplast = thermoset
das Elastomer = elastomer
die Glasübergangstemperatur = glass transition temperature
der Schmelzpunkt = melting point
das Polyethylen (PE) = polyethylene
das Polypropylen (PP) = polypropylene
das Polyvinylchlorid (PVC) = polyvinyl chloride
das Polyurethan (PUR) = polyurethane
das Epoxidharz = epoxy resin
das Acrylglas = acrylic glass (PMMA)
der Füllstoff = filler
der Weichmacher = plasticiser
das Additiv = additive
das Spritzgießen = injection moulding
das Extrudieren = extrusion
das Tiefziehen = thermoforming
der Verbundwerkstoff = composite material
das Holz-Polymer-Komposit (WPC) = wood-plastic composite
das Harnstoff-Formaldehyd-Harz (UF) = urea-formaldehyde resin
das Melamin-Harnstoff-Formaldehyd-Harz (MUF) = melamine-urea-formaldehyde resin
das Phenol-Formaldehyd-Harz (PF) = phenol-formaldehyde resin
das Isocyanat (PMDI) = isocyanate binder (pMDI)
der Weißleim (PVAc) = white glue (PVAc)
der Schmelzklebstoff = hot-melt adhesive
der Klebstoff = adhesive
die Aushärtung = curing
der Härter = hardener
die Topfzeit = pot life
die Infrarotspektroskopie = infrared spectroscopy
die Probe = sample / specimen
die Analyse = analysis
`,
  sentences: `
Holz besteht hauptsächlich aus Cellulose, Hemicellulosen und Lignin. = Wood consists mainly of cellulose, hemicelluloses and lignin.
Lignin wirkt wie ein Kittstoff zwischen den Fasern. = Lignin acts like a binding agent between the fibres.
Eichenholz enthält viele Gerbstoffe. = Oak wood contains many tannins.
Unter UV-Strahlung wird das Lignin abgebaut und das Holz vergraut. = Under UV radiation, the lignin is degraded and the wood turns grey.
Thermoholz ist dauerhafter, aber weniger fest als unbehandeltes Holz. = Thermally modified wood is more durable but less strong than untreated wood.
Die Emissionen aus Holzwerkstoffen werden in einer Prüfkammer gemessen. = Emissions from wood-based materials are measured in a test chamber.
Thermoplaste werden beim Erwärmen weich und können neu geformt werden. = Thermoplastics soften when heated and can be reshaped.
Duroplaste sind nach der Aushärtung nicht mehr schmelzbar. = Thermosets can no longer be melted after curing.
Weichmacher machen PVC flexibel. = Plasticisers make PVC flexible.
Kunststoffprofile werden durch Extrudieren hergestellt. = Plastic profiles are produced by extrusion.
Für Spanplatten wird häufig Harnstoff-Formaldehyd-Harz verwendet. = Urea-formaldehyde resin is often used for particleboard.
Nach Ablauf der Topfzeit ist der Klebstoff nicht mehr verarbeitbar. = After the pot life has expired, the adhesive can no longer be processed.
`,
  lecture: {
    title: 'Die drei Hauptbestandteile des Holzes',
    text: 'Holz besteht zu etwa vierzig bis fünfzig Prozent aus Cellulose. Die langen Cellulosemoleküle bilden Mikrofibrillen und geben dem Holz seine Zugfestigkeit. Die Hemicellulosen sind kürzere, verzweigte Moleküle. Das Lignin füllt die Räume zwischen den Fibrillen und verleiht dem Holz Druckfestigkeit. Dazu kommen Extraktstoffe wie Harze und Gerbstoffe, die Farbe, Geruch und Dauerhaftigkeit beeinflussen.',
    questions: [
      { q: 'Welcher Bestandteil hat den größten Anteil?', o: ['Cellulose', 'Lignin', 'Hemicellulosen', 'Extraktstoffe'], a: 0 },
      { q: 'Was verleiht das Lignin dem Holz?', o: ['Druckfestigkeit', 'seinen Geruch', 'seine Farbe', 'Elastizität bei Nässe'], a: 0 },
      { q: 'Was beeinflussen Extraktstoffe?', o: ['Farbe, Geruch und Dauerhaftigkeit', 'nur die Zugfestigkeit', 'die Länge der Fasern', 'die Anzahl der Jahrringe'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'holzwerkstoffe', icon: '🪵', semester: 2,
  title: 'Holzwerkstoffe & Holzwirtschaft', en: 'Wood-based panels & the timber economy',
  modules: 'HT22 Holzwirtschaft und Holzwerkstoffe · HT63 Holzwerkstofftechnik',
  words: `
der Holzwerkstoff = wood-based material (panel)
die Platte = panel / board
das Sperrholz = plywood
die Tischlerplatte = blockboard
die Spanplatte = particleboard (chipboard)
die Faserplatte = fibreboard
die mitteldichte Faserplatte (MDF) = medium-density fibreboard
die hochdichte Faserplatte (HDF) = high-density fibreboard
die OSB-Platte = oriented strand board
die Holzfaserdämmplatte = wood-fibre insulation board
die Leichtbauplatte = lightweight board
die Wabenmittellage = honeycomb core
die Mittellage = core layer
die Deckschicht = surface layer
der Span = chip / particle
die Holzfaser = wood fibre
die Hackschnitzel (Pl.) = wood chips (chipped wood)
das Furnier = veneer
das Schälfurnier = rotary-cut veneer
das Messerfurnier = sliced veneer
das Massivholz = solid wood
das Brettschichtholz (BSH) = glued laminated timber (glulam)
das Brettsperrholz (BSP) = cross-laminated timber (CLT)
das Konstruktionsvollholz (KVH) = structural finger-jointed solid timber
die Keilzinkung = finger joint
die Lamelle = lamella (lamination)
das Bindemittel = binder
die Beleimung = resin application (gluing)
der Leim = glue
die Heißpresse = hot press
die kontinuierliche Presse = continuous press
die Taktpresse = batch (cyclic) press
die Streumaschine = forming (spreading) machine
die Matte = (formed) mat
das Rohdichteprofil = density profile
die Querzugfestigkeit = internal bond strength
die Dickenquellung = thickness swelling
die Formaldehydemission = formaldehyde emission
die Emissionsklasse = emission class
die Nutzungsklasse = service class
der Rohstoff = raw material
das Rundholz = roundwood (logs)
das Sägerestholz = sawmill residues
das Altholz = waste (recovered) wood
die Kaskadennutzung = cascading use
das Pellet = pellet
die Holzwirtschaft = timber industry / wood economy
die Forstwirtschaft = forestry
die Nachhaltigkeit = sustainability
der Holzeinschlag = timber harvest (felling)
der Holzvorrat = growing stock
das Zertifikat = certificate
der Artenschutz = species protection
der Holzhandel = timber trade
das Tropenholz = tropical wood
die Handelsbezeichnung = trade name
der Bambus = bamboo
das Stroh = straw
die Holzartenbestimmung = wood species identification
die Lupe = magnifying glass
`,
  sentences: `
Spanplatten bestehen aus einer Mittellage und zwei Deckschichten. = Particleboards consist of a core layer and two surface layers.
Die Deckschichten haben eine höhere Rohdichte als die Mittellage. = The surface layers have a higher density than the core layer.
MDF lässt sich sehr gut fräsen und lackieren. = MDF can be milled and lacquered very well.
Schälfurnier wird für die Herstellung von Sperrholz verwendet. = Rotary-cut veneer is used to produce plywood.
Brettsperrholz besteht aus kreuzweise verklebten Brettlagen. = Cross-laminated timber consists of board layers glued crosswise.
Die Keilzinkung verbindet kurze Holzstücke zu langen Lamellen. = Finger jointing connects short pieces of wood into long lamellas.
Die Querzugfestigkeit beschreibt den Zusammenhalt der Platte. = The internal bond strength describes the cohesion of the board.
Die Dickenquellung wird nach 24 Stunden Wasserlagerung gemessen. = Thickness swelling is measured after 24 hours of water immersion.
Sägerestholz ist ein wichtiger Rohstoff für die Spanplattenindustrie. = Sawmill residues are an important raw material for the particleboard industry.
Bei der Kaskadennutzung wird Holz zuerst stofflich und erst am Ende energetisch genutzt. = In cascading use, wood is first used as a material and only at the end for energy.
In der nachhaltigen Forstwirtschaft wird nicht mehr Holz geerntet als nachwächst. = In sustainable forestry, no more wood is harvested than grows back.
Mit der Lupe kann man die Holzart am Hirnschnitt bestimmen. = With a magnifying glass you can identify the wood species on the cross section.
`,
  lecture: {
    title: 'Wie entsteht eine Spanplatte?',
    text: 'Zuerst wird das Holz zu Spänen zerkleinert und getrocknet. Danach werden die Späne sortiert: feine Späne für die Deckschichten, gröbere Späne für die Mittellage. In der Beleimung werden die Späne mit Bindemittel versehen. Die Streumaschine formt daraus eine Matte, die in einer Heißpresse unter Druck und Temperatur ausgehärtet wird. Zum Schluss wird die Platte gekühlt, geschliffen und auf Format gesägt.',
    questions: [
      { q: 'Welche Späne kommen in die Deckschichten?', o: ['feine Späne', 'grobe Späne', 'nasse Späne', 'unbeleimte Späne'], a: 0 },
      { q: 'Wo wird die Matte ausgehärtet?', o: ['in der Heißpresse', 'in der Streumaschine', 'im Trockner', 'in der Schleifmaschine'], a: 0 },
      { q: 'Was passiert ganz am Ende?', o: ['Kühlen, Schleifen und Sägen auf Format', 'Beleimen und Streuen', 'Zerkleinern und Trocknen', 'Sortieren der Späne'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'massivholz', icon: '🪚', semester: 3,
  title: 'Sägewerk, Massivholz & Holztrocknung', en: 'Sawmilling, solid wood processing & drying',
  modules: 'HT32 Massivholzverarbeitung und Holztrocknung',
  words: `
das Sägewerk = sawmill
der Rundholzplatz = log yard
die Entrindung = debarking
die Rundholzvermessung = log scanning / measurement
der Einschnitt = (log) breakdown / sawing
das Schnittbild = sawing pattern
das Schnittholz = sawn timber
das Brett = board
die Bohle = plank (thick board)
die Latte = batten / lath
das Kantholz = squared timber
das Seitenbrett = side board
die Ausbeute = yield
die Gattersäge = frame (gang) saw
die Bandsäge = band saw
die Kreissäge = circular saw
die Besäumung = edging
die Kappsäge = cross-cut saw
die Sortierung = grading / sorting
die Festigkeitssortierung = strength grading
die Festigkeitsklasse = strength class
die Waldkante = wane
der Drehwuchs = spiral grain
der Endriss = end check
die Schüsselung = cupping
die Holztrocknung = wood drying
die Freilufttrocknung = air drying
die Trockenkammer = drying kiln
die Frischluft-Ablufttrocknung = conventional kiln drying
die Vakuumtrocknung = vacuum drying
die Kondensationstrocknung = condensation (dehumidification) drying
die Hochtemperaturtrocknung = high-temperature drying
der Trocknungsplan = drying schedule
die Trocknungszeit = drying time
das Trocknungsgefälle = drying gradient
die Darrprobe = oven-dry sample
das Trocknungsprotokoll = drying record
die Anfangsfeuchte = initial moisture content
die Endfeuchte = final moisture content
die Feuchteverteilung = moisture distribution
die Verschalung = case hardening
die Trocknungsspannung = drying stress
der Innenriss = internal check (honeycombing)
die Konditionierung = conditioning
der Stapel = stack
die Stapelleiste = sticker (stacking stick)
die Luftgeschwindigkeit = air velocity
die Befeuchtung = humidification
das Dämpfen = steaming
die Nasslagerung = wet storage (sprinkling)
das Hobeln = planing
die Hobelware = planed timber
die Massivholzplatte = solid wood panel
die Keilzinkenanlage = finger-jointing line
die Fehlstelle = defect
das Kappen = cross-cutting
die Fehlerkappung = defect cutting
der Scanner = scanner
die Optimierung = optimisation
`,
  sentences: `
Vor dem Einschnitt wird das Rundholz entrindet und vermessen. = Before sawing, the roundwood is debarked and measured.
Das Schnittbild bestimmt die Ausbeute an Schnittholz. = The sawing pattern determines the yield of sawn timber.
Eine Waldkante ist bei Sichtholz meist nicht zulässig. = Wane is usually not permitted for visible timber.
Brettschichtholz wird aus festigkeitssortierten Lamellen hergestellt. = Glulam is made from strength-graded lamellas.
Beim Stapeln werden Stapelleisten zwischen die Bretter gelegt. = When stacking, stickers are placed between the boards.
Eine zu schnelle Trocknung führt zu Rissen. = Drying too quickly leads to cracks.
Der Trocknungsplan legt Temperatur und Luftfeuchte für jede Phase fest. = The drying schedule sets the temperature and humidity for each phase.
Mit Darrproben wird die Feuchte während der Trocknung kontrolliert. = Oven-dry samples are used to check the moisture during drying.
Bei der Vakuumtrocknung siedet das Wasser schon bei niedrigen Temperaturen. = In vacuum drying, water boils even at low temperatures.
Buchenholz wird gedämpft, um eine gleichmäßige Farbe zu erhalten. = Beech wood is steamed to obtain a uniform colour.
Die Endfeuchte für Möbelholz liegt bei etwa acht bis zehn Prozent. = The final moisture content for furniture wood is about eight to ten percent.
Beim Kappen werden Fehlstellen wie Äste und Risse herausgeschnitten. = During cross-cutting, defects such as knots and cracks are cut out.
`,
  lecture: {
    title: 'Trocknen in der Kammer',
    text: 'Die meisten Sägewerke trocknen ihr Schnittholz in Frischluft-Ablufttrocknern. Ventilatoren bewegen warme Luft durch den Stapel. Die Luft nimmt Feuchtigkeit aus dem Holz auf und wird teilweise durch Frischluft ersetzt. Zu Beginn ist die Luftfeuchte hoch, damit das Holz außen nicht zu schnell trocknet. Am Ende folgt eine Konditionierung, um Trocknungsspannungen abzubauen.',
    questions: [
      { q: 'Wodurch wird die Luft durch den Stapel bewegt?', o: ['durch Ventilatoren', 'durch Pumpen', 'durch Wind', 'durch Vakuum'], a: 0 },
      { q: 'Warum ist die Luftfeuchte zu Beginn hoch?', o: ['damit das Holz außen nicht zu schnell trocknet', 'damit das Holz schneller trocknet', 'um Energie zu sparen', 'damit Pilze absterben'], a: 0 },
      { q: 'Wozu dient die Konditionierung?', o: ['um Trocknungsspannungen abzubauen', 'um das Holz zu färben', 'um das Holz zu entrinden', 'um die Rohdichte zu erhöhen'], a: 0 },
    ],
  },
});
