"use client"; // must be at the very top

import React from 'react';

interface ServiceCardProps {
  title: string;
  image?: string;
  alt?: string;
  href?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  alt = "",
  href = "#",
  className = ""
}) => {
  const handleExplore = () => {
    if (href !== "#") {
      window.open(href, '_blank');
    }
  };

  return (
    <div className={`group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${className}`}>
      <div className="bg-white w-75 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="text-4xl text-blue-300">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black-600 transition-colors duration-300">
            {title}
          </h3>
          
          <button
            onClick={handleExplore}
            className="inline-flex items-center text-gray-600 hover:text-black-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
          >
            <span className="mr-2">Explore</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
