import React from "react"; 
import styles from "../components/projectPhase.module.css"

const ProjectPhase = ({ title, items }) => {
  return (
    <div className={styles.phase}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPhase;
