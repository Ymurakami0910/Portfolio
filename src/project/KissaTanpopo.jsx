import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../data/project.json";
import Button from "../components/button.jsx";
import styles from "../components/ProjectCard2.module.css";

import Thumb from "../assets/KissaTanpopo/KissaStore.png";
import Kissa1min from "../assets/KissaTanpopo/Kissa-1.jpg";
import Kissa1lg from "../assets/KissaTanpopo/Kissa-1-lg.jpg";

import Kissa6 from "../assets/KissaTanpopo/Kissa-6.png";

import slide1 from "../assets/KissaTanpopo/slide1.jpg";
import slide2 from "../assets/KissaTanpopo/slide2.jpg";
import slide3 from "../assets/KissaTanpopo/slide3.jpg";
import slide4 from "../assets/KissaTanpopo/slide4.jpg";
import slide5 from "../assets/KissaTanpopo/slide5.jpg";
import slide6 from "../assets/KissaTanpopo/slide6.jpg";
import slide7 from "../assets/KissaTanpopo/slide7.jpg";
import slide8 from "../assets/KissaTanpopo/slide8.jpg";
import slide9 from "../assets/KissaTanpopo/slide9.jpg";
import slide10 from "../assets/KissaTanpopo/slide10.jpg";
import slide11 from "../assets/KissaTanpopo/slide11.jpg";
import slide12 from "../assets/KissaTanpopo/slide12.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function KissaTanpopo() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const FadeIns = document.querySelectorAll(".fadeIn");
    FadeIns.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");


  const settings = {
    dots: true, // ナビゲーションドットを表示
    infinite: true, // 無限スクロール
    speed: 500, // アニメーション速度 (ms)
    slidesToShow: 3, // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 自動再生間隔 (ms)
    arrows: true,
    prevArrow: <FaArrowLeft className="custom-prev-arrow" />, // カスタム前矢印
    nextArrow: <FaArrowRight className="custom-next-arrow" />, // カスタム後矢印
  };

    // 画像がクリックされたときにモーダルを開く関数
    const openModal = (imageSrc) => {
      setModalImage(imageSrc);
      setModalIsOpen(true);
    };
  
    // モーダルを閉じる関数
    const closeModal = () => {
      setModalIsOpen(false);
      setModalImage("");
    };

  const openWebsiteInNewTab = () => {
    window.open("/kissatanpopo/index.html", "_blank", "noopener,noreferrer");
  };

  const [currentProject, setCurrentProject] = useState(null);
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // 初期表示プロジェクト (例: ID 1 のプロジェクト)
    const project = projectData.find((item) => item.id === 1);
    setCurrentProject(project);

    // 他のプロジェクトをランダムに取得 (例: 2件)
    const randomItems = getRandomProjects(projectData, project.id, 2);
    setRandomProjects(randomItems);
  }, [projectData]);

  return (
    <>
      <section className="Project Paper_v2 bg_pattern ">
        <figure className="container Project-Thumb">
          <img src={Thumb} alt="masking image" />
        </figure>
        <div className="container fadeIn Project-title">
          <h1>Kissa Tanpopo Brand Identity</h1>
        </div>
      </section>

      <section className="Project-overview Paper_v2 bg_pattern">
        <div className="container">
          <div className="fadeIn Project-overview__box">
            <h2>Overview</h2>
            <p>
              I had a fun project of creating the full brand identity for Kissa
              Tanpopo, a nostalgic, Japanese inspired dessert café. The goal was
              to mix modern and retro vibes to give the brand a welcoming,
              playful feel. I started by designing the logo, choosing the
              colors, and picking the typography that fit the vibe. I also built
              a single responsive page website that works beautifully across all
              devices.
            </p>
            <div className={styles.chipsContainer}>
              {currentProject?.chips?.map((chip, index) => (
                <span className={styles.chip} key={index}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-Content">
          <div className="Project-Content__text fadeIn">
            <h3>Discover a Corner of Japanese Nostalgia</h3>
            <p>
              kissa tanpopo, the word Kissa means cafe, and the word Tanpopo
              means dandelion. It blends traditional Japanese culture with a
              modern café vibe, creating a relaxing space for everyone to enjoy.
              Perfect for those looking for a taste of Japan in a warm and
              welcoming setting.
            </p>
          </div>
          <picture className="fadeIn">
            <source srcSet={Kissa1min} media="(max-width: 768px)" />
            <source srcSet={Kissa1lg} media="(min-width: 769px)" />
            <img src={Kissa1min} alt="Kissa Tanpopo Medium size cup yellow " />
          </picture>
        </div>

        <div className="container Project-content__website">
          <img
            className="fadeIn"
            src={Kissa6}
            alt="desktop kissa tanpopo website"
          />
          <Button
            className="fadeIn"
            label="View Brand Website"
            onClick={openWebsiteInNewTab}
          />
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container Project-Takeaways">
          <div className="Project-Takeaways__box">
            <h4>Takeaways</h4>
            <p>
              The key part of this project was the capturing of a
              Japanese-inspired café, bringing it across authentically and in an
              engaging way to a mass audience. I wedded traditional Japanese
              elements of motifs and retro typography with modern design trends,
              alive in a brand that speaks both to local and international
              customers. This approach allowed me to use cultural storytelling
              as a powerful design strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container">
          <h5>Brandbook</h5>
          <div className="container">
            <Slider {...settings}>
            <div>
              <img
                src={slide1}  // インポートした画像を直接使う
                alt="Slide 1"
                onClick={() => openModal(slide1)} // クリックでモーダルを開く
              />
            </div>
              <div>
                <img src={slide2} alt="" />
              </div>
              <div>
                <img src={slide3} alt="" />
              </div>
              <div>
                <img src={slide4} alt="" />
              </div>
              <div>
                <img src={slide5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="Paper_v2 bg_pattern">
        <div className="container">
          <h6>You may also like...</h6>
          <div className="Project-cards">
            {randomProjects.map((project) => (
              <div className="Project-card" key={project.id}>
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="Project-card__image"
                />
                <div className="Project-card__content">
                  <p>{project.title}</p>
                  <div className="chips">
                    {project.chips.map((chip, index) => (
                      <span className={styles.chip} key={index}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={() => window.open(project.pageLink2, "_blank")}
                    label="Check"
                    className="Project-card__link"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const getRandomProjects = (projectData, excludeId, count) => {
  const filteredProjects = projectData.filter((item) => item.id !== excludeId);
  const shuffled = [...filteredProjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default KissaTanpopo;
