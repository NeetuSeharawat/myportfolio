import React from 'react'
import github from "../assets/github.gif";
import linkedin from "../assets/linkedin.gif";

const SocialMedia = () => {
  return (
      
      <div class="socials">
      <a href="https://www.linkedin.com/in/neetu-seharawat" target="_blank"
        ><img
          src={linkedin}
          alt="Linkedin"
          loading="lazy"
          class="socicon"
      /></a>
      <a href="https://github.com/NeetuSeharawat" target="_blank"
        ><img
          src={github}
          alt="github"
          loading="lazy"
          class="socicon"
      /></a>
     
     
    </div>
  )
}

export default SocialMedia;
