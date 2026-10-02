/* Technische Grundlagen: Statik, Strömung & Energie, Metalle & Maschinenelemente, Chemie */

FD.subject({
  id: 'statik', icon: '🏗️', semester: 1, diagram: 'traeger',
  title: 'Statik & Festigkeitslehre', en: 'Statics & strength of materials',
  modules: 'HT12 Baustatik und Festigkeitslehre',
  words: `
die Statik = statics
die Festigkeitslehre = strength of materials
das Tragwerk = load-bearing structure
der Träger = beam / girder
der Balken = (timber) beam / joist
die Stütze = column
der Stab = bar / member
das Fachwerk = truss
der Knoten = node / joint
das Auflager = support
das Festlager = pinned (fixed) support
das Loslager = roller (movable) support
die Einspannung = fixed end (clamped support)
die Auflagerkraft = support reaction
die Last = load
die Einzellast = point load
die Streckenlast = distributed (line) load
das Eigengewicht = self-weight / dead load
die Schneelast = snow load
die Windlast = wind load
die Spannweite = span
die Feldmitte = mid-span
das Gleichgewicht = equilibrium
die Gleichgewichtsbedingung = equilibrium condition
das Moment = moment
das Biegemoment = bending moment
die Querkraft = shear force
die Normalkraft = normal (axial) force
die Schnittgröße = internal force
das Schnittprinzip = method of sections
der Hebelarm = lever arm
statisch bestimmt = statically determinate
statisch unbestimmt = statically indeterminate
die Spannung = stress
die Normalspannung = normal stress
die Biegespannung = bending stress
die Schubspannung = shear stress
die Druckspannung = compressive stress
die Zugspannung = tensile stress
die Dehnung = strain
der Elastizitätsmodul = modulus of elasticity
die Festigkeit = strength
die Zugfestigkeit = tensile strength
die Druckfestigkeit = compressive strength
die Biegefestigkeit = bending strength
die Querschnittsfläche = cross-sectional area
das Flächenträgheitsmoment = second moment of area
das Widerstandsmoment = section modulus
der Schwerpunkt = centre of gravity / centroid
die neutrale Faser = neutral axis
die Verformung = deformation
die Durchbiegung = deflection
die Biegelinie = deflection curve
die Steifigkeit = stiffness
das Knicken = buckling
die Knicklänge = buckling length
die Stabilität = stability
das Kippen = lateral torsional buckling (tipping)
die Torsion = torsion
der Sicherheitsbeiwert = safety factor
die Tragfähigkeit = load-bearing capacity
die Gebrauchstauglichkeit = serviceability
der Lastfall = load case
der Kragarm = cantilever
der Einfeldträger = single-span beam
der Durchlaufträger = continuous beam
das Kraftgrößenverfahren = force method
`,
  sentences: `
Das Festlager nimmt horizontale und vertikale Kräfte auf. = The pinned support takes up horizontal and vertical forces.
Das Loslager kann nur vertikale Kräfte übertragen. = The roller support can only transfer vertical forces.
Die Summe aller Momente um einen Punkt muss null sein. = The sum of all moments about a point must be zero.
Mit dem Schnittprinzip werden die Schnittgrößen ermittelt. = The internal forces are determined using the method of sections.
Das maximale Biegemoment tritt in Feldmitte auf. = The maximum bending moment occurs at mid-span.
Die Biegespannung ist an der neutralen Faser null. = The bending stress is zero at the neutral axis.
Holz hat parallel zur Faser eine hohe Zugfestigkeit. = Wood has a high tensile strength parallel to the grain.
Ein höheres Flächenträgheitsmoment verringert die Durchbiegung. = A higher second moment of area reduces the deflection.
Die Durchbiegung darf den zulässigen Grenzwert nicht überschreiten. = The deflection must not exceed the permissible limit.
Lange, schlanke Stützen können knicken. = Long, slender columns can buckle.
Die Stäbe eines Fachwerks werden nur durch Normalkräfte beansprucht. = The members of a truss are loaded only by normal forces.
Beim Kragarm tritt das größte Moment an der Einspannung auf. = In a cantilever, the largest moment occurs at the fixed end.
Der Einfeldträger ist statisch bestimmt gelagert. = The single-span beam is supported in a statically determinate way.
`,
  lecture: {
    title: 'Der Einfeldträger',
    text: 'Ein Einfeldträger liegt auf zwei Auflagern: einem Festlager und einem Loslager. Wirkt in der Feldmitte eine Einzellast F, nimmt jedes Auflager die Hälfte der Last auf. Das größte Biegemoment entsteht in Feldmitte und beträgt F mal l durch vier. Die Biegespannung ist am oberen und unteren Rand am größten und an der neutralen Faser gleich null. Oben entsteht Druckspannung, unten Zugspannung.',
    questions: [
      { q: 'Wie groß ist jede Auflagerkraft?', o: ['F/2', 'F', 'F/4', '2F'], a: 0 },
      { q: 'Wo ist die Biegespannung null?', o: ['an der neutralen Faser', 'am oberen Rand', 'am Loslager', 'am unteren Rand'], a: 0 },
      { q: 'Welche Spannung entsteht an der Unterseite des Trägers?', o: ['Zugspannung', 'Druckspannung', 'keine Spannung', 'nur Schubspannung'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'stroemung', icon: '🌊', semester: 3, diagram: 'absaugung',
  title: 'Strömungslehre & Energietechnik', en: 'Fluid mechanics & energy engineering',
  modules: 'HT15 Physik (Hydrodynamik) · HT35 Nachhaltige Energie- und Gebäudetechnik',
  words: `
die Strömung = flow
die Strömungslehre = fluid mechanics
das Fluid = fluid
die Flüssigkeit = liquid
die Strömungsgeschwindigkeit = flow velocity
der Volumenstrom = volume flow rate
der Massenstrom = mass flow rate
die Kontinuitätsgleichung = continuity equation
die Bernoulli-Gleichung = Bernoulli equation
der statische Druck = static pressure
der dynamische Druck = dynamic pressure
der Gesamtdruck = total pressure
der Überdruck = overpressure (gauge pressure)
der Unterdruck = negative pressure (vacuum)
die Viskosität = viscosity
zähflüssig = viscous
laminar = laminar
turbulent = turbulent
die Reynolds-Zahl = Reynolds number
der Strömungswiderstand = flow resistance / drag
der Druckverlust = pressure loss
die Rohrleitung = pipeline
der Querschnitt = cross-section
die Rohrreibungszahl = pipe friction factor
der Krümmer = pipe bend (elbow)
das Ventil = valve
die Klappe = damper / flap
die Pumpe = pump
der Ventilator = fan
der Verdichter = compressor
die Förderhöhe = delivery head (pump head)
die Kennlinie = characteristic curve
der Betriebspunkt = operating point
die Druckluft = compressed air
das Druckluftnetz = compressed-air network
die Leckage = leakage
die Absaugung = (dust) extraction
die Absauganlage = extraction system
der Abscheider = separator
der Zyklon = cyclone (separator)
der Filter = filter
der Staub = dust
die Späne (Pl.) = chips / shavings
der Wärmeübergang = heat transfer (convective)
die Wärmeleitung = heat conduction
die Konvektion = convection
die Wärmestrahlung = thermal radiation
der Wärmetauscher = heat exchanger
die Feuerungsanlage = combustion plant
der Brennstoff = fuel
der Heizwert = (net) calorific value
die Verbrennung = combustion
die Energieform = form of energy
die Energiebilanz = energy balance
die Massenbilanz = mass balance
der Energieverbrauch = energy consumption
die Abwärme = waste heat
die Wärmerückgewinnung = heat recovery
die Kraft-Wärme-Kopplung = combined heat and power (CHP)
die Wärmepumpe = heat pump
die Photovoltaik = photovoltaics
die Gebäudetechnik = building services engineering
die Lüftung = ventilation
die Klimaanlage = air-conditioning system
`,
  sentences: `
In einem engeren Querschnitt nimmt die Strömungsgeschwindigkeit zu. = In a narrower cross-section, the flow velocity increases.
Der Volumenstrom ist das Produkt aus Geschwindigkeit und Querschnittsfläche. = The volume flow rate is the product of velocity and cross-sectional area.
Nach Bernoulli sinkt der statische Druck, wenn die Geschwindigkeit steigt. = According to Bernoulli, the static pressure decreases when the velocity increases.
Honig ist zähflüssiger als Wasser, er hat eine höhere Viskosität. = Honey is more viscous than water; it has a higher viscosity.
Bei hohen Reynolds-Zahlen ist die Strömung turbulent. = At high Reynolds numbers, the flow is turbulent.
Der Druckverlust steigt mit der Länge der Rohrleitung. = The pressure loss increases with the length of the pipeline.
Der Betriebspunkt liegt im Schnittpunkt von Anlagen- und Pumpenkennlinie. = The operating point lies at the intersection of the system curve and the pump curve.
Leckagen im Druckluftnetz verursachen hohe Energiekosten. = Leaks in the compressed-air network cause high energy costs.
Die Absauganlage muss Staub und Späne zuverlässig erfassen. = The extraction system must reliably capture dust and chips.
Im Zyklon werden die Späne von der Luft getrennt. = In the cyclone, the chips are separated from the air.
Die Holzreste werden in der Feuerungsanlage energetisch verwertet. = The wood residues are used for energy in the combustion plant.
Ein Wärmetauscher überträgt Wärme von einem Fluid auf ein anderes. = A heat exchanger transfers heat from one fluid to another.
Die Abwärme der Verdichter kann zum Heizen genutzt werden. = The waste heat from the compressors can be used for heating.
`,
  lecture: {
    title: 'Absaugung in der Holzindustrie',
    text: 'In jedem holzverarbeitenden Betrieb entstehen große Mengen an Spänen und Staub. Eine Absauganlage erfasst diese Stoffe direkt an der Maschine. Ein Ventilator erzeugt den nötigen Unterdruck in den Rohrleitungen. Damit die Späne nicht liegen bleiben, muss die Luftgeschwindigkeit hoch genug sein, typischerweise etwa zwanzig bis dreißig Meter pro Sekunde. Im Abscheider werden die Späne von der Luft getrennt und anschließend oft in einer Feuerungsanlage verwertet.',
    questions: [
      { q: 'Was erzeugt den Unterdruck in den Rohrleitungen?', o: ['der Ventilator', 'der Zyklon', 'die Feuerungsanlage', 'der Filter'], a: 0 },
      { q: 'Warum muss die Luftgeschwindigkeit hoch genug sein?', o: ['damit die Späne nicht liegen bleiben', 'damit die Luft warm bleibt', 'damit der Filter sauber bleibt', 'damit die Maschine schneller läuft'], a: 0 },
      { q: 'Was passiert oft mit den abgeschiedenen Spänen?', o: ['Sie werden energetisch verwertet.', 'Sie werden in den Wald gebracht.', 'Sie werden wieder an die Maschine geleitet.', 'Sie werden mit Wasser gelöscht.'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'metall', icon: '⚙️', semester: 1,
  title: 'Metalle & Maschinenelemente', en: 'Metallic materials & machine elements',
  modules: 'HT16 Metallische Werkstoffe und Maschinenelemente · HT26 Maschinenkunde',
  words: `
der Werkstoff = material
der Stahl = steel
das Gusseisen = cast iron
das Roheisen = pig iron
das Nichteisenmetall = non-ferrous metal
das Aluminium = aluminium
das Kupfer = copper
die Legierung = alloy
der Kohlenstoffgehalt = carbon content
das Eisen-Kohlenstoff-Diagramm = iron-carbon diagram
das Gefüge = microstructure
die Korrosion = corrosion
rosten = to rust
verzinkt = galvanised
nichtrostender Stahl = stainless steel
die Wärmebehandlung = heat treatment
das Härten = hardening
das Anlassen = tempering
das Vergüten = quenching and tempering
das Glühen = annealing
das Schweißen = welding
das Löten = soldering / brazing
die Härte = hardness
die Kerbwirkung = notch effect
die Dauerfestigkeit = fatigue strength (endurance limit)
die Toleranz = tolerance
die Passung = fit
die Spielpassung = clearance fit
die Übermaßpassung = interference fit
die Oberflächenrauheit = surface roughness
die technische Zeichnung = technical drawing
das Maschinenelement = machine element
die Schraube = screw / bolt
die Mutter = nut
die Unterlegscheibe = washer
das Gewinde = thread
die Vorspannkraft = preload force
der Stift = pin
der Bolzen = bolt / pin
der Niet = rivet
die Passfeder = parallel key
die Nabe = hub
die Welle = shaft
die Achse = axle
das Lager = bearing
das Wälzlager = rolling bearing
das Kugellager = ball bearing
das Gleitlager = plain bearing
die Dichtung = seal / gasket
die Druckfeder = compression spring
das Getriebe = gearbox / transmission
das Zahnrad = gear (wheel)
die Übersetzung = gear ratio
der Riementrieb = belt drive
der Zahnriemen = toothed belt
die Kette = chain
die Kupplung = coupling / clutch
die Bremse = brake
der Motor = motor
das Maschinengestell = machine frame
der Kugelgewindetrieb = ball screw drive
die Linearführung = linear guide
die Unwucht = imbalance
auswuchten = to balance
der Verschleiß = wear
die Schmierung = lubrication
das Schmiermittel = lubricant
`,
  sentences: `
Stahl ist eine Legierung aus Eisen und Kohlenstoff. = Steel is an alloy of iron and carbon.
Verzinkte Schrauben sind vor Korrosion geschützt. = Galvanised screws are protected against corrosion.
Durch Härten wird der Stahl härter, aber auch spröder. = Hardening makes steel harder but also more brittle.
Kerben verringern die Dauerfestigkeit eines Bauteils. = Notches reduce the fatigue strength of a component.
Bei einer Spielpassung ist die Bohrung größer als die Welle. = With a clearance fit, the bore is larger than the shaft.
Die Schraube wird mit einer definierten Vorspannkraft angezogen. = The bolt is tightened with a defined preload force.
Die Passfeder überträgt das Drehmoment von der Welle auf die Nabe. = The parallel key transmits the torque from the shaft to the hub.
Wälzlager haben eine geringere Reibung als Gleitlager. = Rolling bearings have lower friction than plain bearings.
Das Getriebe reduziert die Drehzahl des Motors. = The gearbox reduces the rotational speed of the motor.
Der Zahnriemen arbeitet ohne Schlupf. = The toothed belt works without slip.
Werkzeuge mit Unwucht müssen ausgewuchtet werden. = Tools with imbalance must be balanced.
Eine gute Schmierung verringert den Verschleiß. = Good lubrication reduces wear.
`,
  lecture: {
    title: 'Lager in Holzbearbeitungsmaschinen',
    text: 'Die Spindeln von Holzbearbeitungsmaschinen drehen oft mit mehr als zehntausend Umdrehungen pro Minute. Deshalb werden fast immer Wälzlager eingesetzt, meistens Kugellager. Sie haben eine geringe Reibung und lassen sich einfach austauschen. Wichtig sind eine gute Schmierung und eine Abdichtung gegen Staub. Eine Unwucht im Werkzeug führt zu Schwingungen und verkürzt die Lebensdauer der Lager.',
    questions: [
      { q: 'Welche Lager werden meistens eingesetzt?', o: ['Kugellager', 'Gleitlager', 'Magnetlager', 'Holzlager'], a: 0 },
      { q: 'Wogegen müssen die Lager abgedichtet werden?', o: ['gegen Staub', 'gegen Licht', 'gegen Strom', 'gegen Lärm'], a: 0 },
      { q: 'Was verursacht eine Unwucht im Werkzeug?', o: ['Schwingungen', 'eine bessere Oberfläche', 'weniger Verschleiß', 'eine höhere Drehzahl'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'chemie', icon: '🧪', semester: 1,
  title: 'Chemie', en: 'Chemistry basics',
  modules: 'HT13 Grundlagen Chemie',
  words: `
das Atom = atom
das Molekül = molecule
das Element = element
die Verbindung = (chemical) compound
das Periodensystem = periodic table
das Elektron = electron
der Atomkern = atomic nucleus
die chemische Bindung = chemical bond
die Ionenbindung = ionic bond
die Atombindung = covalent bond
die Wasserstoffbrückenbindung = hydrogen bond
das Ion = ion
die Reaktion = reaction
die Reaktionsgleichung = chemical equation
der Stoff = substance
das Gemisch = mixture
die Lösung = solution
das Lösungsmittel = solvent
löslich = soluble
die Säure = acid
die Base = base
der pH-Wert = pH value
die Oxidation = oxidation
die Reduktion = reduction
der Sauerstoff = oxygen
der Wasserstoff = hydrogen
der Kohlenstoff = carbon
der Stickstoff = nitrogen
das Kohlendioxid = carbon dioxide
die organische Chemie = organic chemistry
der Kohlenwasserstoff = hydrocarbon
das Alkan = alkane
das Alken = alkene
das Alkin = alkyne
der Aromat = aromatic compound
die funktionelle Gruppe = functional group
der Alkohol = alcohol
der Formaldehyd = formaldehyde
die Carbonsäure = carboxylic acid
der Ester = ester
das Polymer = polymer
das Monomer = monomer
die Polymerisation = polymerisation
die Polykondensation = polycondensation
die Polyaddition = polyaddition
der Katalysator = catalyst
exotherm = exothermic
endotherm = endothermic
die Konzentration = concentration
die Stoffmenge = amount of substance
die molare Masse = molar mass
der Gefahrstoff = hazardous substance
das Sicherheitsdatenblatt = safety data sheet
das Gefahrenpiktogramm = hazard pictogram
entzündlich = flammable
ätzend = corrosive
giftig = toxic
die Schutzbrille = safety goggles
der Abzug = fume hood
`,
  sentences: `
Wasser ist eine Verbindung aus Wasserstoff und Sauerstoff. = Water is a compound of hydrogen and oxygen.
Säuren haben einen pH-Wert kleiner als sieben. = Acids have a pH value below seven.
Bei einer exothermen Reaktion wird Wärme frei. = In an exothermic reaction, heat is released.
Bei der Verbrennung von Holz entsteht Kohlendioxid. = Burning wood produces carbon dioxide.
Alkane enthalten nur Einfachbindungen. = Alkanes contain only single bonds.
Polymere entstehen durch die Verknüpfung vieler Monomere. = Polymers are formed by linking many monomers.
Bei der Polykondensation wird Wasser abgespalten. = In polycondensation, water is split off.
Formaldehyd ist ein Bestandteil vieler Klebstoffe. = Formaldehyde is a component of many adhesives.
Ein Katalysator beschleunigt die Reaktion, ohne selbst verbraucht zu werden. = A catalyst speeds up the reaction without being consumed itself.
Lösungsmittel müssen unter dem Abzug verwendet werden. = Solvents must be used under the fume hood.
Im Sicherheitsdatenblatt stehen die Gefahren eines Stoffes. = The safety data sheet lists the hazards of a substance.
Im Labor ist eine Schutzbrille Pflicht. = Safety goggles are mandatory in the lab.
`,
  lecture: {
    title: 'Polymere',
    text: 'Kunststoffe und viele Klebstoffe bestehen aus Polymeren. Ein Polymer ist ein großes Molekül, das aus vielen kleinen Bausteinen, den Monomeren, aufgebaut ist. Es gibt drei wichtige Reaktionstypen: die Polymerisation, die Polykondensation und die Polyaddition. Bei der Polykondensation wird ein kleines Molekül, oft Wasser, abgespalten. Harnstoff-Formaldehyd-Harze, die in Spanplatten verwendet werden, entstehen durch Polykondensation.',
    questions: [
      { q: 'Woraus ist ein Polymer aufgebaut?', o: ['aus vielen Monomeren', 'aus einem einzigen Atom', 'aus Ionen und Säuren', 'aus Wasser und Salz'], a: 0 },
      { q: 'Was wird bei der Polykondensation oft abgespalten?', o: ['Wasser', 'Sauerstoff', 'Kohlenstoff', 'Stickstoff'], a: 0 },
      { q: 'Wie entstehen Harnstoff-Formaldehyd-Harze?', o: ['durch Polykondensation', 'durch Polyaddition', 'durch Destillation', 'durch Oxidation'], a: 0 },
    ],
  },
});
