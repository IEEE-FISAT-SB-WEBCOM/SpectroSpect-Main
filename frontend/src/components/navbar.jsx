import React, { useState, useEffect } from 'react';
import './navbar.css';
import spectrospectLogo from '../assets/ezgif.gif';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Navbar = ({setSticky = false}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    gsap.fromTo(".navbar",{
      opacity:0,
      y:-100
    },{opacity:1,
      y:0,
      duration:2,
      scrollTrigger:{trigger:".navbar",toggleActions:"restart none restart none"}
    })


    gsap.fromTo(".nav-links a",{
      opacity:0,
      y:-50
    },{opacity:1,
      delay:1,
      y:0,
      duration:2,
      stagger:0.5,
      scrollTrigger:{trigger:".nav-links",toggleActions:"restart none restart none"}
    })
  },[])

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
    <nav className={`navbar ${isMobile && scrolling ? 'fixed' : ''} ${isNavOpen ? 'open' : ''}`} style={setSticky?null:{position:"static"}}>
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
      <div className="footer-Box" id="fb3" style={{border:"none"}}>
                  <div id="footer-slider-1">
                    Our Sponsors
                  </div>
                  <div id="footer-slider-2"></div>
                  <div id="footer-slider-3">
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FaInstagram /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FiMail /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
                  </div>
                  {/* <div className="footer-slider-common">Workshops <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Talks <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Pro Show <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">More Fun <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div> */}
                </div>
      <img className="logo" src={spectrospectLogo} alt="SPECTROSPECT Logo" />
    </nav>
  );
};

export default Navbar;
