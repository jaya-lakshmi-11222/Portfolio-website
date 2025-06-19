import React from 'react';
import './Gitactivity.css';

const GitHubActivity = ({ isDarkTheme = false }) => {
  // Replace 'your-github-username' with your actual GitHub username
  const githubUsername = 'perireddyvaka';

  return (
    <section className={`github-activity-section ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>

        <div className="github-graph-container">
          <img
            src={`https://ghchart.rshah.org/${isDarkTheme ? '4c1' : '4c1'}/${githubUsername}`}
            alt="GitHub Contribution Chart"
            className="github-graph"
          />
        </div>

        <div className="github-stats">
          <div className="stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${isDarkTheme ? 'dark' : 'default'}&hide_border=true`}
              alt="GitHub Stats"
              className="stat-image"
            />
          </div>
          
          <div className="stat-card">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${isDarkTheme ? 'dark' : 'default'}&hide_border=true`}
              alt="GitHub Streak"
              className="stat-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;