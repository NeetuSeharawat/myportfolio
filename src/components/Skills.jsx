import React from 'react'
import react from "../assets/react.png";
import javascript from "../assets/java-script.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";


const Skills = () => {
  return (
    <div>
      <div className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src={react}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={javascript}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={html}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="second-set animate__animated animate__pulse">
          <img
            src={css}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills;
