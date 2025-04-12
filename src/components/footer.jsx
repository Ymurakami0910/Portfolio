import React, { useEffect } from "react";
import Styles from "../components/footer.module.css";
import Logo from "../assets/logo-white.png";
import Linkedin from "../assets/icons/linkedin-sm.png";
import Insta from "../assets/icons/insta.png";
import Be from "../assets/icons/be.png";
import AirplaneIcon from "../assets/icons/airplane.png";

import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    const setupAnimations = () => {
      const isMobile = window.innerWidth < 768;
      const duration = isMobile ? 5 : 7;
      const distance = isMobile ? "120vw" : "130vw";
      
      // 飛行機2（下の方に飛ばす）
      gsap.fromTo(
        ".airplane-2", 
        { 
          x: "-30vw",
          y: isMobile ? "15vh" : "19vh"  // 開始位置を下に
        }, 
        {
          x: distance,
          y: isMobile ? "16vh" : "25vh",  // 終了位置も下に
          rotation: 5,
          duration: duration,
          ease: "power1.inOut",
          repeat: -1,
        }
      );
  
      // 飛行機3（さらに下に飛ばす）
      gsap.fromTo(
        ".airplane-3", 
        { 
          x: "-40vw",
          y: isMobile ? "15vh" : "17vh"  // 開始位置をもっと下に
        }, 
        {
          x: distance,
          y: isMobile ? "17vh" : "32vh",  // 終了位置ももっと下に
          rotation: 5,
          duration: duration + 2,
          ease: "power1.inOut",
          repeat: -1,
        }
      );
    };
  
    setupAnimations();
    
    // リサイズ時の処理
    const handleResize = () => {
      gsap.killTweensOf([".airplane-2", ".airplane-3"]);
      setupAnimations();
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer id="pageFooter" className={Styles.footer}>
      <div className={Styles.footerMainContent}>
        <div className={Styles.footerBox}>
          <div className={Styles.footerLogo}>
            <img src={Logo} alt="logo with white text" />
          </div>
          <div className={Styles.footerContent}>
            <p className={Styles.footerP}>
              As the tanuki drifts in the clouds, 
            </p>
            <p className={Styles.footerP}>let's stay connected until your next visit!</p>
          </div>
          <div className={Styles.footerLinks}>
            <div className={Styles.footerSocialIcons}>
              <div className={Styles.footerSocialIcons__box}>
                <a
                  href="https://www.linkedin.com/in/yurino-murakami-047175318"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="Linkedin Icon" />
                </a>
              </div>
              <div className={Styles.footerSocialIcons__box}>
                <a
                  href="https://www.instagram.com/lilyzvillage.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Insta} alt="Instagram Icon" />
                </a>
              </div>
              <div className={Styles.footerSocialIcons__box}>
                <img src={Be} alt="Behance Icon" />
              </div>
            </div>
            <div className={Styles.connectButton}>
              <button
                className={Styles.connectButtonLink}
                onClick={() => navigate("contact")}
              >
                <span className={Styles.connectButtonText}>Contact</span>
              </button>
            </div>
          </div>
        </div>

        {/* Airplane elements */}
        <div className={Styles.airplaneContainer}>
          <img src={AirplaneIcon} alt="Flying airplane" className={`${Styles.airplane} airplane-2`} />
          <img src={AirplaneIcon} alt="Flying airplane" className={`${Styles.airplane} airplane-3`} />
        </div>
      </div>

      <div className={Styles.footerBottom}>
        <p>© 2024 Yuri's Studio</p>
        <p>That's all for now! Tanuki's off to nap!</p>
      </div>
    </footer>
  );
}

export default Footer;