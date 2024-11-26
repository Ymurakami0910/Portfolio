import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import tanukiImage from "../assets/tanuki-2.png";
import Yuri1 from "../assets/Yuri-1.jpg";
import arrowIcon from "../assets/icons/arrow.png";
import aiIcon from "../assets/icons/ai.png";
import psIcon from "../assets/icons/ps.png";
import aeIcon from "../assets/icons/ae.png";
import canvaIcon from "../assets/icons/canva.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const flipPhoto = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <section className="about-header curved">
        <div className="about-header__content container">
          <div className="about-header__text">
            <h1>
              <Typewriter
                words={["Welcome to Yuri's Studio", "Create your perfect brand"]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p>
              As a brand designer, I am happy to help you create a brand
              identity that resonates around the world. My adventures in life,
              including my study abroad experience, have taught me how to create
              brands that connect with people. Let's team up and create
              something great together!
            </p>
          </div>
          <div className="about-header__image">
            <img src={tanukiImage} alt="Tanuki Image" />
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container">
          <div className="about-cards">
            <h2>Play Cards to get to know me!</h2>
            <p>Flip</p>
            <div className="photo-container">
              <div
                className={`photo ${isFlipped ? "flipped" : ""}`}
                onClick={flipPhoto}
              >
                <div className="photo-front">
                  <img src={Yuri1} alt="Yuri's photo" />
                </div>
                <div className="photo-back">
                  <div className="description">
                    <p>ここに説明文が入ります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-offer">
        <div className="about-offer__title container">
          <h4>What I offer</h4>
          <div className="about-offer__content">
            <div className="about-offer_dropContainer">
              <div className="about-offer_drop">
                <input type="checkbox" id="drop1" className="drop-toggle" />
                <label htmlFor="drop1">
                  <div className="drop-title">
                    <h5>Diverse skill set for new media design</h5>
                    <img src={arrowIcon} alt="arrow" />
                  </div>
                </label>
                <div className="about-offer_dropDown">
                  <p>
                    With the skills I’ve built at BCIT, I’m ready to meet the
                    dynamic needs of today's industry.
                  </p>
                </div>
              </div>

              <div className="about-offer_drop">
                <input type="checkbox" id="drop2" className="drop-toggle" />
                <label htmlFor="drop2">
                  <div className="drop-title">
                    <h5>Global communication</h5>
                    <img src={arrowIcon} alt="arrow" />
                  </div>
                </label>
                <div className="about-offer_dropDown">
                  <p>
                    I understand diverse cultures and people through my
                    experience studying abroad and working at an airport. I’m
                    comfortable collaborating with clients and teams from
                    various backgrounds, bringing an inclusive and open-minded
                    approach to every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-offer__icons">
              <div className="icon">
                <img src={aiIcon} alt="Icon Illustratior" />
              </div>
              <div className="icon">
                <img src={psIcon} alt="Icon Photoshop" />
              </div>
              <div className="icon">
                <img src={aeIcon} alt="Icon AE" />
              </div>
              <div className="icon">
                <img src={canvaIcon} alt="Icon Canva" />
              </div>
              <div className="icon">
                <img src={htmlIcon} alt="Icon HTML" />
              </div>
              <div className="icon">
                <img src={cssIcon} alt="Icon CSS" />
              </div>
              <div className="icon">
                <img src={jsIcon} alt="Icon JS" />
              </div>
              <div className="about-offer__button">
                <Button label="Resume" onClick={() => navigate("/resume")} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
