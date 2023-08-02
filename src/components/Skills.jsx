import React from 'react'
import react from "../assets/react.png";
import javascript from "../assets/java-script.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";


const Skills = () => {
  return (
    <div>
      <div class="skills" id="skills">
      <h2 class="skill-header">My Top Skills</h2>

      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img
            src={react}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={javascript}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={html}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        <div class="second-set animate__animated animate__pulse">
          <img
            src={css}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills;
