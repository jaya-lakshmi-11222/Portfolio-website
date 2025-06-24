import React from 'react';
import { useTheme } from '../../App';
import { ExternalLink } from 'lucide-react';
import './Achievement.css';

const AchievementPage = () => {
  const { isDarkMode } = useTheme();

  const achievementData = [
    {
      id: 1,
      imagePath: "/logos/khublead.jpg", // Replace with your actual image path
      title: "Project Excellence Award",
      description: "Recognized for outstanding performance in my 8-months internship in RCTS @IIIT-H fot to created a full responsive Finance Hive website as a team lead.",
      linkedInUrl: "https://www.linkedin.com/posts/jaya-lakshmi-gunnam_internshipexperience-financehive-rcts-activity-7338249565780791300-4ALK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwQNn4BVKD4ySyJ8ke-Rbj9n6h4yCs_KUg"
    },
    {
      id: 2,
      imagePath: "/logos/rdshow.jpg", // Replace with your actual image path
      title: "Participated in R&D showcase @IIIT-H",
      description: "Presented my 3-month internship project Language Learning Tool at the R&D Showcase, IIIT-Hyderabad, demonstrating innovation in educational technology.",
      linkedInUrl: "https://www.linkedin.com/posts/rcts-iiit-hyderabad_iiithyderabad-research-innovation-ugcPost-7305171294759583746-wG53?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwQNn4BVKD4ySyJ8ke-Rbj9n6h4yCs_KUg"
    }
  ];

  const handleViewAllAchievements = () => {
    // Add your logic here - could navigate to a detailed achievements page or LinkedIn profile
    window.open("https://www.linkedin.com/in/jaya-lakshmi-gunnam", "_blank");
  };

  return (
    <section id="Achievements" className={`achievements-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="achievements-container">
        <h2 className="achievements-heading">Achievements</h2>
        
        <div className="achievements-grid">
          {achievementData.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                <img 
                  src={achievement.imagePath} 
                  alt={achievement.title}
                  className="achievement-image"
                />
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