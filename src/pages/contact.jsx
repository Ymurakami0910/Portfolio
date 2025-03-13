import React from "react";
import tanukiImage from "../assets/tanuki-2.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import styles from "../components/title.module.css";

function Contact() {
  return (

    <>
      <section>
        <div className="container contact">
          <div className="contact-wrap">
            <div className="contact-box">
              <div className="contact-text">
                <h2>This page will be coming soon</h2>
                <p>You can message me through Linkedin !</p>
              </div>
              <a
                href="https://www.linkedin.com/in/yurino-murakami-047175318"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-wrap"
              >
                <img
                  className="contact-icon"
                  src={LinkedInIcon}
                  alt="LinkedIn-icon"
                />
              </a>
            </div>
            <div className="contact__image">
              <img src={tanukiImage} alt="Tanuki Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
