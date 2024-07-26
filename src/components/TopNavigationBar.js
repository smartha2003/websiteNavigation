// src/components/TopNavigationBar.js
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function TopNavigationBar() {
  return (
    <header className="top-nav">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default TopNavigationBar;
