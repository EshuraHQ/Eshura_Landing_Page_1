
import React from 'react';
import ChatWidget from './ChatWidget';
import BlurText from './BlurText';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#111827] dark:text-white leading-[1.05] flex flex-col items-start">
            <BlurText 
              text="AI support that" 
              delay={60} 
              initialDelay={0}
              className="block lg:whitespace-nowrap"
            />
            <BlurText 
              text="works around" 
              delay={60} 
              initialDelay={450}
              className="block"
            />
            <div className="flex items-baseline">
              <BlurText 
                text="the" 
                delay={60} 
                initialDelay={900}
                className="mr-[0.25em]"
              />
              <span className="relative inline-block">
                <BlurText 
                  text="clock" 
                  delay={60} 
                  initialDelay={1050}
                />
                <span className="absolute bottom-2 left-0 w-full h-2.5 bg-primary/30 -z-10 rounded-full transform -rotate-1"></span>
              </span>
            </div>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Add a 24×7 AI agent to your website. Handle customer questions, orders, and returns instantly. Train it on your own data. Deploy in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              className="inline-flex justify-center items-center px-8 py-4 bg-[#0f172a] dark:bg-white text-white dark:text-gray-900 text-base font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
              href="#"
            >
              Book a Demo
            </a>
            <a 
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-surface-dark transition-all" 
              href="#"
            >
              View Pricing
            </a>
          </div>

          {/* <div className="pt-8 flex flex-col gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Trusted by innovative teams</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 flex items-center gap-2">
                <img alt="LlamaIndex Logo" className="h-5 w-5 rounded object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFJWS5kxyxYQFBoSOyAFM9Fnf_1nLqEhgNtLPLPnGVqf2v1wnDQnXY5CjxgZuk_QUez_aphtVkDiu5Zl_VDWwP_FJc4LRjlEfZ9sVW8Ism-WiC2ckpN9etEDqCuuFxLq293WNVR0fxlp6G93SJWWO94-2cArwW_eJYTu5SR_8oSqXdkuTH1YudO8vf60omtPtgx7qsamR555plXe4nz2lXrr0hgHEoUXhEH5ykmbMrKLcZ93b1zBQRR3vtwJSqxJRibIMpGX5LJ-W"/>
                <span className="font-bold text-gray-800 dark:text-white text-sm">LlamaIndex</span>
              </div>
              <div className="h-8 flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full border border-white dark:border-background-dark bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full border border-white dark:border-background-dark bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full border border-white dark:border-background-dark bg-gray-400"></div>
                </div>
                <span className="font-bold text-gray-800 dark:text-white text-sm">n8n</span>
              </div>
              <div className="h-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-800 dark:text-white text-base">hub</span>
                <span className="font-bold text-gray-800 dark:text-white text-sm">LangGraph</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Side: Chat Widget */}
        <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -z-10 dark:opacity-20"></div>
          <ChatWidget />
        </div>
      </div>
    </div>
  );
};

export default Hero;
