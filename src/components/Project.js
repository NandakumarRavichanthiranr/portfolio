import React from 'react'
import "./Project.css"
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div className='od'>
      <h2 className='ll'>Projects</h2>
      <div className='id'>
            <h3>Online Voting System</h3>
            <p>Designed and developed a dynamic user interface using
               React to enable seamless voting functionality.
               Implemented reusable components such as candidate cards,
               voting dashboards, and result visualizations, improving
               development efficiency.</p>
               <Link to='/ovs'>
               <button className='but1'>Explore!🔍</button>
               </Link>
      </div>
      <div className='id'>
            <h3>Inventory management System</h3>
            <p>Developed a Java Full Stack Inventory Management System 
              to streamline stock tracking and optimize inventory control.
               Implemented key features like product categorization, 
               real-time updates, and user-friendly dashboards for efficient 
               operations.</p>
               <Link to='/ims'>
               <button className='but1'>Explore!🔍</button>
               </Link>
      </div>
      <div className='id'>
            <h3>Smart Electric Panel</h3>
            <p>Designed a Smart Electrical Panel with IoT-based monitoring 
              to track voltage, current, power, and energy in real time.
              Integrated Firebase for data storage and React for visual 
              dashboards with gauges, graphs, and alert systems for efficient 
              energy management.</p>
               <Link to='/smp'>
               <button className='but1'>Explore!🔍</button>
               </Link>
      </div>
      <div className='id'>
            <h3>ML-Based Crop Disease & Yield Prediction System</h3>
            <p>Developed a smart agriculture system using sensor data and 
              weather API integration to monitor crop health and predict yield.
              Implemented a machine learning model for early disease detection 
              and real-time alerts, empowering farmers with data-driven insights.</p>
               <Link to='/cpyp'>
               <button className='but1'>Explore!🔍</button>
               </Link>
      </div>
    </div>
  )
}

export default Project
