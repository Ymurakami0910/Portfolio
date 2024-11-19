import React from "react";
import styles from "./readButton.module.css";

function ReadButton({ label, onClick }) {
  return (
    <a className={`${styles.btn} ${styles.btnBorder}`} onClick={onClick}>
      {label}
    </a>
  );
}

export default ReadButton;
