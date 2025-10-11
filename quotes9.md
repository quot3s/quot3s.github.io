---
layout: default
title: Wisdom & Wit
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

  body {
    font-family: 'Share Tech Mono', 'Courier New', monospace;
    background: #0a0a0a;
    color: #00ff00;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        0deg,
        rgba(0, 255, 0, 0.03) 0px,
        transparent 1px,
        transparent 2px,
        rgba(0, 255, 0, 0.03) 3px
      );
    pointer-events: none;
    z-index: 1;
    animation: scan 8s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(20px); }
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    position: relative;
    z-index: 2;
  }

  .header {
    text-align: center;
    color: #00ff00;
    margin-bottom: 50px;
    text-shadow: 0 0 10px #00ff00;
  }

  .header h1 {
    font-size: 3em;
    margin-bottom: 10px;
    text-shadow: 0 0 20px #00ff00;
    letter-spacing: 5px;
    animation: glitch 3s infinite;
  }

  @keyframes glitch {
    0%, 90%, 100% { transform: translate(0); }
    92% { transform: translate(-2px, 2px); }
    94% { transform: translate(2px, -2px); }
    96% { transform: translate(-2px, -2px); }
  }

  .header p {
    font-size: 1.2em;
    opacity: 0.9;
    color: #00cc00;
  }

  .quote-card {
    background: rgba(0, 30, 0, 0.6);
    border: 1px solid #00ff00;
    border-left: 4px solid #00ff00;
    padding: 25px;
    margin-bottom: 20px;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
  }

  .quote-card::before {
    content: '$ ';
    position: absolute;
    left: 8px;
    top: 25px;
    color: #00ff00;
    font-weight: bold;
    font-size: 1.2em;
    opacity: 0.5;
  }

  .quote-card:hover {
    background: rgba(0, 40, 0, 0.8);
    border-left-width: 8px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    transform: translateX(5px);
  }

  .quote-text {
    font-size: 1.2em;
    line-height: 1.6;
    color: #00ff00;
    padding-left: 25px;
    position: relative;
    z-index: 1;
  }

  .quote-text a {
    color: #00ffff;
    text-decoration: none;
    border-bottom: 1px dashed #00ffff;
    transition: all 0.3s;
  }

  .quote-text a:hover {
    color: #00ff00;
    border-bottom-color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
  }

  .quote-author {
    font-size: 1em;
    color: #00ff00;
    font-weight: 600;
    font-style: italic;
    text-align: right;
    padding-left: 25px;
  }

  .quote-author::before {
    content: '— ';
  }

  .quote-author a {
    color: #00ffff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-link {
    font-size: 1.2em;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #00ff00;
    padding: 8px 15px;
    border: 1px solid #00ff00;
    background: rgba(0, 255, 0, 0.05);
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background: rgba(0, 255, 0, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
    transform: translateX(5px);
  }

  .nav-link::before {
    content: '> ';
    opacity: 0;
    transition: opacity 0.3s;
  }

  .nav-link:hover::before {
    opacity: 1;
  }

  .footer {
    text-align: center;
    color: #00cc00;
    margin-top: 50px;
    padding: 20px;
    opacity: 0.8;
    border-top: 1px solid #00ff00;
  }

  .disclaimer {
    text-align: center;
    padding: 20px;
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid #ff0000;
    color: #ff3333;
    margin: 30px 0;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
  }

  .terminal-header {
    background: rgba(0, 255, 0, 0.1);
    padding: 10px 15px;
    border: 1px solid #00ff00;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 5px #00ff00;
  }

  .terminal-title {
    margin-left: auto;
    font-size: 0.9em;
    color: #00ff00;
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2em;
    }

    .quote-card {
      padding: 20px;
    }

    .quote-text {
      font-size: 1.1em;
    }
  }
</style>

<!-- Audio Player CSS -->
<link rel="stylesheet" href="./assets/audio-player.css">

<div class="terminal-header">
  <div class="terminal-button"></div>
  <div class="terminal-button"></div>
  <div class="terminal-button"></div>
  <div class="terminal-title">terminal@quotes6:~$</div>
</div>

<a href="https://quot3s.github.io/" class="nav-link">← Back to Home</a>

<br />

<br />

<a href="https://quot3s.github.io/quotes8" class="nav-link">Prev</a>
<span style="color: #00ff00; margin: 0 10px;">|</span>
<a href="#" class="nav-link">Next</a>

<div class="container">
  <div class="header">
    <h1>WISDOM & WIT</h1>
    <p>A collection of thoughts, reflections, and musings</p>
  </div>

<div class="quote-card">
    <div class="quote-text">Mr. Musk Momma Bear comes to save Grokipedia, Alas!!</div>
  </div>

  <div class="footer">
    <p>© 2025 - Curated with care</p>
  </div>
</div>

<!-- Audio Player -->
<div class="audio-player">
  <div class="audio-player-header">
    <div class="audio-player-title">♪ CYBERTRACK</div>
  </div>
  <div class="audio-controls">
    <button class="play-btn" id="playBtn" aria-label="Play/Pause">▶</button>
    <div class="volume-control">
      <span class="volume-icon">♪</span>
      <input type="range" min="0" max="100" value="50" class="volume-slider" id="volumeSlider" aria-label="Volume">
    </div>
  </div>
  <div class="audio-visualizer" id="visualizer">
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
    <div class="visualizer-bar"></div>
  </div>
</div>

<script>
  const chars = '01アイウエオカキクケコサシスセソタチツテト';
  let drops = [];
  
  function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.15';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height / fontSize;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff00';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    setInterval(draw, 50);
  }
  
  createMatrixRain();
</script>

<!-- Tone.js Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
<!-- Audio Player Script -->
<script src="./assets/audio-player.js"></script>
