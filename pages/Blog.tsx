import React from 'react';
import BlurText from '../components/BlurText';

const BlogPost: React.FC<{
    title: string;
    date: string;
    category: string;
    excerpt: string;
    readTime: string;
}> = ({ title, date, category, excerpt, readTime }) => (
    <article className="group bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {category}
            </div>
        </div>
        <div className="p-8">
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime} read</span>
            </div>
            <h3 className="text-xl font-bold font-display text-black dark:text-white mb-4 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {excerpt}
            </p>
            <a href="#" className="inline-flex items-center text-sm font-bold text-black dark:text-white hover:text-primary transition-colors">
                Read Article
                <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
            </a>
        </div>
    </article>
);

const Blog: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-32 min-h-screen">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black dark:text-white mb-6">
                    <BlurText text="Latest Insights" delay={50} />
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                    News, updates, and deep dives into the world of AI, automation, and customer support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BlogPost
                    title="The Future of RAG: Beyond Simple Retrieval"
                    date="Dec 28, 2025"
                    category="Technology"
                    excerpt="Retrieval-Augmented Generation is changing how AI understands context. Here is what is coming next for RAG systems in 2026."
                    readTime="5 min"
                />
                <BlogPost
                    title="How AI Agents Are Transforming Customer Support"
                    date="Dec 20, 2025"
                    category="Business"
                    excerpt="Case studies from 5 companies that reduced response times by 90% using autonomous AI agents."
                    readTime="7 min"
                />
                <BlogPost
                    title="Building Trust with AI: Privacy First"
                    date="Dec 15, 2025"
                    category="Security"
                    excerpt="Why data isolation and strict guardrails are essential for deploying AI in enterprise environments."
                    readTime="4 min"
                />
                <BlogPost
                    title="Eshura 2.0: What's New"
                    date="Nov 30, 2025"
                    category="Product"
                    excerpt="Introducing our new Agentic workflows, custom voice branding, and improved analytics dashboard."
                    readTime="3 min"
                />
                <BlogPost
                    title="Optimizing LLM Costs at Scale"
                    date="Nov 12, 2025"
                    category="Engineering"
                    excerpt="Strategies for reducing token usage without compromising on the quality of AI responses."
                    readTime="8 min"
                />
                <BlogPost
                    title="The Human in the Loop"
                    date="Oct 24, 2025"
                    category="Philosophy"
                    excerpt="Why AI will never replace the human touch, but rather enhance it to superhuman levels."
                    readTime="6 min"
                />
            </div>
        </div>
    );
};

export default Blog;
