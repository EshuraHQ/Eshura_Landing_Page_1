
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Services from './components/Services';
import UseCases from './components/UseCases';
import WorkingProcess from './components/WorkingProcess';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 lg:pt-32">
        <Hero />
        <Integrations />
        <Services />
        <UseCases />
        <WorkingProcess />
        <AboutUs />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
    </div>
  );
};

export default App;
