import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Celestial() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const FadeIns = document.querySelectorAll(".fadeIn");
    FadeIns.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0, 
          y: 50, 
        },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: element, 
            start: "top 80%",
            end: "top 30%", 
            scrub: true, 
            toggleActions: "play none none reverse", 
          },
        }
      );
    });
  }, []);

  return (
    <>
      <h1>hello2</h1>
    </>
  );
}

export default Celestial;