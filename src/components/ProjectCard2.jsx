import React from "react";
import { useNavigate } from "react-router-dom";
import ReadButton2 from "../components/readButton2";
import styles from "../components/ProjectCard2.module.css";
import projectData from "../data/project.json";

function ProjectCard2({ filter }) {
  const navigate = useNavigate();

  // フィルター条件に一致するプロジェクトをフィルタリング
  const filteredProjects = projectData.filter((project) => {
    if (filter === '') return true; // フィルターがない場合は全てのプロジェクトを表示
    return project.chips.includes(filter); // チップにフィルター条件が含まれている場合に表示
  });

  return (
    <div className={styles.cardContainer}>
      {filteredProjects.map((project) => (
        <div key={project.id} className={styles.card}>
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>{project.title}</h4>
            <p className={styles.cardGenre}>{project.genre}</p>

            {/* チップを表示 */}
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
              <ReadButton2 label="Read More" pageLink={project.pageLink2} />
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
