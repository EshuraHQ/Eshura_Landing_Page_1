import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../constants/servicesData.json';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The service you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      {/* Header */}
      <div className="mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <span className="material-icons text-sm">arrow_back</span>
          Back to Services
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
          <span className="bg-primary px-4 py-2 text-black rounded-lg">
            {service.title}
          </span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          {service.subtitle}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Description */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {service.description}
          </p>
        </div>

        {/* Placeholder for diagram/image */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-black text-3xl">smart_toy</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Service Diagram</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div key={index} className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-black text-lg">check_circle</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-icons text-black text-sm">arrow_forward</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <div className="text-3xl font-bold text-primary mb-4">{service.pricing.starter}</div>
            <p className="text-gray-600 dark:text-gray-400">Perfect for small businesses</p>
          </div>
          <div className="bg-primary p-8 rounded-2xl text-center text-black">
            <h3 className="text-xl font-bold mb-4">Professional</h3>
            <div className="text-3xl font-bold mb-4">{service.pricing.professional}</div>
            <p className="text-black/80">Ideal for growing companies</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-primary mb-4">{service.pricing.enterprise}</div>
            <p className="text-gray-600 dark:text-gray-400">Custom solutions for large organizations</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your business with our advanced AI solutions. Contact us today to discuss your specific needs.
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
    </div>
  );
};

export default ServiceDetail;