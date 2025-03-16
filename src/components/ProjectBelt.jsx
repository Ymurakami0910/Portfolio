import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectBelt = ({ images, isMobile }) => {

  useEffect(() => {
    // belt  ^^--
    const beltImages = document.querySelector(".belt-container");

    const scrollAnimation = () => {
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        // Desktop, scrolling animation
        gsap.to(beltImages, {
          x: "-50%", // Horizontal
          duration: 50, // Speed
          repeat: -1, // loop
          ease: "linear",
        });
      } else {
        // Mobile, vertically stacked images with fade-in on scroll
        gsap.fromTo(
          ".belt-image",
          {
            opacity: 0,
            x: -50, // below
          },
          {
            opacity: 1,
            x: 0, // to original position
            stagger: 0.2, // delay between images
            scrollTrigger: {
              trigger: ".belt-container",
              start: "top right",
              end: "10%",
              scrub: true,
              markers: false,
              toggleActions: "play none none none", // Only "play" once when triggered
            },
          }
        );
      }
    };

    // Call the scrollAnimation function
    scrollAnimation();
    window.addEventListener("resize", scrollAnimation); // Adjust when window is resized

    return () => window.removeEventListener("resize", scrollAnimation); // Cleanup
  }, []);
    

  return (
    <section className="Project-belt">
      <div className="belt-container">
        {images.map((src, index) => (
          <img src={src} alt={`Slide ${index}`} className="belt-image" key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectBelt;
