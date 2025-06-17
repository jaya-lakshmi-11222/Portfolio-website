import React, { useEffect, useState } from 'react';
import { useTheme } from '../../App';
import './Main.css';
import HeadImage from '../../Assets/JayaImage.jpg';
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  FileText
} from 'lucide-react';

const MainSection = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jaya-lakshmi-gunnam',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/jaya-lakshmi-11222',
      color: '#333'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/jaya_gunnam?igsh=YW0xZ3MxZzUwMWo4',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jayalakshmigunnam1@gmail.com',
      color: '#EA4335'
    }
  ];

  // Function to handle resume download/view
  const handleResumeClick = () => {
    // Replace with your actual PDF path
    const resumePath = '/Jaya_Gunnam Resume.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark' : ''} ${isVisible ? 'animate-in' : ''}`}>
      {/* Main Content */}
      <main className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <div className="intro-text">
            <p className="greeting">HELLO, <span className="name-label">I'm</span></p>
            <h1 className="name">
              <span className="first-name">JAYA</span>
              <span className="last-name">GUNNAM</span>
            </h1>
          </div>

          <div className="description">
            <p>
              From Andhra Pradesh, India. My area of Expertise includes MERN Stack & Machine Learning.
            </p>
          </div>

          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="social-link"
                  target={social.name === 'Email' ? '_self' : '_blank'}
                  rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                  style={{ '--social-color': social.color }}
                  title={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          <div className="action-buttons">
            <button className="btn primary" onClick={handleResumeClick}>
              <FileText size={16} />
              <span>VIEW RESUME</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="profile-container">
            <div className="background-circle"></div>
            <div className="profile-image">
              <img src={HeadImage} alt="Jaya Lakshmi Gunnam" />
            </div>

            {/* Decorative Dots */}
            <div className="decorative-dots">
              {Array.from({ length: 30 }, (_, i) => (
                <span key={i} className="decorative-dot"></span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainSection;