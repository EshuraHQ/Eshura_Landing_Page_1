
import React from 'react';

const IntegrationItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3 mx-8 whitespace-nowrap">
    {children}
  </div>
);

const Integrations: React.FC = () => {
  const logos = [
    (
      <React.Fragment key="llama">
        <div className="w-10 h-10 bg-gray-800 dark:bg-gray-100 rounded-xl flex items-center justify-center text-white dark:text-black shadow-sm">
          <span className="material-symbols-outlined text-2xl">pets</span>
        </div>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200">LlamaIndex</span>
      </React.Fragment>
    ),
    (
      <React.Fragment key="n8n">
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-white dark:border-background-dark bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-5 h-5 rounded-full border-2 border-white dark:border-background-dark bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-5 h-5 rounded-full border-2 border-white dark:border-background-dark bg-gray-400 dark:bg-gray-500"></div>
        </div>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200 ml-1">n8n</span>
      </React.Fragment>
    ),
    (
      <React.Fragment key="langgraph">
        <div className="w-10 h-10 bg-gray-800 dark:bg-gray-100 rounded-xl flex items-center justify-center text-white dark:text-black shadow-sm">
          <span className="material-symbols-outlined text-2xl">account_tree</span>
        </div>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200">LangGraph</span>
      </React.Fragment>
    ),
    (
      <React.Fragment key="crew">
        <span className="text-2xl font-serif italic font-bold text-gray-700 dark:text-gray-200">crew<span className="text-gray-400 dark:text-gray-500 not-italic font-sans">AI</span></span>
      </React.Fragment>
    ),
    (
      <React.Fragment key="langchain">
        <div className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-200">
          <span className="material-symbols-outlined text-3xl">link</span>
        </div>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200">LangChain</span>
      </React.Fragment>
    ),
  ];

  return (
    <div className="w-full border-t border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-background-dark py-16 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Seamlessly integrates with your stack</p>
      </div>
      
      <div className="relative mask-fade">
        <div className="flex animate-marquee w-fit">
          {/* First set of logos */}
          <div className="flex items-center">
            {logos.map((logo, idx) => (
              <IntegrationItem key={`logo-1-${idx}`}>{logo}</IntegrationItem>
            ))}
          </div>
          {/* Second set of logos for seamless loop */}
          <div className="flex items-center">
            {logos.map((logo, idx) => (
              <IntegrationItem key={`logo-2-${idx}`}>{logo}</IntegrationItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
