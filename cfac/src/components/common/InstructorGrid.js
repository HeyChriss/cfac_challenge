import React from 'react';
import Instructor from './Instructor';
import '../../styles/InstructorGrid.css';

const InstructorGrid = ({ title = "Meet Our Faculty", instructors = [] }) => {
  return (
    <section className="instructor-grid-section">
      <div className="instructor-grid-container">
        <h2 className="instructor-grid-title">{title}</h2>
        <div className="instructor-grid">
          {instructors.map((instructor, index) => (
            <Instructor
              key={index}
              image={instructor.image}
              name={instructor.name}
              title={instructor.title}
              description={instructor.description}
              colorTheme={instructor.colorTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorGrid;
