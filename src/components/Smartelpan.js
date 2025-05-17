import React from 'react'
import i0 from "./imgs/elp0.png"
import i1 from "./imgs/elp1.png"
import i2 from "./imgs/elp2.png"
import i3 from "./imgs/elp3.png"
import i4 from "./imgs/elp4.png"
import i5 from "./imgs/elp5.png"
import './ProjectStyle.css';
const Smartelpan = () => {
  return (
    <div className="project-page">
      <h1>Smart Electric Panel</h1>
      <img src={i0} alt="Smart Electric Panel Screenshot" className="project-image" />
      <img src={i1} alt="Smart Electric Panel Screenshot" className="project-image" />
      <img src={i2} alt="Smart Electric Panel Screenshot" className="project-image" />
      <img src={i3} alt="Smart Electric Panel Screenshot" className="project-image" />
      <img src={i4} alt="Smart Electric Panel Screenshot" className="project-image" />
      <img src={i5} alt="Smart Electric Panel Screenshot" className="project-image" />
      <p>
        Designed a Smart Electrical Panel with IoT-based monitoring to track voltage, current, power, and energy in real time.
        Integrated Firebase for data storage and React for visual dashboards with gauges, graphs, and alert systems.
      </p>
      <p>
        Tools used:
        <ul>Frontend: React.js, HTML5, CSS3 (custom CSS), JavaScript</ul>
        <ul>State Management: React Hooks (useState, useEffect)</ul>
        <ul>Routing: React Router</ul>
        <ul>Backend: Firebase Realtime Database</ul>
        <ul>IoT Sensors: ZMPT101B (Voltage), SCT-013-000 (Current)</ul>
        <ul>Microcontroller: ESP32</ul>
    </p>
      
    </div>
  )
}

export default Smartelpan
