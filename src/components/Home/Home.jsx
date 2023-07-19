import { useState, useEffect } from "react";
import HomeIcon from "../Home/icons/HomeIcon";
import AboutIcon from "../Home/icons/AboutIcon";
import ProjectsIcon from "../Home/icons/ProjectsIcon";
import SkillsIcon from "../Home/icons/SkillsIcon";
import ContactIcon from "../Home/icons/ContactIcon";
import "../Home/Home.css";

export default function Home() {
  const [changingWord, setChangingWord] = useState("MODERN");
  // Add more words as needed

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


  
  return (
    <div className="homepage_container" id="homepage">
      <div className="sidebar">
        <div className="dynamic-word">{changingWord}</div>
      </div>
      <div className="homepage-logo_container">
        <div className="homepage-logo_letter">A</div>
        <h1 className="homepage-logo_name">ASONWA</h1>
      </div>
      <div className="content">
        <div className="Homepage-links_container">
          <a className="homepage-link homepage-homelink" href="#">
            <HomeIcon />
            <span className="home-text">HOME</span>
          </a>
          <a className="homepage-link homepage-aboutlink" href="#">
            <AboutIcon />
            <span className="about-text">ABOUT</span>
          </a>
          <a className="homepage-link homepage-skillslink" href="#">
            <SkillsIcon />
            <span className="skills-text">SKILLS</span>
          </a>
          <a className="homepage-link homepage-projectslink" href="#">
            <ProjectsIcon />
            <span className="projects-text">PROJECTS</span>
          </a>

          <a className="homepage-link homepage-contactlink" href="#">
            <ContactIcon />
            <span className="contact-text">CONTACT</span>
          </a>
        </div>
      </div>
    </div>
  );
}
