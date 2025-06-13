import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <div className="social-links">
        <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/yourname"><FaGithub /> GitHub</a>
      </div>
    </section>
  );
}
