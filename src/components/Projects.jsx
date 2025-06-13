import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'PinkTunes',
      desc: 'Music web app to discover and share playlists.',
      github: 'https://github.com/yourname/pinktunes',
      live: 'https://pinktunes.live'
    },
    {
      title: 'Recipe Finder',
      desc: 'Find recipes and plan meals.',
      github: 'https://github.com/yourname/recipe-finder',
      live: '#'
    }
  ];
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
