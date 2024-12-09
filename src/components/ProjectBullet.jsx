import React from "react";

const ProjectBullet = ({ title, description, items }) => {
  return (
    <section className="Paper_v2 bg_pattern">
      <div className="container Project-Bullet">
        <div className="fadeIn Project-Bullet__box">
          <h4>{title}</h4>
          <p>{description}</p>
          <ul>
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectBullet;

  