import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import spectrospectLogo from '../assets/ezgif.gif';
import SP1 from "../assets/Frame 811755.png"
import SP2 from "../assets/Frame 811754.png" 
import { MdArrowOutward } from "react-icons/md";
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
      duration:1,
      scrollTrigger:{trigger:".navbar",toggleActions:"restart none restart none"}
    })


    gsap.fromTo(".nav-links a",{
      opacity:0,
      y:-50
    },{opacity:1,
      delay:1,
      y:0,
      duration:1,
      stagger:0.25,
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
    <nav className={`navbar ${isMobile && scrolling ? 'fixed' : ''} ${isNavOpen ? 'open' : ''}`} style={setSticky?null:{position:"relative",top: window.innerWidth <= 768 ? "-44px" : "3px"}}>
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
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`} style={{marginRight:"50px"}}>
        <Link to="/" onClick={handleNavItemClick} style={{fontWeight:"700"}}>
          Home
        </Link>
        <Link to="/Workshops" onClick={handleNavItemClick} style={{fontWeight:"700"}}>
          Workshops
        </Link>
        <Link to="/Speakers" onClick={handleNavItemClick} style={{fontWeight:"700"}}>
          Speakers
        </Link>
        <Link to="/Events" onClick={handleNavItemClick} style={{fontWeight:"700"}}>
          Events
        </Link>
        <Link to="/Registration" onClick={handleNavItemClick} style={{fontWeight:"700"}}>
          Register
        </Link>
      </div>
      <div className="footer-Box" id="fb3" style={{border:"none",opacity:window.innerHeight>window.innerWidth?0:1}}>
                  <div id="footer-slider-1" style={{marginRight:"15px"}}>
                    Our Sponsors
                  </div>
                  <div id="footer-slider-2"></div>
                  <div id="footer-slider-3">
                    <a href="https://nuevoue.com/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><img src={SP1}></img></a>
                    <a href="https://visavalley.com/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><img src={SP2}></img></a>
                  </div>
                  <div className="footer-slider-common">Workshops <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Talks <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Pro Show <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">More Fun <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                </div>
      <img className="logo" src={spectrospectLogo} alt="SPECTROSPECT Logo" />
    </nav>
  );
};

export default Navbar;
