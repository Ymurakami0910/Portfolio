import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Typewriter } from "react-simple-typewriter";

// components
import Button from "../components/button.jsx";
import Styles from "../components/title.module.css";
import ProjectCard from "../components/projectCard";
import Splash from "../components/splash";
// assets
import Cloud1 from "../assets/cloud1.png";
import Cloud2 from "../assets/cloud2.png";
import AirplaneIcon from "../assets/icons/airplane.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import TanukiIllustration from "../assets/tanuki.png";

function Home() {
  // initialization of third packages 
  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  const [showSplash, setShowSplash] = useState(true); //manage the splash screen

  useEffect(() => {
    // splash timer after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // after tha splash screen ends gsap for clouds animation will be shown 
  useEffect(() => {
    if (!showSplash) {
      gsap.fromTo(
        ".cloud",
        {
          scale: 0.3,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      );
    }
  }, [showSplash]);

  // gsap of each cloud moving animation 
  gsap.to(".cloud1", {
    x: "-100vw", 
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".cloud1-duplicate", {
    x: "-100vw",
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".cloud2", {
    x: "-100vw",
    duration: 25,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".cloud2-duplicate", {
    x: "-100vw",
    duration: 25,
    ease: "none",
    repeat: -1,
  });

  
  // airplanes flowing animation
  useEffect(() => {
    gsap.fromTo(
      ".airplane-1",
      { x: "-10vw" 
    },
      {
        x: "120vw",
        y: "20vh",
        rotation: 10,
        duration: 8,
        ease: "power1.inOut",
        repeat: -1,
      }
    );

    gsap.fromTo(
      ".airplane-2",
      { x: "-30vw" },
      {
        x: "130vw",
        y: "10vh",
        rotation: 5,
        duration: 7,
        ease: "power1.inOut",
        repeat: -1,
      }
    );

    gsap.fromTo(
      ".airplane-3",
      { x: "-40vw" },
      {
        x: "130vw",
        y: "-20vh",
        rotation: 5,
        duration: 9,
        ease: "power1.inOut",
        repeat: -1,
      }
    );
  });

  // gsap of message box scale-up animation
  useEffect(() => {
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
    // gsap of Tanuki illustration fadeIn animation
    gsap.fromTo(
      ".message-tanukiBox",
      {
        opacity: 0,
        y: 100,
        x: 50,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
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
      {showSplash && <Splash />}
      {/* to render the second part (<Splash />) only if the first part (showSplash) evaluates to true. */}
      <section className="Home-hero hero bg_pattern Paper_v2">

        <div className="clouds">
          <div className="cloud cloud1">
            <img src={Cloud1} alt="cloud1" />
          </div>
          <div className="cloud cloud1-duplicate">
            <img src={Cloud1} alt="cloud1-duplicate" />
          </div>
          <div className="cloud cloud2">
          <img src={Cloud2} alt="cloud1" />
        </div>
        <div className="cloud cloud2-duplicate">
          <img src={Cloud2} alt="cloud2-duplicate" />
        </div>          
        </div>
        <div className="container Home-hero__text">
          <div className="">
          <h1>
              {/* third package that applies a typing effect */}
              <Typewriter
                words={[
                  "Crafting Brands that Cross Borders",
                  "国境を超えたデザインを",
                ]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
          </h1>

            {/* Button component is imported and  used*/}
            <Button label="About me" onClick={() => {navigate("/about")}} />
          </div>
        </div>
      </section>

      <section className="message">
        <div className="message-airplane airplane-1">
          <img src={AirplaneIcon} alt="airplane-icon" />
        </div>
        <div className="container message-layout">
          <div className="message-box">
            <div className="message-box__header">
              <h2>Hi! I am Yuri,a brand designer</h2>
              <a
                href="https://www.linkedin.com/in/yurino-murakami-047175318"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="message-box__icon">
                  <img src={LinkedInIcon} alt="LinkedIn-icon" />
                </div>
              </a>
            </div>
            <p>
              My studio's logo features a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Japanese_raccoon_dog"
                target="_blank"
              >
                tanuki
              </a>
              , an animal unique to Japan. In Japanese folklore, tanuki are
              known for their versatility and ability to transform into
              anything. Like them, I can bring adaptability to your branding
              work and collaborate seamlessly with diverse teams and projects.
            </p>
          </div>
          <div className="message-airplane airplane-2">
            <img src={AirplaneIcon} alt="airplane-icon" />
          </div>
          <div className="message-airplane airplane-3">
            <img src={AirplaneIcon} alt="airplane-icon" />
          </div>
          <div className="message-tanukiBox">
            <img src={TanukiIllustration} alt="Tanuki-illustration" />
          </div>
        </div>
      </section>

      <section className="featured">
        <div>
          <div className=" container featured-title">
            <h3 className={Styles.tag}>Featured Branding Projects</h3>
          </div>
          {/* Project card component */}
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

export default Home;
