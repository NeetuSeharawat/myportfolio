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
      <p class="copy">&copy; Copyright 2023</p>
      <p class="copy">
         Built with by&#x2661;
         &nbsp;
        <a href="https://www.linkedin.com/in/neetu-seharawat" target="_blank" style={{color: "black"}}>
          Neetu_Seharawat
        </a>
      </p>
    </footer>


    <i class="scroll-up" id="scroll-up" onClick={handlerClick}
      ><img
        src={arrow}
        class="socicon up-arrow"
        alt="scroll-up"/>
    </i>
</>
  );
};

export default Footer;
