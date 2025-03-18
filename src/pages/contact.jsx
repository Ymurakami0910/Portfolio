import React from "react";
import ContactForm from "../components/ContactForm";

import styles from "../components/title.module.css";

function Contact() {
  return (

    <>
      <section className="bg_pattern Paper_v2">
        <div className="container contact">
          <div className="contact-wrap">
          <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
