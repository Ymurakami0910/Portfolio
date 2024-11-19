import React from "react";
import Styles from "../components/footer.module.css";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();
  return (
    <>
      <footer className={Styles.footer}>
        <div className="container">
          <div className={Styles.footerBox}>
            <div className={Styles.footerLogo}>
              <img src="src/assets/logo-white.png" alt="logo with white text" />
            </div>
            <div className={Styles.footerContent}>
              <p className={Styles.footerP}>
                Like my work? Have any questions?
              </p>
              <h5>Let’s connect !</h5>
            </div>
            <div className={Styles.footerLinks}>
              <div className={Styles.footerSocialIcons}>
                <div className={Styles.footerSocialIcons__box}>
                  <a
                    href="https://www.linkedin.com/in/yurino-murakami-047175318"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="src/assets/icons/linkedin-sm.png" alt="" />
                  </a>
                </div>
                <div className={Styles.footerSocialIcons__box}>
                  <img src="src/assets/icons/insta.png" alt="" />
                </div>
                <div className={Styles.footerSocialIcons__box}>
                  <img src="src/assets/icons/be.png" alt="" />
                </div>
              </div>
              <div className={Styles.connectButton}>
                <button href="#" className={Styles.connectButtonLink}>
                  <span className={Styles.connectButtonText} onClick={() => navigate("/contact")}>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.footerBottom}>
          <p>© 2024 Yuri’s Studio</p>
          <p>This website is hand-coded</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
