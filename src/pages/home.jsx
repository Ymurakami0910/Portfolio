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
import ReadButton from "../components/readButton.jsx";

// assets
import Cloud1 from "../assets/cloud1.png";
import Cloud2 from "../assets/cloud2.png";
import ProfileWebM from "../assets/video.webm";
import ProfileGIF from "../assets/video.gif";
import AirplaneIcon from "../assets/icons/airplane.png";
import TanukiIllustration from "../assets/tanuki.png";

import projectData from "../data/project.json";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();
  const [useGif, setUseGif] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

    // Browser detection function
    function detectBrowser() {
      var ua = navigator.userAgent, tem,
          match = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\d+(\.\d+)*)/i) || [];
  
      if (/trident/i.test(match[1])) {
        tem = /\brv[ :]+(\d+(\.\d+)*)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
      }
  
      if (match[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edg|Brave)\/(\d+(\.\d+)*)/);
        if (tem) return tem.slice(1).join(" ").replace("OPR", "Opera").replace("Edg", "Edge");
      }
  
      match = match.length > 2 ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, "-?"];
      return match.join(" ");
    }

    useEffect(() => {
      const browser = detectBrowser();
      const isSafari = browser.includes("Safari");
      const isInstagramWebView = /Instagram|FBAN/i.test(navigator.userAgent);
  
      if (isSafari || isInstagramWebView) {
        setUseGif(true);
      } else {
        const video = document.createElement("video");
        video.src = ProfileWebM;
        video.muted = true;
        video.playsInline = true;
  
        video.onloadeddata = () => setUseGif(false);
        video.onerror = () => setUseGif(true);
  
        video.load();
      }
    }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      gsap.fromTo(
        ".cloud",
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.3 }
      );

      gsap.to(".cloud1, .cloud1-duplicate", {
        x: "-100vw",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".cloud2, .cloud2-duplicate", {
        x: "-100vw",
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        ".airplane-1",
        { x: "-10vw" },
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
    }
  }, [showSplash]);

  useEffect(() => {
    gsap.fromTo(
      ".message-box",
      { scale: 0.5, opacity: 0 },
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
      { opacity: 0, y: 100, x: 50, scale: 0.5 },
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
      <section className="Home-hero hero bg_pattern Paper_v2">
        <div className="clouds">
          <div className="cloud cloud1">
            <img src={Cloud1} alt="cloud1" />
          </div>
          <div className="cloud cloud1-duplicate">
            <img src={Cloud1} alt="cloud1-duplicate" />
          </div>
          <div className="cloud cloud2">
            <img src={Cloud2} alt="cloud2" />
          </div>
          <div className="cloud cloud2-duplicate">
            <img src={Cloud2} alt="cloud2-duplicate" />
          </div>
        </div>
        <div className="container Home-hero__text">
          <h1>
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
          <Button label="About me" onClick={() => navigate("/about")} />
        </div>

        <div className="profile-container">
          {!useGif ? (
            <video
              src={ProfileWebM}
              autoPlay
              loop
              muted
              playsInline
              className="profile-video"
              onCanPlayThrough={() => setUseGif(false)}
              onError={() => setUseGif(true)}
            />
          ) : (
            <img
              src={ProfileGIF}
              alt="Profile animation"
              className="profile-video"
            />
          )}
        </div>
      </section>

      <section className="message">
        <div className="message-airplane airplane-1">
          <img src={AirplaneIcon} alt="airplane-icon" />
        </div>
        <div className="container message-layout">
          <div className="message-box">
            <h2>Hi! I am Yuri, a brand designer</h2>
            <p>
              My studio's logo features a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Japanese_raccoon_dog"
                target="_blank"
                rel="noreferrer"
              >
                tanuki
              </a>
              , an animal unique to Japan. In Japanese folklore, tanuki are
              known for their adaptability and transformation skills. Like them,
              I bring versatility to branding and collaboration.
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

            {/* Project card component */}
            <ProjectCard />
            <div className="featured-btn">
              <ReadButton
                label="View More"
                onClick={() => {
                  navigate("/project");
                  window.scrollTo(0, 0);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
