// //Home.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Mail, Linkedin, Github, ExternalLink, View } from 'lucide-react';
// import './Home.css';
// import HeadImage from '../../Assets/JayaImage.jpg';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState('Skills');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Handle scroll to section when navigated from other pages
//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const element = document.getElementById(location.state.scrollTo);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, [location]);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const ViewResume = () => {
//     const resumeUrl = '/Jaya_Gunnam Resume.pdf';
//     window.open(resumeUrl, '_blank');
//   };

//   const navigateToProjects = () => {
//     navigate('/Projects');
//   };

//   const aboutContent = {
//     Skills: [
//       'React.JS, HTML, CSS, Responsive Design',
//       'Python, Machine Learning, MinIO',
//       'MongoDB, PostgreSQL',
//       'Git, GitHub, Postman',
//       'Figma, Material-UI, Ant Design'
//     ],
//     Experience: [
//       'Research Intern at Raj Reddy Center for Technology & Society(IIIT-H) - (Feb 2025-Apr 2025)',
//       'Full Stack Developer Intern at KIET-Hub - (Aug 2024-Mar 2025)',
//     ],
//     Education: [
//       'Artificial Intelligence& Data Science(CSE) - Kakinada Institute of Engineering & Technology for Women(2021-2025) - 75%',
//       'Intermediate(MPC) - Vignan Junior College, Mandapeta (2019-2021) - 75%',
//       'SSC(10th) - ZPPH School(2018-2019) - 90%'
//     ]
//   };

//   const projects = [
//     {
//       title: 'Health Prediction',
//       description: 'Developed a website for predict the future health conditions based on an individual diets & habits using random forest algorithm.(Machine Learning, React.JS, CSS)'
//     },
//     {
//       title: 'Finance Hive',
//       description: 'Developed a fully responsive finance management website for lenders can manage their finance details and transactions.(PostgreSQL, React.JS, CSS)'
//     },
//     {
//       title: 'Language Learning Tool',
//       description: 'Developed a LLT project for students can improve their communication skills by comparing the students audio with reference audio and get the results.(MERN Stack, CSS, MinIO)'
//     }
//   ];

//   return (
//     <div className="portfolio-container">
//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <h2 className="hero-title">
//                 Hi, I'm Jaya Gunnam
//               </h2>
              
//               {/* Social Links */}
//               <div className="social-links">
//                 <a
//                   href="mailto:jayalakshmigunnam1@gmail.com"
//                   className="social-link"
//                 >
//                   <Mail size={20} />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/jaya-lakshmi-gunnam"
//                   className="social-link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//                 <a
//                   href="https://github.com/jaya-lakshmi-11222"
//                   className="social-link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github size={20} />
//                 </a>
//               </div>
              
//               {/* View Resume Button */}
//               <button onClick={ViewResume} className="resume-btn">
//                 <View size={16} />
//                 View My Resume
//               </button>
//             </div>
            
//             {/* Profile Image */}
//             <div className="hero-image">
//               <div className="profile-image">
//                 <img src={HeadImage} alt="Jaya Lakshmi Gunnam" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about-section">
//         <div className="container">
//           <h2 className="section-title">
//             About
//           </h2>
          
//           <div className="about-description">
//             <p>
//               I'm Jaya Lakshmi Gunnam, a passionate Full Stack Developer with hands-on experience in MERN Stack, and machine learning. I've built scalable, real-world projects like Finance Hive and a Language Learning Tool during my internships, combining clean code with meaningful user experience. Skilled in React.js, Node.js, and PostgreSQL, I also explore NLP and ML with Python.
//             </p>
//             <p>
//               I'm constantly learning and love building solutions that bridge technology and impact. Welcome to my portfolio — a snapshot of code, creativity, and career ambition.
//             </p>
//           </div>

//           {/* Tabs */}
//           <div className="tabs">
//             {Object.keys(aboutContent).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="tab-content">
//             <ul className="tab-list">
//               {aboutContent[activeTab].map((item, index) => (
//                 <li key={index} className="tab-item">
//                   <span className="bullet"></span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects-section">
//         <div className="container">
//           <h2 className="section-title">
//             Projects
//           </h2>
          
//           <div className="projects-grid">
//             {projects.map((project, index) => (
//               <div key={index} className="project-card">
//                 <h3 className="project-title">
//                   {project.title}
//                 </h3>
//                 <p className="project-description">
//                   {project.description}
//                 </p>
//               </div>
//             ))}
//           </div>
          
//           {/* Single Explore Button */}
//           <div className="projects-explore-container">
//             <button 
//               onClick={navigateToProjects}
//               className="explore-all-btn"
//             >
//               <ExternalLink size={16} />
//               Explore All Projects
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact-section">
//         <div className="container">
//           <h2 className="section-title">
//             Contact
//           </h2>
          
//           <div className="contact-form-container">
//             <div className="contact-form">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="form-input"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="form-input"
//                 />
//               </div>
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="form-textarea"
//                 ></textarea>
//               </div>
//               <button
//                 onClick={handleSubmit}
//                 className="submit-btn"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2025 Jaya Lakshmi Gunnam. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



// Home.js 
 
import React, { useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
 
// Import your sections in order 
import HeaderPage from '../Header/Header'; 
import MainSection from '../MainSection/Main'; 
import AboutSection from '../AboutSection/About'; 
import GitHubActivity from '../GithubSection/Gitactivity'; 
import Projects from '../ProjectSection/Project'; 
// import Certifications from '../CertificateSection/Certificate'; 
// import Contact from '../ContactSection/Contact'; 
 
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
    <div style={{  
      margin: 0,  
      padding: 0, 
      // Ensure no gaps between sections 
      display: 'block' 
    }}> 
      <HeaderPage /> 
      {/* Remove the padding-top wrapper div to eliminate gaps */} 
      <div id="main">
        <MainSection /> 
      </div>
      <div id="about">
        <AboutSection /> 
      </div>
      <div id="github">
        <GitHubActivity /> 
      </div>
      <div id="projects">
        <Projects /> 
      </div>
      {/*<div id="certifications">
        <Certifications /> 
      </div>
      <div id="contact">
        <Contact /> 
      </div>
      */} 
    </div> 
  ); 
}; 
 
export default Home;