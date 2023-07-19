import "../About/About.css";
import image from "./assets/lily's photo.png";
// import Navbar from "../Navbar/Navbar"

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="aboutpage-container" id="aboutpage">
        <div className="aboutpage-header">
          <h1 className="aboutpage-title">Get to Know Me</h1>
          <span className="aboutpage-title-background">ABOUT ME</span>
        </div>
        <div className="aboutpage-content">
          <img className="aboutpage-image" src={image} alt="Profile" />
          <div className="aboutpage-text">
            <h2 className="aboutpage-text-title">
              Hi I&apos;m <bold className="lily">Lily</bold>, and I Empower
              Brands with Cutting-Edge Web Designs
            </h2>
            <div className="aboutpage-text-description">
              <p className="">
                Driven by a love for clean and elegant Web Development and with
                4+ years of user-centered design background, I am dedicated to
                chanelling that design background into the technical space by
                creating captivating digital experiences.{" "}
              </p>
              <p>
                With a strong eye for detail and a passion for crafting
                delightful user experiences, I specialize in transforming ideas
                into pixel-perfect websites that seamlessly blend form and
                function and I am committed to creating impactful online
                experiences.
              </p>{" "}
              <p>
                Let&apos;s collaborate to transform your ideas into visually
                stunning and user-friendly digital realities.
              </p>
            </div>
          </div>
          <img className="aboutpage-image-duplicate" src={image} alt="Profile Duplicate" />
        </div>
      </div>
    </>
  );
}
