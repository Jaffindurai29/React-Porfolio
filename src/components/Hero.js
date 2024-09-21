import React from 'react';
import './Hero.css'; // Create this CSS file accordingly

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="home-content">
          <h3>Hello, I'm</h3>
          <h1>Jaffin</h1>
          <h3> A Passionate <span>Web Developer & UI/UX Designer</span></h3>
          <p>Driven to create impactful digital experiences that enhance user engagement and deliver exceptional value.</p>
          <div className="social-media">
            <a href="https://github.com/Jaffindurai29" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jaffin-durai-72242225b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
          <a href="/resume.pdf" className="btn" download>Download CV</a>
        </div>
        <div className="home-img">
          <img src="/assets/—Pngtree—surprise beautiful man transparent background_13446293.png" alt="home" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
