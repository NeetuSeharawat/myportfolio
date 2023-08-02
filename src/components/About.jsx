import React from "react";
import portfolioPicture from "../assets/portfolioPicture.png";

const About = () => {
  return (
    <>
    <div class="hero" id="about">
      <img
        src= {portfolioPicture}
        alt="neetu"
        loading="lazy"
        class="hero-img"
      />
      
      <div class="bio animate__animated animate__shakeX">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
          I'm a front-end Developer.Currently looking to switch my career in global Information Technology
          industry and wish to earn myself an identity of a valuable asset to my
          organization and build a value driven, exemplary career.
        </p>
      </div>
    </div>  
    
    <div class="more-about">
    <h2>More About Me</h2>
    <p>
    I have strong interest in contributing to open-source projects. 
    Previously associated with CUEMATH and ICICI Bank.
    </p>
   </div>
  </>
  );
};

export default About;
