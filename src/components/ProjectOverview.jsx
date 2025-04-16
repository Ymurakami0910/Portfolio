import React from "react";
import styles from "./ProjectCard2.module.css";

import aiIcon from "../assets/icons/ai.png";
import psIcon from "../assets/icons/ps.png";
import idIcon from "../assets/icons/id.png";
import aeIcon from "../assets/icons/ae.png";
import figmaIcon from "../assets/icons/figma.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";

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



const ProjectOverview = ({ title, description, chips }) => {
  
  return (
    <section className="Project-overview Paper_v2 bg_pattern">
      <div className="container">
        <div className="fadeIn Project-overview__box">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.chipsContainer}>
  {Array.isArray(chips) && chips.map((chip, index) => (
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

        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
