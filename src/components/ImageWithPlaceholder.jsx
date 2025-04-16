import React, { useState } from "react";
import styles from "./ImageWithPlaceholder.module.css";
import Placeholder from "../assets/Thumb-lazy.png"

function ImageWithPlaceholder({ src, alt, placeholder, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <img
        src={Placeholder}
        alt="placeholder"
        className={`${styles.image} ${styles.placeholder} ${
          loaded ? styles.hidden : ""
        }`}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${styles.main} ${
          loaded ? styles.visible : ""
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default ImageWithPlaceholder;
