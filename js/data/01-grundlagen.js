/* Grundlagen: Studium, Fachsprache, Mathematik, Physik */

FD.subject({
  id: 'studium', icon: '🎓', semester: 0,
  title: 'Studium & Hochschule', en: 'University life & study organisation',
  modules: 'SPO Holztechnik 2023 · Studienplan · Prüfungsordnung',
  words: `
die Hochschule = university (of applied sciences)
die Fakultät = faculty
der Studiengang = degree programme
das Semester = semester
die Vorlesung = lecture
der Hörsaal = lecture hall
die Übung = tutorial / exercise class
das Praktikum = lab course / internship
das Seminar = seminar
das Labor = laboratory
die Prüfung = exam
die Klausur = written exam
die mündliche Prüfung = oral exam
die Zulassungsvoraussetzung = admission requirement
das Testat = lab certificate (attestation)
der Leistungspunkt = credit point (ECTS)
die Semesterwochenstunde = weekly contact hour (SWS)
das Modul = module
das Pflichtmodul = compulsory module
das Wahlpflichtmodul = required elective module
das Modulhandbuch = module handbook
der Studienplan = study plan (curriculum)
der Stundenplan = timetable
die Vorpraxis = pre-study internship
das Praxissemester = practical (internship) semester
der Praxisbericht = internship report
die Bachelorarbeit = bachelor's thesis
der Dozent = lecturer
die Professorin = professor (female)
die Sprechstunde = office hours
das Skript = lecture notes (script)
die Unterlagen (Pl.) = documents / course materials
die Mitschrift = (own) lecture notes
die Hausarbeit = term paper
die Abgabe = submission
die Frist = deadline / time limit
der Abgabetermin = submission date
sich anmelden = to register
sich einschreiben = to enrol
die Immatrikulation = enrolment
die Rückmeldung = re-registration (for next semester)
der Studierendenausweis = student ID card
die Mensa = university canteen
die Bibliothek = library
die Lerngruppe = study group
die Präsenzzeit = contact time (in class)
das Selbststudium = self-study
die Wiederholungsprüfung = resit exam
bestehen = to pass
durchfallen = to fail
die Note = grade
die Gesamtnote = overall grade
der Notendurchschnitt = grade point average
die Exkursion = field trip / excursion
die Projektarbeit = project work
das Referat = (oral) presentation / report
die Gruppenarbeit = group work
der Taschenrechner = calculator
die Formelsammlung = formula collection
das Hilfsmittel = (permitted) aid / resource
das Prüfungsamt = examinations office
die Fachschaft = student council (of a faculty)
die Studienberatung = academic advising
die Regelstudienzeit = standard period of study
der Abschluss = degree / qualification
die Anwesenheitspflicht = compulsory attendance
`,
  sentences: `
Die Vorlesung findet im Hörsaal statt. = The lecture takes place in the lecture hall.
Für die Klausur ist nur ein Taschenrechner erlaubt. = Only a calculator is permitted for the exam.
Das Praktikum ist eine Zulassungsvoraussetzung für die Prüfung. = The lab course is an admission requirement for the exam.
Jedes Modul bringt fünf Leistungspunkte. = Each module is worth five credit points.
Ich muss mich bis Freitag zur Prüfung anmelden. = I have to register for the exam by Friday.
Das Skript steht auf der Lernplattform zur Verfügung. = The lecture notes are available on the learning platform.
Die Vorpraxis dauert mindestens zehn Wochen. = The pre-study internship lasts at least ten weeks.
Das Praxissemester findet im fünften Semester statt. = The practical semester takes place in the fifth semester.
In der Sprechstunde kann man Fragen zur Klausur stellen. = In office hours you can ask questions about the exam.
Der Abgabetermin für die Projektarbeit ist verbindlich. = The deadline for the project work is binding.
Wir bilden eine Lerngruppe für Mathematik. = We are forming a study group for mathematics.
Wer die Prüfung nicht besteht, kann sie wiederholen. = Anyone who does not pass the exam can retake it.
Die Regelstudienzeit beträgt sieben Semester. = The standard period of study is seven semesters.
Die Bachelorarbeit muss innerhalb von fünf Monaten abgegeben werden. = The bachelor's thesis must be submitted within five months.
`,
  lecture: {
    title: 'Willkommen in Rosenheim',
    text: 'Herzlich willkommen im Studiengang Holztechnik. Das Studium dauert sieben Semester und schließt mit dem Bachelor of Engineering ab. Im fünften Semester absolvieren Sie das praktische Studiensemester in einem Betrieb. Vor dem Studium, spätestens aber bis zum Ende des dritten Semesters, müssen Sie eine Vorpraxis von zehn Wochen nachweisen. Fast jedes Modul schließt mit einer schriftlichen Prüfung ab. Für einige Prüfungen müssen Sie vorher ein Praktikum mit Erfolg ablegen.',
    questions: [
      { q: 'Wie lange dauert die Vorpraxis?', o: ['zehn Wochen', 'fünf Monate', 'ein Semester', 'drei Wochen'], a: 0 },
      { q: 'In welchem Semester ist das praktische Studiensemester?', o: ['im fünften', 'im ersten', 'im siebten', 'im dritten'], a: 0 },
      { q: 'Was ist für manche Prüfungen Voraussetzung?', o: ['ein erfolgreich abgelegtes Praktikum', 'eine mündliche Prüfung', 'die Bachelorarbeit', 'ein Auslandssemester'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'fachsprache', icon: '🧩', semester: 0,
  title: 'Fachsprache: Verben & Wendungen', en: 'Technical language: verbs, phrases & grammar',
  modules: 'Grundlage für alle Module · Passiv, Nominalstil, Partizipien',
  words: `
berechnen = to calculate
ermitteln = to determine (find out)
bestimmen = to determine / to define
nachweisen = to verify / to prove
der Nachweis = verification / proof
auslegen = to design / to dimension (a component)
die Auslegung = design (dimensioning)
bemessen = to dimension / to size
die Bemessung = dimensioning / structural design
beanspruchen = to stress / to load
die Beanspruchung = stress / loading
einwirken = to act on
die Einwirkung = action (load effect)
herstellen = to manufacture / to produce
die Herstellung = manufacture / production
verarbeiten = to process
die Verarbeitung = processing
bearbeiten = to machine / to work (a material)
fertigen = to fabricate / to manufacture
die Fertigung = manufacturing / production
messen = to measure
die Messung = measurement
der Messwert = measured value
erfassen = to record / to capture (data)
auswerten = to evaluate / to analyse (data)
die Auswertung = evaluation / analysis
darstellen = to represent / to depict
die Darstellung = representation / diagram
vergleichen = to compare
beurteilen = to assess / to judge
bewerten = to evaluate / to rate
optimieren = to optimise
gewährleisten = to ensure / to guarantee
voraussetzen = to presuppose / to require
die Voraussetzung = prerequisite / requirement
berücksichtigen = to take into account
vernachlässigen = to neglect
vernachlässigbar = negligible
zur Verfügung stehen = to be available
in Betracht ziehen = to consider
in Kauf nehmen = to accept (a drawback)
zur Anwendung kommen = to be applied / used
eine Rolle spielen = to play a role
abhängen von = to depend on
in Abhängigkeit von = as a function of / depending on
bezogen auf = relative to / based on
im Verhältnis zu = in proportion to
infolge = as a result of
aufgrund = due to
mithilfe = by means of / with the help of
hinsichtlich = with regard to
bzw. (beziehungsweise) = or / respectively
d. h. (das heißt) = i.e. (that is)
z. B. (zum Beispiel) = e.g. (for example)
u. a. (unter anderem) = among other things
ggf. (gegebenenfalls) = if applicable / if necessary
vgl. (vergleiche) = cf. (compare)
die Annahme = assumption
die Vereinfachung = simplification
die Randbedingung = boundary condition
der Kennwert = characteristic value / parameter
die Kenngröße = characteristic quantity
der Grenzwert = limit value
die Näherung = approximation
näherungsweise = approximately
zulässig = permissible
erforderlich = required / necessary
maßgebend = decisive / governing
erfolgen = to take place / to be carried out
`,
  sentences: `
Die Kräfte werden mithilfe der Gleichgewichtsbedingungen berechnet. = The forces are calculated using the equilibrium conditions.
Der Träger wird auf Biegung beansprucht. = The beam is loaded in bending.
Die Messwerte werden erfasst und anschließend ausgewertet. = The measured values are recorded and then evaluated.
Die Ergebnisse sind in Abbildung 3 dargestellt. = The results are shown in Figure 3.
Der Einfluss der Holzfeuchte darf nicht vernachlässigt werden. = The influence of wood moisture must not be neglected.
Die Festigkeit hängt von der Rohdichte ab. = The strength depends on the density.
Bei der Bemessung sind alle Einwirkungen zu berücksichtigen. = All actions must be taken into account in the design.
Für die Herstellung stehen zwei Verfahren zur Verfügung. = Two processes are available for production.
Hinsichtlich der Kosten ist Variante B günstiger. = With regard to costs, option B is cheaper.
Aufgrund der hohen Feuchte quillt das Holz. = Due to the high moisture, the wood swells.
Unter dieser Annahme kann die Reibung vernachlässigt werden. = Under this assumption, friction can be neglected.
Der Nachweis ist erfüllt, wenn die Spannung kleiner als der zulässige Wert ist. = The verification is satisfied if the stress is lower than the permissible value.
Die Verformung nimmt in Abhängigkeit von der Last zu. = The deformation increases as a function of the load.
Die Prüfung erfolgt nach der geltenden Norm. = The test is carried out according to the applicable standard.
`,
  quiz: [
    { q: 'Passiv: „Man berechnet die Auflagerkräfte.“', o: ['Die Auflagerkräfte werden berechnet.', 'Die Auflagerkräfte wird berechnet.', 'Die Auflagerkräfte haben berechnet.', 'Die Auflagerkräfte werden berechnen.'], a: 0, ex: 'Vorgangspassiv = werden + Partizip II. Das Subjekt steht im Plural → „werden“.' },
    { q: 'Passiv: „Man trocknet das Holz in der Kammer.“', o: ['Das Holz wird in der Kammer getrocknet.', 'Das Holz ist in der Kammer trocknen.', 'Das Holz wird in der Kammer trocknet.', 'Das Holz werden in der Kammer getrocknet.'], a: 0, ex: 'werden (3. Person Singular: wird) + Partizip II (getrocknet).' },
    { q: 'Nominalstil: „Wenn man das Holz trocknet, entstehen Spannungen.“', o: ['Bei der Trocknung des Holzes entstehen Spannungen.', 'Bei dem Trocknen das Holz entstehen Spannungen.', 'Mit der Trocknung dem Holz entstehen Spannungen.', 'Zur Trocknung das Holzes entstehen Spannungen.'], a: 0, ex: 'wenn-Satz → „bei + Dativ“; das Objekt wird zum Genitivattribut: des Holzes.' },
    { q: 'Partizipialattribut: „die Platten, die im Werk hergestellt werden“', o: ['die im Werk hergestellten Platten', 'die im Werk herstellenden Platten', 'die hergestellt im Werk Platten', 'die im Werk hergestellte Platten'], a: 0, ex: 'Passiver Relativsatz → Partizip II als Attribut vor dem Nomen, mit Adjektivendung (-en).' },
    { q: 'Was bedeutet „die zunehmende Belastung“?', o: ['the increasing load', 'the increased load', 'the load to be increased', 'the reduced load'], a: 0, ex: 'Partizip I (zunehmend) = aktiv & gleichzeitig: „-ing“.' },
    { q: 'Was bedeutet „die zu prüfende Probe“?', o: ['the sample to be tested', 'the tested sample', 'the testing sample', 'the sample that tests'], a: 0, ex: 'zu + Partizip I = Gerundivum: etwas, das gemacht werden muss/soll.' },
    { q: '„Die Lasten sind zu berücksichtigen.“ bedeutet …', o: ['Die Lasten müssen berücksichtigt werden.', 'Die Lasten wurden berücksichtigt.', 'Die Lasten sind zu groß.', 'Die Lasten können nicht berücksichtigt werden.'], a: 0, ex: 'sein + zu + Infinitiv = Notwendigkeit im Passiv (müssen … werden).' },
    { q: '„MDF lässt sich gut fräsen.“ bedeutet …', o: ['MDF kann gut gefräst werden.', 'MDF muss gefräst werden.', 'MDF fräst gut.', 'MDF wurde gefräst.'], a: 0, ex: 'sich lassen + Infinitiv = Passiv mit „können“.' },
    { q: '„Das Verfahren kommt zur Anwendung.“ bedeutet …', o: ['Das Verfahren wird angewendet.', 'Das Verfahren kommt an.', 'Das Verfahren wird abgeschafft.', 'Das Verfahren wird entwickelt.'], a: 0, ex: 'Funktionsverbgefüge: zur Anwendung kommen = angewendet werden.' },
    { q: 'Ergänze: „die Berechnung ___ Biegemoments“', o: ['des', 'dem', 'der', 'den'], a: 0, ex: 'Genitivattribut: das Biegemoment → des Biegemoments.' },
    { q: 'Ergänze: „Infolge ___ hohen Feuchte quillt das Holz.“', o: ['der', 'die', 'dem', 'den'], a: 0, ex: '„infolge“ steht mit Genitiv: die Feuchte → der Feuchte.' },
    { q: 'Ergänze: „Das Holz quillt, ___ es Feuchtigkeit aufnimmt.“', o: ['weil', 'obwohl', 'damit', 'trotzdem'], a: 0, ex: 'Grund → weil (Verb am Satzende).' },
    { q: 'Ergänze: „Je höher die Temperatur, ___ schneller trocknet das Holz.“', o: ['desto', 'als', 'so dass', 'wie'], a: 0, ex: 'je + Komparativ …, desto + Komparativ …' },
    { q: 'Was bedeutet „Die Platte ist beschichtet.“?', o: ['The panel is coated (state).', 'The panel is being coated right now.', 'The panel will be coated.', 'The panel coats.'], a: 0, ex: 'sein + Partizip II = Zustandspassiv (Ergebnis), werden + Partizip II = Vorgangspassiv (Prozess).' },
    { q: 'Ergänze: „Das Verfahren, ___ die Platten hergestellt werden, ist neu.“', o: ['mit dem', 'mit der', 'dem mit', 'mit den'], a: 0, ex: 'Präposition + Relativpronomen; das Verfahren → mit dem.' },
    { q: '„Nach Abschluss der Prüfung …“ als Nebensatz:', o: ['Nachdem die Prüfung abgeschlossen ist, …', 'Wenn die Prüfung abschließen, …', 'Weil die Prüfung abgeschlossen hat, …', 'Obwohl die Prüfung abgeschlossen ist, …'], a: 0, ex: 'nach + Nomen ↔ nachdem + Verb.' },
    { q: 'Welchen Artikel hat „Holzwerkstoffplatte“?', o: ['die', 'der', 'das'], a: 0, ex: 'Das letzte Wort (Grundwort) bestimmt den Artikel: die Platte → die Holzwerkstoffplatte.' },
    { q: '„Die Prüfung erfolgt nach DIN EN 310.“ bedeutet …', o: ['The test is carried out according to DIN EN 310.', 'The test follows after DIN EN 310.', 'The test was successful.', 'The test replaces DIN EN 310.'], a: 0, ex: '„erfolgen“ ersetzt im Fachtext oft „gemacht/durchgeführt werden“.' },
  ],
  lecture: {
    title: 'Wie Fachtexte gebaut sind',
    text: 'In technischen Texten wird sehr häufig das Passiv verwendet. Statt „Wir berechnen die Kraft“ schreibt man „Die Kraft wird berechnet“. Außerdem werden viele Verben in Nomen umgewandelt: Aus „berechnen“ wird „die Berechnung“. Typisch sind auch Partizipialattribute, zum Beispiel „die im Werk hergestellten Platten“. Wer diese Strukturen erkennt, versteht Fachtexte deutlich schneller.',
    questions: [
      { q: 'Welche Verbform ist in Fachtexten besonders häufig?', o: ['das Passiv', 'der Imperativ', 'das Futur II', 'der Konjunktiv II'], a: 0 },
      { q: 'Wie lautet das Nomen zu „berechnen“?', o: ['die Berechnung', 'das Berechnis', 'der Berechner', 'die Berechnheit'], a: 0 },
      { q: 'Was bedeutet „die im Werk hergestellten Platten“?', o: ['the panels produced in the factory', 'the panels that produce the factory', 'the factory for panels', 'the panels being sent to the factory'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'mathe', icon: '📐', semester: 1,
  title: 'Ingenieurmathematik', en: 'Engineering mathematics',
  modules: 'HT14 Ingenieurmathematik 1 · HT24 Ingenieurmathematik 2',
  words: `
die Gleichung = equation
die Ungleichung = inequality
die Unbekannte = unknown
der Bruch = fraction
der Zähler = numerator
der Nenner = denominator
der Kehrwert = reciprocal
die Klammer = bracket / parenthesis
das Vorzeichen = sign (plus/minus)
die Potenz = power
der Exponent = exponent
die Wurzel = root
die Quadratwurzel = square root
der Logarithmus = logarithm
mal = times (multiplied by)
geteilt durch = divided by
hoch zwei = squared (to the power of two)
proportional = proportional
umgekehrt proportional = inversely proportional
die Funktion = function
der Definitionsbereich = domain
der Wertebereich = range
die Umkehrfunktion = inverse function
der Graph = graph
die Steigung = slope / gradient
die Nullstelle = zero (root of a function)
der Grenzwert = limit
die Stetigkeit = continuity
die Folge = sequence
die Reihe = series
die Ableitung = derivative
ableiten = to differentiate
die Differentialrechnung = differential calculus
das Integral = integral
integrieren = to integrate
das bestimmte Integral = definite integral
die Stammfunktion = antiderivative
der Rotationskörper = solid of revolution
das Taylorpolynom = Taylor polynomial
der Extremwert = extreme value
der Wendepunkt = point of inflection
die Krümmung = curvature
der Vektor = vector
das Skalarprodukt = dot product
das Kreuzprodukt = cross product
der Betrag = magnitude / absolute value
die Gerade = straight line
die Ebene = plane
die Matrix = matrix
die Determinante = determinant
das lineare Gleichungssystem = system of linear equations
die Gaußelimination = Gaussian elimination
die komplexe Zahl = complex number
der Realteil = real part
der Imaginärteil = imaginary part
die Differentialgleichung = differential equation
die Trennung der Variablen = separation of variables
die partielle Ableitung = partial derivative
der Gradient = gradient (vector)
das Doppelintegral = double integral
der Winkel = angle
der rechte Winkel = right angle
das Bogenmaß = radian measure
der Durchmesser = diameter
der Radius = radius
der Flächeninhalt = area
das Volumen = volume
der Mittelwert = mean / average
die Standardabweichung = standard deviation
`,
  sentences: `
Der Nenner darf nicht null sein. = The denominator must not be zero.
Die Funktion hat zwei Nullstellen. = The function has two zeros.
Die Steigung der Geraden beträgt zwei. = The slope of the straight line is two.
Der Druck ist umgekehrt proportional zum Volumen. = The pressure is inversely proportional to the volume.
Die Folge konvergiert gegen den Grenzwert eins. = The sequence converges to the limit one.
Die Ableitung einer Konstanten ist null. = The derivative of a constant is zero.
Die Fläche unter der Kurve wird mit dem bestimmten Integral berechnet. = The area under the curve is calculated with the definite integral.
Am Wendepunkt ändert sich die Krümmung. = The curvature changes at the point of inflection.
Das Skalarprodukt zweier senkrechter Vektoren ist null. = The dot product of two perpendicular vectors is zero.
Das lineare Gleichungssystem wird mit der Gaußelimination gelöst. = The system of linear equations is solved using Gaussian elimination.
Eine komplexe Zahl besteht aus Realteil und Imaginärteil. = A complex number consists of a real part and an imaginary part.
Die Differentialgleichung wird durch Trennung der Variablen gelöst. = The differential equation is solved by separation of variables.
Der Mittelwert der Messwerte beträgt 12,4 Millimeter. = The mean of the measured values is 12.4 millimetres.
`,
  lecture: {
    title: 'Formeln laut lesen',
    text: 'In der Vorlesung werden Formeln laut vorgelesen. F gleich m mal a bedeutet: Kraft ist Masse mal Beschleunigung. x hoch zwei liest man auch als x Quadrat. Einen Bruch liest man als Zähler durch Nenner, zum Beispiel a durch b. Die Ableitung von f schreibt man als f Strich von x.',
    questions: [
      { q: 'Wie kann man x² noch lesen?', o: ['x Quadrat', 'x Wurzel', 'x Strich', 'x durch zwei'], a: 0 },
      { q: 'Was ist „f Strich von x“?', o: ['die Ableitung von f', 'das Integral von f', 'der Kehrwert von f', 'die Umkehrfunktion von f'], a: 0 },
      { q: 'Was steht unter dem Bruchstrich?', o: ['der Nenner', 'der Zähler', 'der Exponent', 'die Klammer'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'physik', icon: '⚛️', semester: 1,
  title: 'Physik: Mechanik & Wärmelehre', en: 'Physics: mechanics & thermodynamics',
  modules: 'HT15 Physik',
  words: `
die physikalische Größe = physical quantity
die Einheit = unit
die Masse = mass
die Kraft = force
die Gewichtskraft = weight (force)
die Beschleunigung = acceleration
die Geschwindigkeit = velocity / speed
die Fallbeschleunigung = gravitational acceleration
die Strecke = distance
die Bewegung = motion
gleichförmig = uniform
die Kinematik = kinematics
die Trägheit = inertia
das Trägheitsmoment = moment of inertia
der Impuls = momentum
der Drehimpuls = angular momentum
das Drehmoment = torque
die Winkelgeschwindigkeit = angular velocity
die Drehzahl = rotational speed (rpm)
die Arbeit = work
die Energie = energy
die kinetische Energie = kinetic energy
die potentielle Energie = potential energy
die Leistung = power
der Wirkungsgrad = efficiency
die Reibung = friction
der Reibungskoeffizient = coefficient of friction
die Schwingung = oscillation / vibration
die Frequenz = frequency
die Amplitude = amplitude
die Periodendauer = period (of oscillation)
die Resonanz = resonance
die Dämpfung = damping
die Feder = spring
die Federkonstante = spring constant
die Welle = wave
die Wellenlänge = wavelength
der Schall = sound
die Temperatur = temperature
die Wärme = heat
die Wärmekapazität = heat capacity
die spezifische Wärmekapazität = specific heat capacity
die Wärmeausdehnung = thermal expansion
der Ausdehnungskoeffizient = coefficient of expansion
das ideale Gas = ideal gas
der Druck = pressure
die Zustandsänderung = change of state
isotherm = isothermal
adiabat = adiabatic
der Hauptsatz der Thermodynamik = law of thermodynamics
der Kreisprozess = thermodynamic cycle
die Entropie = entropy
die Phasenumwandlung = phase transition
schmelzen = to melt
verdampfen = to evaporate
kondensieren = to condense
der Wasserdampf = water vapour
die relative Luftfeuchte = relative humidity
der Taupunkt = dew point
die Messunsicherheit = measurement uncertainty
der Versuch = experiment
der Versuchsaufbau = experimental setup
die Hydrostatik = hydrostatics
der Auftrieb = buoyancy
die Dichte = density
`,
  sentences: `
Kraft ist gleich Masse mal Beschleunigung. = Force equals mass times acceleration.
Die Gewichtskraft wirkt senkrecht nach unten. = The weight force acts vertically downward.
Das Drehmoment ist das Produkt aus Kraft und Hebelarm. = Torque is the product of force and lever arm.
Die Drehzahl wird in Umdrehungen pro Minute angegeben. = The rotational speed is given in revolutions per minute.
Durch Reibung wird ein Teil der Energie in Wärme umgewandelt. = Through friction, part of the energy is converted into heat.
Der Wirkungsgrad ist das Verhältnis von Nutzleistung zu zugeführter Leistung. = Efficiency is the ratio of useful power to input power.
Bei Resonanz wird die Amplitude der Schwingung sehr groß. = At resonance, the amplitude of the oscillation becomes very large.
Die Energie bleibt in einem abgeschlossenen System erhalten. = Energy is conserved in a closed system.
Bei einer isothermen Zustandsänderung bleibt die Temperatur konstant. = In an isothermal change of state, the temperature remains constant.
Warme Luft kann mehr Wasserdampf aufnehmen als kalte Luft. = Warm air can absorb more water vapour than cold air.
Wird der Taupunkt unterschritten, kondensiert Wasser. = If the temperature falls below the dew point, water condenses.
Die Messunsicherheit muss bei der Auswertung angegeben werden. = The measurement uncertainty must be stated in the evaluation.
Der Auftrieb entspricht der Gewichtskraft der verdrängten Flüssigkeit. = The buoyancy equals the weight of the displaced liquid.
`,
  lecture: {
    title: 'Der Energieerhaltungssatz',
    text: 'Der Energieerhaltungssatz ist eines der wichtigsten Gesetze der Physik. Energie kann weder erzeugt noch vernichtet werden, sondern nur von einer Form in eine andere umgewandelt werden. Ein fallender Körper wandelt potentielle Energie in kinetische Energie um. Bei realen Maschinen geht ein Teil der Energie durch Reibung als Wärme verloren. Deshalb ist der Wirkungsgrad immer kleiner als eins.',
    questions: [
      { q: 'Was passiert laut Energieerhaltungssatz mit Energie?', o: ['Sie wird nur umgewandelt.', 'Sie wird ständig neu erzeugt.', 'Sie wird bei Bewegung vernichtet.', 'Sie verschwindet bei Kälte.'], a: 0 },
      { q: 'Was wandelt ein fallender Körper um?', o: ['potentielle in kinetische Energie', 'kinetische in elektrische Energie', 'Wärme in potentielle Energie', 'Masse in Kraft'], a: 0 },
      { q: 'Warum ist der Wirkungsgrad kleiner als eins?', o: ['wegen Verlusten durch Reibung', 'weil die Masse zu groß ist', 'weil Energie erzeugt wird', 'wegen der Fallbeschleunigung'], a: 0 },
    ],
  },
});
