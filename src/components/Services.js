import React from 'react';
import './Services.css';

const servicesData = [
  { title: 'Web Development', description: 'Crafting high-performance websites that not only look stunning but deliver an unparalleled user experience.' },
  { title: 'UI/UX Design', description: 'Creating user-centric designs that align with business goals, ensuring a seamless experience for end users.' },
  { title: 'Graphic Design', description: 'Designing visually appealing graphics for digital platforms, enhancing overall brand presentation.' },
  { title: 'App Development', description: 'Building seamless, responsive, and user-friendly mobile applications for iOS and Android platforms.' },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="services-box" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
