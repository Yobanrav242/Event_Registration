import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="collegeName">Your College Name</div>

      <nav className={`nav ${menuOpen ? 'navOpen' : ''}`}>
        <a href="#events" className="navLink" onClick={() => setMenuOpen(false)}>Events</a>
        <a href="#about" className="navLink" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" className="navLink" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="loginButton" onClick={() => setMenuOpen(false)}>Login</button>
      </nav>

      <button className={`burger ${menuOpen ? 'burgerOpen' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="burgerLine"></span>
        <span className="burgerLine"></span>
        <span className="burgerLine"></span>
      </button>
    </header>
  );
};

export default Header;