import React from 'react';
import './Portfolio.css'; // Create this CSS file accordingly

const portfolioData = [
  {
    image: '/assets/developer-8829735_1280.webp',
    title: 'Website Redesign',
    link: '#',
  },
  {
    image: '/assets/software-developer-6521720_1280.jpg',
    title: 'Mobile App UI',
    link: '#',
  },
  {
    image: '/assets/developer-8829709_1280.webp',
    title: 'E-commerce Website',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="pfl-layer">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
