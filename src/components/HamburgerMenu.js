// src/components/HamburgerMenu.js
import React, { useState } from 'react';
import '../App.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      {isOpen && (
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      )}
    </div>
  );
}

export default HamburgerMenu;
