//About.js
import React, { useState, useEffect } from 'react';
import './About.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React.JS', logo: '../Assets/logos/react.png' },
    { name: 'HTML', logo: '/logos/html.png' },
    { name: 'CSS', logo: '/logos/css.png' },
    { name: 'Responsive Design', logo: '/logos/responsive.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'Machine Learning', logo: '/logos/ml.png' },
    { name: 'MinIO', logo: '/logos/minio.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
    { name: 'Git', logo: '/logos/git.png' },
    { name: 'GitHub', logo: '/logos/github.png' },
    { name: 'Postman', logo: '/logos/postman.png' },
    { name: 'Figma', logo: '/logos/figma.png' },
    { name: 'Material-UI', logo: '/logos/material-ui.png' },
    { name: 'Ant Design', logo: '/logos/ant-design.png' }
  ];

  const experienceData = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2023 - Present',
      description: 'Developed and maintained web applications using React.js, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      expanded: false
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      description: 'Created responsive user interfaces using React.js and modern CSS frameworks. Implemented UI/UX designs and optimized application performance.',
      expanded: false
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Developer',
      duration: '2021 - 2022',
      description: 'Assisted in building web applications and learned modern development practices. Contributed to various projects using HTML, CSS, JavaScript, and Python.',
      expanded: false
    }
  ];

  const educationData = [
    {
      institution: 'Lovely Professional University, Phagwara, India',
      degree: 'BTech in Computer Science',
      duration: '2019 - 2023',
      description: 'Completed Bachelor of Technology in Computer Science with a GPA of 7.75/10. The program provided a solid foundation in computer science principles, including software development, data structures, algorithms, and system design.',
      expanded: true
    },
    {
      institution: 'Narayana Junior College, Gudivada, India',
      degree: 'Intermediate in Science',
      duration: '2017 - 2019',
      description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving skills.',
      expanded: false
    },
    {
      institution: 'Dr. KKR Gowtham Concept School, Gudivada, India',
      degree: 'Secondary Education',
      duration: '2016 - 2017',
      description: 'Completed secondary education with excellent academic performance and developed foundational knowledge across various subjects.',
      expanded: false
    }
  ];

  const [experienceItems, setExperienceItems] = useState(experienceData);
  const [educationItems, setEducationItems] = useState(educationData);

  const toggleExperience = (index) => {
    setExperienceItems(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const toggleEducation = (index) => {
    setEducationItems(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Skills':
        return (
          <div className="portfolio-skills-display-container">
            <div className="developer-skills-interactive-grid">
              {skills.map((skill, index) => (
                <div key={index} className="individual-skill-showcase-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-technology-logo-wrapper">
                    <img src={skill.logo} alt={skill.name} />
                  </div>
                  <span className="skill-technology-name-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Experience':
        return (
          <div className="professional-experience-timeline-container">
            <div className="career-history-vertical-timeline">
              {experienceItems.map((item, index) => (
                <div key={index} className="work-experience-timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-interaction-dot-wrapper">
                    <button 
                      className={`experience-expand-toggle-button ${item.expanded ? 'experience-item-expanded-state' : ''}`}
                      onClick={() => toggleExperience(index)}
                    >
                      {item.expanded ? '−' : '+'}
                    </button>
                  </div>
                  <div className="experience-details-content-wrapper">
                    <div className="company-position-header-section">
                      <h3 className="employer-company-name-title">{item.company}</h3>
                      <span className="employment-duration-badge">{item.duration}</span>
                    </div>
                    <p className="job-position-title-text">{item.position}</p>
                    {item.expanded && (
                      <div className="job-description-details-section">
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                  {index < experienceItems.length - 1 && <div className="timeline-connecting-vertical-line"></div>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'Education':
        return (
          <div className="academic-education-timeline-container">
            <div className="educational-background-vertical-timeline">
              {educationItems.map((item, index) => (
                <div key={index} className="academic-qualification-timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="education-timeline-interaction-dot">
                    <button 
                      className={`education-expand-toggle-button ${item.expanded ? 'education-item-expanded-state' : ''}`}
                      onClick={() => toggleEducation(index)}
                    >
                      {item.expanded ? '−' : '+'}
                    </button>
                  </div>
                  <div className="education-details-content-wrapper">
                    <div className="institution-degree-header-section">
                      <h3 className="educational-institution-name-title">{item.institution}</h3>
                      <span className="study-duration-badge">{item.duration}</span>
                    </div>
                    <p className="academic-degree-qualification-text">{item.degree}</p>
                    {item.expanded && (
                      <div className="education-description-details-section">
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                  {index < educationItems.length - 1 && <div className="education-timeline-connecting-line"></div>}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="about" className={`portfolio-about-section-main-container ${isAnimated ? 'about-section-animated-entrance' : ''}`}>
      <div className="about-section-content-wrapper">
        {/* Header */}
        <div className="about-section-header-introduction">
          <h1 className="about-section-main-title-heading">About</h1>
          <p className="about-section-description-paragraph">
            Passionate developer with expertise in modern web technologies<br/>
            and a strong foundation in computer science principles.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="about-section-navigation-buttons-container">
          {['Skills', 'Experience', 'Education'].map((tab) => (
            <button
              key={tab}
              className={`section-navigation-tab-button ${activeTab === tab ? 'navigation-tab-active-state' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="about-section-dynamic-content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;