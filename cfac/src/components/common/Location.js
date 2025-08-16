import React, { useEffect, useRef } from 'react';
import '../../styles/Location.css';

const Location = ({ 
  image,
  title = "Our Space",
  description,
  linkText,
  linkUrl,
  backgroundColor = "#333"
}) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);

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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = [titleRef.current, descriptionRef.current, linkRef.current].filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="location" style={{ backgroundColor }}>
      <div className="location-container">
        <div className="location-image-section">
          {image && (
            <img src={image} alt={title} className="location-image" />
          )}
        </div>
        
        <div className="location-content-section">
          <div className="location-content">
            <h2 ref={titleRef} className="location-title scroll-animate-location">
              {title}
            </h2>
            <div ref={descriptionRef} className="location-description scroll-animate-location">
              {description}
            </div>
            {linkText && linkUrl && (
              <a 
                ref={linkRef}
                href={linkUrl}
                className="location-link scroll-animate-location"
              >
                {linkText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
