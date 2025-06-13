import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaAws } from 'react-icons/fa';

export default function Tech() {
  const tech = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaGithub />, name: 'GitHub' },
    // Add more tech...
  ];
  return (
    <section id="tech" className="section tech">
      <h2>Technologies</h2>
      <div className="tech-grid">
        {tech.map(t => (
          <div key={t.name} className="tech-item">{t.icon}<span>{t.name}</span></div>
        ))}
      </div>
    </section>
  );
}
