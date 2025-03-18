import React, { useRef } from "react";
import emailjs from "emailjs-com";

import styles from "../ContactForm.module.css";


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
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to work together? Feel free to reach out to us
          through this form.
        </p>
      </div>
      <div className={styles.formSection}>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" required />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
