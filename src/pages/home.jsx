import React, { useEffect } from "react";
import Button from "../components/button";
import Styles from "../components/title.module.css";
import ProjectCard from "../components/projectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom"; 

function Home() {

  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    // Create the animation for airplane elements that doesn't work so far 
    gsap.to(".airplane-1", {
      x: "100vw", 
      duration: 10, 
      ease: "none", 
      repeat: -1, 
      repeatDelay: 0, 
    });

    gsap.to(".airplane-2", {
      x: "100vw", 
      duration: 12, 
      ease: "none", 
      repeat: -1, 
      repeatDelay: 0,
    });

    gsap.to(".airplane-3", {
      x: "50vw", 
      duration: 15, 
      ease: "none", 
      repeat: -1, 
      repeatDelay: 0,
    });

    // Scroll-triggered animation for the message box
    gsap.fromTo(
      ".message-box",
      {
        scale: 0.5, 
        opacity: 0, 
      },
      {
        scale: 1, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".message",
          start: "top 65%", 
          end: "top 15%", 
          scrub: true, 
        },
      }
    );


    gsap.fromTo(
      ".message-tanukiBox",
      {
        opacity: 0,
        y: 100, 
        x: 50, 
        scale: 0.5, 
      },
      {
        opacity: 1, // Fade in
        y: 0, 
        x: 0, 
        scale: 1,
        duration: 1.5, 
        ease: "power3.out", // easing
        scrollTrigger: {
          trigger: ".message",
          start: "top 100%",
          end: "top 20%", 
          scrub: true,
          toggleActions: "play none none reverse", 
        },
      }
    );
    
    
  }, []);


  return (
    

    
    <>
      <section className="Home-hero hero bg_pattern Paper_v2">

        <div className="container">
          <div className="Home-hero__text">
            <h1>国境を越えたデザインを</h1>
            <h1>Crafting Brands that Cross Borders</h1>
          </div>
          <Button label="About Me" onClick={() => navigate("about")} />
        </div>
      </section>

      <section className="message">
        <div className="message-airplane airplane-1">
          <img src="src/assets/icons/airplane.png" alt="airplane-icon" />
        </div>
        <div className="container message-layout">
          <div className="message-box">
   
            <div className="message-box__header">
              <h2>Hi! I am Yuri, a brand designer</h2>
              <a
                href="https://www.linkedin.com/in/yurino-murakami-047175318"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="message-box__icon">
                  <img
                    src="src/assets/icons/linkedin.png"
                    alt="LinkedIn-icon"
                  />
                </div>
              </a>
            </div>
            <p>
              My studio's logo features a tanuki, an animal unique to Japan. In
              Japanese folklore, tanuki are known for their versatility and
              ability to transform into anything. Like them, I can bring
              adaptability to your branding work and collaborate seamlessly with
              diverse teams and projects.
            </p>
          </div>
          <div className="message-airplane airplane-2">
            <img src="src/assets/icons/airplane.png" alt="airplane-icon" />
          </div>
          <div className="message-airplane airplane-3">
            <img src="src/assets/icons/airplane.png" alt="airplane-icon" />
          </div>
          <div className="message-tanukiBox">
            <img src="src/assets/tanuki.png" alt="Tanuki-illustration" />
          </div>
        </div>
      </section>
      

      <section className="featured">
        <div>
        <div className=" container featured-title">
          <h3 className={Styles.h3}>Featured Branding Projects</h3>
        </div>
        <ProjectCard/>
        </div>
      </section>


    </>
  );
}

export default Home;
