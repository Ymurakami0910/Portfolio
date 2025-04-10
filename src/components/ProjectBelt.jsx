import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectBelt = ({ images, isMobile }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const beltContainer = document.querySelector(".belt-container");
    const beltImages = document.querySelectorAll(".belt-image");

    const scrollAnimation = () => {
      if (!isMobile) {
        // Desktop: Infinite loop animation
        const totalWidth = beltContainer.scrollWidth;
        gsap.to(beltContainer, {
          x: `-=${totalWidth / 2}`,
          duration: 10,
          ease: "none", 
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)), // seamless loop
          },
        });
      } else {
        // Mobile: Fade-in on scroll
        gsap.fromTo(
          beltImages,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: beltContainer,
              start: "top right",
              end: "top 10%",
              scrub: true,
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    scrollAnimation();
    window.addEventListener("resize", scrollAnimation);

    return () => {
      window.removeEventListener("resize", scrollAnimation);
      gsap.killTweensOf(beltContainer); // Cleanup GSAP animations
    };
  }, [isMobile]);

  return (
    <section className="Project-belt">
      <div className="belt-container">
        {!isMobile
          ? // Desktop: Duplicate images for seamless loop
            [...images, ...images, ...images].map((src, index) => (
              <img src={src} alt={`Slide ${index}`} className="belt-image" key={index} />
            ))
          : // Mobile: Single set of images
            images.map((src, index) => (
              <img src={src} alt={`Slide ${index}`} className="belt-image" key={index} />
            ))}
      </div>
    </section>
  );
};

export default ProjectBelt;