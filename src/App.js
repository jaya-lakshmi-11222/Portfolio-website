//App.js

import React, { useState, useEffect, createContext, useContext } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'; 
import HomePage from './components/Home/Home';
import Layout from "./components/Layout/layout";
import './App.css';

const LayoutWrapper = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// Create Theme Context 
const ThemeContext = createContext(); 
 
export const useTheme = () => { 
  const context = useContext(ThemeContext); 
  if (!context) { 
    throw new Error('useTheme must be used within a ThemeProvider'); 
  } 
  return context; 
}; 
 
function App() { 
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme state from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference if no saved theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }); 
 
  // Apply theme to document whenever isDarkMode changes
  useEffect(() => { 
    if (isDarkMode) { 
      document.documentElement.classList.add('dark'); 
      localStorage.setItem('theme', 'dark'); 
    } else { 
      document.documentElement.classList.remove('dark'); 
      localStorage.setItem('theme', 'light'); 
    } 
  }, [isDarkMode]); 
 
  const toggleTheme = () => { 
    setIsDarkMode(!isDarkMode); 
  }; 
 
  return ( 
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> 
      <Router> 
        <div className="App"> 
          <main className="main-content"> 
            <Routes> 
              <Route element={<LayoutWrapper />}>
                <Route path="/" element={<HomePage />} />
              </Route>
            </Routes> 
          </main> 
        </div> 
      </Router> 
    </ThemeContext.Provider> 
  ); 
} 
 
export default App;