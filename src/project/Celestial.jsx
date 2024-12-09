import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";
import tag from "../components/title.module.css";

import ProjectOverview from "../components/ProjectOverview.jsx";
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

import Thumb from "../assets/KissaTanpopo/KissaStore.png";
import CelestialMin from "../assets/Celestial/min.png";

import Celestial2 from "../assets/Celestial/celestial-2.jpg";

import Kissa3 from "../assets/KissaTanpopo/kissa-3.jpg";
import Kissa4 from "../assets/KissaTanpopo/kissa-4.jpg";
import Kissa5 from "../assets/KissaTanpopo/kissa-5.jpg";
import Intro from "../assets/Celestial/intro.mp4";

import slide2 from "../assets/Celestial/2.jpg";
import slide4 from "../assets/Celestial/4.jpg";
import slide5 from "../assets/Celestial/5.jpg";
import slide6 from "../assets/Celestial/6.jpg";
import slide7 from "../assets/Celestial/7.jpg";
import slide8 from "../assets/Celestial/8.jpg";
import slide9 from "../assets/Celestial/9.jpg";
import slide10 from "../assets/Celestial/10.jpg";
import slide11 from "../assets/Celestial/11.jpg";
import slide12 from "../assets/Celestial/12.jpg";
import slide13 from "../assets/Celestial/13.jpg";
import slide14 from "../assets/Celestial/14.jpg";
import slide15 from "../assets/Celestial/15.jpg";
import slide18 from "../assets/Celestial/18.jpg";
import slide19 from "../assets/Celestial/19.jpg";
import slide20 from "../assets/Celestial/20.jpg";
import slide21 from "../assets/Celestial/21.jpg";
import slide22 from "../assets/Celestial/22.jpg";
import slide23 from "../assets/Celestial/23.jpg";
import slide24 from "../assets/Celestial/24.jpg";
import slide25 from "../assets/Celestial/25.jpg";
import slide26 from "../assets/Celestial/26.jpg";
import slide27 from "../assets/Celestial/27.jpg";
import slide28 from "../assets/Celestial/28.jpg";
import slide29 from "../assets/Celestial/29.jpg";
import slide30 from "../assets/Celestial/30.jpg";
import slide31 from "../assets/Celestial/31.jpg";
import slide32 from "../assets/Celestial/32.jpg";
import slide33 from "../assets/Celestial/33.jpg";
import slide34 from "../assets/Celestial/34.jpg";
import slide35 from "../assets/Celestial/35.jpg";
import slide36 from "../assets/Celestial/36.jpg";
import slide37 from "../assets/Celestial/37.jpg";
import slide38 from "../assets/Celestial/38.jpg";
import slide39 from "../assets/Celestial/39.jpg";

