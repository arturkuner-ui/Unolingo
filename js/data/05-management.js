/* Elektro & Automatisierung, Produktion & BWL, Umwelt & Arbeitssicherheit */

FD.subject({
  id: 'elektro', icon: '⚡', semester: 3,
  title: 'Elektro- & Automatisierungstechnik', en: 'Electrical engineering & automation',
  modules: 'HT34 Informations- und Elektrotechnik · HT65 Fertigungskonzepte und Produktionsautomatisierung',
  words: `
die Elektrotechnik = electrical engineering
die Spannung = voltage
der Strom = (electric) current
der Widerstand = resistance / resistor
das ohmsche Gesetz = Ohm's law
die elektrische Leistung = electrical power
der Stromkreis = circuit
die Reihenschaltung = series connection
die Parallelschaltung = parallel connection
der Gleichstrom = direct current (DC)
der Wechselstrom = alternating current (AC)
der Drehstrom = three-phase current
die Sternschaltung = star connection
die Dreieckschaltung = delta connection
der Kondensator = capacitor
die Spule = coil (inductor)
der Transformator = transformer
die Wirkleistung = active power
die Blindleistung = reactive power
die Scheinleistung = apparent power
der Effektivwert = RMS value
der Asynchronmotor = asynchronous (induction) motor
der Synchronmotor = synchronous motor
der Stator = stator
der Läufer = rotor
der Schlupf = slip
der Frequenzumrichter = frequency converter
der Servomotor = servo motor
die Steuerungstechnik = control engineering
die Steuerung = open-loop control
die Regelung = closed-loop control
der Regelkreis = control loop
der Sollwert = setpoint
der Istwert = actual value
die Regelabweichung = control deviation (error)
der Regler = controller
die Regelstrecke = controlled system (plant)
die Störgröße = disturbance variable
die speicherprogrammierbare Steuerung (SPS) = programmable logic controller (PLC)
die Ablaufsteuerung = sequential control
der Sensor = sensor
der Aktor = actuator
der Näherungsschalter = proximity switch
die Lichtschranke = light barrier
der Endschalter = limit switch
der Drehgeber = rotary encoder
das Relais = relay
das Schütz = contactor
der Not-Halt = emergency stop
der Schaltplan = circuit diagram
der Feldbus = fieldbus
die Schnittstelle = interface
der Industrieroboter = industrial robot
der Greifer = gripper
das fahrerlose Transportsystem (FTS) = automated guided vehicle (AGV)
die Pneumatik = pneumatics
der Pneumatikzylinder = pneumatic cylinder
die Messtechnik = measurement technology
die Datenbank = database
die Programmiersprache = programming language
`,
  sentences: `
Nach dem ohmschen Gesetz ist die Spannung gleich Widerstand mal Strom. = According to Ohm's law, voltage equals resistance times current.
Bei der Reihenschaltung fließt durch alle Widerstände derselbe Strom. = In a series connection, the same current flows through all resistors.
Asynchronmotoren laufen immer etwas langsamer als das Drehfeld. = Asynchronous motors always run slightly slower than the rotating field.
Der Frequenzumrichter regelt die Drehzahl des Motors. = The frequency converter controls the speed of the motor.
Eine Steuerung arbeitet ohne Rückführung. = An open-loop control works without feedback.
Bei einer Regelung wird der Istwert ständig mit dem Sollwert verglichen. = In closed-loop control, the actual value is constantly compared with the setpoint.
Die SPS verarbeitet die Signale der Sensoren und steuert die Aktoren. = The PLC processes the sensor signals and controls the actuators.
Die Lichtschranke erkennt, wenn ein Werkstück die Maschine erreicht. = The light barrier detects when a workpiece reaches the machine.
Der Not-Halt muss jederzeit gut erreichbar sein. = The emergency stop must be easily reachable at all times.
Über den Feldbus kommunizieren die Geräte mit der Steuerung. = The devices communicate with the controller via the fieldbus.
Pneumatikzylinder werden mit Druckluft betrieben. = Pneumatic cylinders are operated with compressed air.
Der Roboter nimmt die Teile mit einem Vakuumgreifer auf. = The robot picks up the parts with a vacuum gripper.
`,
  lecture: {
    title: 'Steuern oder Regeln?',
    text: 'In der Automatisierungstechnik unterscheidet man zwischen Steuern und Regeln. Bei einer Steuerung beeinflusst eine Eingangsgröße die Ausgangsgröße, ohne dass das Ergebnis zurückgemeldet wird. Bei einer Regelung wird die Regelgröße ständig gemessen und mit dem Sollwert verglichen. Eine Abweichung wird vom Regler ausgeglichen. Ein Beispiel für eine Regelung ist die Temperaturregelung einer Trockenkammer.',
    questions: [
      { q: 'Was fehlt bei einer Steuerung?', o: ['die Rückmeldung des Ergebnisses', 'die Eingangsgröße', 'der Strom', 'die Ausgangsgröße'], a: 0 },
      { q: 'Womit wird die Regelgröße verglichen?', o: ['mit dem Sollwert', 'mit dem Istwert der Nachbarmaschine', 'mit der Störgröße', 'mit dem Schaltplan'], a: 0 },
      { q: 'Was ist ein Beispiel für eine Regelung?', o: ['die Temperaturregelung einer Trockenkammer', 'ein einfacher Lichtschalter', 'eine Zeitschaltuhr', 'ein Not-Halt-Taster'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'produktion', icon: '🏭', semester: 4,
  title: 'Produktion, Lean & BWL', en: 'Production management, Lean & business',
  modules: 'HT33 BWL & Kreislaufwirtschaft · HT44 Lean Management · HT62 Finanzplanung & Controlling · HT63 Fabrikplanung · HT72 ERP',
  words: `
die Betriebswirtschaftslehre (BWL) = business administration
das Unternehmen = company / enterprise
die Rechtsform = legal form
der Standort = location / site
der Umsatz = revenue / turnover
der Gewinn = profit
die Kosten (Pl.) = costs
die Fixkosten (Pl.) = fixed costs
die variablen Kosten (Pl.) = variable costs
die Kostenrechnung = cost accounting
die Kostenstelle = cost centre
der Kostenträger = cost unit (cost object)
der Deckungsbeitrag = contribution margin
die Gewinnschwelle = break-even point
die Investition = investment
die Amortisationszeit = payback period
die Abschreibung = depreciation
die Bilanz = balance sheet
die Gewinn-und-Verlust-Rechnung = profit and loss statement
die Kennzahl = key figure (KPI)
die Finanzierung = financing
das Controlling = management accounting (controlling)
die Kreislaufwirtschaft = circular economy
die Produktivität = productivity
die Verschwendung = waste (Lean, muda)
die Durchlaufzeit = lead time (throughput time)
die Rüstzeit = set-up time
der Engpass = bottleneck
die Kapazität = capacity
die Auslastung = utilisation
der Kundentakt = takt time
der Puffer = buffer
der Bestand = inventory / stock
das Lager = warehouse / storage
die Wertstromanalyse = value stream analysis
das Pull-Prinzip = pull principle
die Just-in-time-Lieferung = just-in-time delivery
die Gesamtanlageneffektivität (OEE) = overall equipment effectiveness
die Instandhaltung = maintenance
die vorbeugende Instandhaltung = preventive maintenance
der kontinuierliche Verbesserungsprozess (KVP) = continuous improvement process
die Qualitätssicherung = quality assurance
das Qualitätsmanagement = quality management
der Ausschuss = scrap / rejects
die Nacharbeit = rework
die Regelkarte = control chart
die Produktionsplanung und -steuerung (PPS) = production planning and control
die Materialbedarfsplanung = material requirements planning
die Stammdaten (Pl.) = master data
der Auftrag = (customer) order
der Fertigungsauftrag = production order
die Auftragsabwicklung = order processing
das ERP-System = ERP system
die Beschaffung = procurement
der Lieferant = supplier
die Lieferzeit = delivery time
die Lieferkette = supply chain
die Logistik = logistics
der Materialfluss = material flow
die Fabrikplanung = factory planning
das Layout = layout
die Betriebsmittel (Pl.) = operating resources (equipment)
die Personalplanung = personnel planning
`,
  sentences: `
Die Fixkosten bleiben unabhängig von der Produktionsmenge gleich. = Fixed costs remain the same regardless of the production volume.
Der Deckungsbeitrag ist der Erlös minus die variablen Kosten. = The contribution margin is revenue minus variable costs.
Eine Investition lohnt sich, wenn die Amortisationszeit kurz ist. = An investment pays off if the payback period is short.
Der Engpass bestimmt die Kapazität des gesamten Prozesses. = The bottleneck determines the capacity of the entire process.
Kürzere Rüstzeiten ermöglichen kleinere Losgrößen. = Shorter set-up times allow smaller batch sizes.
Hohe Bestände verlängern die Durchlaufzeit. = High inventory extends the lead time.
Mit der Wertstromanalyse werden Verschwendungen sichtbar gemacht. = Value stream analysis makes waste visible.
Beim Pull-Prinzip wird nur produziert, was der Kunde bestellt. = With the pull principle, only what the customer orders is produced.
Vorbeugende Instandhaltung reduziert ungeplante Stillstände. = Preventive maintenance reduces unplanned downtime.
Ausschuss und Nacharbeit verursachen zusätzliche Kosten. = Scrap and rework cause additional costs.
Die Stammdaten der Artikel werden im ERP-System gepflegt. = The master data of the items is maintained in the ERP system.
Der Materialfluss sollte möglichst kurze Wege haben. = The material flow should have the shortest possible routes.
`,
  lecture: {
    title: 'Lean Production',
    text: 'Lean Production hat das Ziel, Verschwendung in allen Prozessen zu vermeiden. Klassisch unterscheidet man sieben Arten der Verschwendung, zum Beispiel Überproduktion, Bestände, Wartezeiten und unnötige Transporte. Ein wichtiges Werkzeug ist die Wertstromanalyse, die den Material- und Informationsfluss sichtbar macht. Durch kürzere Rüstzeiten können kleinere Lose wirtschaftlich gefertigt werden. Ständige kleine Verbesserungen nennt man kontinuierlichen Verbesserungsprozess.',
    questions: [
      { q: 'Was ist das Ziel von Lean Production?', o: ['Verschwendung vermeiden', 'möglichst große Lager aufbauen', 'mehr Personal einstellen', 'größere Lose fertigen'], a: 0 },
      { q: 'Wie viele Arten der Verschwendung unterscheidet man klassisch?', o: ['sieben', 'drei', 'zehn', 'fünf'], a: 0 },
      { q: 'Was ermöglichen kürzere Rüstzeiten?', o: ['kleinere Lose wirtschaftlich zu fertigen', 'höhere Bestände', 'längere Durchlaufzeiten', 'weniger Qualitätskontrolle'], a: 0 },
    ],
  },
});

FD.subject({
  id: 'umwelt', icon: '♻️', semester: 6,
  title: 'Umweltschutz, Nachhaltigkeit & Arbeitsschutz', en: 'Environment, sustainability & occupational safety',
  modules: 'HT64 Nachhaltigkeitsbewertung und Umweltschutz',
  words: `
der Umweltschutz = environmental protection
die Nachhaltigkeitsbewertung = sustainability assessment
die Ökobilanz = life cycle assessment (LCA)
der Lebenszyklus = life cycle
der CO2-Fußabdruck = carbon footprint
die graue Energie = embodied energy
das Treibhausgas = greenhouse gas
die Kohlenstoffspeicherung = carbon storage
der Klimaschutz = climate protection
die erneuerbare Energie = renewable energy
die Ressourceneffizienz = resource efficiency
das Recycling = recycling
die Wiederverwendung = reuse
die stoffliche Verwertung = material recycling (recovery)
die energetische Verwertung = energy recovery
die Entsorgung = disposal
der Abfall = waste
die Abfallvermeidung = waste prevention
die Altholzkategorie = waste wood category
der Schadstoff = pollutant
das Holzschutzmittel = wood preservative
die Altlast = legacy contamination
der Asbest = asbestos
der Emissionsgrenzwert = emission limit value
die Immission = immission (pollution at the receptor)
das Bundes-Immissionsschutzgesetz = Federal Immission Control Act
die Genehmigung = permit / approval
die Luftreinhaltung = air pollution control
die Abluftreinigung = exhaust-air purification
der Feinstaub = fine dust (particulate matter)
der Holzstaub = wood dust
krebserzeugend = carcinogenic
der Arbeitsplatzgrenzwert = occupational exposure limit
die Gefahrstoffverordnung = Hazardous Substances Ordinance
die Kennzeichnungspflicht = labelling obligation
die Gefährdungsbeurteilung = risk assessment
das STOP-Prinzip = STOP principle (hierarchy of controls)
die Schutzmaßnahme = protective measure
die persönliche Schutzausrüstung (PSA) = personal protective equipment (PPE)
der Gehörschutz = hearing protection
die Atemschutzmaske = respirator mask
die Sicherheitsschuhe (Pl.) = safety shoes
die Unterweisung = safety briefing (instruction)
der Arbeitsunfall = occupational accident
die Berufsgenossenschaft = statutory accident insurance institution
die Unfallverhütungsvorschrift = accident prevention regulation
die Sicherheitsfachkraft = occupational safety specialist
der Explosionsschutz = explosion protection
die Staubexplosion = dust explosion
der Lärm = noise
der Lärmpegel = noise level
das Abwasser = waste water
der Bodenschutz = soil protection
der Gewässerschutz = water protection
der Verbraucherschutz = consumer protection
das Umweltmanagementsystem = environmental management system
die Zertifizierung = certification
das Gütesiegel = quality label (seal)
`,
  sentences: `
Holz speichert Kohlenstoff, solange es nicht verbrennt oder verrottet. = Wood stores carbon as long as it does not burn or rot.
Die Ökobilanz betrachtet den gesamten Lebenszyklus eines Produkts. = The life cycle assessment considers the entire life cycle of a product.
Die stoffliche Verwertung hat Vorrang vor der energetischen Verwertung. = Material recycling takes priority over energy recovery.
Alte Holzschutzmittel können Schadstoffe wie PCP enthalten. = Old wood preservatives can contain pollutants such as PCP.
Große Lackieranlagen benötigen eine Genehmigung nach dem Bundes-Immissionsschutzgesetz. = Large painting plants require a permit under the Federal Immission Control Act.
Hartholzstaub, zum Beispiel von Eiche und Buche, gilt als krebserzeugend. = Hardwood dust, for example from oak and beech, is considered carcinogenic.
Die Gefährdungsbeurteilung ist eine Pflicht des Arbeitgebers. = The risk assessment is an obligation of the employer.
Nach dem STOP-Prinzip haben technische Maßnahmen Vorrang vor persönlicher Schutzausrüstung. = According to the STOP principle, technical measures take priority over personal protective equipment.
Ab einem Lärmpegel von 85 Dezibel muss Gehörschutz getragen werden. = From a noise level of 85 decibels, hearing protection must be worn.
Feiner Holzstaub kann eine Staubexplosion verursachen. = Fine wood dust can cause a dust explosion.
Alle Mitarbeiter erhalten jährlich eine Unterweisung. = All employees receive a safety briefing every year.
`,
  lecture: {
    title: 'Das STOP-Prinzip',
    text: 'Bei der Auswahl von Schutzmaßnahmen gilt in Deutschland das STOP-Prinzip. S steht für Substitution: Ein gefährlicher Stoff oder ein gefährliches Verfahren wird ersetzt. T steht für technische Maßnahmen, zum Beispiel eine Absaugung. O steht für organisatorische Maßnahmen wie Unterweisungen oder kürzere Aufenthaltszeiten am Arbeitsplatz. Erst an letzter Stelle kommt P, die persönliche Schutzausrüstung.',
    questions: [
      { q: 'Wofür steht das S?', o: ['Substitution', 'Sicherheit', 'Schutzbrille', 'Staub'], a: 0 },
      { q: 'Was ist eine technische Maßnahme?', o: ['eine Absaugung', 'eine Unterweisung', 'eine Atemschutzmaske', 'kürzere Arbeitszeiten'], a: 0 },
      { q: 'Was kommt an letzter Stelle?', o: ['die persönliche Schutzausrüstung', 'die Substitution', 'die technischen Maßnahmen', 'die organisatorischen Maßnahmen'], a: 0 },
    ],
  },
});
