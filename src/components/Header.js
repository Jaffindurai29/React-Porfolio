import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo"><span>Jaffin</span>'s Portfolio</a>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </div>
        <nav className={`navbar ${isOpen ? 'active' : ''}`} id="navbar">
          <a href="#home" className="active" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
