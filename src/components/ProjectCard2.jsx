import React from "react";
import { useNavigate } from "react-router-dom";
import ReadButton from "./ReadButton";
import styles from "../components/ProjectCard2.module.css";
import projectData from "../data/project.json";


function ProjectCard2() {

  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer}>
      {/* projectData loop. coming from json data */}
      {projectData.map((project) => (
        <div key={project.id} className={styles.card}>
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>{project.title}</h4>
            <p className={styles.cardGenre}>{project.genre}</p>

            {/* Chips also looped through */}
            <div className={styles.chipsContainer}>
              {project.chips.map((chip, index) => (
                <span key={index} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>

            <p className={styles.cardDescription}>{project.description}</p>

            {/* Read More */}
            <div className={styles.ReadButton}>
              <ReadButton label="Read More" pageLink={project.pageLink2} />
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
