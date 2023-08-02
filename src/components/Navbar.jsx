import { useState, useEffect } from "react";

const Navbar = () => {
  const burgerhandlerClick = () => {
    const ul = document.querySelector("nav ul");
    ul.classList.toggle("show");
  };

  useEffect(() => {
    const burger = document.querySelector("#burger-menu");
    burger.addEventListener("click", burgerhandlerClick);

    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((link) =>
      link.addEventListener("click", () => {
        const ul = document.querySelector("nav ul");
        ul.classList.remove("show");
      })
    );

    // Clean up the event listeners when the component unmounts
    return () => {
      burger.removeEventListener("click", burgerhandlerClick);
      navLink.forEach((link) =>
        link.removeEventListener("click", () => {
          const ul = document.querySelector("nav ul");
          ul.classList.remove("show");
        })
      );
    };
  }, []); // Empty dependency array to ensure the useEffect runs only once

  return (
    <nav>
      <h1>Neetu Seharawat</h1>
      <ul className="navigation">
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <ion-icon className="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
  );
};

export default Navbar;
