import React from 'react'
import './ProjectStyle.css';
import i1 from "./imgs/vote1.png"
import i2 from "./imgs/vote2.png"
import i3 from "./imgs/vote3.png"
import i4 from "./imgs/vote4.png"
import i5 from "./imgs/vote5.png"
const Onlinevs = () => {
  return (
    <div className="project-page">
      <h1>Online Voting System</h1>
      <img src={i1} alt="Voting System Screenshot" className="project-image" />
      <img src={i2} alt="Voting System Screenshot" className="project-image" />
      <img src={i3} alt="Voting System Screenshot" className="project-image" />
      <img src={i4} alt="Voting System Screenshot" className="project-image" />
      <img src={i5} alt="Voting System Screenshot" className="project-image" />
      <p>
        Designed and developed a dynamic user interface using React to enable seamless voting functionality.
        Features include candidate cards, voting dashboards, and result visualizations.
      </p>
      <p>
        Tools used:
        <ul>Frontent : React.js, HTML5, CSS3 (custom CSS), JavaScript</ul>
        <ul>State Management : React Hooks (useState, useEffect)</ul>
        <ul>Routing : React Router</ul>
      </p>
      <a
        className="project-link"
        href="https://github.com/NandakumarRavichanthiranr/project"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub 🔗
      </a>
    </div>
  )
}

export default Onlinevs
