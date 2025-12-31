import React from 'react';
import BlurText from '../components/BlurText';

const PricingCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
}> = ({ title, price, description, features, recommended }) => (
    <div className={`relative p-8 rounded-3xl border ${recommended
        ? 'border-primary bg-surface-light dark:bg-surface-dark shadow-2xl scale-105 z-10'
        : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-card-dark shadow-lg'} flex flex-col h-full transition-all hover:-translate-y-1`}
    >
        {recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                Most Popular
            </div>
        )}
        <h3 className="text-xl font-display font-bold text-black dark:text-white mb-2">{title}</h3>
        <div className="mb-4">
            <span className="text-4xl font-bold text-black dark:text-white">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[50px]">{description}</p>

        <div className="flex-1 space-y-4 mb-8">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl relative top-[2px]">check_circle</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-3 rounded-xl font-bold transition-all ${recommended
            ? 'bg-primary text-black hover:bg-white hover:text-black hover:ring-2 hover:ring-primary'
            : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'}`}
        >
            Get Started
        </button>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-32 min-h-screen">
            <div className="text-center mb-20">
                <div className="inline-block bg-primary px-4 py-1.5 rounded-xl mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold font-display text-black">
                        <BlurText text="Flexible Pricing" delay={50} />
                    </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Choose the perfect plan for your business needs. Scale up as you grow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <PricingCard
                    title="Starter"
                    price="$49"
                    description="Perfect for small businesses getting started with AI support."
                    features={[
                        "1 AI Agent",
                        "1,000 Messages/month",
                        "Basic Knowledge Base",
                        "Email Support",
                        "30-day History"
                    ]}
                />
                <PricingCard
                    title="Professional"
                    price="$149"
                    description="Ideal for growing teams needing advanced automation."
                    recommended
                    features={[
                        "3 AI Agents",
                        "10,000 Messages/month",
                        "Advanced RAG Integration",
                        "Priority Support",
                        "Unlimited History",
                        "Custom Brandy Voice"
                    ]}
                />
                <PricingCard
                    title="Enterprise"
                    price="Custom"
                    description="Fully tailored solutions for large organizations."
                    features={[
                        "Unlimited Agents",
                        "Unlimited Messages",
                        "On-premise Deployment",
                        "Dedicated Account Manager",
                        "SLA Guarantees",
                        "Custom API Access"
                    ]}
                />
            </div>
        </div>
    );
};

export default Pricing;
