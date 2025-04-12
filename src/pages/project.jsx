import React, { useState, useEffect } from "react";
import ProjectCard2 from "../components/ProjectCard2";

import aiIcon from "../assets/icons/ai.png";
import psIcon from "../assets/icons/ps.png";
import idIcon from "../assets/icons/id.png";
import aeIcon from "../assets/icons/ae.png";
import figmaIcon from "../assets/icons/figma.png";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";

import TanukiSketch from "../assets/TanukiSketch.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



function Projects() {
  const [filter, setFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // 利用可能なスキルタグ（アイコン付き）
  const allChips = [
    { label: "Illustrator", icon: aiIcon },
    { label: "PhotoShop", icon: psIcon },
    { label: "After Effect", icon: aeIcon },
    { label: "Indesign", icon: idIcon },
    { label: "Figma", icon: figmaIcon },
    { label: "Web-Development", icon: [htmlIcon, cssIcon, jsIcon] }, // アイコンを配列で管理
  ];

  const handleFilterClick = (chip) => {
    setFilter(chip === filter ? "" : chip);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const [hideTanuki, setHideTanuki] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("pageFooter");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // When footer enters the viewport, hide Tanuki
      if (footerTop < windowHeight) {
        setHideTanuki(true);
      } else {
        setHideTanuki(false);
      }
    };

    // Initial check + event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Paper_v2 bg_pattern">
      <div className="container">
        <div className="ProjectPage-content">
          <h1>All Projects</h1>

          <button className="skillSearchBtn" onClick={toggleFilters}>
            <FontAwesomeIcon icon={faSearch} />
            Skill Search
          </button>

          {showFilters && (
            <div className="filters">
              <button
                onClick={() => handleFilterClick("")}
                className={filter === "" ? "active" : ""}
              >
                All
              </button>
              {allChips.map((chip, index) => (
                <button
                  key={index}
                  className={filter === chip.label ? "active" : ""}
                  onClick={() => handleFilterClick(chip.label)}
                >
                  {Array.isArray(chip.icon) ? (
                    // 複数アイコンを表示する処理
                    chip.icon.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={chip.label}
                        className="chip-icon"
                      />
                    ))
                  ) : (
                    <img
                      src={chip.icon}
                      alt={chip.label}
                      className="chip-icon"
                    />
                  )}
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          <ProjectCard2 filter={filter} />
        </div>
      </div>
      {!hideTanuki && (
        <div className={`ProjectPageTanuki ${hideTanuki ? "hidden" : ""}`}>
          <img src={TanukiSketch} alt="Tanuki sketch" />
        </div>
      )}
    </div>
  );
}

export default Projects;
