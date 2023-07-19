import AboutIcon from "./Icons/AboutIcon";
import ContactIcon from "./Icons/ContactIcon";
import HomeIcon from "./Icons/HomeIcon";
import ProjectsIcon from "./Icons/ProjectsIcon";
import SkillsIcon from "./Icons/SkillsIcon";
import "../Navbar/Navbar.css";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const homepageSection = document.getElementById("homepage");
    const homepageBottom = homepageSection.offsetTop + homepageSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollThreshold = 560; // Adjust this threshold as needed

    if (scrollPosition >= homepageBottom - windowHeight + scrollThreshold) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      <div className="logo">
        <div className="letter">A</div>
        <h1 className="logo-name">ASONWA</h1>
      </div>
      <div className="navbar-links">
        <a className="home-link navbar-link" href="#">
          <HomeIcon />
          <span className="text">HOME</span>
        </a>
        <a className="about-link navbar-link" href="#">
          <AboutIcon />
          <span className="text">ABOUT</span>
        </a>
        <a className="projects-link navbar-link" href="#">
          <ProjectsIcon />
          <span className="text">PROJECTS</span>
        </a>
        <a className="skills-link navbar-link" href="#">
          <SkillsIcon />
          <span className="text">SKILLS</span>
        </a>
        <a className="contact-link navbar-link" href="#">
          <ContactIcon />
          <span className="text">CONTACT</span>
        </a>
      </div>
      
    </nav>
  );
}
