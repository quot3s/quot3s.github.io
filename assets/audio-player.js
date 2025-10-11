// 10 Different Cyberpunk Hacker Soundtracks
// ## 🎵 The 10 Soundtracks:

// 1. **DARK_MATTER** - Deep minor chords, slow & ominous
// 2. **NEON_GRID** - Bright triangle waves, cyberpunk city vibes
// 3. **CYBER_RAIN** - Mellow sine waves, atmospheric & rainy
// 4. **GLITCH_VOID** - Fast-paced square waves, aggressive
// 5. **MATRIX_DIVE** - Low-frequency sawtooth, deep dive feeling
// 6. **DATA_STREAM** - Sharp frequencies, flowing data feel
// 7. **TERMINAL_ZERO** - Mid-tempo sawtooth, classic hacker sound
// 8. **PHANTOM_NET** - Square waves with haunting progressions
// 9. **SYSTEM_CRASH** - Very slow, apocalyptic soundscape
// 10. **ROGUE_CODE** - Triangle waves, rogue AI vibes

// 10 Different Cyberpunk Hacker Soundtracks
const soundtracks = [
  {
    name: "DARK_MATTER",
    chords: [['E2', 'G2', 'B2', 'E3'], ['C2', 'Eb2', 'G2', 'C3'], ['A1', 'C2', 'E2', 'A2'], ['D2', 'F2', 'A2', 'D3']],
    bass: ['E1', 'C1', 'A0', 'D1'],
    tempo: 6000,
    oscType: 'sawtooth',
    filterFreq: 1200
  },
  {
    name: "NEON_GRID",
    chords: [['F2', 'A2', 'C3', 'F3'], ['D2', 'F2', 'A2', 'D3'], ['Bb1', 'D2', 'F2', 'Bb2'], ['C2', 'E2', 'G2', 'C3']],
    bass: ['F1', 'D1', 'Bb0', 'C1'],
    tempo: 5000,
    oscType: 'triangle',
    filterFreq: 1500
  },
  {
    name: "CYBER_RAIN",
    chords: [['G2', 'Bb2', 'D3', 'G3'], ['Eb2', 'G2', 'Bb2', 'Eb3'], ['C2', 'Eb2', 'G2', 'C3'], ['F2', 'Ab2', 'C3', 'F3']],
    bass: ['G1', 'Eb1', 'C1', 'F1'],
    tempo: 7000,
    oscType: 'sine',
    filterFreq: 800
  },
  {
    name: "GLITCH_VOID",
    chords: [['A2', 'C3', 'E3', 'A3'], ['F2', 'A2', 'C3', 'F3'], ['D2', 'F2', 'A2', 'D3'], ['E2', 'G2', 'B2', 'E3']],
    bass: ['A1', 'F1', 'D1', 'E1'],
    tempo: 4500,
    oscType: 'square',
    filterFreq: 2000
  },
  {
    name: "MATRIX_DIVE",
    chords: [['B1', 'D2', 'F#2', 'B2'], ['G1', 'B1', 'D2', 'G2'], ['E1', 'G1', 'B1', 'E2'], ['A1', 'C2', 'E2', 'A2']],
    bass: ['B0', 'G0', 'E0', 'A0'],
    tempo: 5500,
    oscType: 'sawtooth',
    filterFreq: 1000
  },
  {
    name: "DATA_STREAM",
    chords: [['C#2', 'E2', 'G#2', 'C#3'], ['A1', 'C#2', 'E2', 'A2'], ['F#1', 'A1', 'C#2', 'F#2'], ['B1', 'D2', 'F#2', 'B2']],
    bass: ['C#1', 'A0', 'F#0', 'B0'],
    tempo: 6500,
    oscType: 'triangle',
    filterFreq: 1300
  },
  {
    name: "TERMINAL_ZERO",
    chords: [['D2', 'F2', 'A2', 'D3'], ['Bb1', 'D2', 'F2', 'Bb2'], ['G1', 'Bb1', 'D2', 'G2'], ['C2', 'Eb2', 'G2', 'C3']],
    bass: ['D1', 'Bb0', 'G0', 'C1'],
    tempo: 5800,
    oscType: 'sawtooth',
    filterFreq: 1100
  },
  {
    name: "PHANTOM_NET",
    chords: [['F#2', 'A2', 'C#3', 'F#3'], ['D2', 'F#2', 'A2', 'D3'], ['B1', 'D2', 'F#2', 'B2'], ['E2', 'G2', 'B2', 'E3']],
    bass: ['F#1', 'D1', 'B0', 'E1'],
    tempo: 4800,
    oscType: 'square',
    filterFreq: 1600
  },
  {
    name: "SYSTEM_CRASH",
    chords: [['Ab2', 'C3', 'Eb3', 'Ab3'], ['F2', 'Ab2', 'C3', 'F3'], ['Db2', 'F2', 'Ab2', 'Db3'], ['Eb2', 'G2', 'Bb2', 'Eb3']],
    bass: ['Ab1', 'F1', 'Db1', 'Eb1'],
    tempo: 7200,
    oscType: 'sine',
    filterFreq: 900
  },
  {
    name: "ROGUE_CODE",
    chords: [['E2', 'G#2', 'B2', 'E3'], ['C#2', 'E2', 'G#2', 'C#3'], ['A1', 'C#2', 'E2', 'A2'], ['B1', 'D#2', 'F#2', 'B2']],
    bass: ['E1', 'C#1', 'A0', 'B0'],
    tempo: 5300,
    oscType: 'triangle',
    filterFreq: 1400
  }
];

