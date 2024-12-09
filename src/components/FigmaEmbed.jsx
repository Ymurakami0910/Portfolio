import React from "react";

const FigmaEmbed = ({ src }) => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src={src}
        allowFullScreen
        title="Figma Design"
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
