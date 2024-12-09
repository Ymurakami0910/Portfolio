import React from "react";

const ProjectBelt = ({ images, isMobile }) => {

    
  return (
    <section className="Project-belt">
      <div className="belt-container">
        {images.map((src, index) => (
          <img src={src} alt={`Slide ${index}`} className="belt-image" key={index} />
        ))}
        {!isMobile &&
          images.map((src, index) => (
            <img src={src} alt={`Slide ${index}`} className="belt-image" key={`desktop-${index}`} />
          ))}
      </div>
    </section>
  );
};

export default ProjectBelt;
