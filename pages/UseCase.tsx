
import { USE_CASES } from '@/constants/usecase';
import { FeatureCard } from '@/components/FeatureCard';
import { useState } from 'react';

const App: React.FC = () => {
  // const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDark]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <svg className="w-8 h-8 text-black dark:text-white fill-current transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M4 4l16 0l-6 8l6 8l-16 0l6 -8z"></path>
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white uppercase">Eshura</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`text-sm font-medium transition-colors ${item === 'Use Cases' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'}`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a href="#" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request a quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 py-4 px-6 space-y-4">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
              <a key={item} href="#" className="block text-base font-medium text-gray-600 dark:text-gray-300">{item}</a>
            ))}
            <a href="#" className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl font-medium">Request a quote</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
              AI in Action
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how 24/7 AI support transforms business operations. From automated customer service to internal knowledge bases, solve real-world problems around the clock.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-12 lg:space-y-24">
            {USE_CASES.map((uc, index) => (
              <FeatureCard key={uc.id} useCase={uc} reversed={index % 2 !== 0} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-24 lg:mt-40 bg-gray-900 dark:bg-surface-dark rounded-3xl p-8 sm:p-12 lg:p-24 relative overflow-hidden text-center group">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] transition-opacity duration-700 group-hover:opacity-30"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] transition-opacity duration-700 group-hover:opacity-30"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
                Ready to automate your support?
              </h2>
              <p className="text-gray-400 mb-10 text-lg sm:text-xl">
                Join hundreds of businesses using Eshura to provide 24/7 support and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#" className="inline-flex justify-center items-center px-10 py-4 bg-primary text-gray-900 text-lg font-bold rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free Trial
                </a>
                <a href="#" className="inline-flex justify-center items-center px-10 py-4 bg-transparent border border-gray-700 text-white text-lg font-medium rounded-xl hover:bg-gray-800 transition-all">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dark Mode Toggle */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/10 dark:border-black/10"
        >
          <span className="material-symbols-outlined text-2xl">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div> */}

      {/* Subtle Footer Link */}
      <footer className="py-12 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>&copy; 2024 ESHURA Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
