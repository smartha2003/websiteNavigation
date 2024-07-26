// src/components/SideNavigationBar.js
import React from 'react';
import '../App.css';

function SideNavigationBar() {
  return (
    <aside className="side-nav">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavigationBar;
