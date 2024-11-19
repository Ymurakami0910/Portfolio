import React, { useEffect } from "react";
import Button from "../components/button";
import Styles from "../components/title.module.css";
import ProjectCard from "../components/projectCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Home() {


  return (

    
    <>
      <section className="hero bg_pattern Paper_v2">
        <div className="container hero-layout">
          <div>
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
        <div className="container">
        <div className="Featured-title">
          <h3 className={Styles.h3}>Featured Branding Projects</h3>
        </div>
        <div className="featured-cards">
        <ProjectCard/>
        </div>
        </div>
      </section>


    </>
  );
}

export default Home;
