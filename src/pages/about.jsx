import React from "react";

function About() {
  return (
    <>
<section className="about-header">
  <div className="about-header__content container">
    <div className="about-header__text">
      <h1>Welcome to Yuri's Studio</h1>
      <p>
        As a brand designer, I am happy to help you create a brand
        identity that resonates around the world. My adventures in life,
        including my study abroad experience, have taught me how to create
        brands that connect with people. Let's team up and create
        something great together!
      </p>
    </div>
    <div className="about-header__image">    
      <img
      src="src/assets/tanuki.png"
      alt="Tanuki Image"
    /></div>
  </div>
</section>
      <section>
        <div>
          <h2>Play Cards to get to know me!</h2>
          <p>Flip</p>
        </div>
      </section>
      <section>
        <div className="about-offer">
          <h4>What I offer</h4>
        </div>
      </section>
    </>
  );
}

export default About;
