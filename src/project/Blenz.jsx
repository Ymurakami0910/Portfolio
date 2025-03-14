import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";

import tag from "../components/title.module.css";

import ProjectHeader from "../components/ProjectHeader.jsx";
import ProjectOverview from "../components/ProjectOverview.jsx";
import ProjectPhase from "../components/projectPhase.jsx";
import FigmaEmbed from "../components/FigmaEmbed.jsx";
import ProjectIntro from "../components/ProjectIntro.jsx";
import ProjectBullet from "../components/ProjectBullet.jsx";
import ProjectVideo from "../components/projectVideo.jsx";
import ProjectTakeaways from "../components/ProjectTakeaways.jsx";
import ProjectSlider from "../components/ProjectSlider.jsx";
import YouMayLike from "../components/YouMayLike.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import Thumb from "../assets/Blenz/Thumb.png";

import slide1 from "../assets/Blenz/Blenz-1.jpg";
import Min from "../assets/Blenz/BlenzMin.jpg";
import video from "../assets/Blenz/video.mp4";

import slide2 from "../assets/Blenz/screen-1.jpg";
import slide3 from "../assets/Blenz/screen-2.jpg";
import slide4 from "../assets/Blenz/screen-3.jpg";

import slide5 from "../assets/Blenz/user1.jpg";
import slide6 from "../assets/Blenz/user2.jpg";
import slide7 from "../assets/Blenz/user3.jpg";


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

  const phases = [
    {
      title: "Research",
      items: [
        "User surveys",
        "Competitive analysis",
        "Design Problem",
        "Target Audience",
      ],
    },
    {
      title: "Ideation",
      items: [
        "Persona",
        "User scenario",
        "Empathy map",
        "Journey map",
        "User Flow",
        "Mid-fi Wireframe",
      ],
    },
    {
      title: "Prototype",
      items: [
        "Mid-fi prototype",
        "User testing 1",
        "Discussion with the participants",
      ],
    },
    {
      title: "Visualization",
      items: [
        "The final design for all layouts",
        "Hi-fi interactive prototype",
      ],
    },
    {
      title: "User Testing",
      items: [
        "User Testing 2",
        "Result Summary",
        "Reflection about the project",
      ],
    },
  ];
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

  const projectImages = [
    [slide2, slide3,slide4], 
  ];
  const projectImages2 = [
    [slide5, slide6,slide7], 
  ];

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
            <p>
              The Blenz Coffee app allows users to place orders conveniently,
              earn loyalty points, and receive exclusive offers directly on
              their phones. With the app, customers can browse the full menu,
              customize their drinks, and choose a pickup time that fits their
              schedule. The app also tracks purchases, rewarding users with
              points that can be redeemed for discounts or free items.
            </p>
          </div>
          <div>
          <ProjectSlider imageGroups={projectImages}/>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-scope">
        <h3>Scope of Project</h3>
        <div className="Project-scope__timeline">
        {phases.map((phase, index) => (
          <ProjectPhase key={index} title={phase.title} items={phase.items} />
        ))}
      </div>
        </div>
    </section>
    
      <section className="Paper_v2 bg_pattern">
      <div className="container Project-slider">
      <div className="Project-slider__tag">
        <FontAwesomeIcon icon={faUser} size="2x" color="#205989" />
            <h3>Targeted user</h3>
          </div>
          <ProjectSlider imageGroups={projectImages2}/>
          </div>
      </section>

      <section className="Paper_v2 bg_pattern">
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
              detailed wireframe. This allowed me to go beyond basic mockups and
              build a more interactive and refined design directly in Figma
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
            "Complete Payment: Check out using Apple Pay",
          ]}
        />
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <FigmaEmbed src={figmaUrl2} />
          <div className="Project-Content__text">
            <h5>Low Fiderity Figma file</h5>
            <p></p>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-content__figma">
          <FigmaEmbed src={figmaUrl3} />
          <div className="Project-Content__text">
            <h5>High Fiderity Figma file</h5>
            <p></p>
          </div>
        </div>
      </section>

      <ProjectVideo
        videoSrc={video}
        title="Prototype Video"
        description="This prototype is thoughtfully applied the insights from the testing!"
      />

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
