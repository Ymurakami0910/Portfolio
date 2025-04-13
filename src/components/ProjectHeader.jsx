import React from 'react';

const ProjectHeader = ({ 
  backgroundClass, 
  imageSrc, 
  imageAlt, 
  title 
}) => {
  return (
    <section className={`Project Paper_v2 ${backgroundClass}`}>
      <figure className="container Project-Thumb">
        <img src={imageSrc} alt={imageAlt} />
      </figure>
      <div className="container Project-title">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default ProjectHeader;