import slide40 from "../assets/Celestial/40.jpg";
import slide41 from "../assets/Celestial/41.jpg";
import slide49 from "../assets/Celestial/49.jpg";
import slide50 from "../assets/Celestial/50.jpg";
import slide51 from "../assets/Celestial/51.jpg";
import slide52 from "../assets/Celestial/52.jpg";
import slide53 from "../assets/Celestial/53.jpg";
import slide54 from "../assets/Celestial/54.jpg";
import slide55 from "../assets/Celestial/55.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Celestial() {
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

  const openWebsiteInNewTab = () => {
    window.open("/kissatanpopo/index.html", "_blank", "noopener,noreferrer");
  };

  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 2);
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
        title="Celestial Tea Ceremony Brand Identity"
      />

      <ProjectOverview
        title="Overview"
        description="
        I had a fun project of creating the full brand identity for Kissa
        Tanpopo, a nostalgic, Japanese inspired dessert café. The goal was
        to mix modern and retro vibes to give the brand a welcoming,
        playful feel. I started by designing the logo, choosing the
        colors, and picking the typography that fit the vibe. I also built
        a single responsive page website that works beautifully across all
        devices."
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title="Discover a Corner of Japanese Nostalgia"
        description={`kissa tanpopo, the word Kissa means cafe, and the word Tanpopo means dandelion. 
              It blends traditional Japanese culture with a modern café vibe, creating a relaxing space for everyone to enjoy. 
              Perfect for those looking for a taste of Japan in a warm and welcoming setting.`}
        imageSrcSmall={CelestialMin}
        imageSrcLarge={Celestial2}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__video">
          <video width="640" height="360" controls autoPlay muted>
            <source src="/assets/Celestial/intro.mp4" type="video/mp4" />
          </video>

          <div className="Project-Content__text">
            <p>this is my aftereffect project</p>
          </div>
        </div>
      </section>

      <ProjectBelt
        images={[ Celestial2,Kissa3, Kissa4, Kissa5]}
        isMobile={isMobile}
      />

      <ProjectTakeaways
        title="Takeaways"
        description={`
        The key part of this project was the capturing of a Japanese-inspired café, 
        bringing it across authentically and in an engaging way to a mass audience. 
        I wedded traditional Japanese elements of motifs and retro typography with modern design trends, 
        alive in a brand that speaks both to local and international customers. 
        This approach allowed me to use cultural storytelling as a powerful design strategy.`}
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <h5>Event details</h5>
          <div>
            <Slider className="" {...settings}>
              <div>
                <img src={slide2} alt="" />
              </div>
              <div>
                <img src={slide4} alt="" />
              </div>
              <div>
                <img src={slide5} alt="" />
              </div>
              <div>
                <img src={slide6} alt="" />
              </div>
              <div>
                <img src={slide7} alt="" />
              </div>
              <div>
                <img src={slide8} alt="" />
              </div>
              <div>
                <img src={slide9} alt="" />
              </div>
              <div>
                <img src={slide10} alt="" />
              </div>
              <div>
                <img src={slide11} alt="" />
              </div>
              <div>
                <img src={slide13} alt="" />
              </div>
              <div>
                <img src={slide14} alt="" />
              </div>
              <div>
                <img src={slide15} alt="" />
              </div>
            </Slider>
            <Slider {...settings}>
              <div>
                <img src={slide18} alt="" />
              </div>
              <div>
                <img src={slide19} alt="" />
              </div>
              <div>
                <img src={slide20} alt="" />
              </div>
              <div>
                <img src={slide21} alt="Slide 21" />
              </div>
              <div>
                <img src={slide22} alt="Slide 22" />
              </div>
              <div>
                <img src={slide23} alt="Slide 23" />
              </div>
              <div>
                <img src={slide24} alt="Slide 24" />
              </div>
              <div>
                <img src={slide25} alt="Slide 25" />
              </div>
              <div>
                <img src={slide26} alt="Slide 26" />
              </div>
              <div>
                <img src={slide27} alt="Slide 27" />
              </div>
              <div>
                <img src={slide28} alt="Slide 28" />
              </div>
              <div>
                <img src={slide29} alt="Slide 29" />
              </div>
              <div>
                <img src={slide30} alt="Slide 30" />
              </div>
              <div>
                <img src={slide31} alt="Slide 31" />
              </div>
              <div>
                <img src={slide32} alt="Slide 32" />
              </div>
              <div>
                <img src={slide33} alt="Slide 33" />
              </div>
              <div>
                <img src={slide34} alt="Slide 34" />
              </div>
              <div>
                <img src={slide35} alt="Slide 35" />
              </div>
              <div>
                <img src={slide36} alt="Slide 36" />
              </div>
              <div>
                <img src={slide37} alt="Slide 37" />
              </div>
              <div>
                <img src={slide38} alt="Slide 38" />
              </div>
              <div>
                <img src={slide39} alt="Slide 39" />
              </div>
            </Slider>
            <Slider {...settings}>
              <div>
                <img src={slide40} alt="Slide 1" />
              </div>
              <div>
                <img src={slide41} alt="Slide 2" />
              </div>
              <div>
                <img src={slide49} alt="Slide 3" />
              </div>
              <div>
                <img src={slide50} alt="Slide 4" />
              </div>
              <div>
                <img src={slide51} alt="Slide 5" />
              </div>
              <div>
                <img src={slide52} alt="Slide 7" />
              </div>
              <div>
                <img src={slide53} alt="Slide 8" />
              </div>
              <div>
                <img src={slide54} alt="Slide 9" />
              </div>
              <div>
                <img src={slide55} alt="Slide 10" />
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
