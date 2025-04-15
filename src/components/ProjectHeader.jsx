import React from 'react';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import ThumbLazy from '../assets/Thumb-lazy.png';

const ProjectHeader = ({ 
  imageSrc, 
  imageAlt, 
  title 
}) => {
  return (
    <section className={`Project Paper_v2`}>
      <figure className="container Project-Thumb">
        <ImageWithPlaceholder 
          src={imageSrc} 
          placeholderSrc={ThumbLazy} 
          alt={imageAlt} 
        />
      </figure>
      <div className="container Project-title">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default ProjectHeader;
