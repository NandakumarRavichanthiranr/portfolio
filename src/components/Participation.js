import React from 'react'
import './Participation.css';
const Participation = () => {
  return (
    <div className="participation-container">
      <h2 className="participation-title">Participation</h2>

      <div className="event-card">
        <h3 className="event-name">Nexus'24 – National Level Hackathon Finals</h3>
        <p className="event-description">
          Finalist in <strong>team participation</strong> at Nexus'24. We built a <strong>Smart Weather Station</strong> that monitored environmental parameters using IoT sensors and visualized them using a React dashboard.
        </p>
        <p><strong>Role: </strong>Hardware Integration and team lead.</p>
        <a href="https://www.linkedin.com/posts/nandakumar-r-292937255_nexus-skcet-kolkataventures-activity-7178973215153614848-q2_G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD72384BXGWjYXR6LxnAPG0H-t0H_npAvQE" target="_blank" rel="noopener noreferrer" className="link"><button className='but1'>View Project</button></a>
      </div>

      <div className="event-card">
        <h3 className="event-name">IEEE Xtreme 18.0!</h3>
        <p className="event-description">
          Participated in a 24-hour global coding competition organized by IEEE. Tackled real-world algorithmic challenges as part of a <strong>team</strong> and improved our problem-solving efficiency under pressure.
        </p>
        <a href="https://www.linkedin.com/posts/nandakumar-r-292937255_ieeextreme-ieee-ieeemadrassection-activity-7256517002649862144-iqzu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD72384BXGWjYXR6LxnAPG0H-t0H_npAvQE" target="_blank" rel="noopener noreferrer" className="link"><button className='but1'>Explore</button></a>
      </div>

      <div className="event-card">
        <h3 className="event-name">ETAP - Power System Workshop</h3>
        <p className="event-description">
          Attended a workshop focused on <strong>Power Systems Simulation</strong> using ETAP and PSCAD. Gained hands-on experience in modeling, analysis, and real-world electrical system simulation.
        </p>
        <p><strong>Organized by:</strong> IEEE & Industry Experts</p>
        <a href="https://www.linkedin.com/posts/nandakumar-r-292937255_powersystems-etap-electricalengineering-activity-7254348285333647360-tV_Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD72384BXGWjYXR6LxnAPG0H-t0H_npAvQE" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="link"><button className='but1'>Explore</button></a>
      </div>

      <div className="event-card">
        <h3 className="event-name">PCB Design Workshop</h3>
        <p className="event-description">
          Attended a hands-on workshop on <strong>Printed Circuit Board (PCB) Design</strong>. Learned circuit layout, component placement, and soldering techniques using industry tools.
        </p>
        <p><strong>Focus:</strong> Practical skills in PCB prototyping and design</p>
        <a href="https://www.linkedin.com/posts/nandakumar-r-292937255_pcbdesign-continuouslearning-activity-7166472156065845249-TPRa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD72384BXGWjYXR6LxnAPG0H-t0H_npAvQE" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="link"><button className='but1'>Explore</button></a>
      </div>
    </div>
  )
}

export default Participation
