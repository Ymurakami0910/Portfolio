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
import ProjectSlider from "../components/ProjectSlider.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/Boba/Thumb.jpg";
import Min from  "../assets/Boba/BobaThumb.jpg";

import Project2 from "../assets/Boba/BobaThumb.jpg";
import Project3 from "../assets/Boba/B2.jpg";
import Project4 from "../assets/Boba/B3.png";
import Project5 from "../assets/Boba/Thumb.jpg";

import slide1 from "../assets/Boba/1.png";
import slide2 from "../assets/boba/2.png";
import slide3 from "../assets/Boba/3.png";
import slide4 from "../assets/Boba/4.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CraftedCorners() {


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


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // 初回ロード時にチェック
    window.addEventListener("resize", checkMobile); // ウィンドウサイズ変更時に再チェック

    return () => window.removeEventListener("resize", checkMobile); // クリーンアップ
  }, []);


  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 5);
    setCurrentProject(project);

    // 他のプロジェクトをランダムに取得 (例: 2件)
    const randomItems = getRandomProjects(projectData, project.id, 2);
    setRandomProjects(randomItems);
  }, [projectData]);

  const projectImages = [
    [slide1, slide2, slide3,slide4], 
  ];

  return (
    <>
      <ProjectHeader
        backgroundClass="bg_pattern"
        imageSrc={Thumb}
        imageAlt="masking image"
        title="Shear Delight Boba"
      />

      <ProjectOverview
        title="Overview"
        description="
        A cozy, sheep-themed boba store concept with cute custom cup designs and collectible merch. 
        We’re creating a fun brand that blends physical and digital items like stamp cards, posters, 
        and more.Mainly targeting teens and young adults (12–30) who love all things cute, with a secondary 
        focus on kids and foodie influencers who enjoy photogenic drinks."
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title=" A Playful Brand for All Ages"
        description={`The sheep character and logo are designed to be instantly lovable across both digital and physical worlds — from adorable merch and stickers to social media posts that pop. The brand embraces current trends and connects with a wide audience, from teens and young adults to kids and boba-loving influencers.
        `}
        imageSrcSmall={Min}
        imageSrcLarge={Project2}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      {/* <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <div className="Project-Content__text">
            <h4>Asset and Banner Figma file</h4>
            <p>
            I have designed four digital banners in different sizes to download the app. 
            Each was designed with good color contrast so it could be viewed more strongly on every device. 
            You can check the assets and completed data here:
            </p>
          </div>
        </div>
      </section> */}
    
      <ProjectBelt
        images={[Project2, Project3, Project4, Project5]}
        isMobile={isMobile}
      />

      <ProjectTakeaways
        title="Takeaways"
        description={`
        This project showed how a cute sheep character can bring charm and warmth to a brand, making it more approachable for a wide audience. I focused on creating designs that work both digitally and physically — from stamp cards to custom cups — adding a sense of fun and collectibility. By keeping the visuals soft and friendly, the brand naturally appeals to people of all ages, from teens to kids and even foodie influencers.
        `}
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <h5>More about Crafted Corners</h5>
          <ProjectSlider imageGroups={projectImages}/>

        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default CraftedCorners;
