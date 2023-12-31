
import github from "../assets/github.gif";
import linkedin from "../assets/linkedin.gif";

const Socials = () => {
  return (
      
      <div className="socials">
      <a href="https://www.linkedin.com/in/neetu-seharawat" target="_blank"
        ><img
          src={linkedin}
          alt="Linkedin"
          loading="lazy"
          className="socicon"
      /></a>
      <a href="https://github.com/NeetuSeharawat" target="_blank"
        ><img
          src={github}
          alt="github"
          loading="lazy"
          className="socicon"
      /></a>
    </div>
  )
}

export default Socials;
