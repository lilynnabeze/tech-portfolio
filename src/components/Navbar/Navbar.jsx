import "../Navbar/Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HomeIcon from "./Icons/HomeIcon";
import AboutIcon from "./Icons/AboutIcon";
import SkillsIcon from "./Icons/SkillsIcon";
import ProjectsIcon from "./Icons/ProjectsIcon";
import ContactIcon from "./Icons/ContactIcon";


export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const homepageSection = document.getElementById("home");
      const homepageBottom =
        homepageSection.offsetTop + homepageSection.offsetHeight;
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
      <Link
        className="home-link navbar-link"
        to="home"
        smooth={true}
        duration={500}
      >
        <HomeIcon />
        <span className="text">HOME</span>
      </Link>
      <Link
        className="about-link navbar-link"
        to="about"
        smooth={true}
        duration={500}
      >
        <AboutIcon />
        <span className="text">ABOUT</span>
      </Link>
      <Link
        className="skills-link navbar-link"
        to="skills"
        smooth={true}
        duration={500}
      >
        <SkillsIcon />
        <span className="text">SKILLS</span>
      </Link>
      <Link
        className="projects-link navbar-link"
        to="projects"
        smooth={true}
        duration={500}
      >
        <ProjectsIcon />
        <span className="text">PROJECTS</span>
      </Link>

      <Link
        className="contact-link navbar-link"
        to="contact"
        smooth={true}
        duration={500}
      >
        <ContactIcon />
        <span className="text">CONTACT</span>
      </Link>
    </div>
    </nav>
  );
}
