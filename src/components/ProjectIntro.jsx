import React from 'react';

const ProjectIntro = ({ 
  title, 
  description, 
  imageSrcSmall, 
  imageSrcLarge, 
  imageAlt 
}) => {
  return (
    <section className="Paper_v2 bg_pattern">
      <div className="container Project-Content">
      <picture className="fadeIn Project-Content__pic ">
          <source srcSet={imageSrcSmall} media="(max-width: 768px)" />
          <source srcSet={imageSrcLarge} media="(min-width: 769px)" />
          <img src={imageSrcSmall} alt={imageAlt} />
        </picture>
        <div className="Project-Content__text fadeIn">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
