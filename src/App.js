// src/App.js
import React from 'react';
import './App.css';
import TopNavigationBar from './components/TopNavigationBar.js';
import SideNavigationBar from './components/SideNavigationBar';
import FooterNavigation from './components/FooterNavigation';
import DropdownNavigationBar from './components/DropdownNavigationBar';
import HamburgerMenu from './components/HamburgerMenu';
import StickyNavigation from './components/StickyNavigation';

function App() {
  return (
    <div>
      <TopNavigationBar />
      {/* <SideNavigationBar /> */}
      <StickyNavigation />
      <HamburgerMenu />
      <DropdownNavigationBar />
      <main>
        <section id="about">
          <h2>About</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
        <section id="resources">
          <h2>Resources</h2>
        </section>
      </main>
      <FooterNavigation />
    </div>
  );
}

export default App;
