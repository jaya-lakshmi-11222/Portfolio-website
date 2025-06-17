import React, { useState } from 'react';
import { useTheme } from '../../App';
import './Contact.css';

const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <h2 className="contact-heading">Contact</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                required
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              className="form-textarea"
              rows="6"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;