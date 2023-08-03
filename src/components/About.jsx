import React from "react";
import portfolioPicture from "../assets/portfolioPicture.png";

const About = () => {
  return (
    <>
      <div class="hero" id="about">
        <img
          src={portfolioPicture}
          alt="neetu"
          loading="lazy"
          class="hero-img"
        />

        <div class="bio animate__animated animate__shakeX">
          <h2 class="bio-title">About Me</h2>
          <p class="bio-text">
            I'm a self-taught
            <span class="bold"> Front-end Developer </span>
            with a Master's in Computer Applications and also an
            <span class="bold"> Open Source Contributor </span> from
            Bangalore,India.
          </p>
        </div>
      </div>

      <div class="more-about">
        <h2>More About Me</h2>
        <p>
          I enjoy taking complex problems and turning them into simple and
          beautiful interface design. I also love the logic and structure of
          coding and always strive to write elegant and effective code, whether
          it is HTML, CSS, javascript or React. I have a strong interest in
          contributing to open-source projects. I believe that open-source
          collaboration not only enhances skills, but also contributes
          positively to the growth of the technology community and a strong
          communication skills foster effective teamwork and ensure a shared
          vision for achieving project goals. My long-term goal is to become a
          well-respected tech leader and contribute to shaping the future of web
          development.
          <br />Previously associated with CUEMATH and ICICI Bank, honing
          my skills and gaining practical experience in diverse environments.
        </p>
      </div>
    </>
  );
};

export default About;
