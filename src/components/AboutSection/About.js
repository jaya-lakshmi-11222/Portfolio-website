//About.js
import React, { useState, useEffect } from 'react';
import './About.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  const [activeSkillCategory, setActiveSkillCategory] = useState('Technologies');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = {
    'Technologies': [
      { name: 'Full Stack Development', logo: '/logos/full-stack.png' },
      { name: 'Machine Learning', logo: '/logos/machine-learning.png' },
      { name: 'Data Analysis', logo: '/logos/data-analysis.png' },
      { name: 'DevOps', logo: '/logos/devops.png' }
    ],
    'Programming Languages': [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'JavaScript', logo: '/logos/javascript.png' },
      { name: 'Go', logo: '/logos/go.png' },
      { name: 'SQL', logo: '/logos/sql.png' },
      { name: 'HTML', logo: '/logos/html-5.png' },
      { name: 'CSS', logo: '/logos/css-3.png' }
    ],
    'Frameworks': [
      { name: 'FastAPI', logo: '/logos/fastapi.png' },
      { name: 'ReactJS', logo: '/logos/react-logo.png' },
      { name: 'Node.js', logo: '/logos/nodejs.png' },
      { name: 'ExpressJS', logo: '/logos/expressjs.png' },
      { name: 'Next.js', logo: '/logos/nextjs.png' },
      { name: 'Chart.js', logo: '/logos/chartjs.png' },
      { name: 'Beego', logo: '/logos/beego.jpg' },
      { name: 'Echo', logo: '/logos/echo.png' }
    ],
    'Databases': [
      { name: 'PostgreSQL', logo: '/logos/postgre.png' },
      { name: 'MySQL', logo: '/logos/mysql.png' },
      { name: 'MongoDB', logo: '/logos/mongodb.png' },
      { name: 'Prometheus', logo: '/logos/prometheus.png' },
      { name: 'InfluxDB', logo: '/logos/influxdb.png' }
    ],
    'Tools': [
      { name: 'Tableau', logo: '/logos/tableau.png' },
      { name: 'Grafana', logo: '/logos/grafana.png' },
      { name: 'GitHub', logo: '/logos/github.png' },
      { name: 'Docker', logo: '/logos/docker.png' },
      { name: 'Jenkins', logo: '/logos/jenkins.png' },
      { name: 'Postman', logo: '/logos/postman icon.png' },
      { name: 'Locust', logo: '/logos/locust.png' },
      { name: 'JMeter', logo: '/logos/jmeter.png' },
      { name: 'Material-UI', logo: '/logos/material-ui.png' },
      { name: 'Figma', logo: '/logos/figma.png' }
    ],
    'Other Skills': [
      { name: 'Problem Solving', logo: '/logos/problem-solving.png' },
      { name: 'Leadership', logo: '/logos/leadership.png' },
      { name: 'Communication', logo: '/logos/communication.png' },
      { name: 'Critical Thinking', logo: '/logos/critical-thinking.png' }
    ]
  };

  const experienceData = [
    {
      company: 'Smart City Living Lab @ IIIT Hyderabad',
      position: 'Junior Software Engineer',
      duration: 'Oct 2024 – Present',
      description: 'Designed and developed full-stack IoT applications for smart cities using the MERN stack, with real-time dashboards, CI/CD integration (Docker & GitHub Actions), and collaboration with urban mission stakeholders.',
      expanded: true
    },
    {
      company: 'Smart City Living Lab @ IIIT Hyderabad',
      position: 'Software Research Intern',
      duration: 'Feb 2024 – Sep 2024',
      description: 'Collaborated in R&D for urban innovation, developing IoT-based smart city systems by translating infrastructure challenges into scalable software solutions with domain experts.',
      expanded: false
    }
  ];

  const educationData = [
    {
      institution: 'Kakinada Institute of Engineering and Technology, India',
      degree: 'BTech in Computer Science with specialization Artificial Intelligence & Data Science',
      duration: '2020 - 2024',
      description: 'Completed Bachelor of Technology in Computer Science with specialization AI&DS with GPA of 7.50/10. The program provided a solid foundation in computer science principles,Artificial Intelligence and Data Science including software development, data structures, algorithms, and system design.',
      expanded: true
    },
    {
      institution: 'Sri Saraswathi Junior College, India',
      degree: 'Intermediate in MPC',
      duration: '2018 - 2020',
      description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry with GPA of 9.09/10, building strong analytical and problem-solving skills.',
      expanded: false
    },
    {
      institution: 'Sri Saraswathi High School, India',
      degree: 'Secondary Education',
      duration: '2017 - 2018',
      description: 'Completed secondary education with excellent academic performance with GPA of 9.08/10 and developed foundational knowledge across various subjects.',
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
            {/* Skill Category Navigation */}
            <div className="skills-category-navigation-container">
              {Object.keys(skillsData).map((category) => (
                <button
                  key={category}
                  className={`skill-category-button ${activeSkillCategory === category ? 'skill-category-active' : ''}`}
                  onClick={() => setActiveSkillCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Skills Grid */}
            <div className="developer-skills-interactive-grid">
              {skillsData[activeSkillCategory].map((skill, index) => (
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
            and a strong foundation in computer science principles with Artificial Intelligence & Data Science.
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