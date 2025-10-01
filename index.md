---
layout: default
title: Wisdom & Wit
---

<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    margin: 0;
    padding: 20px;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  
  .header {
    text-align: center;
    color: white;
    margin-bottom: 50px;
  }
  
  .header h1 {
    font-size: 3em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  .header p {
    font-size: 1.2em;
    opacity: 0.9;
  }
  
  .quote-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .quote-card::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 120px;
    color: rgba(102, 126, 234, 0.1);
    font-family: Georgia, serif;
  }
  
  .quote-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }
  
  .quote-text {
    font-size: 1.3em;
    line-height: 1.6;
    color: #333;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
  }
  
  .quote-author {
    font-size: 1em;
    color: #667eea;
    font-weight: 600;
    font-style: italic;
    text-align: right;
  }
  
  .quote-author::before {
    content: '— ';
  }
  
  .quote-author a {
    color: #764ba2;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .quote-author a:hover {
    color: #667eea;
    text-decoration: underline;
  }
  
  .footer {
    text-align: center;
    color: white;
    margin-top: 50px;
    padding: 20px;
    opacity: 0.8;
  }

  .disclaimer {
    text-align: center;
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

<div class="container">
  <div class="header">
    <h1>Wisdom & Wit</h1>
    <p>A collection of thoughts, reflections, and musings</p>
  </div>

  <div class="quote-card">
    <div class="quote-text">Eat. Sleep. Hike. Repeat.</div>
    <!-- <div class="quote-author">Me</div> -->
  </div>
  
  <div class="quote-card">
    <div class="quote-text">Security is just an illusion.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">AI ragebait is the new norm.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">I really do care about C vs C++ vs Rust 24 by 7.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">My favorite IDE is whatever the team uses so that I am not an outcast.</div>
  </div>
  <div class="quote-card">
    <div class="quote-text">I like biking all the way to the office #bikeToWorkday everyday</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Instant-raging happens often on the app version. Switch to the web version for a more soothing experience.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Just pretend they don't exist.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Nested for-loops is where I shine.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Leetcode is fun if you have got the time to invest.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">We can co-exist on the same app by simply blocking/muting each other.</div>
  </div>
  
  <div class="quote-card">
    <div class="quote-text">You passed the test by choosing family over anything.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">All of social media is nothing but brain rot.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">You gotta leave the homeland to prosper abroad.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">DM CEO's (especially of flat orgs) and let them know that you applied for some jobs.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">To quote or not to quote. To quote means to get yourself in trouble #troublemakers. To not quote means to play it safe and let the work and other factors do all the talking.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Bug Bounty, freelancing or back to 9-5 or all of them. What would you do if given a choice?</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">Inter-related quote - I can do all of the above alone just so you know without any disord or community help, kind of like independent researcher/individual contributor. Just with pure goolging and AI now.</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">I am just a human. Not alien.</div>
  </div>

  <div class="footer">
    <p>© 2025 - Curated with care</p>
  </div>

  <div class="disclaimer">
    <p>Chances of confusing wit over wisdom and vice-versa is highly likely.</p>
  </div>
</div>

