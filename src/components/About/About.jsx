import "../About/About.css";
import image from "./assets/lily's photo.png";
// import Navbar from "../Navbar/Navbar"

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="aboutpage-container" id="about">
        <div className="aboutpage-header">
          <h1 className="aboutpage-title">Get to Know Me</h1>
          <span className="aboutpage-title-background">ABOUT ME</span>
        </div>
        <div className="aboutpage-content">
          <img className="aboutpage-image" src={image} alt="Profile" />
          <div className="aboutpage-text">
            <h2 className="aboutpage-text-title">
              Hi I&apos;m <a href="#about" className="lily">Lily</a>, and I Empower
              Brands with Cutting-Edge Web Designs
            </h2>
            <div className="aboutpage-text-description">
              <p className="first-paragraph">
                Driven by a love for clean and elegant Web Development with a
                strong background in design and a deep understanding of user
                experience principles,{" "}
              </p>
              <p className="second-paragraph">
                I specialize in transforming ideas
                into pixel-perfect websites that seamlessly blend form and
                function and I am committed to creating impactful online
                experiences.
              </p>{" "}
              <p className="third-paragraph">
                Let&apos;s collaborate to transform your ideas into visually
                stunning and user-friendly digital realities!
              </p>
            </div>
          </div>
          <img
            className="aboutpage-image-duplicate"
            src={image}
            alt="Profile Duplicate"
          />
          
        </div>
        <div className="whatsapp-button-container">
          <a
            href="https://wa.me/+2348161191127" // Replace with the URL of your resume file or resume page
            className="whatsapp-button" // Add CSS class for styling the button
            target="_blank" // Open the resume in a new tab/window
            rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
          >
            Say Hello
          </a>
        </div>
      </div>
    </>
  );
}
