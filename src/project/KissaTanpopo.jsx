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
import ProjectSlider from "../components/ProjectSlider.jsx";
import YouMayLike from "../components/YouMayLike.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";


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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function KissaTanpopo() {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = useState(false);

  const projectImages = [
    [slide1, slide2, slide3,slide4,slide5], 
    [slide6, slide7, slide8],
    [slide9, slide10, slide11, slide12],
  ];

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


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // 初回ロード時にチェック
    window.addEventListener("resize", checkMobile); // ウィンドウサイズ変更時に再チェック

    return () => window.removeEventListener("resize", checkMobile); // クリーンアップ
  }, []);


  const openWebsiteInNewTab = () => {
    window.open("/kissatanpopo/index.html", "_blank", "noopener,noreferrer");
  };

  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 1);
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
      title="Kissa Tanpopo Brand Identity"
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
          <ProjectSlider imageGroups={projectImages}/>
        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default KissaTanpopo;
