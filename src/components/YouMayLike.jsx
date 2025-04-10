import React from "react";
import Button from "./button.jsx";
import styles from "../components/ProjectCard2.module.css";

const YouMayLike = ({ projects }) => {
  return (
    <section className="Paper_v2 bg_pattern">
      <div className="container Project-youMay">
        <h6>You may also like...</h6>
        <div className="Project-cards">
          {projects.map((project) => (
            <div className="Project-card" key={project.id}>
              <img
                src={`/${project.image}`}
                alt={`${project.title} thumbnail`}
                className="Project-card__image"
              />
              <div className="Project-card__content">
                <p>{project.title}</p>
                <div className="chips">
                  {project.chips.map((chip, index) => (
                    <span className={styles.chip} key={index}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => window.open(project.pageLink2, "_blank")}
                  label="Read"
                  className="Project-card__link"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayLike;
