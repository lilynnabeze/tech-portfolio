import { useState, useEffect } from "react";
import Arrow from "./assets/Arrow";

export default function ScrollToTop() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to toggle the visibility of the arrow
    const handleScroll = () => {
      const scrollThreshold = 100; // Change this value based on your preference
      setShowArrow(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use "auto" for an instant jump instead of smooth scroll
    });
  };

  return (
    <>
      {showArrow && (
        <div
          className="arrow-up"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <Arrow />
        </div>
      )}
    </>
  );
}
