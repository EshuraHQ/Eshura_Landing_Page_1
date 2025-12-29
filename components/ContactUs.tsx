
import React, { useState } from 'react';
import BlurText from './BlurText';

const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} text-white dark:text-black fill-none stroke-current`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 25V75L75 35" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 75V25L25 65" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactUs: React.FC = () => {
  const [contactType, setContactType] = useState<'hi' | 'quote'>('hi');
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    const startSequence = () => {
      setVisibleCount(0);
      setIsTyping(false);

      // Sequence timings matches ChatWidget
      timeouts.push(setTimeout(() => setVisibleCount(1), 600));

      // Typing for first AI response
      timeouts.push(setTimeout(() => setIsTyping(true), 1200));
      timeouts.push(setTimeout(() => {
        setIsTyping(false);
        setVisibleCount(2);
      }, 2000));

      timeouts.push(setTimeout(() => setVisibleCount(3), 2600));

      // Typing for second AI response
      timeouts.push(setTimeout(() => setIsTyping(true), 3200));
      timeouts.push(setTimeout(() => {
        setIsTyping(false);
        setVisibleCount(4);
      }, 4000));

      timeouts.push(setTimeout(startSequence, 7000));
    };

    startSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
    return () => clearTimeout(timer);
  }, [visibleCount, isTyping]);

  const animationClass = "transition-all duration-300 ease-[cubic-bezier(.2,.9,.3,1)] will-change-[transform,opacity]";
  const visibleClass = "opacity-100 scale-100 translate-y-0";
  const hiddenClass = "opacity-0 scale-[0.95] translate-y-[6px]";

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="contact">
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
        <div className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl whitespace-nowrap select-none">
          <BlurText text="Contact Us" delay={100} />
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-sm font-light leading-relaxed">
          Connect with us. Let's talk about how AI can support your business.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Floating Visual Chat Mockup */}
        <div className="flex flex-col justify-center items-center relative overflow-hidden transition-colors duration-300 min-h-[600px]">
          <div className="bg-white dark:bg-surface-dark w-full max-w-md rounded-3xl shadow-chat dark:shadow-chat-dark flex flex-col h-[580px] border border-gray-100 dark:border-gray-800 animate-float pointer-events-none select-none">
            {/* Browser Controls */}
            <div className="h-12 w-full bg-white dark:bg-gray-900 border-b border-gray-50 dark:border-gray-800 flex items-center px-6 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-6 flex flex-col space-y-5 overflow-hidden bg-white dark:bg-surface-dark relative">
              {/* User Message */}
              <div className={`self-end max-w-[85%] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
                <div className="bg-[#f1f5f9] dark:bg-gray-800 text-[#1e293b] dark:text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm text-[15px] font-medium leading-snug shadow-sm">
                  How do you handle customer data privacy?
                </div>
              </div>

              {/* AI Response */}
              <div className={`self-start max-w-[85%] flex gap-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
                <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex-shrink-0 flex items-center justify-center shadow-md">
                  <LogoIcon className="w-5 h-5" />
                </div>
                <div className="bg-primary text-black px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] font-semibold leading-relaxed shadow-sm">
                  Customer data is isolated, access-controlled, and never shared between environments.
                </div>
              </div>

              {/* User Message 2 */}
              <div className={`self-end max-w-[85%] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
                <div className="bg-[#f1f5f9] dark:bg-gray-800 text-[#1e293b] dark:text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm text-[15px] font-medium leading-snug shadow-sm">
                  Can the AI expose private content accidentally?
                </div>
              </div>

              {/* AI Response 2 */}
              <div className={`self-start max-w-[85%] flex gap-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleCount >= 4 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
                <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex-shrink-0 flex items-center justify-center shadow-md">
                  <LogoIcon className="w-5 h-5" />
                </div>
                <div className="bg-primary text-black px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] font-semibold leading-relaxed shadow-sm">
                  typing...
                </div>
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="self-start max-w-[85%] flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex-shrink-0 flex items-center justify-center shadow-md opacity-50">
                    <LogoIcon className="w-5 h-5" />
                  </div>
                  <div className="bg-primary px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[54px] min-w-[80px]">
                    <div className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area (Visual Only) */}
            <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-50 dark:border-gray-800 shrink-0">
              <div className="relative flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-2.5">
                <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500 mr-3">
                  <span className="material-symbols-outlined text-[20px]">image</span>
                  <span className="material-symbols-outlined text-[20px]">code</span>
                  <span className="material-symbols-outlined text-[20px]">mic</span>
                </div>
                <div className="flex-1 text-gray-400 dark:text-gray-500 text-[14px]">
                  Type a message...
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                </div>
              </div>
              <p className="text-[10px] text-center text-gray-400 dark:text-gray-600 mt-4 tracking-wide font-medium">
                AI can make mistakes. Please verify important info.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-5xl p-8 md:p-12 transition-colors duration-300">
          <form className="h-full flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-10 flex-1">
              {/* Custom Radio Group */}
              <div className="flex items-center gap-10">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative w-7 h-7">
                    <input
                      type="radio"
                      name="contactType"
                      className="sr-only"
                      checked={contactType === 'hi'}
                      onChange={() => setContactType('hi')}
                    />
                    <div className={`w-7 h-7 rounded-full border bg-white dark:bg-gray-800 flex items-center justify-center transition-all ${contactType === 'hi' ? 'border-primary' : 'border-gray-400 dark:border-gray-600'
                      }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-primary transition-transform duration-200 ${contactType === 'hi' ? 'scale-100' : 'scale-0'}`}></div>
                    </div>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium font-display text-lg">Say Hi</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative w-7 h-7">
                    <input
                      type="radio"
                      name="contactType"
                      className="sr-only"
                      checked={contactType === 'quote'}
                      onChange={() => setContactType('quote')}
                    />
                    <div className={`w-7 h-7 rounded-full border bg-white dark:bg-gray-800 flex items-center justify-center transition-all ${contactType === 'quote' ? 'border-primary' : 'border-gray-400 dark:border-gray-600'
                      }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-primary transition-transform duration-200 ${contactType === 'quote' ? 'scale-100' : 'scale-0'}`}></div>
                    </div>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium font-display text-lg">Get a Quote</span>
                </label>
              </div>

              {/* Form Inputs */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-display ml-1" htmlFor="contact-name">Name</label>
                  <input
                    className="w-full rounded-2xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-4 placeholder-gray-400 focus:border-black dark:focus:border-primary focus:ring-0 transition-colors shadow-sm font-sans"
                    id="contact-name"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-display ml-1" htmlFor="contact-email">Email*</label>
                  <input
                    className="w-full rounded-2xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-4 placeholder-gray-400 focus:border-black dark:focus:border-primary focus:ring-0 transition-colors shadow-sm font-sans"
                    id="contact-email"
                    placeholder="Email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-display ml-1" htmlFor="contact-message">Message*</label>
                  <textarea
                    className="w-full rounded-2xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-4 placeholder-gray-400 focus:border-black dark:focus:border-primary focus:ring-0 transition-colors shadow-sm resize-none font-sans"
                    id="contact-message"
                    placeholder="Message"
                    required
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                className="w-full bg-gray-900 dark:bg-black hover:bg-black dark:hover:bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-display text-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
