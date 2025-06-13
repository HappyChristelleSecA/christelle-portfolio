// src/components/Tech.jsx
import React from 'react';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDatabase,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaDocker,
} from 'react-icons/fa';
import { SiOracle, SiMongodb, SiFirebase, SiAgile, SiPostman } from 'react-icons/si';

export default function Tech() {
  const tech = [
    { icon: <FaPython />,   name: 'Python' },
    { icon: <FaJava />,     name: 'Java' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaHtml5 />,    name: 'HTML5' },
    { icon: <FaCss3Alt />,  name: 'CSS3' },
    { icon: <FaReact />,    name: 'React.js' },
    { icon: <FaReact />,    name: 'React Native' },
    { icon: <FaNodeJs />,   name: 'Node.js' },
    { icon: <FaPhp />,      name: 'PHP' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <SiOracle />,   name: 'Oracle DB' },
    { icon: <SiMongodb />,  name: 'MongoDB' },
    { icon: <SiFirebase />, name: 'Firebase' },
   
   
    
    { icon: <FaGithub />,   name: 'GitHub' },
   
  ];

  return (
    <section id="tech" className="section tech">
      <h2>Technologies & Tools</h2>
      <div className="tech-grid">
        {tech.map((t) => (
          <div key={t.name} className="tech-item">
            <div className="tech-icon">{t.icon}</div>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
