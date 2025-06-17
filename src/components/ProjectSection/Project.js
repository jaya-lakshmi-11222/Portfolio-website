import React from 'react';
import './Project.css';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250/4ECDC4/ffffff?text=Project+1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      repoUrl: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250/44A08D/ffffff?text=Project+2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      repoUrl: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Project+3",
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with forecasts, maps, and personalized weather alerts.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      repoUrl: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Project+4",
      title: "Social Media App",
      description: "Modern social media platform with real-time messaging and content sharing capabilities.",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Socket.io"],
      repoUrl: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=Project+5",
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects with smooth animations and modern design.",
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      repoUrl: "https://github.com/yourusername/project5"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=Project+6",
      title: "Data Visualization Tool",
      description: "Interactive data visualization dashboard for business analytics and reporting.",
      technologies: ["D3.js", "React", "Python", "Flask"],
      repoUrl: "https://github.com/yourusername/project6"
    }
  ];

  const handleViewProject = (repoUrl) => {
    window.open(repoUrl, '_blank');
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
          <button className="view-more-button" onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;