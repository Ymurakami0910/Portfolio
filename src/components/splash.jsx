import React, { useState, useEffect } from "react";
import styles from "../components/splash.module.css"
import Logo from '../assets/logo.png'
import BrandDesigner from "../assets/BrandDesigner.png"

function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={`Paper_v2 bg_pattern ${styles.splashScreen}`}>
          <img className={`container ${styles.Logo}`} src={Logo} alt="Logo" />
          <img className={`container  ${styles.BrandDesigner}`} src={BrandDesigner} alt="Brand Designer" />
        </div>
      )}
    </>
  );
}

export default Splash;
