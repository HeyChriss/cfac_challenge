import React from 'react';
import '../../styles/Hero.css';

const Hero = ({ 
  backgroundImage = '/assets/hero.jpg',
  title = 'Find your flow.',
  subtitle = 'Discover your creative potential through our diverse programs in fine arts and communications.',
  buttonText = 'Reserve your spot',
  buttonLink = '#contact',
  overlayOpacity = 0.4,
  textAlign = 'left'
}) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  const overlayStyle = {
    background: `rgba(0, 0, 0, ${overlayOpacity})`,
    justifyContent: textAlign === 'center' ? 'center' : 'flex-start'
  };

  const contentStyle = {
    textAlign: textAlign
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-overlay" style={overlayStyle}>
        <div className="hero-content" style={contentStyle}>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {buttonText && (
            <button 
              className="hero-button"
              onClick={() => buttonLink && window.open(buttonLink, '_self')}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
