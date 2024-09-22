import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/assets/—Pngtree—surprise beautiful man transparent background_13446293.png" alt="About" />
      </div>
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <h3>Web Developer & UI/UX Designer</h3>
        <p>I specialize in developing dynamic web applications and designing intuitive user interfaces that provide exceptional user experiences. My mission is to build applications that are as functional as they are visually captivating, utilizing modern technologies such as HTML5, CSS3, JavaScript, React, and more.</p>
        <a href="/resume.pdf" className="btn" download>Read More</a>
      </div>
    </section>
  );
};

export default About;
