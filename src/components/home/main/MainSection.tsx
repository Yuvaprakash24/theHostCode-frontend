import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-[#f6f9fa]"
      style={{
        aspectRatio: '96/61', // or the actual ratio of your image
        backgroundImage: "url('/hero-section-background.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f6f9fa',
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet"></link>
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <h1 className="main-page-heading mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.5s', animationDuration: '1s', animationTimingFunction: 'ease-in-out' }}>
          Take your Business Digital<span style={{ fontFamily: "'Baloo 2', cursive" }}>,</span><br />
          <span className="block mt-7 flex items-center justify-center gap-2">
            the easy way
            <span className="animate-bounce font-extrabold -mb-5" style={{ fontFamily: "'Baloo 2', cursive" }}>!</span>
          </span>
        </h1>
        <p className="main-page-sub-heading text-gray-500 max-w-2xl mx-auto mb-8 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet.
        </p>  
      </div>
      {/* Removed overlay for better image visibility */}
    </section>
  );
};

export default MainSection; 