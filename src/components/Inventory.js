import React from 'react'
import i1 from "./imgs/invent1.png"
import i2 from "./imgs/invent2.png"
import i3 from "./imgs/invent3.png"
import i4 from "./imgs/invent4.png"
import i5 from "./imgs/invent5.png"
import './ProjectStyle.css';
const Inventory = () => {
  return (
    <div className="project-page">
      <h1>Inventory Management System</h1>
      <img src={i1} alt="Inventory System Screenshot" className="project-image" />
      <img src={i2} alt="Inventory System Screenshot" className="project-image" />
      <img src={i3} alt="Inventory System Screenshot" className="project-image" />
      <img src={i4} alt="Inventory System Screenshot" className="project-image" />
      <img src={i5} alt="Inventory System Screenshot" className="project-image" />
      <p>
        Developed a Java Full Stack Inventory Management System to streamline stock tracking and optimize inventory control.
        Key features include product categorization, real-time updates, and user-friendly dashboards.
      </p>
      <p>
        Tools used:
        <ul>Frontend: HTML5, CSS3 (custom CSS), JavaScript, JSP Pages</ul>
        <ul>Backend: Java (Servlets), NetBeans IDE</ul>
        <ul>Server: XAMPP (Apache server)</ul>
        <ul>Database: MySQL (via phpMyAdmin)</ul>
        <ul>Version Control: Git, GitHub</ul>
    </p>
      <a
        className="project-link"
        href="https://github.com/NandakumarRavichanthiranr/inventory-management.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub 🔗
      </a>
    </div>
  )
}

export default Inventory
