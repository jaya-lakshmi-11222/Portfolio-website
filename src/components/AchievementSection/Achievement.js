import React from 'react';
import { useTheme } from '../../App';
import { ExternalLink, Award, Trophy, Medal } from 'lucide-react';
import './Achievement.css';

const AchievementPage = () => {
  const { isDarkMode } = useTheme();

  const achievementData = [
    {
      id: 1,
      icon: <Award size={48} />,
      title: "Professional Certification",
      description: "Earned industry-recognized certification in web development, demonstrating expertise in modern technologies and best practices.",
      linkedInUrl: "#" // Replace with your actual LinkedIn post URL
    },
    {
      id: 2,
      icon: <Trophy size={48} />,
      title: "Project Excellence Award",
      description: "Recognized for outstanding performance and innovation in delivering high-quality software solutions that exceed client expectations.",
      linkedInUrl: "#" // Replace with your actual LinkedIn post URL
    },
    {
      id: 3,
      icon: <Medal size={48} />,
      title: "Technical Leadership",
      description: "Successfully led cross-functional teams to deliver complex projects on time while maintaining code quality and team collaboration.",
      linkedInUrl: "#" // Replace with your actual LinkedIn post URL
    }
  ];

  const handleViewAllAchievements = () => {
    // Add your logic here - could navigate to a detailed achievements page or LinkedIn profile
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  return (
    <section id="Achievements" className={`achievements-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="achievements-container">
        <h2 className="achievements-heading">Achievements</h2>
        
        <div className="achievements-grid">
          {achievementData.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <a 
                href={achievement.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                <ExternalLink size={16} />
                View on LinkedIn
              </a>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button 
            onClick={handleViewAllAchievements}
            className="view-all-btn"
          >
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementPage;