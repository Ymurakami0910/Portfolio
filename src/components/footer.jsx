import React from "react";
import Styles from "../components/footer.module.css";
import Logo from "../assets/logo-white.png"
import Linkedin from "../assets/icons/linkedin-sm.png"
import Insta from "../assets/icons/insta.png"
import Be from "../assets/icons/be.png"

import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();
  return (
    <>
      <footer className={Styles.footer}>
        <div className="container">
          <div className={Styles.footerBox}>
            <div className={Styles.footerLogo}>
              <img src={Logo} alt="logo with white text" />
            </div>
            <div className={Styles.footerContent}>
              <p className={Styles.footerP}>
                Like my work? Have any questions?
              </p>
              <p className={Styles.footerP}>Let’s connect !</p>
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
                  <img src={Insta} alt="Instagram Icon" />
                </div>
                <div className={Styles.footerSocialIcons__box}>
                  <img src={Be}alt="" />
                </div>
              </div>
              <div className={Styles.connectButton}>
                <button className={Styles.connectButtonLink} onClick={() => navigate("contact")}>
                  <span className={Styles.connectButtonText}>Contact</span>
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
