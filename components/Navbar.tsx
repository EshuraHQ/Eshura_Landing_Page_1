
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../constants/navigation';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.substring(2); // remove '/#'

      if (location.pathname === '/') {
        // We are already on home, just scroll
        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Offset for navbar
            behavior: 'smooth'
          });
          // Update URL query without reload
          window.history.pushState(null, '', `/#${hash}`);
        }
      } else {
        // Navigate to home with hash
        navigate(`/#${hash}`);
      }
    } else {
      // Regular route
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="group flex items-center gap-2" aria-label="Eshura Home">
          <Logo /> <b className=''>Eshura</b>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          <button
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-black dark:hover:bg-primary transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (location.pathname !== '/') {
                navigate('/#contact');
              } else if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button - Keeping existing logic but ensuring accessibility */}
        <button
          className="lg:hidden text-black dark:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <span className="material-symbols-outlined text-3xl">close</span>
          ) : (
            <span className="material-symbols-outlined text-3xl">menu</span>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-white dark:bg-black z-30 transition-transform duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!isMenuOpen}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold font-display text-black dark:text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            className="mt-4 bg-primary text-black px-8 py-4 rounded-xl text-lg font-bold"
            onClick={() => {
              setIsMenuOpen(false);
              const contactSection = document.getElementById('contact');
              if (location.pathname !== '/') {
                navigate('/#contact');
              } else if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
