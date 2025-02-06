import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// the third party that our class didn't cover
import { Typewriter } from "react-simple-typewriter";
// gsap 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Button from "../components/button";
import DLButton from "../components/dlButton";


// assets
import tanukiImage from "../assets/tanuki-2.png";
import Yuri1 from "../assets/Yuri-1.jpg";
import Yuri2 from "../assets/Yuri-2.png";
import Yuri3 from "../assets/Yuri-3.png";
import arrowIcon from "../assets/icons/arrow.png";
import aiIcon from "../assets/icons/ai.png";
import psIcon from "../assets/icons/ps.png";
import idIcon from "../assets/icons/id.png";
import aeIcon from "../assets/icons/ae.png";
import canvaIcon from "../assets/icons/canva.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";

function About() {

  // initialization of third packages 
  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);


  //  state that manage the flip cards 
  const [flipStates, setFlipStates] = useState([false, false, false]);

  // the data of flip cards that map through later
  const cardData = [
    {
      image: Yuri1,
      altText: "Yuri's photo 1",
      title: "I'm from Hokkaido, Japan!",
      description:
        " Growing up with beautiful nature and scenery, It's one of the sources of my inspiration.",
    },
    {
      image: Yuri2,
      altText: "Yuri's photo 2",
      title: "I worked as an airport lounge host!",
      description:
        "This gives me a broader, global perspective that allows me to enhance my design work now.",
    },
    {
      image: Yuri3,
      altText: "Yuri's photo 3",
      title: "Travelling is my passion",
      description:
        "I have travelled all over Japan. Trips always expand my perspective and deepen my insights, which I bring into every project.",
    },
  ];

  const flipPhoto = (index) => {
    // Toggle the flip state for the clicked card
    setFlipStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };


  // GSAP that is triggered by the scroll, based on a user's view point
  useEffect(() => {
    // Take the all of .fadeIn class and this effect will be applied by forEach 
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
            // view point value
            end: "top 30%", 
            scrub: true, 
            toggleActions: "play none none reverse",  
            // no repeat 
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="about-header curved">
        <div className="about-header__content container">
          <div className="about-header__text">
            <h1>
              {/* third package that applies a typing effect */}
              <Typewriter
                words={[
                  "Welcome to Yuri's Studio",
                  "Create your perfect brand",
                ]}
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
            <div className="about-header__button"><DLButton label="Resume" onClick={() => window.open('/Resume.pdf', '_blank')} /></div>
          </div>
          <div className="about-header__image">
            <img src={tanukiImage} alt="Tanuki Image" />
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container">
          <div className="about-cards">
            <div className="about-cards__text">
              <h2>Play cards to get to know me!</h2>
            </div>
            <div className="about-cards__wrap">
              {/* flip cards, the data is coming from above  */}
              {cardData.map((card, index) => (
                <div className="photo-container fadeIn" key={index}>
                  <div
                    className={`photo ${flipStates[index] ? "flipped" : ""}`} // Conditional class for flipped card
                    onClick={() => flipPhoto(index)} // Flip the card on click
                  >
                    <div className="photo-front">
                      <img src={card.image} alt={card.altText} />{" "}
                      {/* Display front image */}
                    </div>
                    <div className="photo-back">
                      <div className="about-cards__description">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-offer">
        <div className="about-offer__title">
          <h4>What I offer</h4>
          <div className="about-offer__content container">
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
                <img src={aeIcon} alt="Icon After effect" />
              </div>
              <div className="icon">
                <img src={idIcon} alt="Icon Indesign" />
              </div>
              <div className="icon">
                <img src={canvaIcon} alt="Icon Canva" />
              </div>
              <span></span>
              <div className="icon">
                <img src={htmlIcon} alt="Icon HTML" />
              </div>
              <div className="icon">
                <img src={cssIcon} alt="Icon CSS" />
              </div>
              <div className="icon">
                <img src={jsIcon} alt="Icon JS" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
