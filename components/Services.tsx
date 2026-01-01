
import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';
import RAGProcessDiagram from './RAGProcessDiagram';
import AgenticRAGDiagram from './AgenticRAGDiagram';
import AgenticAIDiagram from './AgenticAIDiagram';

const Services: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="services">
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-20">
        <div className="flex-shrink-0">
          <div className="text-4xl md:text-5xl font-bold font-display inline-block bg-primary px-4 py-1.5 text-black rounded-lg">
            <BlurText text="Services" delay={100} />
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            We build AI-powered support and automation systems that help businesses answer questions, handle requests, and convert customers—automatically.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 1: Custom RAG chatbots */}
        <div className="order-1 md:order-none service-card group relative bg-card-light dark:bg-card-dark rounded-3xl p-8 h-[360px] flex flex-col justify-between border-2 border-transparent hover:border-black dark:hover:border-white transition-all duration-300 overflow-hidden shadow-card hover:shadow-card-hover">
          <div className="z-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight inline text-black dark:text-white">
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black">Custom RAG</span><br />
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black mt-1 inline-block">chatbots</span>
            </h2>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 opacity-90 dark:opacity-80 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
            <svg className="w-full h-full stroke-black dark:stroke-white" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="40" strokeDasharray="4 4" strokeWidth="1.5"></circle>
              <circle className="text-primary" cx="150" cy="60" fill="currentColor" r="5"></circle>
              <circle className="text-black dark:text-white" cx="50" cy="140" fill="currentColor" r="5"></circle>
              <path d="M90 90 L110 110" strokeWidth="2"></path>
              <circle cx="95" cy="95" r="15" strokeWidth="1.5"></circle>
              <path className="animate-pulse" d="M120 70 L140 50" strokeWidth="1"></path>
              <path d="M60 130 L80 150" strokeWidth="1"></path>
              <path d="M160 80 L170 80 M165 75 L165 85" strokeWidth="1.5"></path>
              <path d="M40 120 L50 120 M45 115 L45 125" strokeWidth="1.5"></path>
            </svg>
          </div>
          <Link className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide z-10 group/link" to="/service/custom-rag-chatbots">
            <div className="icon-circle w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center transition-all duration-300">
              <span className="material-icons text-white dark:text-black transform -rotate-45 text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">arrow_forward</span>
            </div>
            <span className="text-black dark:text-white border-b border-transparent group-hover/link:border-black dark:group-hover/link:border-white transition-all">Learn more</span>
          </Link>
        </div>

        {/* Card 2: Custom RAG Visual */}
        <div className="order-2 md:order-none service-card group relative bg-white dark:bg-card-dark rounded-3xl p-4 h-[360px] border border-gray-200 dark:border-gray-800 shadow-inner flex items-center justify-center">
          {/* Background pattern similar to image if needed, for now keeping it clean as per 'blank portion' instruction, but container has light bg */}
          <RAGProcessDiagram />
        </div>

        {/* Card 3: Agentic RAG Visual (Moved to Order 4) */}
        <div className="order-4 md:order-none service-card group relative bg-white dark:bg-card-dark rounded-3xl p-4 h-[360px] border border-gray-200 dark:border-gray-800 shadow-inner flex items-center justify-center">
          <AgenticRAGDiagram />
        </div>

        {/* Card 4: Agentic RAG systems (Moved to Order 3) */}
        <div className="order-3 md:order-none service-card group relative bg-card-light dark:bg-card-dark rounded-3xl p-8 h-[360px] flex flex-col justify-between border-2 border-transparent hover:border-black dark:hover:border-white transition-all duration-300 overflow-hidden shadow-card hover:shadow-card-hover">
          <div className="z-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight inline text-black dark:text-white">
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black">Agentic RAG</span><br />
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black mt-1 inline-block">systems</span>
            </h2>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 opacity-90 dark:opacity-80 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
            <svg className="w-full h-full" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect className="stroke-black dark:stroke-white fill-white dark:fill-gray-900" height="80" rx="4" stroke="currentColor" strokeWidth="1.5" width="120" x="40" y="60"></rect>
              <rect className="fill-black dark:fill-white" height="20" rx="4" width="120" x="40" y="60"></rect>
              <circle className="dark:fill-black" cx="50" cy="70" fill="white" r="2"></circle>
              <circle className="dark:fill-black" cx="58" cy="70" fill="white" r="2"></circle>
              <circle className="dark:fill-black" cx="66" cy="70" fill="white" r="2"></circle>
              <circle className="stroke-black dark:stroke-white" cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="1.5"></circle>
              <path className="stroke-black dark:stroke-white" d="M95 98 L95 102 M105 98 L105 102" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
              <path className="stroke-black dark:stroke-white" d="M96 108 Q100 112 104 108" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
              <rect className="stroke-black dark:stroke-white shadow-sm" fill="white" height="25" rx="4" stroke="currentColor" strokeWidth="1" width="30" x="130" y="45"></rect>
              <path d="M145 58 C145 55 142 55 142 57 C142 59 145 61 145 61 C145 61 148 59 148 57 C148 55 145 55 145 58 Z" fill="black"></path>
            </svg>
          </div>
          <Link className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide z-10 group/link" to="/service/agentic-rag-systems">
            <div className="icon-circle w-10 h-10 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300">
              <span className="material-icons text-black dark:text-white transform -rotate-45 text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">arrow_forward</span>
            </div>
            <span className="text-black dark:text-white border-b border-transparent group-hover/link:border-black dark:group-hover/link:border-white transition-all">Learn more</span>
          </Link>
        </div>

        {/* Card 5: Agentic AI chatbots */}
        <div className="order-5 md:order-none service-card group relative bg-card-light dark:bg-card-dark rounded-3xl p-8 h-[360px] flex flex-col justify-between border-2 border-transparent hover:border-black dark:hover:border-white transition-all duration-300 overflow-hidden shadow-card hover:shadow-card-hover">
          <div className="z-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight inline text-black dark:text-white">
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black">Agentic AI</span><br />
              <span className="bg-primary px-2 py-0.5 box-decoration-clone text-black mt-1 inline-block">chatbots</span>
            </h2>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 opacity-90 dark:opacity-80 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
            <svg className="w-full h-full" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:stroke-gray-600" d="M60 150 C80 150 80 80 140 50" stroke="#ccc" strokeDasharray="4 4" strokeWidth="1"></path>
              <path className="dark:stroke-gray-600" d="M140 150 C120 150 120 80 60 50" stroke="#ccc" strokeDasharray="4 4" strokeWidth="1"></path>
              <rect className="stroke-black dark:stroke-white dark:fill-gray-800" fill="white" height="25" rx="2" stroke="currentColor" strokeWidth="1" transform="rotate(-15)" width="40" x="70" y="110"></rect>
              <rect className="stroke-black dark:stroke-white dark:fill-gray-800" fill="white" height="25" rx="2" stroke="currentColor" strokeWidth="1" transform="rotate(15)" width="40" x="110" y="60"></rect>
              <circle className="dark:fill-white" cx="60" cy="150" fill="black" r="15"></circle>
              <circle className="dark:fill-white" cx="140" cy="50" fill="black" r="15"></circle>
            </svg>
          </div>
          <Link className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide z-10 group/link" to="/service/agentic-ai-chatbots">
            <div className="icon-circle w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center transition-all duration-300">
              <span className="material-icons text-white dark:text-black transform -rotate-45 text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">arrow_forward</span>
            </div>
            <span className="text-black dark:text-white border-b border-transparent group-hover/link:border-black dark:group-hover/link:border-white transition-all">Learn more</span>
          </Link>
        </div>

        {/* Card 6: Agentic AI Diagram */}
        <div className="order-6 md:order-none service-card group relative bg-white dark:bg-card-dark rounded-3xl p-4 h-[360px] border border-gray-200 dark:border-gray-800 shadow-inner flex items-center justify-center">
          <AgenticAIDiagram />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <Link
          to="/services"
          className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform"
        >
          Explore More Services
          <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
