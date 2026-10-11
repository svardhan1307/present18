// Web Audio API Sound Effects & Music Box Synthesizer
// Provides sweet, cozy chimes, fairy sparkles, and a soft music-box Happy Birthday melody without external audio files.

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimeout = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Cute bubbly pop sound
  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // Dreamy soft chime
  playChime(noteFreq = 523.25) { // C5
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(noteFreq, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.6);
  }

  // Magical fairy sparkles
  playSparkle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Arpeggio of sweet twinkling bell tones (G5, B5, D6, G6, B6)
    const notes = [784, 987.77, 1174.66, 1567.98, 1975.53];
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteStart = now + idx * 0.07;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteStart);

      gain.gain.setValueAtTime(0.12, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 0.45);
    });
  }

  // Warm hug chime chord
  playHugChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Warm major 9th chord: C4, E4, G4, B4, D5
    const freqs = [261.63, 329.63, 392.00, 493.88, 587.33];
    const now = this.ctx.currentTime;

    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + i * 0.05;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.14, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 1.2);
    });
  }

  // Soft Music Box "Happy Birthday" tune synthesizer
  // Notes: G4 G4 A4 G4 C5 B4 | G4 G4 A4 G4 D5 C5 | G4 G4 G5 E5 C5 B4 A4 | F5 F5 E5 C5 D5 C5
  toggleBackgroundMusic() {
    this.init();
    if (this.isPlayingMusic) {
      this.stopBackgroundMusic();
      return false;
    } else {
      this.startBackgroundMusic();
      return true;
    }
  }

  startBackgroundMusic() {
    this.isPlayingMusic = true;
    const notes = [
      // Happy Birthday To You
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 440, d: 0.6, pause: 0.7 },   // A4
      { f: 392, d: 0.6, pause: 0.7 },   // G4
      { f: 523.25, d: 0.6, pause: 0.7 },// C5
      { f: 493.88, d: 0.9, pause: 1.1 },// B4

      // Happy Birthday To You
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 440, d: 0.6, pause: 0.7 },   // A4
      { f: 392, d: 0.6, pause: 0.7 },   // G4
      { f: 587.33, d: 0.6, pause: 0.7 },// D5
      { f: 523.25, d: 0.9, pause: 1.1 },// C5

      // Happy Birthday Dear Shipra
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 392, d: 0.35, pause: 0.4 },  // G4
      { f: 784, d: 0.6, pause: 0.7 },   // G5
      { f: 659.25, d: 0.6, pause: 0.7 },// E5
      { f: 523.25, d: 0.6, pause: 0.7 },// C5
      { f: 493.88, d: 0.6, pause: 0.7 },// B4
      { f: 440, d: 0.8, pause: 1.0 },   // A4

      // Happy Birthday To You
      { f: 698.46, d: 0.35, pause: 0.4 },// F5
      { f: 698.46, d: 0.35, pause: 0.4 },// F5
      { f: 659.25, d: 0.6, pause: 0.7 }, // E5
      { f: 523.25, d: 0.6, pause: 0.7 }, // C5
      { f: 587.33, d: 0.6, pause: 0.7 }, // D5
      { f: 523.25, d: 1.2, pause: 1.5 }  // C5
    ];

    let currentIdx = 0;

    const playNextNote = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const item = notes[currentIdx];
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      // Music box character: sine wave with soft bell harmonics
      osc.type = 'sine';
      osc.frequency.setValueAtTime(item.f, now);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + item.d + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + item.d + 0.35);

      currentIdx = (currentIdx + 1) % notes.length;
      
      // Delay before next note (longer pause when looping)
      const nextDelay = currentIdx === 0 ? 2500 : item.pause * 1000;
      this.musicTimeout = setTimeout(playNextNote, nextDelay);
    };

    playNextNote();
  }

  stopBackgroundMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimeout) {
      clearTimeout(this.musicTimeout);
      this.musicTimeout = null;
    }
  }
}

export const sounds = new SoundManager();
