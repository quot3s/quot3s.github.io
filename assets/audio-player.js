const soundtracks = [
  {
    name: "DARK_MATTER",
    chords: [['E1', 'G1', 'B1'], ['C1', 'Eb1', 'G1'], ['A0', 'C1', 'E1']],
    bass: ['E0', 'C0', 'A-1'],
    tempo: 3000,
    oscType: 'sawtooth',
    filterFreq: 600,
    attack: 5,
    decay: 4,
    sustain: 0.2,
    release: 8,
    bassOscType: 'sawtooth',
    bassAttack: 0.2,
    bassDecay: 0.5,
    bassSustain: 0.3,
    bassRelease: 1,
    reverbWet: 0.4,
    delayWet: 0.2,
    blipFreqMin: 50,
    blipFreqMax: 300,
    blipHarmonicity: 8,
    noiseType: 'white',
    blipRate: 500,
    blipChance: 0.7
  },
  {
    name: "NEON_GRID",
    chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'A4'], ['F3', 'A3', 'C4', 'F4']],
    bass: ['C2', 'A1', 'F1'],
    tempo: 2000,
    oscType: 'square',
    filterFreq: 3000,
    attack: 0.5,
    decay: 1,
    sustain: 0.6,
    release: 1,
    bassOscType: 'square',
    bassAttack: 0.05,
    bassDecay: 0.2,
    bassSustain: 0.5,
    bassRelease: 0.5,
    reverbWet: 0.2,
    delayWet: 0.4,
    blipFreqMin: 200,
    blipFreqMax: 1000,
    blipHarmonicity: 4,
    noiseType: 'pink',
    blipRate: 200,
    blipChance: 0.2
  },
  {
    name: "CYBER_RAIN",
    chords: [['G3', 'B3', 'D4'], ['E3', 'G3', 'B3'], ['C3', 'E3', 'G3']],
    bass: ['G1', 'E1', 'C1'],
    tempo: 3500,
    oscType: 'sine',
    filterFreq: 500,
    attack: 6,
    decay: 5,
    sustain: 0.1,
    release: 10,
    bassOscType: 'sine',
    bassAttack: 0.3,
    bassDecay: 0.8,
    bassSustain: 0.2,
    bassRelease: 2,
    reverbWet: 0.6,
    delayWet: 0.1,
    blipFreqMin: 100,
    blipFreqMax: 500,
    blipHarmonicity: 12,
    noiseType: 'brown',
    blipRate: 1000,
    blipChance: 0.8
  },
  {
    name: "GLITCH_VOID",
    chords: [['A2', 'C3', 'E3'], ['F2', 'A2', 'C3'], ['D2', 'F2', 'A2']],
    bass: ['A1', 'F1', 'D1'],
    tempo: 1800,
    oscType: 'square',
    filterFreq: 4000,
    attack: 0.1,
    decay: 0.2,
    sustain: 0.8,
    release: 0.3,
    bassOscType: 'triangle',
    bassAttack: 0.01,
    bassDecay: 0.1,
    bassSustain: 0.7,
    bassRelease: 0.2,
    reverbWet: 0.1,
    delayWet: 0.5,
    blipFreqMin: 300,
    blipFreqMax: 2000,
    blipHarmonicity: 20,
    noiseType: 'white',
    blipRate: 150,
    blipChance: 0.1
  },
  {
    name: "MATRIX_DIVE",
    chords: [['B2', 'D3', 'F#3', 'A3'], ['G2', 'B2', 'D3', 'F#3'], ['E2', 'G2', 'B2', 'D3']],
    bass: ['B0', 'G0', 'E0'],
    tempo: 2500,
    oscType: 'triangle',
    filterFreq: 1800,
    attack: 2,
    decay: 1.5,
    sustain: 0.4,
    release: 4,
    bassOscType: 'sawtooth',
    bassAttack: 0.1,
    bassDecay: 0.3,
    bassSustain: 0.4,
    bassRelease: 0.8,
    reverbWet: 0.3,
    delayWet: 0.3,
    blipFreqMin: 150,
    blipFreqMax: 800,
    blipHarmonicity: 6,
    noiseType: 'pink',
    blipRate: 300,
    blipChance: 0.4
  },
  {
    name: "DATA_STREAM",
    chords: [['C#5', 'E5'], ['A4', 'C#5'], ['F#4', 'A4']],
    bass: ['C#2', 'A1', 'F#1'],
    tempo: 1500,
    oscType: 'sine',
    filterFreq: 5000,
    attack: 0.05,
    decay: 0.1,
    sustain: 0.9,
    release: 0.2,
    bassOscType: 'square',
    bassAttack: 0.02,
    bassDecay: 0.05,
    bassSustain: 0.8,
    bassRelease: 0.1,
    reverbWet: 0.05,
    delayWet: 0.6,
    blipFreqMin: 500,
    blipFreqMax: 1500,
    blipHarmonicity: 3,
    noiseType: 'white',
    blipRate: 100,
    blipChance: 0.05
  },
  {
    name: "TERMINAL_ZERO",
    chords: [['D2', 'F2', 'A2', 'C3'], ['Bb1', 'D2', 'F2', 'A2'], ['G1', 'Bb1', 'D2', 'F2']],
    bass: ['D1', 'Bb0', 'G0'],
    tempo: 2800,
    oscType: 'sawtooth',
    filterFreq: 1100,
    attack: 3,
    decay: 2.5,
    sustain: 0.3,
    release: 5,
    bassOscType: 'sine',
    bassAttack: 0.15,
    bassDecay: 0.4,
    bassSustain: 0.3,
    bassRelease: 1.2,
    reverbWet: 0.5,
    delayWet: 0.2,
    blipFreqMin: 80,
    blipFreqMax: 400,
    blipHarmonicity: 10,
    noiseType: 'brown',
    blipRate: 400,
    blipChance: 0.5
  },
  {
    name: "PHANTOM_NET",
    chords: [['F#1', 'A1', 'C#2'], ['D1', 'F#1', 'A1'], ['B0', 'D1', 'F#1']],
    bass: ['F#0', 'D0', 'B-1'],
    tempo: 3200,
    oscType: 'square',
    filterFreq: 700,
    attack: 4,
    decay: 3,
    sustain: 0.2,
    release: 7,
    bassOscType: 'triangle',
    bassAttack: 0.25,
    bassDecay: 0.6,
    bassSustain: 0.2,
    bassRelease: 1.5,
    reverbWet: 0.7,
    delayWet: 0.1,
    blipFreqMin: 120,
    blipFreqMax: 600,
    blipHarmonicity: 15,
    noiseType: 'pink',
    blipRate: 600,
    blipChance: 0.6
  },
  {
    name: "SYSTEM_CRASH",
    chords: [['Ab3', 'C4', 'Eb4', 'G4'], ['F3', 'Ab3', 'C4', 'Eb4']],
    bass: ['Ab1', 'F1'],
    tempo: 4000,
    oscType: 'sine',
    filterFreq: 400,
    attack: 8,
    decay: 6,
    sustain: 0.1,
    release: 12,
    bassOscType: 'sawtooth',
    bassAttack: 0.4,
    bassDecay: 1,
    bassSustain: 0.1,
    bassRelease: 3,
    reverbWet: 0.8,
    delayWet: 0.05,
    blipFreqMin: 20,
    blipFreqMax: 200,
    blipHarmonicity: 25,
    noiseType: 'white',
    blipRate: 1200,
    blipChance: 0.9
  },
  {
    name: "ROGUE_CODE",
    chords: [['E3', 'G#3', 'B3', 'D#4'], ['C#3', 'E3', 'G#3', 'B3'], ['A2', 'C#3', 'E3', 'G#3']],
    bass: ['E1', 'C#1', 'A0'],
    tempo: 2200,
    oscType: 'triangle',
    filterFreq: 2200,
    attack: 1.5,
    decay: 1,
    sustain: 0.5,
    release: 3,
    bassOscType: 'square',
    bassAttack: 0.08,
    bassDecay: 0.25,
    bassSustain: 0.5,
    bassRelease: 0.6,
    reverbWet: 0.25,
    delayWet: 0.35,
    blipFreqMin: 250,
    blipFreqMax: 1200,
    blipHarmonicity: 5,
    noiseType: 'brown',
    blipRate: 250,
    blipChance: 0.3
  }
];

