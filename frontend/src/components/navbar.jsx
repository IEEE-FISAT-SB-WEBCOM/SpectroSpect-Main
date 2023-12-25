
import React, { useState } from 'react';
import './Navbar.css';
import spec from "../assets/spect.jpg";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import MobileMenu from './MobileMenu';

const Navbar = ({ setSticky = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`navBarContainer ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className='imgg'>
        <img src={spec} alt="" />
      </div>
      <nav style={setSticky ? { position: "fixed" } : null}>
        <div className='hamburger-menu' onClick={toggleMobileMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        {/* Render MobileMenu component conditionally */}
        {mobileMenuOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <li><a href="#" className="navv">Home</a></li>
          <li><a href="#about" className="navv">About</a></li>
          <li><a href="#Workshops" className="navv">Workshops</a></li>
          <li><a href="#" className="navv">Contact</a></li>
        </ul>
        <div className='header-sponsors'>
          <div id="footer-slider-1">Our Sponsors</div>
          <div id="footer-slider-2"></div>
          <div id="footer-slider-3">
            <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
            <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FaInstagram /></a>
            <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FiMail /></a>
            <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
          </div>
        </div>
        <div className="gif-container">
          <img
            className="ezgif"
            src="src\assets\ezgif.gif"  
            alt="Ezgif"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
