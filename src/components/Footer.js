import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-text">
          <p>&copy; 2024 Jaffin. All Rights Reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/Jaffindurai29" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jaffin-durai-72242225b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
