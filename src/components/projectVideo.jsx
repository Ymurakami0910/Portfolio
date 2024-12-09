import React from "react";

const ProjectVideo = ({ videoSrc, title, description }) => {
  return (
    <section className="Paper_v2 bg_pattern">
      <div className="container Project-content__video">
        <video
          className="responsive-video"
          width="640"
          height="360"
          controls
          autoPlay
          muted
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="Project-Content__text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
