import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectBelt.module.css";
import gsap from "gsap";

const ProjectBelt = ({ images, isMobile }) => {
  const beltRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleImagesLoad = () => {
      setIsReady(true);
    };

    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount += 1;
      if (loadedCount === imagesRef.current.length) {
        handleImagesLoad();
      }
    };

    imagesRef.current = Array.from(document.querySelectorAll('img'));
    
    if (imagesRef.current.length === 0) {
      handleImagesLoad();
      return;
    }

    imagesRef.current.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded;
      }
    });

    return () => {
      imagesRef.current.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [images]);

  useEffect(() => {
    if (!beltRef.current || isMobile || !isReady) return;

    const belt = beltRef.current;
    const beltWidth = belt.scrollWidth / 2;

    gsap.killTweensOf(belt);
    gsap.set(belt, { x: 0 });

    const animation = gsap.to(belt, {
      x: -beltWidth,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % beltWidth),
      },
    });

    return () => {
      animation.kill();
    };
  }, [isMobile, isReady]);

  const imagesToRender = isMobile ? images : [...images, ...images];

  return (
    <section
      className={
        isMobile ? styles.beltContainerMobile : styles.beltContainerDesktop
      }
    >
      <div
        className={styles.belt}
        ref={beltRef}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        {imagesToRender.map((src, index) => (
          <div 
            className={`${styles.image} ${isMobile ? styles.fadeIn : ''}`}
            key={`${src}-${index}`}
          >
            <img 
              src={src} 
              alt={`image-${index}`} 
              onLoad={(e) => {
                if (e.target.complete) {
                  // 必要に応じて処理
                }
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectBelt;