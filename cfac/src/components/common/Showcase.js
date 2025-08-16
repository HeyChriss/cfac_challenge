import React, { useEffect, useRef } from 'react';
import '../../styles/Showcase.css';

const Showcase = ({ 
  image, 
  overlayText, 
  title, 
  description, 
  buttonText, 
  buttonLink,
  reverse = false 
}) => {
  const showcaseRef = useRef(null);
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
    <section ref={showcaseRef} className={`showcase ${reverse ? 'showcase-reverse' : ''}`}>
      <div className="showcase-container">
        <div className="showcase-image-section">
          <div className="showcase-image-wrapper">
            <img src={image} alt={title} className="showcase-image" />
            <div className="showcase-overlay">
              <h2 className="showcase-overlay-text">{overlayText}</h2>
            </div>
          </div>
        </div>
        
        <div className="showcase-content-section">
          <div className="showcase-content">
            <h3 ref={titleRef} className="showcase-title scroll-animate">{title}</h3>
            <p ref={descriptionRef} className="showcase-description scroll-animate">{description}</p>
            {buttonText && (
              <button 
                ref={buttonRef}
                className="showcase-button scroll-animate"
                onClick={() => buttonLink && window.open(buttonLink, '_self')}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
