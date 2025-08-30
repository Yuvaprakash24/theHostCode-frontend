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
    <div className={`cursor-pointer ${className}`}>
      <div className="bg-white w-65 mx-auto rounded-2xl shadow-lg overflow-hidden">
        
        {/* Image Container */}
        <div className="group relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br flex items-center justify-center transition-all duration-300 group-hover:h-56">
          {image ? (
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:w-[110%] group-hover:h-[110%]"
            />
          ) : (
            <div className="text-4xl text-blue-300">
              
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20" />
        </div>
        
        {/* Content - No hover effects here */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
          
          <button
            onClick={handleExplore}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="mr-2">Explore</span>
            <svg
              className="w-4 h-4 transition-transform hover:translate-x-1"
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