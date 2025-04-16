import React, { useState, useEffect } from "react";
import ImageWithPlaceholder from "./ImageWithPlaceholder";
import Paw from "../assets/paw.png";
import ThumbLazy from "../assets/Thumb-lazy.png";
import TanukiSketch from "../assets/TanukiSketch.png";

function ProjectHeader({ imageSrc, imageAlt, title }) {
  const [hideTanuki, setHideTanuki] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("hide");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight) {
        setHideTanuki(true);
      } else {
        setHideTanuki(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期チェック

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="Project Paper_v2">
      <figure className="container Project-Thumb">
        <ImageWithPlaceholder
          src={imageSrc}
          placeholder={ThumbLazy}
          alt={imageAlt}
        />
      </figure>
      <div className="container Project-title">
        <h1>{title}</h1>
      </div>
      <div className={`Project-pawWrap ${hideTanuki ? "hidden" : ""}`} >
        <img src={Paw} alt="paw" />
        <img src={Paw} alt="paw" />
        <img src={Paw} alt="paw" />
        <img src={Paw} alt="paw" />
      </div>

      <div className={`ProjectPageTanuki ${hideTanuki ? "hidden" : ""}`}>
        <img src={TanukiSketch} alt="Tanuki sketch" />
      </div>
    </section>
  );
}

export default ProjectHeader;
