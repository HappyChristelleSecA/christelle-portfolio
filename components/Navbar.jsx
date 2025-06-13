import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Happy Christelle</div>
      <ul className="nav-links">
        {['hero','about','tech','projects','contact'].map(id => (
          <li key={id}>
            <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          </li>
        ))}
        <li><a href="/resume.pdf" download>Download Resume</a></li>
      </ul>
    </nav>
  );
}
