import React from "react";
import styles from "./readButton2.module.css";
import { useNavigate } from "react-router-dom";

function ReadButton2({ label, pageLink }) {
  const navigate = useNavigate();

  return (
    <a
      className={`${styles.btn} ${styles.btnBorder}`}
      onClick={() => {
        navigate(pageLink);
        window.scrollTo(0, 0); 
      }}
    >
      {label}
    </a>
  );
}

export default ReadButton2;
