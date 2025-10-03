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

    .nav-link {
  font-size: 1.3em;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: white;
}

.nav-link:hover {
  text-decoration: underline;
  color: #0056b3;
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

<a href="https://quot3s.github.io/" class="nav-link">← Back to Home</a>

<br />

<a href="https://quot3s.github.io/quotes2" class="nav-link">Prev</a>
<span style="color: white; margin: 0 10px;">|</span>
<a href="#" class="nav-link">Next</a>

<div class="container">
  <div class="header">
    <h1>Wisdom & Wit</h1>
    <p>A collection of thoughts, reflections, and musings</p>
  </div>

  <div class="footer">
    <p>© 2025 - Curated with care</p>
  </div>

  <div class="disclaimer">
    <p>Dirty Thirty Series (DTS). Not for the faint-hearted</p>
  </div>
</div>

