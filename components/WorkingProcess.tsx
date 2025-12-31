
import React, { useState } from 'react';
import BlurText from './BlurText';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Use-Case Mapping",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "02",
    title: "Data & Knowledge Setup",
    description: "We gather and structure your company's documentation, FAQs, and product details. This data forms the 'brain' of your AI, ensuring it responds with accurate and authorized information specific to your business."
  },
  {
    number: "03",
    title: "AI System Design",
    description: "Our engineers architect the RAG (Retrieval-Augmented Generation) pipeline. We select the best models and define the AI's personality and constraints to align with your brand voice."
  },
  {
    number: "04",
    title: "Implementation & Integration",
    description: "We deploy the AI agent onto your website or app. Our systems integrate seamlessly with your existing CRM, helpdesk tools, and databases for real-time order tracking and customer lookups."
  },
  {
    number: "05",
    title: "Testing & Validation",
    description: "Rigorous stress-testing ensures the AI handles edge cases gracefully. We validate accuracy, latency, and tone through automated simulations and manual human-in-the-loop review."
  },
  {
    number: "06",
    title: "Launch, Monitoring & Improvement",
    description: "Once live, we continuously monitor performance. Using feedback loops, we refine the AI's knowledge base and logic to improve conversion rates and customer satisfaction over time."
  }
];

const WorkingProcess: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" aria-labelledby="working-process-heading">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-16">
        <h2 id="working-process-heading" className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl select-none">
          <BlurText text="Our Working Process" delay={80} />
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-sm leading-relaxed font-light">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="space-y-6" role="list">
        {steps.map((step, index) => {
          const isExpanded = expandedIndex === index;
          const panelId = `process-panel-${step.number}`;
          const headerId = `process-header-${step.number}`;

          return (
            <div
              key={step.number}
              className={`border-2 rounded-3xl md:rounded-5xl transition-all duration-300 overflow-hidden ${isExpanded
                ? 'bg-primary border-border-dark dark:border-white shadow-hard dark:shadow-hard-white'
                : 'bg-surface-light dark:bg-surface-dark border-border-dark dark:border-gray-700 shadow-hard hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              role="listitem"
            >
              <div className="p-8 md:p-10">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleStep(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleStep(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  id={headerId}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className={`text-4xl md:text-6xl font-bold font-display ${isExpanded ? 'text-black' : 'text-black dark:text-white'}`}>
                      {step.number}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-bold font-display ${isExpanded ? 'text-black' : 'text-black dark:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-black dark:border-white bg-white dark:bg-gray-700 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <span className="material-icons text-black dark:text-white font-bold text-2xl">
                      {isExpanded ? 'remove' : 'add'}
                    </span>
                  </div>
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <hr className="border-t border-black/20 dark:border-white/20 mb-8" />
                  <p className={`text-base md:text-xl leading-relaxed ${isExpanded ? 'text-black' : 'text-gray-600 dark:text-gray-400'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
