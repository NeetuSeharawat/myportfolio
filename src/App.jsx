import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}