# 🌲 Holzwort – Fachdeutsch für die Holztechnik

A Duolingo-style web app for learning the **technical German** used in the
*Holztechnik (B.Eng.)* programme at **TH Rosenheim**. It's a plain static site with no build step and no
backend, so it runs directly on GitHub Pages.

## Features

- **Library of 19 subjects** mapped to the modules of the SPO Holztechnik (14.08.2023), grouped by semester.
- **~1,190 technical terms**, 238 example sentences, 18 grammar drills (passive voice, nominal style,
  participle attributes, function-verb phrases …).
- **Learning path with levels.** Each subject is a path of lessons → picture lesson → lecture → final exam.
  A lesson unlocks the next one. Replaying a lesson raises its difficulty (Einstieg → Aufbau → Profi).
  You can jump ahead by passing a placement test (≥ 80 %).
- **15 exercise types:** match pairs, multiple choice (DE→EN / EN→DE), listen & choose, dictation,
  der/die/das with gender rules, gap fill (choice and typed), sentence builder, free translation
  (DE→EN and EN→DE), compound-word builder, pronunciation (speech recognition), picture lessons
  (tap the part / name the part), and lecture listening with comprehension questions.
- **Audio-visual:** German text-to-speech everywhere (normal and slow), "Hörsaal" mini-lectures
  with subtitles and tappable key terms, and six labelled technical diagrams (tree cross-section,
  single-span beam, cabinet carcass, timber-frame wall, cutting wedge, extraction system).
- **Spaced repetition** (Leitner boxes) for review, plus XP, levels, a streak and a daily goal.
- **Dictionary** with search, subject filter and colour-coded articles.
- Progress is saved in the browser (localStorage), with **export/import** to move it between devices.
- Light/dark mode, mobile-first layout, and keyboard shortcuts (Enter = check/continue, 1–4 = choose an answer).

## Accounts & sync (Firebase)

- **Login:** Profile → *Konto*. You can log in with a username or an email address. "Forgot password" only works for email accounts, because usernames are stored internally as `<name>@users.unolingo-f1e39.firebaseapp.com`.
- **Sync:** progress is merged (this device + cloud) when you log in. After that it's uploaded automatically after every change and pulled again whenever you return to the tab.
- **Without login:** the app keeps working offline, saving to localStorage only.
- **Setup files:** the Firebase config is in `js/cloud.js`. It's public by design; access is protected by `firestore.rules`, which must be published in the Firebase console under *Firestore → Rules*.
- **Live site:** after publishing, add the GitHub Pages domain (`<user>.github.io`) under *Firebase → Authentication → Settings → Authorized domains*.
- **Local files:** login does not work when opening `index.html` from disk. Use a local server or the live site.

## Run locally

Any static web server works, for example:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. (Opening `index.html` directly from disk also works in most browsers.)

## Publish on GitHub Pages

1. Create a new repository on GitHub, e.g. `holzwort`.
2. Push the contents of this folder to the `main` branch.
3. On GitHub, go to **Settings → Pages → Build and deployment**, set **Source: Deploy from a branch**
   and **Branch: `main` / `(root)`**, then save.
4. After about a minute the app is live at `https://<your-username>.github.io/holzwort/`.

## Project structure

```
index.html              App shell
css/style.css           Styles (theme tokens, light/dark)
js/core.js              Data parsing, units/path, compounds, storage, SRS, XP
js/data/*.js            Vocabulary, sentences, lectures, grammar drills (one file per area)
js/diagrams.js          SVG diagrams for the picture lessons
js/speech.js            Text-to-speech and speech recognition (Web Speech API)
js/exercises.js         Exercise types, lesson generator, lesson runner
js/app.js               Navigation and screens
RESEARCH.md             Curriculum research and design notes
```

## Adding words

Each subject in `js/data/*.js` has a `words` block with one entry per line:

```
die Spanplatte = particleboard (chipboard)
das Brettschichtholz (BSH) = glued laminated timber (glulam)
berechnen = to calculate
die Späne (Pl.) = chips / shavings
```

Lessons are built automatically in groups of 8 words, in the order the words are listed, so put basic
terms first. Sentences use the same format: `German sentence = English sentence`.

## Speech

Audio uses the browser's built-in voices. Chrome ships with "Google Deutsch". On Windows you can add
German speech under *Settings → Time & Language → Language*. Speaking exercises need Chrome or Edge
and microphone permission. You can turn both off under Profile.

*Unofficial learning project, not affiliated with TH Rosenheim.*
