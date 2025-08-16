import React, { useEffect, useRef } from 'react';
import '../../styles/Instructor.css';

const Instructor = ({ 
  image,
  name,
  title,
  description,
  colorTheme = 'purple' // purple, teal, blue, pink
}) => {
  const instructorRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

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
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = [nameRef.current, descriptionRef.current].filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={instructorRef} className="instructor">
      <div className="instructor-image-section">
        <img src={image} alt={name} className="instructor-image" />
      </div>
      
      <div className={`instructor-info ${colorTheme}`}>
        <h3 ref={nameRef} className="instructor-name scroll-animate-instructor">{name}</h3>
        <p className="instructor-title">{title}</p>
      </div>
      
      <div ref={descriptionRef} className="instructor-description scroll-animate-instructor">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Instructor;
