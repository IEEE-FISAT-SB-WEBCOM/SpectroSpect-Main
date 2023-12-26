import React, { useState, useEffect } from 'react';
import './navbar.css';
import spectrospectLogo from '../assets/ezgif.gif';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavItemClick = () => {
    closeNav();
  };

  return (
    <nav className={`navbar ${isMobile && scrolling ? 'fixed' : ''} ${isNavOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={toggleNav}>
        {isNavOpen ? (
          <div className="cross-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <a href="#" onClick={handleNavItemClick}>
          Home
        </a>
        <a href="#about" onClick={handleNavItemClick}>
          About
        </a>
        <a href="#Workshops" onClick={handleNavItemClick}>
          Workshops
        </a>
        <a href="#" onClick={handleNavItemClick}>
          Contact
        </a>
      </div>
      <img className="logo" src={spectrospectLogo} alt="SPECTROSPECT Logo" />
    </nav>
  );
};

export default Navbar;
