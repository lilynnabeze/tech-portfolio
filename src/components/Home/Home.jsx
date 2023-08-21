import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import HomeIcon from "../Home/icons/HomeIcon";
import AboutIcon from "../Home/icons/AboutIcon";
import ProjectsIcon from "../Home/icons/ProjectsIcon";
import SkillsIcon from "../Home/icons/SkillsIcon";
import ContactIcon from "../Home/icons/ContactIcon";
import CloseMenuIcon from "./icons/CloseMenuIcon";

import "../Home/Home.css";
import MenuIcon from "./icons/MenuIcon";

export default function Home() {
  const [changingWord, setChangingWord] = useState("MODERN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomepageVisible, setIsHomepageVisible] = useState(true);

  useEffect(() => {
    const words = ["MODERN", "CREATIVE DESIGN", "WEB DEVELOPMENT"];
    const interval = setInterval(() => {
      setChangingWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homepageSection = document.getElementById("home");
      if (homepageSection) {
        const { top } = homepageSection.getBoundingClientRect();
        setIsHomepageVisible(top >= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage_container" id="home">
      <div className="sidebar">
        <div className="dynamic-word">{changingWord}</div>
      </div>
      <div className="homepage-logo_container">
        <div className="homepage-logo_letter">A</div>
        <h1 className="homepage-logo_name">ASONWA</h1>
      </div>

      <div className="content">
        <div className="Homepage-links_container">
          <Link
            className="homepage-link homepage-homelink"
            to="home"
            smooth={true}
            duration={500}
          >
            <HomeIcon />
            <span className="home-text">HOME</span>
          </Link>
          <Link
            className="homepage-link homepage-aboutlink"
            to="about"
            smooth={true}
            duration={500}
          >
            <AboutIcon />
            <span className="about-text">ABOUT</span>
          </Link>
          <Link
            className="homepage-link homepage-skillslink"
            to="skills"
            smooth={true}
            duration={500}
          >
            <SkillsIcon />
            <span className="skills-text">SKILLS</span>
          </Link>
          <Link
            className="homepage-link homepage-projectslink"
            to="projects"
            smooth={true}
            duration={500}
          >
            <ProjectsIcon />
            <span className="projects-text">PROJECTS</span>
          </Link>

          <Link
            className="homepage-link homepage-contactlink"
            to="contact"
            smooth={true}
            duration={500}
          >
            <ContactIcon />
            <span className="contact-text">CONTACT</span>
          </Link>
        </div>
        <div
          className="menu-icon-container"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("Menu Open:", isMenuOpen); // Check if the state changes
          }}
        >
          {isMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </div>
        <div
          className={`menu-links-container ${
            isMenuOpen && isHomepageVisible ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Link className="menu-link" to="home" smooth={true} duration={500}>
            HOME
          </Link>
          <Link className="menu-link" to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link className="menu-link" to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
          <Link
            className="menu-link"
            to="projects"
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link className="menu-link" to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
