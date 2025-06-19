// //Home.js

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MainSection from '../MainSection/Main';
import AboutSection from '../AboutSection/About';
import GitHubActivity from '../GithubSection/Gitactivity';
import Projects from '../ProjectSection/Project';
import AchievementPage from '../AchievementSection/Achievement.js';
import ContactPage from '../ContactSection/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to specific sections based on URL hash
    const handleScrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        // Remove the # from hash
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    handleScrollToSection();
  }, [location.hash]);

  return (
    <div>
      <section id="main" className="mainSection">
        <MainSection />
      </section>
      <section id="about" className="aboutSection">
        <AboutSection />
      </section>
      <section id="github" className="githubSection">
        <GitHubActivity />
      </section>
      <section id="projects" className="projectSection">
        <Projects />
      </section>
      <section id="Achievements" className="achievementSection">
        <AchievementPage />
      </section>
      <section id="contact" className="contactSection">
        <ContactPage />
      </section>



      {/* <HeaderPage /> */}
    </div>
  );
};
export default Home;