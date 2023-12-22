// src/components/navbar.jsx
import React from 'react';
import './Navbar.css';
import spec from "../assets/spect.jpg";
const Navbar = () => {
  return (
    <div>
        <div class='imgg'>
            <img src={spec} alt="" />
        </div>
    <nav>
        <div id='bar'>
      <ul>
        <li><a href="#" class="navv">Home</a></li>
        <li><a href="#about" class="navv">About</a></li>
        <li><a href="#Workshops" class="navv">Workshops</a></li>
        <li><a href="#" class="navv">Contact</a></li>
       </ul>
       <div className="gif-container">
        <img
          className="ezgif"
          src="src\assets\ezgif.gif"  // Update the path to your GIF file
          alt="Ezgif"
        />
      </div>
      </div>
    </nav>
    </div>
  );

};

export default Navbar;