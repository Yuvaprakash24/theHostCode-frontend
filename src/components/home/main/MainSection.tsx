'use client'
import React, { useEffect, useState } from 'react';

const MainSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    }
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center bg-[#f6f9fa]"
      style={{
        aspectRatio: '96/61',
        backgroundImage: "url('/hero-section-background.png')",
        backgroundSize: isMobile ? 'cover' : 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f6f9fa',
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet"></link>
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <h1 className="main-page-heading mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.5s', animationDuration: '1s', animationTimingFunction: 'ease-in-out' }}>
          Take your Business Digital<span style={{ fontFamily: "'Baloo 2', cursive" }}>,</span><br />
          <span className="block mt-4 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
            the easy way
            <span className="animate-bounce font-extrabold mb-0 sm:-mb-5 ml-0 sm:ml-1" style={{ fontFamily: "'Baloo 2', cursive" }}>!</span>
          </span>
        </h1>
        <p className="main-page-sub-heading text-gray-500 max-w-2xl mx-auto mb-8 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet.
        </p>  
      </div>
    </section>
  );
};

export default MainSection;