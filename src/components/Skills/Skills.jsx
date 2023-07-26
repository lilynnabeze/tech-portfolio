import "../Skills/Skills.css";

export default function Skills() {
  const logos = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
      alt: "HTML5 Logo",
    },
    {
      id: 2,
      src: "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png",
      alt: "CSS3 Logo",
    },
    {
      id: 3,
      src: "https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
      alt: "Javascript Logo",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      alt: "ReactJs Icon",
    },

    {
      id: 5,
      src: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png",
      alt: "Git Logo",
    },

    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
      alt: "Vitejs Logo",
    },

    {
      id: 7,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      alt: "Figma Logo",
    },
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="skillspage-header">
        <h1 className="skillspage-title">What I Know?</h1>
        <span className="skillspage-title-background">MY SKILLS</span>
      </div>
      <div className="skills-section_logo-container">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className="skills-section_logo"
          />
        ))}
        <div className="resume-button-container">
          <a
            href="https://drive.google.com/file/d/1V_l0S_fxwZL-Obls3Tz-yYqWq8D7O-Vp/view?usp=sharingf" // Replace with the URL of your resume file or resume page
            className="resume-button" // Add CSS class for styling the button
            target="_blank" // Open the resume in a new tab/window
            rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
