import React from 'react';
import './Skills.css'; // Create this CSS file accordingly

const skillsData = [
  { icon: 'fab fa-html5', title: 'HTML5', description: 'Advanced knowledge in structuring web content using HTML5 standards.' },
  { icon: 'fab fa-css3-alt', title: 'CSS3', description: 'Proficient in creating responsive and visually appealing designs with CSS3.' },
  { icon: 'fab fa-js', title: 'JavaScript', description: 'Experienced in building interactive elements and logic with JavaScript.' },
  { icon: 'fab fa-react', title: 'React.js', description: 'Proficient in developing complex front-end systems using React.js.' },
  { icon: 'fas fa-server', title: 'Node.js', description: 'Expert in building scalable and efficient back-end services with Node.js.' },
  { icon: 'fas fa-database', title: 'MongoDB', description: 'Experienced in managing NoSQL databases and data-driven applications using MongoDB.' },
  { icon: 'fas fa-code', title: 'Express.js', description: 'Skilled in building robust APIs and server-side applications with Express.js.' },
  { icon: 'fab fa-python', title: 'Python', description: 'Proficient in Python programming for automation, scripting, and web development.' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h1>Skills<span>..</span></h1>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <i className={`${skill.icon}`}></i>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
