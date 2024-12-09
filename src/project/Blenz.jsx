import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";

import tag from "../components/title.module.css";

import ProjectOverview from "../components/ProjectOverview.jsx";
import FigmaEmbed from "../components/FigmaEmbed.jsx";
import ProjectIntro from "../components/ProjectIntro.jsx";
import ProjectBullet from "../components/ProjectBullet.jsx";
import ProjectTakeaways from "../components/ProjectTakeaways.jsx";
import YouMayLike from "../components/YouMayLike.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/Blenz/Thumb.png";



import slide1 from "../assets/Blenz/Blenz-1.jpg";
import Min from "../assets/Blenz/BlenzMin.jpg";


import slide2 from "../assets/Blenz/screen-1.jpg";
import slide3 from "../assets/Blenz/screen-2.jpg";
import slide4 from "../assets/Blenz/screen-3.jpg";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Celestial() {
  const [figmaUrl, setFigmaUrl1] = useState(
    "https://embed.figma.com/design/WmAMRB7WRnxVUY1nG94fFu/Wireframe?node-id=0-1&embed-host=share"
  );
  const [figmaUrl2, setFigmaUrl2] = useState(
    "https://embed.figma.com/design/6PFzjDcMxSbgMrD13zXvnz/Low-fiderity?node-id=0-1&embed-host=share"
  );
  const [figmaUrl3, setFigmaUrl3] = useState(
    "https://embed.figma.com/design/YE1D9cScbAxmwComVuJfqs/High-fiderity?node-id=0-1&embed-host=share"
  );
  gsap.registerPlugin(ScrollTrigger);

  const getRandomProjects = (projectData, excludeId, count) => {
    const filteredProjects = projectData.filter(
      (item) => item.id !== excludeId
    );
    const shuffled = [...filteredProjects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

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

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-next-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    infinite: true, // 無限スクロール
    speed: 400, // アニメーション速度 (ms)
    slidesToShow: 3, // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 自動再生間隔 (ms)
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile devices (768px or smaller)
        settings: {
          slidesToShow: 1, // Show one slide
          slidesToScroll: 1, // Scroll one slide at a time
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 1024, // Tablets (1024px or smaller)
        settings: {
          slidesToShow: 2, // Show two slides
          slidesToScroll: 1,
          pauseOnFocus: true,
        },
      },
    ],
  };
  const [isMobile, setIsMobile] = useState(false);

  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 4);
    setCurrentProject(project);

    // 他のプロジェクトをランダムに取得 (例: 2件)
    const randomItems = getRandomProjects(projectData, project.id, 2);
    setRandomProjects(randomItems);
  }, [projectData]);

  return (
    <>
      <ProjectHeader
        backgroundClass="bg_pattern"
        imageSrc={Thumb}
        imageAlt="masking image"
        title="Blenz App Coffee Redesign"
      />

      <ProjectOverview
        title="Overview"
        description="
        This project aimed to the Blenz Coffee mobile app 
        to focus more on user experience, mainly 
        its pre-ordering system, and enhances overall 
        usability and visual design. The idea was to design a 
        more intuitive interface based on UX principles, such as user research, 
        wireframing, and prototyping.
       "
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title="About the Brand"
        description={`
        Blenz Coffee is a well-known Canadian coffee chain that was established in Vancouver, British Columbia, in 1992. Over the years, it has expanded to include over 60 locations throughout the Greater Vancouver Area and beyond.
        `}
        imageSrcSmall={Min}
        imageSrcLarge={slide1}
        imageAlt="Blenz Coffee cup"
      />
            <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <div className="Project-slider__text">
          <h3>About the app</h3>
          <p>The Blenz Coffee app allows users to place orders conveniently, earn loyalty points, and receive exclusive offers directly on their phones. With the app, customers can browse the full menu, customize their drinks, and choose a pickup time that fits their schedule. The app also tracks purchases, rewarding users with points that can be redeemed for discounts or free items.</p>
          </div>
          <div>
            <Slider {...settings}>
              <div>
                <img src={slide1} alt="Slide 1" />
              </div>
              <div>
                <img src={slide2} alt="Slide 2" />
              </div>
              <div>
                <img src={slide3} alt="Slide 3" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <FigmaEmbed src={figmaUrl} />
          <div className="Project-Content__text">
            <h4>Wireframe</h4>
            <p>
              Usually, I start my design process with sketches to brainstorm and
              visualize my ideas. However, for this project, I decided to take a
              different approach. Instead of just sketching, I created a
              detailed wireframe. This allowed me to go beyond basic mockups and build a
              more interactive and refined design directly in Figma
            </p>
          </div>
        </div>
        <ProjectBullet
          title="User tasks"
          description="After creating the wireframe, I moved forward to the prototyping based on the user tasks identified through the User scenario."
          items={[
            "Sign Up: Create an account on the app using the Google ACC",
            "Navigate to Order: Click the Order Now button to start the ordering process",
            "Select the Location: Choose Blanz on Waterfront & Howe St location",
            "Select Coffee: Choose the Coffee, Colombian Sunrise Blend from the menu",
            "Customize Order: Add Soy milk and Add 1 extra shot of espresso",
            "Proceed to Checkout: Review the order and Select a pickup time for 10 minutes later",
            "Complete Payment: Check out using Apple Pay"
          ]}
        />
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <FigmaEmbed src={figmaUrl2} />
          <div className="Project-Content__text">
            <h4>Low Fiderity Figma file</h4>
            <p>
              I created a video with Aftereffect that features a starry
              background with a teacup silhouette masking the tea ceremony
              footage. It includes key information such as the event date,
              highlights of the delicious matcha, handcrafted sweets, and the
              availability of digital tickets.
            </p>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <FigmaEmbed src={figmaUrl3} />
          <div className="Project-Content__text">
            <h4>High Fiderity Figma file</h4>
            <p>
              I created a video with Aftereffect that features a starry
              background with a teacup silhouette masking the tea ceremony
              footage. It includes key information such as the event date,
              highlights of the delicious matcha, handcrafted sweets, and the
              availability of digital tickets.
            </p>
          </div>
        </div>
      </section>

      <ProjectTakeaways
        title="Takeaways"
        description={`
        Through this project, I realized how important it is to continually refine the design based on user feedback. Even though I use design principles, users do not understand it theoretically, but visually and in actual use of the application. I learned that the key to future UI/UX designers is how to design with the user-first approach.
        `}
      />



      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default Celestial;
