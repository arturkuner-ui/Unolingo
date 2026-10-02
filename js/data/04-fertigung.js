/* Fertigung: Maschinen & Zerspanung, Möbel & Konstruktion, Oberfläche & Kleben, Bauphysik & Holzbau */

FD.subject({
  id: 'maschinen', icon: '🔧', semester: 3, diagram: 'schneidkeil',
  title: 'Holzbearbeitungsmaschinen & Zerspanung', en: 'Woodworking machines & cutting theory',
  modules: 'HT36 Holzbearbeitungsmaschinen · HT23 Fertigungsverfahren',
  words: `
die Holzbearbeitungsmaschine = woodworking machine
die Zerspanung = machining (chip removal)
die Spanungslehre = cutting theory
das Werkzeug = tool
das Werkstück = workpiece
die Schneide = cutting edge
der Schneidkeil = cutting wedge
der Spanwinkel = rake angle
der Keilwinkel = wedge angle
der Freiwinkel = clearance angle
die Spanfläche = rake face
die Freifläche = flank (clearance face)
die Schnittrichtung = cutting direction
die Spandicke = chip thickness
die Schnittgeschwindigkeit = cutting speed
der Vorschub = feed
die Vorschubgeschwindigkeit = feed speed
der Zahnvorschub = feed per tooth
die Schnittkraft = cutting force
die Schnittleistung = cutting power
der Gleichlauf = climb cutting (down-milling)
der Gegenlauf = up-cutting (conventional milling)
die Vorspaltung = pre-splitting
der Schneidstoff = cutting material
der Schnellarbeitsstahl (HSS) = high-speed steel
das Hartmetall = carbide (hard metal)
der Diamant (PKD) = polycrystalline diamond
die Standzeit = tool life
das Schärfen = sharpening
die Schärfmaschine = sharpening machine
das Sägeblatt = saw blade
der Zahn = tooth
die Zahnteilung = tooth pitch
die Schränkung = (tooth) set
die Formatkreissäge = sliding table saw (panel saw)
die Plattenaufteilsäge = panel dividing (beam) saw
der Fräser = milling cutter
das Fräsen = milling
die Oberfräse = router
die Tischfräse = spindle moulder
die Kehlmaschine = moulder (four-sided planer)
die Abrichthobelmaschine = surface planer (jointer)
die Dickenhobelmaschine = thickness planer
das Bohren = drilling
der Bohrer = drill bit
das Schleifen = sanding / grinding
die Breitbandschleifmaschine = wide-belt sander
das Schleifband = sanding belt
die Körnung = grit
die Kantenanleimmaschine = edgebander
das CNC-Bearbeitungszentrum = CNC machining centre
die Spindel = spindle
das Aggregat = (machining) unit
das Spannmittel = clamping device
der Sauger = vacuum suction cup
der Anschlag = fence / stop
der Spaltkeil = riving knife
die Schutzhaube = guard (protective hood)
der Rückschlag = kickback
die Oberflächengüte = surface quality
der Messerschlag = cutter (knife) mark
der Ausriss = tear-out (chipping)
`,
  sentences: `
Der Spanwinkel beeinflusst die Schnittkraft und die Oberflächengüte. = The rake angle influences the cutting force and the surface quality.
Die Schnittgeschwindigkeit ergibt sich aus Durchmesser und Drehzahl. = The cutting speed results from diameter and rotational speed.
Je höher der Zahnvorschub, desto dicker werden die Späne. = The higher the feed per tooth, the thicker the chips.
Beim Gegenlauf wirkt die Schnittkraft gegen die Vorschubrichtung. = In up-cutting, the cutting force acts against the feed direction.
Beim Gleichlauf kann das Werkstück in die Maschine gezogen werden. = In climb cutting, the workpiece can be pulled into the machine.
Hartmetallwerkzeuge haben eine längere Standzeit als HSS-Werkzeuge. = Carbide tools have a longer tool life than HSS tools.
Ein stumpfes Werkzeug erhöht die Schnittkraft und verursacht Ausrisse. = A dull tool increases the cutting force and causes tear-out.
Diamantwerkzeuge werden für beschichtete Platten eingesetzt. = Diamond tools are used for coated panels.
Der Spaltkeil verhindert einen Rückschlag an der Kreissäge. = The riving knife prevents kickback on the circular saw.
Mit der Kehlmaschine werden Leisten an vier Seiten gehobelt. = With the moulder, strips are planed on four sides.
Beim Schleifen wird von grober zu feiner Körnung gearbeitet. = When sanding, you work from coarse to fine grit.
Die Kantenanleimmaschine klebt die Kante auf die Schmalfläche der Platte. = The edgebander glues the edging onto the narrow face of the panel.
Auf dem CNC-Bearbeitungszentrum werden die Teile mit Saugern gespannt. = On the CNC machining centre, the parts are clamped with suction cups.
`,
  lecture: {
    title: 'Der Schneidkeil',
    text: 'Jede Schneide eines Holzbearbeitungswerkzeugs hat die Form eines Keils. Der Spanwinkel liegt zwischen der Spanfläche und der Senkrechten zur Schnittrichtung. Der Keilwinkel beschreibt die Schärfe und die Stabilität der Schneide. Der Freiwinkel verhindert, dass die Freifläche am Werkstück reibt. Die Summe aus Spanwinkel, Keilwinkel und Freiwinkel beträgt immer neunzig Grad.',
    questions: [
      { q: 'Wie groß ist die Summe der drei Winkel?', o: ['90 Grad', '180 Grad', '45 Grad', '360 Grad'], a: 0 },
      { q: 'Wozu dient der Freiwinkel?', o: ['Er verhindert, dass die Freifläche am Werkstück reibt.', 'Er macht die Späne dicker.', 'Er erhöht die Drehzahl.', 'Er bestimmt die Körnung.'], a: 0 },
      { q: 'Was beschreibt der Keilwinkel?', o: ['Schärfe und Stabilität der Schneide', 'die Vorschubgeschwindigkeit', 'die Farbe des Werkzeugs', 'die Anzahl der Zähne'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'moebel', icon: '🪑', semester: 2, diagram: 'korpus',
  title: 'Möbelfertigung & Konstruktion', en: 'Furniture manufacturing, design & CAD',
  modules: 'HT23 Fertigungsverfahren Holz – Möbel · HT31 Produktentwicklung – CAD · HT41 Möbelkonstruktion',
  words: `
das Möbel = (piece of) furniture
der Korpus = carcass (cabinet body)
das Korpusmöbel = case furniture (cabinet)
die Seitenwand = side panel
der Oberboden = top panel
der Boden = bottom panel
die Rückwand = back panel
der Fachboden = shelf
der Einlegeboden = adjustable shelf
der Sockel = plinth / base
die Front = front
die Tür = door
die Schublade = drawer
die Vollauszugsführung = full-extension runner
der Beschlag = fitting (hardware)
das Topfband = concealed (cup) hinge
das Scharnier = hinge
der Griff = handle
der Verbinder = connector
der Exzenterverbinder = cam connector
der Dübel = dowel
die Dübelverbindung = dowel joint
die Lamelle = biscuit (flat dowel)
die Zinkung = dovetail joint
die Schlitz-und-Zapfen-Verbindung = mortise and tenon joint
die Nut = groove
Nut und Feder = tongue and groove
die Fuge = joint (gap)
die Gehrung = mitre
das Lochreihensystem = line-boring system (System 32)
die Lochreihe = row of holes
das Rastermaß = grid dimension
die Zusammenbauzeichnung = assembly drawing
die Einzelteilzeichnung = part drawing
die Stückliste = bill of materials (parts list)
die Erzeugnisgliederung = product structure
der Arbeitsplan = routing (work plan)
die Bemaßung = dimensioning
der Maßstab = scale
die Ansicht = view
der Schnitt = section (drawing)
das CAD-Modell = CAD model
die Baugruppe = assembly / subassembly
das Bauteil = component
der Zuschnitt = cutting to size
der Zuschnittplan = cutting plan
die Formatbearbeitung = sizing (format machining)
die Kantenbearbeitung = edge processing
die Montage = assembly
die Verpackung = packaging
die Losgröße = batch size
die Serienfertigung = series production
die Durchlauffertigung = through-feed (flow) production
die Werkstattfertigung = job-shop production
die Ergonomie = ergonomics
der Entwurf = design (draft)
das Lastenheft = requirements specification (customer)
das Pflichtenheft = functional specification (supplier)
die Möbelprüfung = furniture testing
die Dauerhaltbarkeit = durability (endurance)
die Standsicherheit = stability (against tipping)
der Leichtbau = lightweight construction
`,
  sentences: `
Der Korpus besteht aus zwei Seitenwänden, Oberboden, Boden und Rückwand. = The carcass consists of two side panels, top panel, bottom panel and back panel.
Die Rückwand steift den Korpus aus. = The back panel stiffens the carcass.
Die Löcher für die Beschläge liegen im 32-Millimeter-Raster. = The holes for the fittings are on a 32 millimetre grid.
Topfbänder ermöglichen eine verdeckte Befestigung der Tür. = Concealed hinges allow a hidden attachment of the door.
Die Schublade läuft auf einer Vollauszugsführung. = The drawer runs on a full-extension runner.
Die Gehrung wird im Winkel von 45 Grad geschnitten. = The mitre is cut at an angle of 45 degrees.
In der Zusammenbauzeichnung sind alle Bauteile dargestellt. = All components are shown in the assembly drawing.
Die Stückliste enthält alle Teile mit Maßen und Material. = The bill of materials contains all parts with dimensions and material.
Beim Zuschnitt werden die Platten in Rohteile aufgeteilt. = During cutting, the panels are divided into blanks.
Bei Losgröße 1 wird jedes Möbel individuell gefertigt. = With batch size one, each piece of furniture is made individually.
Das Pflichtenheft beschreibt, wie die Anforderungen umgesetzt werden. = The functional specification describes how the requirements will be implemented.
Hohe Schränke müssen gegen Kippen an der Wand befestigt werden. = Tall cabinets must be fixed to the wall to prevent tipping.
`,
  lecture: {
    title: 'Das System 32',
    text: 'Das System 32 ist ein Standard der industriellen Korpusmöbelfertigung. Alle Bohrungen in den Seitenwänden liegen in Lochreihen mit einem Abstand von zweiunddreißig Millimetern. Die vordere Lochreihe hat meist einen Abstand von siebenunddreißig Millimetern zur Vorderkante. So können Beschläge wie Topfbänder, Auszüge und Fachbodenträger flexibel montiert werden. Das System vereinfacht die Fertigung, weil die Bohrmaschinen mit festen Abständen arbeiten können.',
    questions: [
      { q: 'Wie groß ist der Abstand zwischen den Löchern?', o: ['32 mm', '37 mm', '25 mm', '64 mm'], a: 0 },
      { q: 'Welchen Abstand hat die vordere Lochreihe meist zur Vorderkante?', o: ['37 mm', '32 mm', '10 mm', '100 mm'], a: 0 },
      { q: 'Warum vereinfacht das System die Fertigung?', o: ['Die Bohrmaschinen arbeiten mit festen Abständen.', 'Man braucht keine Beschläge mehr.', 'Die Platten werden dünner.', 'Man muss nicht mehr schleifen.'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'oberflaeche', icon: '🎨', semester: 4,
  title: 'Oberflächentechnik, Kleben & Pressen', en: 'Surface finishing, bonding & pressing',
  modules: 'HT45 Oberflächentechnik – Kleb- und Presstechnik',
  words: `
die Oberflächentechnik = surface technology
die Oberflächenbehandlung = surface treatment
die Beschichtung = coating (layer)
der Lack = lacquer / varnish
die Lasur = glaze (translucent coating)
die Beize = (wood) stain
das Öl = oil
das Wachs = wax
die Grundierung = primer
der Decklack = topcoat
der Klarlack = clear lacquer
der Wasserlack = water-based lacquer
der UV-Lack = UV-curing lacquer
der Festkörpergehalt = solids content
die Auslaufzeit = flow time (viscosity cup)
der Auftrag = application (of coating)
die Auftragsmenge = application quantity
das Spritzen = spraying
die Spritzpistole = spray gun
das Walzen = roller coating
das Gießen = curtain coating (pouring)
die Spritzkabine = spray booth
der Overspray = overspray
die UV-Härtung = UV curing
der Zwischenschliff = intermediate sanding
das Polieren = polishing
der Glanzgrad = gloss level
matt = matt
hochglänzend = high-gloss
die Haftung = adhesion (of coating)
die Kratzfestigkeit = scratch resistance
die Schichtdicke = coating thickness
die Gitterschnittprüfung = cross-cut test
die Farbmessung = colour measurement
das Dekor = decor (decorative surface)
der Digitaldruck = digital printing
die Holzimitation = wood imitation
das Kleben = bonding / gluing
die Klebfuge = bond line (glue line)
die Adhäsion = adhesion (surface bonding)
die Kohäsion = cohesion
das Fügeteil = adherend (part being joined)
die Benetzung = wetting
die offene Wartezeit = open assembly time
die geschlossene Wartezeit = closed assembly time
der Pressdruck = pressing pressure
die Presszeit = pressing time
die Furnierpresse = veneer press
die Membranpresse = membrane press
die Breitflächenbeschichtung = face lamination
die Schmalflächenbeschichtung = edge coating
die Profilummantelung = profile wrapping
die Schichtpressstoffplatte (HPL) = high-pressure laminate
die Melaminharzbeschichtung = melamine coating
das technische Datenblatt = technical data sheet
der Dichtstoff = sealant
`,
  sentences: `
Vor dem Lackieren muss die Oberfläche staubfrei sein. = Before lacquering, the surface must be dust-free.
Die Beize färbt das Holz, ohne die Maserung zu verdecken. = The stain colours the wood without hiding the grain.
Nach der Grundierung folgt ein Zwischenschliff. = The primer is followed by an intermediate sanding.
UV-Lacke härten in wenigen Sekunden aus. = UV lacquers cure within a few seconds.
Wasserlacke enthalten weniger Lösungsmittel als konventionelle Lacke. = Water-based lacquers contain less solvent than conventional lacquers.
Der Glanzgrad wird mit einem Glanzmessgerät bestimmt. = The gloss level is determined with a gloss meter.
Mit der Gitterschnittprüfung wird die Haftung des Lacks geprüft. = The adhesion of the lacquer is tested with the cross-cut test.
Eine gute Benetzung ist die Voraussetzung für eine feste Verklebung. = Good wetting is the prerequisite for a strong bond.
Die Klebfuge sollte möglichst dünn sein. = The glue line should be as thin as possible.
Nach Ablauf der offenen Wartezeit hat der Klebstoff eine Haut gebildet. = After the open assembly time, the adhesive has formed a skin.
Die Presszeit hängt von Temperatur und Klebstoff ab. = The pressing time depends on temperature and adhesive.
In der Membranpresse werden dreidimensionale Fronten beschichtet. = Three-dimensional fronts are coated in the membrane press.
`,
  lecture: {
    title: 'Grundlagen des Klebens',
    text: 'Eine Klebung hält durch zwei Mechanismen: Adhäsion und Kohäsion. Adhäsion beschreibt die Haftung des Klebstoffs an der Oberfläche der Fügeteile. Kohäsion ist der innere Zusammenhalt des Klebstoffs selbst. Damit der Klebstoff gut haftet, muss er die Oberfläche vollständig benetzen. Deshalb sollten die Fügeteile sauber, trocken und frisch bearbeitet sein.',
    questions: [
      { q: 'Was beschreibt die Adhäsion?', o: ['die Haftung an der Oberfläche der Fügeteile', 'den inneren Zusammenhalt des Klebstoffs', 'die Farbe der Klebfuge', 'die Presszeit'], a: 0 },
      { q: 'Was ist Kohäsion?', o: ['der innere Zusammenhalt des Klebstoffs', 'die Haftung am Holz', 'das Trocknen des Lacks', 'eine Prüfmethode'], a: 0 },
      { q: 'Wie sollten die Fügeteile sein?', o: ['sauber, trocken und frisch bearbeitet', 'nass und warm', 'lackiert und poliert', 'möglichst rau und staubig'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'bauphysik', icon: '🏠', semester: 2, diagram: 'wand',
  title: 'Bauphysik, Holzbau & Bauelemente', en: 'Building physics, timber construction, windows & doors',
  modules: 'HT25 Grundlagen der Bauphysik · HT42 Holzbaukonstruktion, Bauelemente, Holzbaufertigung',
  words: `
die Bauphysik = building physics
der Wärmeschutz = thermal protection
die Wärmedämmung = thermal insulation
der Dämmstoff = insulating material
der Wärmedurchgangskoeffizient = thermal transmittance (U-value)
der Wärmedurchlasswiderstand = thermal resistance (R-value)
die Wärmebrücke = thermal bridge
der Feuchteschutz = moisture protection
das Tauwasser = condensate (condensation water)
die Dampfbremse = vapour retarder
die Dampfsperre = vapour barrier
diffusionsoffen = vapour-permeable
die Wasserdampfdiffusion = water vapour diffusion
die Luftdichtheit = airtightness
die Hinterlüftung = rear ventilation (ventilated cavity)
die Innenbekleidung = interior lining
die Holzfaserplatte = wood-fibre board
die Fassade = facade
der Schallschutz = sound insulation
der Trittschall = impact sound
der Luftschall = airborne sound
der Brandschutz = fire protection
die Feuerwiderstandsdauer = fire resistance duration
der Holzbau = timber construction
der Holzrahmenbau = timber frame construction
der Ständer = stud
die Schwelle = sill plate
das Rähm = top plate
die Beplankung = sheathing
der Dachstuhl = roof structure (roof truss)
der Sparren = rafter
die Pfette = purlin
die Decke = ceiling / floor slab
die Außenwand = exterior wall
die tragende Wand = load-bearing wall
die Vorfertigung = prefabrication
das Wandelement = wall element
der Abbund = timber joinery (cutting & framing)
die Abbundanlage = joinery machine (timber processing centre)
das Verbindungsmittel = fastener
der Nagel = nail
die Holzschraube = wood screw
der Stabdübel = (steel) dowel
das Fenster = window
der Blendrahmen = outer frame (window)
der Flügel = sash (casement)
die Verglasung = glazing
das Isolierglas = insulating glass
die Dreifachverglasung = triple glazing
der Dreh-Kipp-Beschlag = tilt-and-turn fitting
der Anschluss = connection (detail)
die Anschlussfuge = connection joint
die Fensterbank = window sill
der Wintergarten = conservatory
die Haustür = front door
die Innentür = interior door
die Zarge = door frame (casing)
das Türblatt = door leaf
der Innenausbau = interior finishing (fit-out)
die Treppe = staircase
`,
  sentences: `
Je kleiner der U-Wert, desto besser ist die Wärmedämmung. = The smaller the U-value, the better the thermal insulation.
An Wärmebrücken kann Tauwasser entstehen. = Condensate can form at thermal bridges.
Die Dampfbremse liegt auf der warmen Innenseite der Dämmung. = The vapour retarder is on the warm inner side of the insulation.
Die Hinterlüftung führt Feuchtigkeit aus der Fassade ab. = The rear ventilation removes moisture from the facade.
Trittschall entsteht beim Gehen auf der Decke. = Impact sound is created when walking on the floor.
Holz brennt, aber große Querschnitte behalten lange ihre Tragfähigkeit. = Wood burns, but large cross-sections retain their load-bearing capacity for a long time.
Im Holzrahmenbau werden die Wandelemente im Werk vorgefertigt. = In timber frame construction, the wall elements are prefabricated in the factory.
Die Sparren übertragen die Dachlasten auf die Pfetten. = The rafters transfer the roof loads to the purlins.
Die Abbundanlage fertigt alle Verbindungen automatisch. = The joinery machine produces all joints automatically.
Moderne Fenster haben eine Dreifachverglasung. = Modern windows have triple glazing.
Der Flügel ist über den Dreh-Kipp-Beschlag mit dem Blendrahmen verbunden. = The sash is connected to the outer frame via the tilt-and-turn fitting.
Der Anschluss zwischen Fenster und Wand muss innen luftdicht sein. = The connection between window and wall must be airtight on the inside.
`,
  lecture: {
    title: 'Die Außenwand im Holzrahmenbau',
    text: 'Eine typische Außenwand im Holzrahmenbau ist von innen nach außen so aufgebaut: Zuerst kommt die Innenbekleidung, zum Beispiel aus Gipsplatten. Dahinter liegt die Dampfbremse, die das Eindringen von Feuchtigkeit in die Konstruktion begrenzt. Zwischen den Ständern befindet sich die Wärmedämmung. Außen folgen eine diffusionsoffene Holzfaserplatte und eine hinterlüftete Fassade. Der Grundsatz lautet: innen dichter als außen.',
    questions: [
      { q: 'Wo liegt die Dampfbremse?', o: ['innen, hinter der Innenbekleidung', 'ganz außen an der Fassade', 'in der Hinterlüftung', 'unter dem Dach'], a: 0 },
      { q: 'Was befindet sich zwischen den Ständern?', o: ['die Wärmedämmung', 'die Fassade', 'die Dampfbremse', 'die Hinterlüftung'], a: 0 },
      { q: 'Wie lautet der Grundsatz?', o: ['innen dichter als außen', 'außen dichter als innen', 'überall gleich dicht', 'möglichst ohne Dämmung'], a: 0 },
    ],
  },
});
