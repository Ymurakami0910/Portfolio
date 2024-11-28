import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";


import Thumb from "../assets/KissaTanpopo/KissaStore.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function KissaTanpopo() {
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

  const openWebsiteInNewTab = () => {
    window.open("/kissatanpopo/index.html", "_blank", "noopener,noreferrer");
  };
  const project = projectData.find((item) => item.id === 1);

  return (
    <>
      <section className="Kissa Paper_v2 bg_pattern ">
        <figure className="container Project-Thumb">
          <img src={Thumb} alt="masking image" />
        </figure>
        <div className="container Project-title">
          <h1>Kissa Tanpopo Brand Identity</h1>
        </div>
        
      </section>


      <section className="Paper_v2 bg_pattern">
      <div className=" fadeIn container Project-overview">
          <h2>Overview</h2>
          <p>
            I had a fun project of creating the full brand identity for Kissa
            Tanpopo, a nostalgic, Japanese inspired dessert café. The goal was
            to mix modern and retro vibes to give the brand a welcoming, playful
            feel. I started by designing the logo, choosing the colors, and
            picking the typography that fit the vibe. I also built a single
            responsive page website that works beautifully across all devices.
          </p>
          <div className={styles.chipsContainer}>
          {project?.chips?.map((chip, index) => (
            <span className={styles.chip} key={index}>
              {chip}
            </span>
          ))}
        </div>
        </div>
      </section>


      <section className="Paper_v2 bg_pattern">
      <div className="container">
      <Button label="View Full website" onClick={openWebsiteInNewTab} />
      </div>
      </section>
    </>
  );
}

export default KissaTanpopo;
