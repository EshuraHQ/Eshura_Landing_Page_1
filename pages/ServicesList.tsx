import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../constants/servicesData.json';

const ServicesList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
          <span className="bg-primary px-6 py-3 text-black rounded-lg">
            All Services
          </span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our comprehensive range of AI-powered solutions designed to transform your business operations and customer experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-card-light dark:bg-card-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 group"
          >
            {/* Service Icon */}
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons text-black text-2xl">smart_toy</span>
            </div>

            {/* Service Title */}
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              {service.title}
            </h3>

            {/* Service Subtitle */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {service.subtitle}
            </p>

            {/* Service Description Preview */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
              {service.description}
            </p>

            {/* Key Features Preview */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-sm text-primary font-medium">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>

            {/* Pricing Preview */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                Starting from
              </h4>
              <p className="text-2xl font-bold text-primary">
                {service.pricing.starter}
              </p>
            </div>

            {/* Learn More Button */}
            <Link
              to={`/service/${service.id}`}
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group/btn"
            >
              <div className="icon-circle w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center transition-all duration-300">
                <span className="material-icons text-white dark:text-black transform -rotate-45 text-lg group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">arrow_forward</span>
              </div>
              <span className="text-black dark:text-white border-b border-transparent group-hover/btn:border-black dark:group-hover/btn:border-white transition-all">
                Learn more
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started with our AI solutions today. Our team of experts will help you choose the perfect service for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            View Pricing
            <span className="material-icons">arrow_forward</span>
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <span className="material-icons">email</span>
          </Link>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span className="material-icons text-sm">arrow_back</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServicesList;