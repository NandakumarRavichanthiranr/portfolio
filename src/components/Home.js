import React from "react";
import "./Home.css"
import i from "./imgs/passportphoto.jpg";
const Home = () => {
  return (
    <div>
        <h2 className="nm">
          About me</h2>
        <div className="pp">
        <div className="pr">
            <p className="m">
                I’m a dedicated and enthusiastic developer with a strong foundation in web technologies and a background in electrical 
                engineering. I have a genuine passion for learning and a deep curiosity for how things work, which drives me to continuously
                 improve my skills and stay updated with the latest trends in technology. My approach to development is both creative 
                 and structured — I enjoy crafting intuitive, responsive user interfaces and writing clean, efficient code that brings 
                 ideas to life.I take pride in being a reliable team player who communicates well and adapts quickly to new challenges. 
                 Whether I’m collaborating with others or working independently, I bring a positive attitude, a problem-solving mindset,
                 and a strong sense of responsibility to every project I take on. I believe in continuous growth, attention to detail, 
                 and always striving to deliver the best possible results. With a blend of technical knowledge, practical experience, 
                 and a drive to excel, I’m excited to contribute to meaningful and innovative work in the tech space.
            </p>
        </div>
        <div className="ip">
            <img className="ii" src={i}/>
        </div>
        </div>
    </div>
  )
}

export default Home
