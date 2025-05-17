import React from 'react'
import "./Layout.css";
import { Link,Outlet } from 'react-router-dom'
import ij from "./imgs/nk-resume.pdf";
const Layout = () => {
  return (
    <div>
        <nav>
            <Link to='/home'>
                <button className='kk'>Home</button>
            </Link>
            <Link to='/educ'>
                <button className='hh'>Education</button>
            </Link>
            <Link to='/skill'>
                <button className='hh'>Skills</button>
            </Link>
            <Link to='/proj'>
                <button className='hh'>Projects</button>
            </Link>
            <Link to='/partt'>
                <button className='hh'>Participation</button>
            </Link>
            <Link to='/intern'>
                <button className='hh'>Internship</button>
            </Link>
            <a href={ij} target="_blank" rel="noopener noreferrer">
                <button className='hh'>View Resume</button>
            </a>
        </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
