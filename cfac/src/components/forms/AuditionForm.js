import React, { useState } from 'react';
import '../../styles/AuditionForm.css';

const AuditionForm = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Contact Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Dance Background
    danceExperience: '',
    primaryStyle: '',
    secondaryStyles: [],
    yearsTraining: '',
    previousSchools: '',
    currentLevel: '',
    
    // Audition Preferences
    auditionDate: '',
    auditionTime: '',
    specialRequests: '',
    
    // Additional Information
    goals: '',
    medicalConditions: '',
    availability: [],
    
    // Media
    portfolioLink: '',
    videoSubmission: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'secondaryStyles' || name === 'availability') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // This might be where you would send the data to a backend or database
    alert('Application submitted successfully! We will contact you soon to schedule your audition.');
  };

  return (
    <form className="audition-form" onSubmit={handleSubmit} id="application-form">
      {/* Basic Information */}
      <div className="form-section-group">
        <h3 className="form-section-title">Basic Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="form-section-group">
        <h3 className="form-section-title">Contact Information</h3>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="emergencyContact">Emergency Contact Name *</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
            <input
              type="tel"
              id="emergencyPhone"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Dance Background */}
      <div className="form-section-group">
        <h3 className="form-section-title">Dance Background</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="yearsTraining">Years of Dance Training *</label>
            <select
              id="yearsTraining"
              name="yearsTraining"
              value={formData.yearsTraining}
              onChange={handleInputChange}
              required
            >
              <option value="">Select...</option>
              <option value="0-1">0-1 years</option>
              <option value="2-3">2-3 years</option>
              <option value="4-5">4-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="currentLevel">Current Level *</label>
            <select
              id="currentLevel"
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleInputChange}
              required
            >
              <option value="">Select...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="primaryStyle">Primary Dance Style *</label>
          <select
            id="primaryStyle"
            name="primaryStyle"
            value={formData.primaryStyle}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="ballet">Ballet</option>
            <option value="contemporary">Contemporary</option>
            <option value="modern">Modern</option>
            <option value="jazz">Jazz</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="tap">Tap</option>
            <option value="ballroom">Ballroom</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Additional Dance Styles (check all that apply)</label>
          <div className="checkbox-group">
            {['Ballet', 'Contemporary', 'Modern', 'Jazz', 'Hip-Hop', 'Tap', 'Ballroom', 'Musical Theatre'].map(style => (
              <label key={style} className="checkbox-label">
                <input
                  type="checkbox"
                  name="secondaryStyles"
                  value={style.toLowerCase()}
                  onChange={handleInputChange}
                />
                {style}
              </label>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="previousSchools">Previous Dance Schools/Studios</label>
          <textarea
            id="previousSchools"
            name="previousSchools"
            value={formData.previousSchools}
            onChange={handleInputChange}
            placeholder="List your previous dance training locations..."
            rows="3"
          />
        </div>
      </div>

      {/* Audition Preferences */}
      <div className="form-section-group">
        <h3 className="form-section-title">Audition Preferences</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="auditionDate">Preferred Audition Date *</label>
            <input
              type="date"
              id="auditionDate"
              name="auditionDate"
              value={formData.auditionDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="auditionTime">Preferred Time *</label>
            <select
              id="auditionTime"
              name="auditionTime"
              value={formData.auditionTime}
              onChange={handleInputChange}
              required
            >
              <option value="">Select...</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label>Weekly Availability (check all that apply)</label>
          <div className="checkbox-group">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <label key={day} className="checkbox-label">
                <input
                  type="checkbox"
                  name="availability"
                  value={day.toLowerCase()}
                  onChange={handleInputChange}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="form-section-group">
        <h3 className="form-section-title">Additional Information</h3>
        <div className="form-group">
          <label htmlFor="goals">Dance Goals and Aspirations *</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            placeholder="Tell us about your dance goals and what you hope to achieve in our program..."
            rows="4"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="medicalConditions">Medical Conditions or Injuries</label>
          <textarea
            id="medicalConditions"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleInputChange}
            placeholder="Please list any medical conditions, injuries, or physical limitations we should be aware of..."
            rows="3"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="portfolioLink">Portfolio/Website Link</label>
            <input
              type="url"
              id="portfolioLink"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleInputChange}
              placeholder="https://..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="videoSubmission">Video Submission Link</label>
            <input
              type="url"
              id="videoSubmission"
              name="videoSubmission"
              value={formData.videoSubmission}
              onChange={handleInputChange}
              placeholder="YouTube, Vimeo, etc."
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests or Questions</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            placeholder="Any special accommodations needed or questions about the audition process..."
            rows="3"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Submit Application
        </button>
        <p className="form-note">
          * Required fields. All information will be kept confidential and used only for audition purposes.
        </p>
      </div>
    </form>
  );
};

export default AuditionForm;
