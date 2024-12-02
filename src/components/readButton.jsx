import React from "react";
import styles from "./readButton.module.css";
import { useNavigate } from "react-router-dom";

function ReadButton({ label, pageLink}) {
  // takes props as its input and will be passed when this component is used 
  const navigate = useNavigate();

  return (
    <a className={`${styles.btn} ${styles.btnBorder}`} onClick={() => navigate(pageLink)}>
      {label}
      {/* This allows customization of the button's content */}
    </a>
  );
}

export default ReadButton;