// Select random soundtrack
const currentTrack = soundtracks[Math.floor(Math.random() * soundtracks.length)];
console.log(`🎵 Now playing: ${currentTrack.name}`);

let synth, bassSynth, blipSynth, noiseSynth, reverb, filter, delay, isPlaying = false;
let chordIndex = 0;
let loopId, blipLoopId, noiseLoopId, bassLoopId;

const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const visualizer = document.getElementById('visualizer');
const trackTitle = document.querySelector('.audio-player-title');

// Display track name or fallback
if (trackTitle) {
  trackTitle.textContent = `♪ ${currentTrack.name}`;
} else {
  console.warn('Track title element not found.');
}

// Initialize Tone.js synthesizers
async function initAudio() {
  if (typeof Tone === 'undefined') {
    console.error('Tone.js not loaded. Please include the Tone.js library.');
    return false;
  }

  try {
    await Tone.start();
    console.log('Audio context started.');

    // Create effects chain with track-specific params
    reverb = new Tone.Reverb({ decay: 4, wet: currentTrack.reverbWet }).toDestination();
    delay = new Tone.FeedbackDelay('8n', currentTrack.delayWet).connect(reverb);
    filter = new Tone.Filter(currentTrack.filterFreq, 'lowpass').connect(delay);

    // Main synth with full track-specific envelope
    synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: currentTrack.oscType },
      envelope: { 
        attack: currentTrack.attack, 
        decay: currentTrack.decay, 
        sustain: currentTrack.sustain, 
        release: currentTrack.release 
      }
    }).connect(filter);

    // Bass synth with track-specific osc and envelope
    bassSynth = new Tone.MonoSynth({
      oscillator: { type: currentTrack.bassOscType },
      envelope: { 
        attack: currentTrack.bassAttack, 
        decay: currentTrack.bassDecay, 
        sustain: currentTrack.bassSustain, 
        release: currentTrack.bassRelease 
      }
    }).connect(reverb);

    // Blip synth with track-specific params
    blipSynth = new Tone.MetalSynth({
      frequency: 200,
      envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
      harmonicity: currentTrack.blipHarmonicity,
      modulationIndex: 32,
      resonance: 4000,
      octaves: 1.5
    }).connect(delay);

    // Noise synth with track-specific noise type
    noiseSynth = new Tone.NoiseSynth({
      noise: { type: currentTrack.noiseType },
      envelope: { attack: 0.005, decay: 0.1, sustain: 0 }
    }).connect(filter);

    // Set initial volume
    Tone.getDestination().volume.value = -8;
    return true;
  } catch (error) {
    console.error('Failed to initialize audio:', error);
    return false;
  }
}

