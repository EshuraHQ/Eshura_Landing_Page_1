import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatBot from './ChatBot';

const FloatingChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[420px] h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-primary/10 to-primary/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 overflow-hidden">
                        <ChatBot />
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary via-primary to-yellow-400 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? (
                    <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                ) : (
                    <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                )}
            </button>
        </>
    );
};

export default FloatingChatButton;
