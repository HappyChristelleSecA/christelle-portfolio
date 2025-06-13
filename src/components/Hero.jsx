import React from 'react';
import me from '../assets/me.jpg';

export default function hero() {
  return (
    <section id="hero" className="hero">
      <img src={me} alt="Happy Christelle" className="hero-img" />
      <div>
        <h1>Hi, I’m Christelle</h1>
        <h2>a full stack web developer</h2><br />
        <a href="#projects" className="btn">View Projects</a>
        <a href="/resume.pdf" download class="btn btn-outline">Download Resume</a>
      </div>
    </section>
  );
}
