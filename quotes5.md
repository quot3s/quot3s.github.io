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

<div class="terminal-header">
  <div class="terminal-button"></div>
  <div class="terminal-button"></div>
  <div class="terminal-button"></div>
  <div class="terminal-title">terminal@quotes5:~$</div>
</div>

<a href="https://quot3s.github.io/" class="nav-link">← Back to Home</a>

<br />

<br />

<a href="https://quot3s.github.io/quotes4" class="nav-link">Prev</a>
<span style="color: #00ff00; margin: 0 10px;">|</span>
<a href="https://quot3s.github.io/quotes6" class="nav-link">Next</a>

<div class="container">
  <div class="header">
    <h1>WISDOM & WIT</h1>
    <p>A collection of thoughts, reflections, and musings</p>
  </div>

<div class="quote-card">
    <div class="quote-text">I want to learn Malware so badly. Somebody teach me plzzz....</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Try throwing your phone in the sewer at least once.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Where do you usually file landlord harassment complaints?</div>
  </div>

<div class="quote-card">
    <div class="quote-text">West stole yoga and meditation. I sense culture appropriation.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Red Wine gives me headaches. I admire Jesus now more than ever.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">When the world wants to persecute you, but you just chillin'.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">If you don't work for them, then they call you all names. Hypocrisy is unreal.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Why would you work with some deranged lunatic who works round the clock sabotaging all your moves?</div>
  </div>

<div class="quote-card">
    <div class="quote-text">QA is the safest career to ever exist.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Go whereever you get a job but eventually settle in a country where google doesn't exist.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Law of Impermanence says, nothing last forever, even the biggest psyop that ever existed will come crumbling down to ashes.</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Like Oprah once said, everyone is a criminal in the eyes of the Lord. For you too have sinned, My Son.</div>
  </div>

<div class="quote-card">
  <div class="quote-text">Go high up in the mountains and set up a camp. Feed the devil. The devil needs it.</div>
</div>

<div class="quote-card">
    <div class="quote-text">Sell vibe-coded malware on dark web (light-hearted humor).</div>
  </div>

<div class="quote-card">
    <div class="quote-text">Hire someone who prefers living in a humorless society.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">I came across this one meme on Xitter. Public figures live private lives and citizens lives are put under surveillance. It should have been the exact opposite if common sense were to prevail.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Watch the watchers if you will.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Only a comedian can reveal the truth in an unwitting way.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Leave Everything And Learn Malware.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Learning Malware Is A Must. Otherwise, You Are Just A Bum.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Share malicious malware on telegram with your friends and family so that they are cyber aware and vigilant.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Use cat pictures as a cop-out.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Hide in someone's basement and write malware legally.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Most funniest nerd joke. It's not MERN. It's MEAN stack. Should I laugh?</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">I wonder how did that woke superman movie go?</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Tell everyone when you go outside. The world is dying to know about your whereabouts.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Moral policing in tech is a joke. SJW's disappear plzzzz...</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Dawg I don't even read your posts. Short Attention Span Disorder saved me from your rambling.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">You celebrated your victory too early.. I am not even started yet..</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">The Anti-Christ still hasn't learnt from The Tower of Babel that one world government will never work and is bound to fail miserably.</div>
  </div>

  <div class="footer">
    <p>© 2025 - Curated with care</p>
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
