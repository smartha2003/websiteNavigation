// src/components/StickyNavigation.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky-nav ${isSticky ? 'sticky' : ''}`}>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default StickyNavigation;
