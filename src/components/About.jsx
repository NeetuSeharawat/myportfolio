import React from "react";
import Pic from "../assets/Pic.png";

const About = () => {
  return (
    <>
      <div className="hero" id="about">
        <img
          src={Pic}
          alt="neetu"
          loading="lazy"
          className="hero-img"
        />

        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">Hey, I'm Neetu </h2>
          <p className="bio-text">
            A self-taught
            <span className="bold"> Front-end Developer </span>
            with a Master's in Computer Applications and an
            <span className="bold"> Open Source Contributor </span> from
            Bangalore,India.
          </p>
        </div>
      </div>

      <div className="more-about">
        <h2>About Me</h2>
        <p>
          I enjoy taking complex problems and turning them into simple and
          beautiful interface design. I also love the logic and structure of
          coding and always strive to write elegant and effective code, whether
          it is HTML, CSS, javascript or React.
          <br />
          I have a strong interest in contributing to open-source projects. I
          believe that open-source collaboration not only enhances skills, but
          also contributes positively to the growth of the technology community
          and a strong communication skills foster effective teamwork and ensure
          a shared vision for achieving project goals.
          <br />
          
          I have previously been associated with Cuemath and ICICI Bank,
          honing my skills and gaining practical experience in diverse
          environments.
        </p>
      </div>
    </>
  );
};

export default About;
