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
  
  .footer {
    text-align: center;
    color: white;
    margin-top: 50px;
    padding: 20px;
    opacity: 0.8;
  }

  .disclaimer {
    text-align: center;
    margin-bottom: 30px;
  }

  .quotes-link {
    display: inline-block;
    margin-top: 20px;
    padding: 15px 35px;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1em;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .quotes-link:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  #quotes-page-content {
    display: none;
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
    <p>A collection of thoughts, reflections, and musings</p>
  </div>

  <div class="disclaimer">
    <h1>Quotes 1</h1>
    <a href="./quotes1" class="quotes-link">View All Quotes →</a>
  </div>

  <div class="disclaimer">
    <h1>Quotes 2</h1>
    <a href="./quotes2" class="quotes-link">View All Quotes →</a>
  </div>
<!-- 
  <div class="disclaimer">
    <h1>Quotes 3</h1>
    <a href="./quotes3" class="quotes-link">View All Quotes →</a>
  </div> -->


  <div class="footer">
    <p>© 2025 - Curated with care</p>
  </div>
</div>
