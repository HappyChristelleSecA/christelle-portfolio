import React from 'react';

export default function Footer() {
  return (
    <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-social">
        <a href="https://github.com/yourname" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:you@example.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>
      <p class="footer-copy">© 2025 Happy Christelle. All rights reserved.</p>
    </div>
  </footer>
  );
}
