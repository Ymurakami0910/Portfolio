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
        <div className="Project-Content__text fadeIn">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <picture className="fadeIn, Project-content__pic">
          <source srcSet={imageSrcSmall} media="(max-width: 768px)" />
          <source srcSet={imageSrcLarge} media="(min-width: 769px)" />
          <img src={imageSrcSmall} alt={imageAlt} />
        </picture>
      </div>
    </section>
  );
};

export default ProjectIntro;
