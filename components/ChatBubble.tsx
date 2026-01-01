
import React from 'react';
import { AiMessage } from '../types';

interface ChatBubbleProps {
  message: AiMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAi = message.sender === 'ai';

  return (
    <div className={`flex w-full items-end gap-3 ${isAi ? 'justify-start' : 'justify-end'} animate-fade-in-up`}>
      {isAi && (
        <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M4 4l16 0l-6 8l6 8l-16 0l6 -8z"></path>
          </svg>
        </div>
      )}
      <div
        className={`
          max-w-[75%] px-5 py-4 text-[15px] font-semibold leading-snug rounded-3xl shadow-sm
          ${isAi 
            ? 'bg-primary text-gray-900 rounded-bl-none' 
            : 'bg-[#F1F5F9] text-[#1E293B] rounded-br-none'
          }
        `}
      >
        {message.text}
      </div>
    </div>
  );
};
