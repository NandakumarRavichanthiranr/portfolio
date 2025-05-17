import React from 'react'
import "./Welcome.css";
import { Link } from 'react-router-dom';
import w from './imgs/webb.jpg';
const Welcome = () => {
  return (
    <div className='md'>
    <div className='wel'>
        <br/><br/><br/><br/><br/>
      <p className='txt'>
        Hello, I'm
      </p><br/><br/>
      <p className='nam'>
        Nandakumar R
      </p>
      <div className='ppf'>
      <p className='txt1'>A passionate</p><p className='txt2'> Web Developer</p>
      </div>
      <Link to='/contact'>
        <button className='hb'>Say Hello!👋</button>
      </Link>
    </div>
    <div>
        <img src={w}/>
    </div>
    </div>
  )
}

export default Welcome;
