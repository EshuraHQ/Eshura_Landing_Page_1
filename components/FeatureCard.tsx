
import React from 'react';
import { UseCase } from '../types';
import { ChatBubble } from './ChatBubble';

interface FeatureCardProps {
  useCase: UseCase;
  reversed?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ useCase, reversed }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group">
      {/* Description Column */}
      <div className={`
        flex flex-col justify-center
        ${reversed ? 'lg:order-2' : 'lg:order-1'}
      `}>
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500 animate-pulse-slow">
          <span className="material-symbols-outlined text-4xl text-gray-900 dark:text-white group-hover:text-black">
            {useCase.icon}
          </span>
        </div>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          {useCase.title}
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
          {useCase.description}
        </p>
        
        {/* Additional Information: Key Benefits */}
        <div className="space-y-4">
          {useCase.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex-shrink-0 w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-gray-900 dark:text-white font-bold">check</span>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* High-Fidelity Chat Window Column */}
      <div className={`
        relative ${reversed ? 'lg:order-1' : 'lg:order-2'}
        transition-transform duration-700 group-hover:-translate-y-2
      `}>
        {/* Chat Window Container with Float Animation */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col h-[580px] animate-float">
          {/* Header with Traffic Lights */}
          <div className="px-6 py-5 flex items-center border-b border-gray-50 bg-white">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:scale-110 transition-transform"></div>
            </div>
            <div className="flex-1 text-center pr-10">
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">ESHURA AI PREVIEW</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-white">
            {useCase.messages.map((msg, index) => (
              <div key={msg.id} className="transition-all" style={{ animationDelay: `${index * 300}ms` }}>
                <ChatBubble message={msg} />
              </div>
            ))}
          </div>

          {/* Input Area Mockup */}
          <div className="px-6 pb-6 pt-2 bg-white">
            <div className="relative flex items-center border border-gray-200 rounded-[1.8rem] px-4 py-3 shadow-sm bg-white hover:border-primary transition-colors duration-300">
              <div className="flex items-center gap-3 text-gray-400 mr-2">
                <span className="material-symbols-outlined text-xl cursor-default hover:text-gray-600">image</span>
                <span className="material-symbols-outlined text-xl cursor-default hover:text-gray-600">code</span>
                <span className="material-symbols-outlined text-xl cursor-default hover:text-gray-600">mic</span>
              </div>
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 border-none focus:ring-0 text-gray-600 font-medium text-[15px] placeholder-gray-400 bg-transparent"
                readOnly
              />
              <div className="ml-2 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 transition-all group-hover:bg-primary group-hover:text-gray-900">
                <span className="material-symbols-outlined text-xl">arrow_upward</span>
              </div>
            </div>
            <p className="text-center text-[12px] text-gray-400 mt-4 font-medium italic">
              AI can make mistakes. Please verify important info.
            </p>
          </div>
        </div>
        
        {/* Decorative Background Glow */}
        <div className="absolute -inset-8 bg-primary/5 rounded-[4rem] -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      </div>
    </div>
  );
};
