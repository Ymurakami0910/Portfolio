import React from "react";
import styles from "./readButton.module.css";
import { useNavigate } from "react-router-dom";

function ReadButton({ label, pageLink}) {
  const navigate = useNavigate();
  return (
    <a className={`${styles.btn} ${styles.btnBorder}`} onClick={() => navigate(pageLink)}>
      {label}
    </a>
  );
}

export default ReadButton;
