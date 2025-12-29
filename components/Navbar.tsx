
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} text-black dark:text-white fill-none stroke-current`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 25V75L75 35" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 75V25L25 65" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Logo className="w-full h-full transform group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white uppercase font-display">Eshura</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              { name: 'About us', href: '#about-us' },
              { name: 'Services', href: '#services' },
              { name: 'Use Cases', href: '#use-cases' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Blog', href: '/blog' }
            ].map((item) => (
              <a
                key={item.name}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              href="#"
            >
              Request a quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2"
            >
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {[
            { name: 'About us', href: '#about-us' },
            { name: 'Services', href: '#services' },
            { name: 'Use Cases', href: '#use-cases' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Blog', href: '/blog' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl text-base font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md mt-6"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Request a quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
