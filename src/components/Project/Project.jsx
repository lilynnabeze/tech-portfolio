import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

import "../Project/Project.css";
import image from "../Project/assets/Cash2go-LoginPage.png";
import starwars from "../Project/assets/Starwars-Image.png";
import contactForm from "../Project/assets/ContactForm-Image.png";
import profileSearch from "../Project/assets/ProfileSearch-Image.png";
import googleHomePage from "../Project/assets/GoogleClone-Image.png";
import todoList from "../Project/assets/Todo-List-Image.png";

export default function Project() {
  const projects = [
    {
      title: "CASH2GO",
      image: image,
      description: "A Loan Prediction App -ReactJs",
      deployedLink: "https://sparkling-mousse-072041.netlify.app/",
    },

    {
      title: "STARWARS MOVIE STREAMING PLATFORM",
      image: starwars,
      description: "A Clone of Starwars Movie Platform -ReactJs",
      deployedLink: "https://starwarsplatform.netlify.app/",
    },

    {
      title: "PROFILE SEARCH APP",
      image: profileSearch,
      description: "Search and Filter Users -ReactJs",
      deployedLink: " https://coruscating-kleicha-ec5d42.netlify.app/",
    },

    {
      title: "GOOGLE HOMEPAGE",
      image: googleHomePage,
      description:
        "A Clone of Google Homepage (Minimal search functionality included) -ReactJs",
      deployedLink: "https://googlereactclone.netlify.app/",
    },

    {
      title: "TODO-LIST",
      image: todoList,
      description: "Add, delete and strikeout items -Javascript",
      deployedLink: "https://earnest-lokum-671dde.netlify.app/",
    },

    {
      title: "CONTACT US FORM",
      image: contactForm,
      description: "-ReactJs",
      deployedLink: "https://stellular-torte-a33dd8.netlify.app/",
    },
  ];

  const projectsPerPage = 3;
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    scrollContainerRef.current.scrollLeft =
      index * (window.innerWidth / projectsPerPage);
  };

  const slideAnimation = useSpring({
    transform: `translateX(-${activeSlide * (87 / projectsPerPage)}%)`,
    config: { mass: 1, tension: 300, friction: 25 },
  });

  const numSlides = Math.ceil(projects.length / projectsPerPage); // Calculate the number of slides

  return (
    <div className="project-section_wrapper" id="projects">
      <div className="projectsection-header">
        <h1 className="projectsection-title">What I&apos;ve Worked On?</h1>
        <span className="projectsection-title-background">PROJECTS</span>
      </div>
      <div className="projects-slider" ref={scrollContainerRef}>
        <animated.div
          className="slide-container"
          style={{ width: `${numSlides * 100}%`, ...slideAnimation }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-container">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-overlay">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">
                    {project.description}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </animated.div>
      </div>
      <div className="scroll-indicators">
        {Array.from({ length: numSlides }).map((_, index) => (
          <div
            key={index}
            className={`scroll-indicator ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
