import React from "react";
import arrow from "../assets/arrow.gif";

const Footer = () => {


    
    const handlerClick =() =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
     
    }
  return (
<>

    <footer>
      <p className="copy">&copy; Copyright 2023</p>
      <p className="copy">
         Built with by&#x2661;
         &nbsp;
        <a href="https://www.linkedin.com/in/neetu-seharawat" target="_blank" style={{color: "black"}}>
          Neetu_Seharawat
        </a>
      </p>
    </footer>


    <i className="scroll-up" id="scroll-up" onClick={handlerClick}
      ><img
        src={arrow}
        className="socicon up-arrow"
        alt="scroll-up"/>
    </i>
</>
  );
};

export default Footer;
