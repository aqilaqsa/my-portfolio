import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import SocialMedia from "./components/SocialMedia";
import Portfolio from "./components/Portfolio";
import Awards from "./components/Awards";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="p-4 text-center">
        <button 
          onClick={toggleTheme} 
          className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="container mx-auto p-8 space-y-8">
        <Hero />
        <About />
        <CV />
        <SocialMedia />
        <Portfolio />
        <Awards />
      </main>
    </div>
  );
}

export default App;
