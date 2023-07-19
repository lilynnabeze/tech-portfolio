import "../Skills/Skills.css";

export default function Skills() {
  const logos = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
      alt: "Logo 1",
    },
    {
      id: 2,
      src: "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png",
      alt: "Logo 2",
    },
    {
      id: 3,
      src: "https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
      alt: "Logo 3",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      alt: "Logo 4",
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      alt: "Logo 5",
    },
  ];

  return (
    <div className="skills-section">
      <div className="skillspage-header">
        <h1 className="skillspage-title">What I Know?</h1>
        <span className="skillspage-title-background">MY SKILLS</span>
      </div>
      <div className="skills-section_logo-container">
        {logos.map((logo) => (
          <img key={logo.id} src={logo.src} alt={logo.alt} className="skills-section_logo" />
        ))}
      </div>
    </div>
  );
}
