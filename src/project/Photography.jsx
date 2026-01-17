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
import ProjectBullet from "../components/ProjectBullet.jsx";

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
import slide2 from "../assets/Boba/2.png";
import slide3 from "../assets/Boba/3.png";
import slide4 from "../assets/Boba/4.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Photography() {


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
    const project = projectData.find((item) => item.id === 6);
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
        title="Miniature Mystique"
      />

      <ProjectOverview
        title="Overview"
        description="
        A fairy meets a mysterious rabbit under a huge mossy tree. Inspired by Arrietty and Rococo art, 
        this photo collage blends real nature shots from North Vancouver with a dreamy, fantasy twist.
         Made in PhotoShop and featuring my friend Hilary (@Hil_i_21).
        "
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title=" A Mysterious Encounter in the Forest"
        description={`The piece portrays a surreal encounter between a quiet rabbit and a fairy played by Hilary. 
        The visuals draw inspiration from Ghibli-style storytelling and delicate European art, 
        blending elements of collage and photo manipulation. All images were taken in North Vancouver and edited in Photoshop.
        `}
        imageSrcSmall={Min}
        imageSrcLarge={Project2}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      <ProjectBullet
          title="Design Problems"
          items={[
            "Low App Rating: The app's low rating indicates widespread user dissatisfaction, likely stemming from the mentioned UI issues and problems with the pre-order system.",
            "UI Misalignment with the Brand Concept:The app’s user interface may be outdated, confusing, or unattractive, leading to a frustrating user experience and failing to align with the brand's concept.",
            "Inefficient Pre-order System:The pre-order system, a key feature for users, might be cumbersome and not user-friendly. Improvements are needed, particularly in the customization options, to enhance its functionality.",
          ]}
        />
        <ProjectBullet
          title="Target audience"
          items={[
           "Age 18-30",
           "Young and Busy Students:These users are often juggling classes, work, and social activities. They value the convenience of pre-ordering and quick pickups, which help them save time during their hectic schedules.",
           "Unsatisfied Customers from Other Coffee Chains, Who Love Local Coffee Chains:These individuals are frustrated by the often crowded and busy nature of big coffee chain stores. They seek a more relaxed and stress-free experience and are drawn to Blenz Coffee's strong brand identity, which reflects a commitment to quality and a welcoming atmosphere, making them feel valued and appreciated.",
           "Customization Enthusiasts:Those who love to personalize their drinks will appreciate the app's extensive customization options, enabling them to create their perfect beverage."
          ]}
        />

      
      <ProjectBelt
        images={[Project2, Project3, Project4, Project5]}
        isMobile={isMobile}
      />

      <ProjectTakeaways
        title="Takeaways"
        description={`
        This project was a fun and challenging way to explore storytelling through photo manipulation. Using natural light, layered textures, and soft visual effects, I tried to create a world that felt both magical and believable. 
        Working with Hilary—who played the fairy and did her own makeup—made the visuals even more special. Editing the photos helped me understand more about mood, 
        depth, and composition. It also inspired me to keep making more mixed-media work that blends real life with a touch of fantasy. 
        `}
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <h5>Photo Gallery</h5>
          <ProjectSlider imageGroups={projectImages}/>

        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default Photography;
