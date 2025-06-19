import React from 'react';
import './Project.css';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      image: "/logos/Language.png",
      title: "Language Learning Tool (LLT)",
      description: "Developed a full-stack Language Learning Tool using the MERN stack with MinIO for cloud storage, featuring role-based dashboards and RESTful API integration for user, class, and content management.",
      technologies: ["React.JS", "MongoDB", "NodeJS", "Express.JS", "MinIO"],
      repoUrl: "https://github.com/RCTS-IIITH/LLT-BTP"
    },
    {
      id: 2,
      image: "/logos/Finance.png",
      title: "Finance Hive",
      description: "Contributed to Finance Hive, a responsive finance management web app built with the PERN stack, featuring scalable React.js components, secure RESTful APIs, and PostgreSQL integration for structured data handling.",
      technologies: ["Python", "React.JS", "PostgreSQL"],
      repoUrl: "https://github.com/jaya-lakshmi-11222/Finance-Hive"
    },
    {
      id: 3,
      image: "/logos/Health.png",
      title: "Health Prediction",
      description: "Developed a predictive health monitoring system using the Random Forest algorithm to analyze individual dietary patterns and habits, delivering accurate forecasts and actionable insights for promoting healthier lifestyle decisions.",
      technologies: ["Machine Learning", "Python", "HTML", "CSS"],
      repoUrl: "https://github.com/jaya-lakshmi-11222/Health-desease-prediction/tree/main/ML"
    },
    {
      id: 4,
      image: "/logos/Speech.png",
      title: "Speech Emotion Detection",
      description: "Developed an emotion recognition system using the K-Nearest Neighbors (KNN) algorithm to analyze user-uploaded audio recordings, enabling accurate detection of emotional states for real-time feedback and analysis.",
      technologies: ["Machine Learning", "Python", "React.JS", "CSS"],
      repoUrl: "https://github.com/jaya-lakshmi-11222/Speech-Emotion-Detection"
    },
    {
      id: 5,
      image: '/logos/Disney.png',
      title: "Disney Stories Website",
      description: "Created a responsive web application for reading Disney cartoon stories, featuring an engaging user interface with integrated analytics via pie charts, a feedback form, and a structured data table for organized content presentation.",
      technologies: ["React.JS", "CSS"],
      repoUrl: "https://github.com/jaya-lakshmi-11222/Disney-Story-Website"
    }
  ];

  const handleViewProject = (repoUrl) => {
    window.open('https://github.com/jaya-lakshmi-11222', '_blank');
  };

  const handleViewMore = () => {
    // Add your view more functionality here
    console.log('View more projects clicked');
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="view-button"
                  onClick={() => handleViewProject(project.repoUrl)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more-container">
          <button className="view-more-button" onClick={() => handleViewProject('https://github.com/jaya-lakshmi-11222')}>
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;