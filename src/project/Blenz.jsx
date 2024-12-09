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
import Kissa1min from "../assets/KissaTanpopo/Kissa--1.jpg";
import Kissa1lg from "../assets/KissaTanpopo/Kissa-1-lg.jpg";
import Kissa2 from "../assets/KissaTanpopo/kissa-2.jpg";
import Kissa3 from "../assets/KissaTanpopo/kissa-3.jpg";
import Kissa4 from "../assets/KissaTanpopo/kissa-4.jpg";
import Kissa5 from "../assets/KissaTanpopo/kissa-5.jpg";
import Kissa6 from "../assets/KissaTanpopo/Kissa-6.png";

import slide1 from "../assets/KissaTanpopo/slide1.jpg";
import slide2 from "../assets/KissaTanpopo/slide2.jpg";
import slide3 from "../assets/KissaTanpopo/slide3.jpg";
import slide4 from "../assets/KissaTanpopo/slide4.jpg";
import slide5 from "../assets/KissaTanpopo/slide5.jpg";
import slide6 from "../assets/KissaTanpopo/slide6.jpg";
import slide7 from "../assets/KissaTanpopo/slide7.jpg";
import slide8 from "../assets/KissaTanpopo/slide8.jpg";
import slide9 from "../assets/KissaTanpopo/slide9.jpg";
import slide10 from "../assets/KissaTanpopo/slide10.jpg";
import slide11 from "../assets/KissaTanpopo/slide11.jpg";
import slide12 from "../assets/KissaTanpopo/slide12.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Blenz() {
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
      title="Blenz Coffee Redesign"
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
        imageSrcSmall={Kissa1min}
        imageSrcLarge={Kissa1lg}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      
      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__website">
          <img
            className="fadeIn"
            src={Kissa6}
            alt="desktop kissa tanpopo website"
          />
          <Button
            className="fadeIn"
            label="View Brand Website"
            onClick={openWebsiteInNewTab}
          />
        </div>
      </section>

      <ProjectBelt
        images={[Kissa2, Kissa3, Kissa4, Kissa5]}
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
          <h5>Brand Book</h5>
          <div>
            <Slider className="" {...settings}>
              <div>
                <img src={slide1} alt="Slide 1" />
              </div>
              <div>
                <img src={slide2} alt="" />
              </div>
              <div>
                <img src={slide3} alt="" />
              </div>
              <div>
                <img src={slide4} alt="" />
              </div>
              <div>
                <img src={slide5} alt="" />
              </div>
            </Slider>
            <Slider {...settings}>
              <div>
                <img src={slide6} alt="Slide 6" />
              </div>
              <div>
                <img src={slide7} alt="" />
              </div>
              <div>
                <img src={slide8} alt="" />
              </div>
            </Slider>
            <Slider {...settings}>
              <div>
                <img src={slide9} alt="Slide 1" />
              </div>
              <div>
                <img src={slide10} alt="" />
              </div>
              <div>
                <img src={slide11} alt="" />
              </div>
              <div>
                <img src={slide12} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default Blenz;