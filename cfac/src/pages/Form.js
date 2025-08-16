import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/common/Hero';
import NewsBar from '../components/common/NewsBar';
import AuditionForm from '../components/forms/AuditionForm';
import SubFooter from '../components/layout/SubFooter';
import Footer from '../components/layout/Footer';
import '../styles/Form.css';

const Form = () => {
  return (
    <div className="form-page">
      <Header />
      
      <Hero 
        backgroundImage="/assets/arts.webp"
        title="Join Our Program"
        subtitle="Take the first step toward your artistic journey at BYU's College of Fine Arts and Communications. Apply for our dance program and discover your potential in a supportive, creative environment."
        buttonText="Start Application"
        buttonLink="#application-form"
        overlayOpacity={0.6}
        textAlign="center"
      />
      
      <NewsBar />
      
      <main className="form-content">
        <section className="form-section">
          <div className="form-container">
            <div className="form-intro">
              <h2 className="form-title">Dance Program Audition Application</h2>
              <p className="form-description">
                Ready to take your dance training to the next level? Our comprehensive dance program 
                offers world-class instruction in various styles including contemporary, ballet, jazz, 
                and modern dance. Complete the application below to schedule your audition.
              </p>
            </div>
            
            <AuditionForm />
          </div>
        </section>
      </main>
      
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Form;
