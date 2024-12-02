import React, { useState, useEffect } from "react";
// module css only for this component 
import styles from "../components/splash.module.css"
// assets
import Logo from '../assets/logo.png'
import BrandDesigner from "../assets/BrandDesigner.png"

function Splash() {
  // state that manages the visibility of splash screen 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // after 2.5sec the state will be false and splash screen won't be visible
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
