import React from 'react';

const MobileMenu = ({ closeMobileMenu }) => {
  return (
    <div className="mobile-menu">
      <div className="close-icon" onClick={closeMobileMenu}>
        &times;
      </div>
      <ul>
        <li><a href="#" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
        <li><a href="#Workshops" onClick={closeMobileMenu}>Workshops</a></li>
        <li><a href="#" onClick={closeMobileMenu}>Contact</a></li>
      </ul>
    </div>
    
  );
};

export default MobileMenu;
