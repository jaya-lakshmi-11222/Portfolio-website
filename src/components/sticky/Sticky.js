import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Add this import
import './Sticky.css';

const StickyIcons = () => {
  return (
    <div className="sticky-icon">
      <a href="https://github.com/perireddyvaka" className="GitHub" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ marginRight: '20px', marginLeft: '5px' }} /> GitHub
      </a>
      <a href="https://www.instagram.com/peri_reddy_vaka/" className="Instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '20px', marginLeft: '5px' }} /> Instagram
      </a>
      <a href="https://www.linkedin.com/in/peri-reddy-vaka" className="Linkedin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '20px', marginLeft: '5px' }} /> Linkedin
      </a>
      <a href="mailto:vakaperireddy59@gmail.com" className="Gmail" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '20px', marginLeft: '5px' }} /> Gmail
      </a>
    </div>
  );
};

export default StickyIcons;