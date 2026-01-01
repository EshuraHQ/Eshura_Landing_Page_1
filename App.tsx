import React, {useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';
import FloatingChatButton from './components/FloatingChatButton';
import UseCase from './pages/UseCase';
import ServiceDetail from './pages/ServiceDetail';
import ServicesList from './pages/ServicesList';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDarkMode]);

  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 flex flex-col">
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-24 lg:pt-32">
        {children}
      </main>
      <Footer />
      {/* <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} /> */}
      <FloatingChatButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/use-case" element={<UseCase />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
