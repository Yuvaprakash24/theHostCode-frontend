import React from 'react';
import Button from '../common/Button';
import { Coffee, Search } from "lucide-react";
import OpenPositions from '../common/openposition';
const CareerPage = () => {
  return (
 <div className="bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Your Impact starts here
            </h1>
            <p className="text-lg my-font text-gray-700 leading-relaxed mb-8">
              SynQubits is currently expanding its dynamic team and inviting 
              applications for multiple roles across hardware engineering, 
              quantum software development, and research.
            </p>
            <Button>Explore openings</Button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/career/cp1[1].png" 
              alt="Career Opportunities"
              className="max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>       
       {/* Join Our Journey Section */}
      <section id="open-positions" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join our Journey
          </h2>
          <p className="text-lg my-font text-gray-700 leading-relaxed mb-10">
            Join us in shaping the future of SynQubits with a passionate and
            driven team committed to pushing the boundaries of quantum innovation.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-2xl overflow-hidden border border-black max-w-xl mx-auto">
            <div className="px-3 text-gray-800">
              <Search size={25} />
            </div>
            <input
              type="text"
              placeholder="Search for position"
              className="flex-1 bg-gray-100 focus:outline-none px-3 py-5 text-black"
            />
            <button className="bg-black text-white font-bold px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all">
              GO
            </button>
          </div>
        </div>
      </section>
      {/* Life at Syncqubits */}
      <section id="life-at-syncqubits" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mt-28">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Life at Syncubits
        </h2>
        
        {/* Updated grid layout to match second image */}
        <div className="relative h-[600px] md:h-[500px]">
          {/* Left small image */}
          <div className="absolute top-26 -left-1/8 w-69 h-56 ">
            <img
              src="/career/cp2[1].png"
              alt="Team collaboration"
              className="rounded-xl shadow-md object-cover w-full h-full border-2 border-black"
            />
          </div>
          
          {/* Center large image */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-69 h-56 ">
            <img
              src="/career/cp3[1].png"
              alt="Developers coding"
              className="rounded-xl shadow-md object-cover w-full h-full border-2 border-black"
            />
          </div>
          
          {/* Center-right medium image */}
          <div className="absolute top-26 right-9/24 w-69 h-56">
            <img
              src="/career/cp4[1].png"
              alt="Team discussion"
              className="rounded-xl shadow-md object-cover w-full h-full border-2 border-black"
            />
          </div>
          
          {/* Right large image */}
          <div className="absolute top-0 right-3/25 w-69 h-56">
            <img
              src="/career/cp5[1].png"
              alt="Workshop"
              className="rounded-xl shadow-md object-cover w-full h-full border-2 border-black"
            />
          </div>
       
        
        {/* Bottom right image - positioned separately */}
        <div className="absolute top-26 -right-3/22 w-69 h-56">
    
            <img
              src="/career/cp6[1].png"
              alt="Office space"
              className="rounded-xl shadow-md object-cover w-full h-full border-2 border-black"
            />
          </div>
        </div>
        </div>
        </section>
        {/* Benefits Section */}
        <section id="benefits" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
             Benefits
          </h2>
       </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Left - Benefits Image */}
      <div>
          <img
            src="/career/cp7[1].png" 
            alt="Benifits"
            className="max-w-xl mx-auto rounded-2xl shadow-lg object-cover "
          />
        </div>

      {/* Right - Benefits Content */}
      <div className="space-y-8">
        <div>
          <p className="text-lg my-font text-gray-700 leading-relaxed mb-8">
            At SynQubits, we're more than just a quantum computing company, we're a 
            passionate team on a mission to redefine what's possible with technology. By 
            joining us, you become part of a fast, growing, innovation-driven environment 
            where your ideas matter, your growth is prioritized, and your work creates real-world impact.
          </p>

          {/* Benefits List */}
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>Work on cutting-edge quantum tech</li>
            <li>Collaborate with world-class researchers</li>
            <li>Grow through learning & innovation</li>
            <li>Make real impact on global challenges</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
 {/* Open Positions */}
      <section id="apply-now" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h2>
          <OpenPositions />
        </div>
      </section>
    </div>

    
    
  );
};

export default CareerPage;
