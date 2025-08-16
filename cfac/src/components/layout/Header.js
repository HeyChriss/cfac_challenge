import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/form" className="nav-link">Form</Link>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#programs" className="nav-link">Programs</a> 
        </nav>
        
        <div className="header-title">
          <Link to="/" className="header-title-link">
            College of Fine Arts and Communications
          </Link>
        </div>
        
        <div className="header-brand">
          <Link to="/">
            <img src="/assets/byu-logo.svg" alt="CFAC Logo" style={{width: '100px', height: '100px'}} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
