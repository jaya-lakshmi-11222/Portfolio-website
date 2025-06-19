import React from 'react';
import './Project.css';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250/4ECDC4/ffffff?text=Project+1",
      title: "City IoT Operating Platform (ctOP)",
      description: "Developed a scalable oneM2M-compliant IoT platform with predictive maintenance, system health monitoring, and load balancing for high availability and performance.",
      technologies: ["Python", "fastAPI", "ReatJS", "oneM2M", "PostgreSQL"],
      repoUrl: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250/44A08D/ffffff?text=Project+2",
      title: "Digital Twin for Water Networks",
      description: "Designed an interactive frontend for real-time water flow simulation using sensor data, integrated with backend systems and digital twin actuation engines.",
      technologies: [" JavaScript", "python", "fastAPI", "PostgreSQL"],
      repoUrl: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Project+3",
      title: "Substation Monitoring Dashboard (BYPL)",
      description: "Built a real-time energy substation monitoring dashboard using ReactJS and Tableau, ensuring live data synchronization across backend services and UI layers.",
      technologies: ["Tableau", "JavaScript", "Nodejs", "Expressjs", "Reactjs", "PostgreSQL"],
      repoUrl: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Project+4",
      title: "Job Board Platform",
      description: "Developed MERN-based job platform with role-based access, listings, and application tracking.",
      technologies: ["Nodejs", "Expressjs", "Reactjs", "mongodb"],
      repoUrl: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=Project+5",
      title: "Sentiment Analysis Tool",
      description: "Built a machine learning model to predict public sentiment and preferences using supervised learning.",
      technologies: ["Machine learning", "Deepface algorithm"],
      repoUrl: "https://github.com/yourusername/project5"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=Project+6",
      title: "Conversational Chatbot",
      description: "Built and deployed a chatbot using Google Dialogflow to automate user support queries.",
      technologies: ["Google dialogue flow"],
      repoUrl: "https://github.com/yourusername/project6"
    }
  ];

  const handleViewProject = (repoUrl) => {
    window.open('https://github.com/perireddyvaka', '_blank');
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
          <button className="view-more-button" onClick={() => handleViewProject('https://github.com/perireddyvaka')}>
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;