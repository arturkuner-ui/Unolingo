/* Holzwort – Konto & Cloud-Sync (Firebase Authentication + Firestore)
   Lädt als ES-Modul nach den anderen Skripten. Ohne Internet läuft die App normal weiter (nur lokal). */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, sendPasswordResetEmail,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// Public web config – safe to publish; access is protected by Firestore security rules.
const firebaseConfig = {
  apiKey: 'AIzaSyDNp6FFOatlPnrdFcwEyYd8AjLDJpKqi6Y',
  authDomain: 'unolingo-f1e39.firebaseapp.com',
  projectId: 'unolingo-f1e39',
  storageBucket: 'unolingo-f1e39.firebasestorage.app',
  messagingSenderId: '413858945750',
  appId: '1:413858945750:web:a1098f785aa6d5cc048777',
};

// Usernames are stored as <name>@<USER_DOMAIN> (no mail is ever sent there).
const USER_DOMAIN = 'users.unolingo-f1e39.firebaseapp.com';
const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,23}$/;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const emit = (name = 'cloud-change', detail) => window.dispatchEvent(new CustomEvent(name, { detail }));

const toEmail = id => {
  id = id.trim();
  if (id.includes('@')) return id.toLowerCase();
  const name = id.toLowerCase();
  if (!USERNAME_RE.test(name)) {
    const e = new Error('bad-username'); e.code = 'app/bad-username'; throw e;
  }
  return `${name}@${USER_DOMAIN}`;
};
const nameOf = user => (user.email || '').endsWith('@' + USER_DOMAIN) ? user.email.split('@')[0] : user.email;

const MESSAGES = {
  'app/bad-username': 'Benutzername: 3–24 Zeichen, nur Kleinbuchstaben, Zahlen, Punkt, - oder _.',
  'auth/invalid-credential': 'Benutzername/E-Mail oder Passwort ist falsch.',
  'auth/wrong-password': 'Benutzername/E-Mail oder Passwort ist falsch.',
  'auth/user-not-found': 'Dieses Konto gibt es nicht – erst registrieren.',
  'auth/invalid-email': 'Ungültige E-Mail-Adresse.',
  'auth/email-already-in-use': 'Dieser Name bzw. diese E-Mail ist schon vergeben.',
  'auth/weak-password': 'Das Passwort muss mindestens 6 Zeichen haben.',
  'auth/missing-password': 'Bitte ein Passwort eingeben.',
  'auth/too-many-requests': 'Zu viele Versuche – bitte kurz warten.',
  'auth/network-request-failed': 'Keine Verbindung zum Server – bist du online?',
  'auth/operation-not-allowed': 'Anmeldung mit E-Mail/Passwort ist in Firebase noch nicht aktiviert.',
  'permission-denied': 'Kein Zugriff auf die Datenbank – Sicherheitsregeln prüfen.',
  'unavailable': 'Datenbank gerade nicht erreichbar – dein Fortschritt bleibt lokal gespeichert.',
  'not-found': 'Firestore-Datenbank wurde noch nicht angelegt.',
};

const Cloud = {
  user: null,
  name: null,
  status: 'idle',          // idle | syncing | ok | error
  lastSync: null,
  error: null,
  canReset: id => id.includes('@'),
  message: err => MESSAGES[err && err.code] || ('Fehler: ' + ((err && (err.code || err.message)) || 'unbekannt')),

  async register(id, pw) { await createUserWithEmailAndPassword(auth, toEmail(id), pw); },
  async login(id, pw) { await signInWithEmailAndPassword(auth, toEmail(id), pw); },
  async reset(email) { await sendPasswordResetEmail(auth, email.trim()); },
  async logout() {
    try { await Cloud.push(); } catch (e) { /* keep local copy */ }
    await signOut(auth);
  },

  /* Pull cloud copy, merge with this device, store both */
  async sync() {
    if (!Cloud.user) return;
    const uid = Cloud.user.uid;
    Cloud.status = 'syncing'; emit();
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      const remote = snap.exists() ? JSON.parse(snap.data().data || '{}') : null;
      let local = FD.state;
      if (local.owner && local.owner !== uid) local = FD.defaultState();   // other account used this device
      const merged = remote ? FD.mergeStates(local, remote) : local;
      merged.owner = uid;
      FD.state = merged;
      pushing = true; FD.save(); pushing = false;
      await Cloud.push();
      emit('cloud-synced');
    } catch (e) {
      Cloud.status = 'error'; Cloud.error = Cloud.message(e); emit();
      throw e;
    }
  },

  async push() {
    if (!Cloud.user) return;
    Cloud.status = 'syncing'; emit();
    try {
      FD.state.owner = Cloud.user.uid;
      await setDoc(doc(db, 'users', Cloud.user.uid), {
        data: JSON.stringify(FD.state),
        name: Cloud.name,
        updatedAt: serverTimestamp(),
      });
      Cloud.status = 'ok'; Cloud.error = null; Cloud.lastSync = new Date();
    } catch (e) {
      Cloud.status = 'error'; Cloud.error = Cloud.message(e);
    }
    emit();
  },
};
window.Cloud = Cloud;

/* Auto-upload shortly after every local save */
let timer = null, pushing = false;
FD.onSave = () => {
  if (!Cloud.user || pushing) return;
  clearTimeout(timer);
  timer = setTimeout(() => Cloud.push(), 1500);
};

onAuthStateChanged(auth, async user => {
  Cloud.user = user;
  Cloud.name = user ? nameOf(user) : null;
  Cloud.status = 'idle'; Cloud.error = null;
  emit();
  if (user) { try { await Cloud.sync(); } catch (e) { console.warn('Cloud sync failed', e); } }
});

/* Sync again when coming back to the tab (e.g. after using another device) */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && Cloud.user && Cloud.status !== 'syncing') Cloud.sync().catch(() => {});
});

emit();
