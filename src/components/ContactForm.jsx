import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./contactForm.module.css";

import DLButton from "../components/dlButton";

import Linkedin from "../assets/icons/linkedin-sm.png";
import Insta from "../assets/icons/insta.png";

//
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lilyzvillage", // Your Service ID
        "template_wog790s", // Your Template ID
        form.current,
        "GpwstzwdSptbEcud7" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send. Please try again.");
        }
      );

    e.target.reset();
  };
  return (
    <section>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Contact me</h2>
        <p>
          Have questions or want to work together? Feel free to reach out to me
          through this form.
        </p>
        <div className={styles.iconWrap}>
          <a
            href="https://www.linkedin.com/in/yurino-murakami-047175318"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin Icon" />
          </a>
          <a
            href="https://www.instagram.com/lilyzvillage.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Insta} alt="Instagram Icon" />
          </a>
          <DLButton
            label="Resume"
            onClick={() => window.open("/Resume.pdf", "_blank")}
          />
        </div>

      </div>
      <div className={styles.formContainer}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label className={styles.label}>Name:</label>
          <input type="text" name="name" className={styles.input} required />

          <label className={styles.label}>Email:</label>
          <input type="email" name="email" className={styles.input} required />

          <label className={styles.label}>Message:</label>
          <textarea name="message" className={styles.textarea} required />

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
