import React from "react";
import { useNavigate } from "react-router-dom";
import ReadButton2 from "../components/readButton2";
import styles from "../components/ProjectCard2.module.css";

import ImageWithPlaceholder from "./ImageWithPlaceholder";
import projectData from "../data/project.json";

import aiIcon from "../assets/icons/ai.png";
import psIcon from "../assets/icons/ps.png";
import idIcon from "../assets/icons/id.png";
import aeIcon from "../assets/icons/ae.png";
import figmaIcon from "../assets/icons/figma.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import TanukiSketch from "../assets/TanukiSketch.png";

import Sketch1 from "../assets/Sketch1.png";
import Sketch2 from "../assets/Sketch2.png";
import Sketch3 from "../assets/Sketch3.png";
import Sketch4 from "../assets/Sketch4.png";

// Create a map of chips to icons
const chipIcons = {
  Indesign: idIcon,
  Illustrator: aiIcon,
  PhotoShop: psIcon,
  "After Effect": aeIcon,
  Figma: figmaIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  JS: jsIcon,
  "Group Project": null, // No icon for this
  "UI/UX": null, // No icon for this
};

const sketchImages = [Sketch1, Sketch2, Sketch3, Sketch4];

function ProjectCard2({ filter }) {
  const navigate = useNavigate();

  // Filter projects based on selected chip
  const filteredProjects = projectData.filter((project) => {
    if (filter === "") return true; // Show all projects if no filter is selected
    return project.chips.includes(filter); // Show project if the chip includes the filter
  });

  // Handle click to navigate to the project page
  const handleCardClick = (projectPageLink) => {
    if (window.innerWidth >= 768) {
      // Desktop: Click anywhere to navigate
      navigate(projectPageLink);
    }
  };

  

  return (
    <div className={styles.cardContainer}>
      {filteredProjects.map((project,index) => (
        <div
          key={project.id}
          className={styles.card}
          onClick={() => handleCardClick(project.pageLink2)} // Click anywhere to navigate on desktop
        >
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardGenre}>{project.genre}</p>

            {/* Display chips with icons and text */}
            <div className={styles.chipsContainer}>
              {project.chips.map((chip, index) => (
                <span key={index} className={styles.chip}>
                  {chipIcons[chip] ? (
                    <>
                      <img
                        src={chipIcons[chip]}
                        alt={chip}
                        className={styles.chipIcon}
                      />
                      <span className={styles.chipText}>{chip}</span>
                    </>
                  ) : (
                    <span className={styles.chipText}>{chip}</span>
                  )}
                </span>
              ))}
            </div>

            <p className={styles.cardDescription}>{project.description}</p>

            {/* Read More Button */}
            <div className={styles.ReadButton}>
              <ReadButton2 label="Read More" pageLink={project.pageLink2} />
            </div>
            <div className={styles.sketchWrapper}>
              <img
                src={sketchImages[index % sketchImages.length]}
                alt={`Sketch ${index + 1}`}
                className={styles.sketchImage}
              />
            </div>
          </div>
          <div className={styles.cardImageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.cardImage}
            />
          </div>
        </div>
      ))}

    </div>
  );
}

export default ProjectCard2;
