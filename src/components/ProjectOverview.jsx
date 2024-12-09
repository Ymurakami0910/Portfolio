import React from "react";
import styles from "./ProjectCard2.module.css";

const ProjectOverview = ({ title, description, chips }) => {
  return (
    <section className="Project-overview Paper_v2 bg_pattern">
      <div className="container">
        <div className="fadeIn Project-overview__box">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.chipsContainer}>
            {chips?.map((chip, index) => (
              <span className={styles.chip} key={index}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
