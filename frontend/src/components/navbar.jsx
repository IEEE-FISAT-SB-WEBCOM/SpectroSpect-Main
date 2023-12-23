// src/components/navbar.jsx
import React from 'react';
import './Navbar.css';
import spec from "../assets/spect.jpg";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
//import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navBarContainer'>
        <div class='imgg'>
            <img src={spec} alt="" />
        </div>
    <nav>
      <ul>
        <li><a href="#" class="navv">Home</a></li>
        <li><a href="#about" class="navv">About</a></li>
        <li><a href="#Workshops" class="navv">Workshops</a></li>
        <li><a href="#" class="navv">Contact</a></li>
       </ul>
       <div className='header-sponsors'>
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
       </div>
       <div className="gif-container">
        <img
          className="ezgif"
          src="src\assets\ezgif.gif"  // Update the path to your GIF file
          alt="Ezgif"
        />
      </div>
    </nav>
    </div>
  );

};

export default Navbar;