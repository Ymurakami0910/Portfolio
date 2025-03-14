import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";
import tag from "../components/title.module.css";

import ProjectOverview from "../components/ProjectOverview.jsx";
import ProjectIntro from "../components/ProjectIntro.jsx";
import ProjectBelt from "../components/ProjectBelt.jsx";
import ProjectVideo from "../components/projectVideo.jsx";
import ProjectTakeaways from "../components/ProjectTakeaways.jsx";
import YouMayLike from "../components/YouMayLike.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/Celestial/Thumb.png";
import Min from "../assets/Celestial/min.png";

import Project2 from "../assets/Celestial/celestial-2.jpg";
import Project3 from "../assets/Celestial/3.png";
import Project4 from "../assets/Celestial/celestial-4.jpg";
import Project5 from "../assets/Celestial/clesetial-5.png";
import Intro from "../assets/Celestial/intro.mp4";
import aeIcon from "../assets/icons/ae.png";

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
import ProjectSlider from "../components/ProjectSlider.jsx";

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
    const project = projectData.find((item) => item.id === 2);
    setCurrentProject(project);

    // 他のプロジェクトをランダムに取得 (例: 2件)
    const randomItems = getRandomProjects(projectData, project.id, 2);
    setRandomProjects(randomItems);
  }, [projectData]);
  
  const projectImages = [
    [
      slide2, slide4, slide5, slide6, slide7, slide8, 
      slide9, slide10, slide11, slide12, slide13, slide14, slide15
    ], 
    [
      slide18, slide19, slide20, slide21, slide22, slide23
    ]
  ];

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
        This fictional campaign was developed as part of a group project with Sonya, Nancy, and Timmy. 
        I worked as the Project lead, Creative Manager and Graphic Designer, 
        coordinating tasks and maintaining a cohesive direction throughout the phases. 
        The campaign involved designing event posters, a digital ticket with an omamori motif, 
        two social media ads for Twitter/X, two promotional videos for Instagram, and a branded event webpage. 
        My contribution was providing a the style guide, logo and making posters."
        chips={currentProject?.chips}
      />

      <ProjectIntro
        title="Unique Ticket Concept"
        description={`I have came up a concept of digital ticket that enhances the user experience. This is a QR code ticket that is inspired by
        an omamori, is a Japanese good luck charm that protects against bad luck or misfortune. There are different types of omamori 
        for various life events, like passing a test or getting married. These charms come in different shapes, 
        sizes, and prices, depending on their purpose.`}
        imageSrcSmall={Min}
        imageSrcLarge={Project2}
        imageAlt="Kissa Tanpopo Medium size cup yellow"
      />

      <ProjectVideo
        videoSrc={Intro}
        title="Event Introduction Video"
        description="I created a video with After Effects that features a starry background with a teacup silhouette masking the tea ceremony footage. It includes key information such as the event date, highlights of the delicious matcha, handcrafted sweets, and the availability of digital tickets."
      />

      <ProjectBelt
        images={[Project2, Project3, Project4, Project5]}
        isMobile={isMobile}
      />

      <ProjectTakeaways
        title="Takeaways"
        description={`
        The "Celestial Tea Ceremony" project allowed me to apply my skills of branding, graphic design, and video production within a collaborative team environment. Leading the creative direction and producing the key assets such as the style guide, event posters, and promotional videos were important in honing my design and project management abilities.
        This project also made me strong technically in Adobe After Effects, specifically in video editing and creating cool visual effects that gave magic to the campaign.
        The project at hand has helped me in not only enhance my skills of design and video production but also taught me the sense of a team and how project management works. Our final deliverables reflect not only individual skills but also our collaborative work that makes a strong brand identity for the event.`}
      />

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-slider ">
          <h5>Event details</h5>
          <ProjectSlider imageGroups={projectImages}/>
        </div>
      </section>

      <YouMayLike projects={randomProjects} />
    </>
  );
}

export default Celestial;
