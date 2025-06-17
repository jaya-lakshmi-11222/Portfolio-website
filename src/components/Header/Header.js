//Header.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../App';
import './Header.css';
import HeadLogo from '../../Assets/HeaderLogo.png';

const HeaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navigateToHome = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-inner">
          <div className="logo-container" onClick={navigateToHome} style={{cursor: 'pointer'}}>
            <img src={HeadLogo} alt="Logo" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button
              onClick={navigateToHome}
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('Achievements')}
              className="nav-link"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="mobile-controls">
            <button
              onClick={toggleTheme}
              className="theme-toggle mobile-theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <button
              onClick={() => {
                navigateToHome();
                setIsMenuOpen(false);
              }}
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="mobile-nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="mobile-nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('Certifications')}
              className="mobile-nav-link"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mobile-nav-link"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderPage;