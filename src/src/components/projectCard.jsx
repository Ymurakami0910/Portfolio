import React from "react";
import ReadButton from "./ReadButton";
import styles from "../components/projectCard.module.css"; // Assuming you're using CSS modules for styling
import projectData from "../data/project.json"; // Importing project data from the JSON file

function ProjectCard() {
  // Filter only the projects with id 1 and 2
  const filteredProjects = projectData.filter(
    (project) => project.id === 1 || project.id === 2
  );

  return (
    <div className={styles.cardContainer}>
      {/* Loop through the filtered projects */}
      {filteredProjects.map((project) => (
        <div key={project.id} className={styles.card}>
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>{project.title}</h4>
            <p className={styles.cardGenre}>{project.genre}</p>
            <p className={styles.cardDescription}>{project.description}</p>
            <ReadButton label="Read More" onClick={() => navigate("")} />
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
