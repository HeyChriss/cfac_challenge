import React from 'react';
import '../../styles/SubFooter.css';

const SubFooter = () => {
  return (
    <section className="subfooter">
      <div className="subfooter-container">
        {/* Contact Column */}
        <div className="subfooter-column">
          <h3 className="subfooter-title">CONTACT</h3>
          <div className="subfooter-content">
            <p className="contact-address">
              West Campus Office Building<br />
              189 West 960 North<br />
              Provo, UT 84602
            </p>
            <a href="tel:8014222819" className="contact-phone">(801) 422-2819</a>
            <a href="mailto:cfac@byu.edu" className="contact-email">cfac@byu.edu</a>
            <a href="#about" className="subfooter-link">About the College</a>
            <a href="#dean" className="subfooter-link">Dean's Office</a>
            <a href="#academic" className="subfooter-link">Academic Areas</a>
          </div>
        </div>

        {/* Discover Column */}
        <div className="subfooter-column">
          <h3 className="subfooter-title">DISCOVER</h3>
          <div className="subfooter-content">
            <a href="#news" className="subfooter-link">News</a>
            <a href="#advisement" className="subfooter-link">CFAC Advisement Center</a>
            <a href="#onstage" className="subfooter-link">BYU OnStage</a>
            <a href="#museum" className="subfooter-link">Museum of Art</a>
            <a href="#performing-arts" className="subfooter-link">Performing Arts Management</a>
            <a href="#galleries" className="subfooter-link">Galleries</a>
            <a href="#barlow" className="subfooter-link">Barlow Endowment</a>
          </div>
        </div>

        {/* Resources Column */}
        <div className="subfooter-column">
          <h3 className="subfooter-title">RESOURCES</h3>
          <div className="subfooter-content">
            <a href="#communications-portal" className="subfooter-link">Communications Portal</a>
            <a href="#signage" className="subfooter-link">Digital and Physical Signage</a>
            <a href="#website-request" className="subfooter-link">Website Request</a>
            <a href="#photography" className="subfooter-link">Photography Request</a>
            <a href="#submit-story" className="subfooter-link">Submit a Story</a>
            <a href="#story-submission" className="subfooter-link">First Person Story Submission</a>
          </div>
        </div>

        {/* Connect Column */}
        <div className="subfooter-column">
          <h3 className="subfooter-title">CONNECT</h3>
          <div className="subfooter-content">
            <div className="social-icons">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#youtube" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#pinterest" className="social-link" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
            <a href="#donate" className="subfooter-link">Donate</a>
            <a href="#stay-connected" className="subfooter-link">Stay Connected</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
