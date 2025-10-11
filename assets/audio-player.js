// Ultimate Cyberpunk Hacker Soundtrack
let synth, bassSynth, blipSynth, noiseSynth, arpSynth, reverb, filter, delay, distortion, isPlaying = false;
const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const visualizer = document.getElementById('visualizer');
const trackTitle = document.querySelector('.audio-player-title');

// Display track name
trackTitle.textContent = '♪ CYBER_NEXUS';

// Initialize Tone.js synthesizers
async function initAudio() {
  await Tone.start();
  
  // Create effects chain
  reverb = new Tone.Reverb({decay: 5, wet: 0.4}).toDestination();
  delay = new Tone.FeedbackDelay('8n', 0.4).connect(reverb);
  filter = new Tone.Filter(1400, 'lowpass').connect(delay);
  distortion = new Tone.Distortion(0.2).connect(filter);
  
  // Dark ambient pad - the foundation
  synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'sawtooth' },
    envelope: { attack: 4, decay: 2, sustain: 0.5, release: 6 }
  }).connect(filter);

  // Deep sub bass - the heartbeat
  bassSynth = new Tone.MonoSynth({
    oscillator: { type: 'square' },
    envelope: { attack: 0.1, decay: 0.4, sustain: 0.3, release: 1 }
  }).connect(distortion);

  // Arpeggiator - the data stream
  arpSynth = new Tone.MonoSynth({
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 0.2 }
  }).connect(delay);

  // Glitch/blip sounds - the keystrokes
  blipSynth = new Tone.MetalSynth({
    frequency: 200,
    envelope: { attack: 0.001, decay: 0.08, release: 0.01 },
    harmonicity: 6,
    modulationIndex: 40,
    resonance: 5000,
    octaves: 2
  }).connect(delay);

  // Digital noise bursts - the interference
  noiseSynth = new Tone.NoiseSynth({
    noise: { type: 'white' },
    envelope: { attack: 0.005, decay: 0.15, sustain: 0 }
  }).connect(filter);

  // Set initial volume
  Tone.getDestination().volume.value = -8;
}

// Dark minor chord progression
const chords = [
  ['E2', 'G2', 'B2', 'E3'],
  ['C2', 'Eb2', 'G2', 'C3'],
  ['A1', 'C2', 'E2', 'A2'],
  ['D2', 'F2', 'A2', 'D3']
];

// Deep bass notes
const bassNotes = ['E1', 'C1', 'A0', 'D1'];

// Arpeggiator patterns - creates the "hacking" melody
const arpPatterns = [
  ['E3', 'G3', 'B3', 'E4', 'B3', 'G3'],
  ['C3', 'Eb3', 'G3', 'C4', 'G3', 'Eb3'],
  ['A2', 'C3', 'E3', 'A3', 'E3', 'C3'],
  ['D3', 'F3', 'A3', 'D4', 'A3', 'F3']
];

let chordIndex = 0;
let arpIndex = 0;
let arpNoteIndex = 0;
let loopId, blipLoopId, noiseLoopId, bassLoopId, arpLoopId;

// Main ambient pads
function playAmbientMusic() {
  if (!synth) return;
  
  const chord = chords[chordIndex % chords.length];
  synth.triggerAttackRelease(chord, '2n');
  
  chordIndex++;
  loopId = setTimeout(playAmbientMusic, 7000 + Math.random() * 2000);
}

// Bass pulse - the heartbeat
function playBass() {
  if (!bassSynth) return;
  
  const note = bassNotes[chordIndex % bassNotes.length];
  bassSynth.triggerAttackRelease(note, '8n');
  
  bassLoopId = setTimeout(playBass, 1800 + Math.random() * 1200);
}

// Arpeggiator - creates the hacker melody
function playArp() {
  if (!arpSynth) return;
  
  const pattern = arpPatterns[arpIndex % arpPatterns.length];
  const note = pattern[arpNoteIndex % pattern.length];
  
  arpSynth.triggerAttackRelease(note, '16n');
  
  arpNoteIndex++;
  
  if (arpNoteIndex % pattern.length === 0) {
    arpIndex++;
    // Longer pause between pattern changes
    arpLoopId = setTimeout(playArp, 2000 + Math.random() * 1000);
  } else {
    // Fast notes within pattern
    arpLoopId = setTimeout(playArp, 150 + Math.random() * 100);
  }
}

// Typing/keystroke sounds
function playBlips() {
  if (!blipSynth) return;
  
  if (Math.random() > 0.4) {
    blipSynth.frequency.value = 150 + Math.random() * 600;
    blipSynth.triggerAttackRelease('32n');
  }
  
  blipLoopId = setTimeout(playBlips, 300 + Math.random() * 700);
}

// Random digital noise bursts
function playNoise() {
  if (!noiseSynth) return;
  
  if (Math.random() > 0.88) {
    noiseSynth.triggerAttackRelease('32n');
  }
  
  noiseLoopId = setTimeout(playNoise, 1200 + Math.random() * 2500);
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
    clearTimeout(arpLoopId);
    playBtn.textContent = '▶';
    visualizer.style.opacity = '0.3';
  } else {
    playAmbientMusic();
    playBass();
    playArp();
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

// Auto-start on page load (with user interaction fallback)
async function autoStart() {
  if (!isPlaying && !synth) {
    try {
      await initAudio();
      playAmbientMusic();
      playBass();
      playArp();
      playBlips();
      playNoise();
      isPlaying = true;
      playBtn.textContent = '⏸';
      visualizer.style.opacity = '1';
    } catch (e) {
      // If autoplay is blocked, wait for user interaction
      document.addEventListener('click', async () => {
        if (!isPlaying && !synth) {
          await initAudio();
          playAmbientMusic();
          playBass();
          playArp();
          playBlips();
          playNoise();
          isPlaying = true;
          playBtn.textContent = '⏸';
          visualizer.style.opacity = '1';
        }
      }, { once: true });
    }
  }
}

// Try to autoplay immediately
window.addEventListener('DOMContentLoaded', autoStart);
// Fallback if DOMContentLoaded already fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoStart);
} else {
  autoStart();
}
