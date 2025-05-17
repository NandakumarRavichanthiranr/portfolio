import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-box"><strong>Frontend:</strong> HTML, CSS, JavaScript, React</div>
        <div className="skill-box"><strong>Backend:</strong> Java, Node.js</div>
        <div className="skill-box"><strong>Database:</strong> Firebase, MySQL</div>
        <div className="skill-box"><strong>Tools:</strong> Git, VS Code, Netlify</div>
        <div className="skill-box"><strong>Stack:</strong> MERN (MongoDB, Express, React, Node.js)</div>
        <div className="skill-box"><strong>Hardware & Embedded:</strong> Embedded Systems, IoT, Arduino, ESP32</div>
      </div>
    </div>
  );
}

export default Skills;
