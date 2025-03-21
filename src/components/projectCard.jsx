import React from "react";
import styles from "../components/projectCard.module.css";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json"; 

function ProjectCard() {
  const navigate = useNavigate();
  
  // takes out the only data from project data id 1 and 2
  const filteredProjects = projectData.filter(
    (project) => project.id === 1 || project.id === 2
  );

  return (
    <div className={styles.cardContainer}>
      {/* Loop through the filtered projects */}
      {filteredProjects.map((project) => (
        <div 
          key={project.id} 
          className={styles.card} 
          onClick={() => {
            navigate(`/${project.pageLink}`);
            window.scrollTo(0, 0); // ページ遷移後にスクロール位置をトップにする
          }}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>{project.title}</h4>
            <p className={styles.cardGenre}>{project.genre}</p>

            {/* chips map*/}
            <div className={styles.chipsContainer}>
              {project.chips.map((chip, index) => (
                <span key={index} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>

            <p className={styles.cardDescription}>{project.description}</p>
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

export default ProjectCard;
