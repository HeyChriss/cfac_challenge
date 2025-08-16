import React, { useEffect, useRef } from 'react';
import '../../styles/ShowcaseCard.css';

const ShowcaseCard = ({ 
  title,
  description, 
  buttonText, 
  buttonLink,
  image,
  backgroundColor = '#8B7355', // Default brown color like in the image
  textColor = 'white'
}) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = [titleRef.current, descriptionRef.current, buttonRef.current].filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="showcase-card" style={{ backgroundColor }}>
      <div className="showcase-card-container">
        <div className="showcase-card-content" style={{ color: textColor }}>
          <h2 ref={titleRef} className="showcase-card-title scroll-animate-card">
            {title}
          </h2>
          <p ref={descriptionRef} className="showcase-card-description scroll-animate-card">
            {description}
          </p>
          {buttonText && (
            <button 
              ref={buttonRef}
              className="showcase-card-button scroll-animate-card"
              onClick={() => buttonLink && window.open(buttonLink, '_self')}
            >
              {buttonText}
            </button>
          )}
        </div>
        
        <div className="showcase-card-image-section">
          {image && (
            <img src={image} alt={title} className="showcase-card-image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
