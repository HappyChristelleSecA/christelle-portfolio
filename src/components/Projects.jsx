// src/components/Projects.jsx
import React from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Recipe Finder',
      desc: 'Search recipes by ingredients with React Native & Firebase.',
      img: '/assets/me.jpg',
      tools: [<FaReact />, <FaNodeJs />],   // no () here
      github: 'https://github.com/your/recipe-finder',
      live: 'https://recipe-demo.netlify.app',
    },
    {
      title: 'BloomBookStore',
      desc: 'MERN e-commerce bookstore with JWT & Stripe.',
      img: '/assets/me.jpg',
      tools: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
      github: 'https://github.com/your/bloombookstore',
      live: 'https://bloombookstore.netlify.app',
    },
    {
        title: 'BloomBookStore',
        desc: 'MERN e-commerce bookstore with JWT & Stripe.',
        img: '/assets/me.jpg',
        tools: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
        github: 'https://github.com/your/bloombookstore',
        live: 'https://bloombookstore.netlify.app',
      },
      {
        title: 'BloomBookStore',
        desc: 'MERN e-commerce bookstore with JWT & Stripe.',
        img: '/assets/me.jpg',
        tools: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
        github: 'https://github.com/your/bloombookstore',
        live: 'https://bloombookstore.netlify.app',
      },
      {
        title: 'BloomBookStore',
        desc: 'MERN e-commerce bookstore with JWT & Stripe.',
        img: '/assets/me.jpg',
        tools: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />],
        github: 'https://github.com/your/bloombookstore',
        live: 'https://bloombookstore.netlify.app',
      },
    // …more projects
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tools">
                {p.tools.map((Icon, i) => (
                  <span key={i} className="tool-icon">{Icon}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
