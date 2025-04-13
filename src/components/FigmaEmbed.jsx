import React from "react";

const FigmaEmbed = ({ src }) => {
  return (
    <div className="figma-embed-container">
      <iframe
        src={src}
        allowFullScreen
        title="Figma Design"
        className="figma-embed-frame"
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
