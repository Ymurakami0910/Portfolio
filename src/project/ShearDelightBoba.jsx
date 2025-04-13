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
import ProjectSlider from "../components/ProjectSlider.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/Boba/Thumb.jpg";
import Min from "../assets/Boba/Thumb.jpg";

import Project2 from "../assets/Boba/BobaThumb.jpg";
import Project3 from "../assets/CraftedCorners/Crafted-3.jpg";
import Project4 from "../assets/CraftedCorners/Crafted-4.jpg";
import Project5 from "../assets/CraftedCorners/Crafted-5.jpg";

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
        Crafted Corners, is a collaborative group project focused on developing an app platform that offers an online home decor e-commerce platform. 
        I contributed to creating a brand identity, emphasizing team collaboration. 
        I worked alongside Suin Tina Timmy and Sam Park, using the waterfall methodology 
        for project management in ensuring structured progress through the project phases."
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
            I have designed four digital banners in different sizes to download the app. 
            Each was designed with good color contrast so it could be viewed more strongly on every device. 
            You can check the assets and completed data here:
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
          <ProjectSlider imageGroups={projectImages}/>

        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default CraftedCorners;
