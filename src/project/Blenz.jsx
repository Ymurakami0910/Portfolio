import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";
import tag from "../components/title.module.css";

import ProjectOverview from "../components/ProjectOverview.jsx";
import FigmaEmbed from "../components/FigmaEmbed.jsx";
import ProjectIntro from "../components/ProjectIntro.jsx";
import ProjectBelt from "../components/ProjectBelt.jsx";
import ProjectTakeaways from "../components/ProjectTakeaways.jsx";
import YouMayLike from "../components/YouMayLike.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/CraftedCorners/Thumb.png";
import Min from "../assets/CraftedCorners/CraftedMin.png";

import Project2 from "../assets/CraftedCorners/Crafted-2.jpg";
import Project3 from "../assets/CraftedCorners/Crafted-3.jpg";
import Project4 from "../assets/CraftedCorners/Crafted-4.jpg";
import Project5 from "../assets/CraftedCorners/Crafted-5.jpg";

import slide1 from "../assets/CraftedCorners/1.jpg";
import slide2 from "../assets/CraftedCorners/2.jpg";
import slide3 from "../assets/CraftedCorners/3.jpg";
import slide4 from "../assets/CraftedCorners/4.jpg";
import slide5 from "../assets/CraftedCorners/5.jpg";
import slide6 from "../assets/CraftedCorners/6.jpg";
import slide7 from "../assets/CraftedCorners/7.jpg";
import slide8 from "../assets/CraftedCorners/8.jpg";
import slide9 from "../assets/CraftedCorners/9.jpg";
import slide10 from "../assets/CraftedCorners/10.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Celestial() {
  const [figmaUrl, setFigmaUrl] = useState(
    "https://embed.figma.com/design/H6L5Y8FBaVZzQ4Qn7xaoCk/Crafted-Corners?node-id=0-1&embed-host=share"
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // 初回ロード時にチェック
    window.addEventListener("resize", checkMobile); // ウィンドウサイズ変更時に再チェック

    return () => window.removeEventListener("resize", checkMobile); // クリーンアップ
  }, []);

  useEffect(() => {
    // belt  ^^--
    const beltImages = document.querySelector(".belt-container");

    const scrollAnimation = () => {
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        // Desktop, scrolling animation
        gsap.to(beltImages, {
          x: "-50%", // Horizontal
          duration: 50, // Speed
          repeat: -1, // loop
          ease: "linear",
        });
      } else {
        // Mobile, vertically stacked images with fade-in on scroll
        gsap.fromTo(
          ".belt-image",
          {
            opacity: 0,
            x: -50, // below
          },
          {
            opacity: 1,
            x: 0, //  to original position
            stagger: 0.2, // delay between images
            scrollTrigger: {
              trigger: ".belt-container",
              start: "top right",
              end: "bottom left",
              scrub: true,
              markers: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    // Call the scrollAnimation function
    scrollAnimation();
    window.addEventListener("resize", scrollAnimation); // Adjust when window is resized

    return () => window.removeEventListener("resize", scrollAnimation); // Cleanup
  }, []);

  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 3);
    setCurrentProject(project);

    // 他のプロジェクトをランダムに取得 (例: 2件)
    const randomItems = getRandomProjects(projectData, project.id, 4);
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
        This fictional campaign was developed as part of a group project with Sonya, Nancy, and Timmy. 
        I worked as the Project lead, Creative Manager and Graphic Designer, 
        coordinating tasks and maintaining a cohesive direction throughout the phases. 
        The campaign involved designing event posters, a digital ticket with an omamori motif, 
        two social media ads for Twitter/X, two promotional videos for Instagram, and a branded event webpage. 
        My contribution was providing a the style guide, logo and making posters."
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title="Iconic characters"
        description={`I created two characters that embody the brand’s friendly and inviting personality. These characters will be used in the app, marketing materials, and on the website to engage with customers. I sketched multiple concepts before finalizing designs that complemented the overall branding.
        `}
        imageSrcSmall={Min}
        imageSrcLarge={Project2}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
            <FigmaEmbed src={figmaUrl} />
          <div className="Project-Content__text">
            <h4>Asset and Banner Figma file</h4>
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

      <ProjectBelt
        images={[Project2, Project3, Project4, Project5]}
        isMobile={isMobile}
      />

      <ProjectTakeaways
        title="Takeaways"
        description={`
        The Crafted Corners project was a great opportunity to develop my skills in brand identity design and work in a multidisciplinary team. By designing the logo, style guide, and character designs, I learned how important it is to align visual elements with the personality of the brand to create a cohesive and inviting experience. It was also a great exercise for team communication; we managed to use Figma and Discord successfully to stay organized and make sure all ideas were taken into consideration.`}
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <h5>More about Crafted Corners</h5>
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
              <div>
                <img src={slide4} alt="Slide 4" />
              </div>
              <div>
                <img src={slide5} alt="Slide 5" />
              </div>
              <div>
                <img src={slide6} alt="Slide 6" />
              </div>
              <div>
                <img src={slide7} alt="Slide 7" />
              </div>
              <div>
                <img src={slide8} alt="Slide 8" />
              </div>
              <div>
                <img src={slide9} alt="Slide 9" />
              </div>
              <div>
                <img src={slide10} alt="Slide 10" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default Celestial;
