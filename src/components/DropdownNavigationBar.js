// src/components/DropdownNavigationBar.js
import React, { useState } from 'react';
import '../App.css';

function DropdownNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-nav">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
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

export default DropdownNavigationBar;
