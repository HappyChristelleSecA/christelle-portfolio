import React from 'react';
import me from '../assets/me.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={me} alt="Happy Christelle" className="hero-img" />
      <div>
        <h1>Hi, I’m Christelle</h1>
        <h2>a full stack web developer</h2>
        <a href="#projects" className="btn">View Projects</a>
      </div>
    </section>
  );
}