// Main ambient pads - vary note duration slightly for variation
function playAmbientMusic() {
  if (!synth) return;

  const chord = currentTrack.chords[chordIndex % currentTrack.chords.length];
  const noteDuration = Math.random() > 0.5 ? '2n' : '4n'; // Slight variation in duration
  synth.triggerAttackRelease(chord, noteDuration);
  chordIndex++;
  loopId = setTimeout(playAmbientMusic, currentTrack.tempo + Math.random() * 500);
}

// Bass pulse with track-specific rate
function playBass() {
  if (!bassSynth) return;

  const note = currentTrack.bass[Math.floor(Math.random() * currentTrack.bass.length)];
  bassSynth.triggerAttackRelease(note, '8n');
  bassLoopId = setTimeout(playBass, currentTrack.bassRate + Math.random() * 500);
}

// Typing/data stream sounds with track-specific freq range and chance
function playBlips() {
  if (!blipSynth) return;

  if (Math.random() < currentTrack.blipChance) {
    blipSynth.frequency.value = currentTrack.blipFreqMin + Math.random() * (currentTrack.blipFreqMax - currentTrack.blipFreqMin);
    blipSynth.triggerAttackRelease('32n');
  }
  blipLoopId = setTimeout(playBlips, currentTrack.blipRate + Math.random() * 200);
}

// Random digital noise bursts - adjusted chance for more distinction
function playNoise() {
  if (!noiseSynth) return;

  if (Math.random() < 0.15 + (currentTrack.blipChance * 0.5)) { // Tie to blipChance for track feel
    noiseSynth.triggerAttackRelease('64n'); // Shorter bursts for glitchier feel
  }
  noiseLoopId = setTimeout(playNoise, 1000 + Math.random() * 1000);
}

// Play/Pause functionality
if (playBtn) {
  playBtn.addEventListener('click', async () => {
    if (!synth) {
      const initialized = await initAudio();
      if (!initialized) {
        alert('Failed to initialize audio. Please ensure Tone.js is loaded.');
        return;
      }
    }

    if (isPlaying) {
      clearTimeout(loopId);
      clearTimeout(blipLoopId);
      clearTimeout(noiseLoopId);
      clearTimeout(bassLoopId);
      playBtn.textContent = '▶';
      if (visualizer) visualizer.style.opacity = '0.3';
    } else {
      playAmbientMusic();
      playBass();
      playBlips();
      playNoise();
      playBtn.textContent = '⏸';
      if (visualizer) visualizer.style.opacity = '1';
    }
    isPlaying = !isPlaying;
  });
} else {
  console.warn('Play button not found.');
}

// Volume control
if (volumeSlider) {
  volumeSlider.addEventListener('input', (e) => {
    if (synth) {
      const vol = (e.target.value / 100) * 20 - 20;
      Tone.getDestination().volume.value = vol;
    }
  });
} else {
  console.warn('Volume slider not found.');
}