// Select random soundtrack
const currentTrack = soundtracks[Math.floor(Math.random() * soundtracks.length)];
console.log(`🎵 Now playing: ${currentTrack.name}`);

let synth, bassSynth, blipSynth, noiseSynth, reverb, filter, delay, isPlaying = false;
const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const visualizer = document.getElementById('visualizer');
const trackTitle = document.querySelector('.audio-player-title');

// Display track name
trackTitle.textContent = `♪ ${currentTrack.name}`;

// Initialize Tone.js synthesizers
async function initAudio() {
  await Tone.start();
  
  // Create effects chain
  reverb = new Tone.Reverb({decay: 4, wet: 0.3}).toDestination();
  delay = new Tone.FeedbackDelay('8n', 0.3).connect(reverb);
  filter = new Tone.Filter(currentTrack.filterFreq, 'lowpass').connect(delay);
  
  // Dark ambient pad with track-specific oscillator
  synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: currentTrack.oscType },
    envelope: { attack: 3, decay: 2, sustain: 0.4, release: 5 }
  }).connect(filter);

  // Deep bass synth
  bassSynth = new Tone.MonoSynth({
    oscillator: { type: 'square' },
    envelope: { attack: 0.1, decay: 0.3, sustain: 0.4, release: 0.8 }
  }).connect(reverb);

  // Glitch/blip sounds
  blipSynth = new Tone.MetalSynth({
    frequency: 200,
    envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5
  }).connect(delay);

  // Digital noise bursts
  noiseSynth = new Tone.NoiseSynth({
    noise: { type: 'white' },
    envelope: { attack: 0.005, decay: 0.1, sustain: 0 }
  }).connect(filter);

  // Set initial volume
  Tone.getDestination().volume.value = -8;
}

let chordIndex = 0;
let loopId, blipLoopId, noiseLoopId, bassLoopId;

// Main ambient pads
function playAmbientMusic() {
  if (!synth) return;
  
  const chord = currentTrack.chords[chordIndex % currentTrack.chords.length];
  synth.triggerAttackRelease(chord, '2n');
  
  chordIndex++;
  loopId = setTimeout(playAmbientMusic, currentTrack.tempo + Math.random() * 3000);
}

// Bass pulse
function playBass() {
  if (!bassSynth) return;
  
  const note = currentTrack.bass[Math.floor(Math.random() * currentTrack.bass.length)];
  bassSynth.triggerAttackRelease(note, '8n');
  
  bassLoopId = setTimeout(playBass, 2000 + Math.random() * 2000);
}

// Typing/data stream sounds
function playBlips() {
  if (!blipSynth) return;
  
  if (Math.random() > 0.3) {
    blipSynth.frequency.value = 100 + Math.random() * 800;
    blipSynth.triggerAttackRelease('32n');
  }
  
  blipLoopId = setTimeout(playBlips, 200 + Math.random() * 800);
}

// Random digital noise bursts
function playNoise() {
  if (!noiseSynth) return;
  
  if (Math.random() > 0.85) {
    noiseSynth.triggerAttackRelease('32n');
  }
  
  noiseLoopId = setTimeout(playNoise, 1000 + Math.random() * 3000);
}

// Play/Pause functionality
playBtn.addEventListener('click', async () => {
  if (!synth) {
    await initAudio();
  }

  if (isPlaying) {
    clearTimeout(loopId);
    clearTimeout(blipLoopId);
    clearTimeout(noiseLoopId);
    clearTimeout(bassLoopId);
    playBtn.textContent = '▶';
    visualizer.style.opacity = '0.3';
  } else {
    playAmbientMusic();
    playBass();
    playBlips();
    playNoise();
    playBtn.textContent = '⏸';
    visualizer.style.opacity = '1';
  }
  isPlaying = !isPlaying;
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
  if (synth) {
    const vol = (e.target.value / 100) * 20 - 20;
    Tone.getDestination().volume.value = vol;
  }
});
