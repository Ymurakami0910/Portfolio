import React from "react";
import { Icon } from "@iconify/react";
import styles from "../components/readButton.module.css";

function ReadButton({ label, onClick }) {
  return (
    <button
      onClick={() => {
        if (onClick) onClick(); // onClickが渡されていれば実行
        window.scrollTo(0, 0); // 画面をトップにスクロール
      }}
      className={styles.patchworkButton}
    >
      <Icon icon="mdi:arrow-right-circle" className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default ReadButton;
