import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <h2 className="footer-title">COLLEGE OF FINE ARTS AND COMMUNICATIONS</h2>
          <div className="footer-info">
            <p>Provo, UT 84602, USA | 801-422-4636 | 2025 © All rights reserved.</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Notice</a>
          <span className="footer-separator">|</span>
          <a href="#cookies" className="footer-link">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
