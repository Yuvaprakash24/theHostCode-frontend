import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-[#f6f9fa] max-w-full"
      style={{
        backgroundImage: "url('/hero-section-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap" rel="stylesheet"></link>
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <h1 className="text-6xl md:text-7xl font-semibold text-black mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.5s', animationDuration: '1s', animationTimingFunction: 'ease-in-out' }}>
          Take your Business Digital<span style={{ fontFamily: "'Baloo 2', cursive" }}>,</span><br />
          <span className="block mt-2 flex items-center justify-center gap-2">
            the easy way
            <span className="animate-bounce font-extrabold -mb-5" style={{ fontFamily: "'Baloo 2', cursive" }}>!</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>  
      </div>
      {/* Optional: overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />
    </section>
  );
};

export default MainSection; 