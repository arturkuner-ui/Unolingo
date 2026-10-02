'use strict';
/* Audio: Sprachausgabe (Web Speech API) und Spracherkennung */

const Speech = window.Speech = {
  tts: 'speechSynthesis' in window,
  SR: window.SpeechRecognition || window.webkitSpeechRecognition || null,
  voices: [],

  init() {
    if (!this.tts) return;
    const load = () => {
      this.voices = speechSynthesis.getVoices().filter(v => /^de(-|_|$)/i.test(v.lang));
    };
    load();
    speechSynthesis.onvoiceschanged = load;
  },

  voice() {
    const want = FD.state.settings.voice;
    if (want) { const v = this.voices.find(x => x.name === want); if (v) return v; }
    const pref = [/Google Deutsch/i, /Katja/i, /Conrad/i, /Anna/i, /Helena/i, /Hedda/i, /Stefan/i];
    for (const re of pref) { const v = this.voices.find(x => re.test(x.name)); if (v) return v; }
    return this.voices.find(v => /de-DE/i.test(v.lang)) || this.voices[0] || null;
  },

  say(text, { slow = false, onend = null, onboundary = null } = {}) {
    if (!this.tts) { onend && onend(); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    const v = this.voice(); if (v) u.voice = v;
    u.rate = (FD.state.settings.rate || 0.95) * (slow ? 0.65 : 1);
    if (onend) { u.onend = onend; u.onerror = onend; }
    if (onboundary) u.onboundary = onboundary;
    // Chrome sometimes needs a tick after cancel()
    setTimeout(() => speechSynthesis.speak(u), 30);
  },

  stop() { if (this.tts) speechSynthesis.cancel(); },

  canListen() { return !!this.SR && FD.state.settings.speak; },

  listen({ onresult, onend, onerror }) {
    if (!this.SR) { onerror && onerror('unsupported'); return null; }
    const rec = new this.SR();
    rec.lang = 'de-DE';
    rec.interimResults = false;
    rec.maxAlternatives = 5;
    rec.onresult = e => {
      const alts = Array.from(e.results[0]).map(a => a.transcript);
      onresult && onresult(alts);
    };
    rec.onerror = e => onerror && onerror(e.error);
    rec.onend = () => onend && onend();
    try { rec.start(); } catch (e) { onerror && onerror(String(e)); }
    return rec;
  },
};
