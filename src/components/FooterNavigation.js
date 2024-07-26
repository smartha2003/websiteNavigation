// src/components/FooterNavigation.js
import React from 'react';
import '../App.css';

function FooterNavigation() {
  return (
    <footer className="footer-nav">
      <div className="footer-content">
        <section className="footer-about">
          <h3>About Us</h3>
          <p>
            We are a leading company in tech solutions, dedicated to providing top-notch services and products. Our mission is to innovate and excel in every aspect of our business.
          </p>
        </section>
        
        <section className="footer-contact">
          <h3>Contact Info</h3>
          <address>
            <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          </address>
        </section>
        
        <section className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default FooterNavigation;
