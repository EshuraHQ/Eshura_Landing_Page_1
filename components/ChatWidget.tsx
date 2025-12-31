import React, { useState, useEffect, memo } from 'react';
import { LogoIcon } from './Logo';

const ChatWidget: React.FC = memo(() => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    const startSequence = () => {
      setVisibleCount(0);

      // Sequence timings
      // 0ms: Start (0 visible)
      // 600ms: User 1 appears
      // 2000ms: AI 1 appears (600 + 1400)
      // 2600ms: User 2 appears (2000 + 600)
      // 4000ms: AI 2 appears (2600 + 1400)
      // 7000ms: Reset and Loop

      timeouts.push(setTimeout(() => setVisibleCount(1), 600));
      timeouts.push(setTimeout(() => setVisibleCount(2), 2000));
      timeouts.push(setTimeout(() => setVisibleCount(3), 2600));
      timeouts.push(setTimeout(() => setVisibleCount(4), 4000));
      timeouts.push(setTimeout(startSequence, 7000));
    };

    startSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="w-full max-w-[440px] bg-white dark:bg-surface-dark rounded-3xl shadow-chat dark:shadow-chat-dark border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-[580px] relative animate-float pointer-events-none select-none"
      role="img"
      aria-label="Example AI chat conversation showing order tracking"
    >
      {/* Browser Controls */}
      <div className="h-10 w-full bg-white dark:bg-gray-900 border-b border-gray-50 dark:border-gray-800 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" aria-hidden="true"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" aria-hidden="true"></div>
      </div>

      {/* Message Area */}
      <div className="flex-1 p-6 flex flex-col space-y-5 overflow-hidden bg-white dark:bg-surface-dark">
        {/* User Message 1 */}
        <div className={`self-end max-w-[85%] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
          <div className="bg-[#f1f5f9] dark:bg-gray-800 text-[#1e293b] dark:text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm text-[15px] font-medium leading-snug shadow-sm">
            Where is my order #ORD-45821?
          </div>
        </div>

        {/* Assistant Message 1 */}
        <div className={`self-start max-w-[85%] flex gap-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
          <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex-shrink-0 flex items-center justify-center shadow-md">
            <LogoIcon className="w-5 h-5" />
          </div>
          <div className="bg-primary text-black px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] font-semibold leading-relaxed shadow-sm">
            I've checked your order. It's out for delivery and will arrive by tomorrow evening.
          </div>
        </div>

        {/* User Message 2 */}
        <div className={`self-end max-w-[85%] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
          <div className="bg-[#f1f5f9] dark:bg-gray-800 text-[#1e293b] dark:text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm text-[15px] font-medium leading-snug shadow-sm">
            Can I change the delivery address?
          </div>
        </div>

        {/* Assistant Message 2 */}
        <div className={`self-start max-w-[85%] flex gap-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 4 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
          <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex-shrink-0 flex items-center justify-center shadow-md">
            <LogoIcon className="w-5 h-5" />
          </div>
          <div className="bg-primary text-black px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] font-semibold leading-relaxed shadow-sm">
            Yes, I've updated the address and sent a confirmation to your email.
          </div>
        </div>
      </div>

      {/* Input Area (Visual Only) */}
      <div className="p-5 bg-white dark:bg-surface-dark border-t border-gray-50 dark:border-gray-800">
        <div className="relative flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500 mr-3" aria-hidden="true">
            <span className="material-symbols-outlined text-[22px]">image</span>
            <span className="material-symbols-outlined text-[22px]">code</span>
            <span className="material-symbols-outlined text-[22px]">mic</span>
          </div>
          <div className="flex-1 text-gray-400 dark:text-gray-500 text-[15px]">
            Type a message...
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500" aria-hidden="true">
            <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
          </div>
        </div>
        <div className="text-[11px] text-center text-gray-400 dark:text-gray-600 mt-4 tracking-wide font-medium">
          AI can make mistakes. Please verify important info.
        </div>
      </div>
    </div>
  );
});

ChatWidget.displayName = 'ChatWidget';

export default ChatWidget;
