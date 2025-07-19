'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../../common/Button';

const features = [ 
  {
    title: "Artificial Intelligence",
    description: "Artificial Intelligence is the simulation of human intelligence by machines. It includes learning, reasoning, problem-solving, and decision-making. AI powers applications like chatbots, recommendation systems, and self-driving cars. It relies on data and algorithms to improve performance over time.",
    image: "/why-choose-us/ai.png"
  },
  {
    title: "Data Science", 
    description: "Data Science is the field of analyzing and interpreting large volumes of data. It combines statistics, machine learning, and programming to find patterns. Data scientists turn raw data into actionable insights for businesses. It plays a key role in decision-making and strategic planning.",
    image: "/why-choose-us/data-science.png"
  },
  {
    title: "Cloud Computing",
    description: "Cloud Computing delivers computing services like storage and servers over the internet. It allows users to access resources without owning physical hardware. Popular platforms include AWS, Azure, and Google Cloud. It supports scalability, flexibility, and cost-efficiency in modern computing.",
    image: "/why-choose-us/cloud.png"
  },
  {
    title: "Web Development",
    description: "Web Development involves building and maintaining websites and web applications. It includes front-end (HTML, CSS, JavaScript) and back-end (Node.js, PHP, etc.) work. Developers focus on user experience, performance, and responsiveness. It powers everything from personal blogs to enterprise-level platforms.",
    image: "/why-choose-us/web.png"
  },
  {
    title: "Digital Marketing",
    description: "Digital Marketing integrates software development and IT operations for faster delivery. It emphasizes collaboration, automation, and continuous integration/deployment. Tools like Jenkins, Docker, and Kubernetes are commonly used in DevOps. Its goal is to shorten development cycles and improve product quality.",
    image: "/why-choose-us/marketing.png"
  }
];

const CARD_W = 260;
const CARD_H = 320;
const FOCUS_CARD_W = 340;
const FOCUS_CARD_H = 380;
const GAP = 24;
const STEP = CARD_W + GAP;

export default function WhyChooseUs() {
  // We'll use a continuous counter that never resets
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto advance every 3 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideIndex(prev => prev + 1);
    }, 3000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Create infinite array by repeating features
  const createInfiniteArray = () => {
    const totalSlides = 1000; // Much larger number for truly infinite scrolling
    return Array.from({ length: totalSlides }, (_, i) => ({
      ...features[i % features.length],
      uniqueId: i,
      originalIndex: i % features.length
    }));
  };

  const infiniteFeatures = createInfiniteArray();
  
  // Calculate current focused feature (for the text/description)
  const currentFeatureIndex = slideIndex % features.length;
  
  // Calculate translate position - start from a safe middle position
  const startOffset = 100; // Start from slide 100 to have plenty of room
  const currentSlide = startOffset + slideIndex;
  const translateX = -(currentSlide * STEP) + (FOCUS_CARD_W - CARD_W) / 2 + 32;

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center sticky-heading">
        Why Choose Us?
      </h2>
      <div className="container mx-auto pt-12 pl-4">

        {/* Title with Slide-Up Animation */}
        <div key={currentFeatureIndex} className="animate-slide-up pl-4">
          <h2 className="text-5xl lg:text-7xl font-semibold text-gray-900 mb-8">
            {features[currentFeatureIndex].title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: description */}
          <div className="w-full lg:w-[30%] min-w-[320px]">
            <p className="text-lg lg:text-xl text-gray-700 mb-10 pl-4 lg:pl-6 whitespace-pre-line">
              {features[currentFeatureIndex].description}
            </p>
            <Button className="ml-4 lg:ml-6 mt-2 px-6 py-2 font-semibold">
              Explore now
            </Button>
          </div>

          {/* Mobile: Only show focused image */}
          <div className="w-full flex justify-center items-center h-[380px] lg:hidden">
            <img
              src={features[currentFeatureIndex].image}
              alt={features[currentFeatureIndex].title}
              className="object-cover h-[320px] w-[260px] rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Desktop: Infinite carousel */}
          <div className="w-full lg:w-[70%] overflow-hidden h-[480px] pl-4 pr-8 items-center hide-scrollbar hidden lg:flex">
            <div
              className="flex items-center gap-6 will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                width: infiniteFeatures.length * STEP,
              }}
            >
              {infiniteFeatures.map((feature, i) => {
                const isFocused = i === currentSlide;
                const isToTheRight = i > currentSlide;
                const distanceFromFocus = i - currentSlide;
                
                // Only show focused card and cards to the right (within 3 positions)
                if (distanceFromFocus < 0 || distanceFromFocus > 3) {
                  return (
                    <div
                      key={feature.uniqueId}
                      style={{
                        width: CARD_W,
                        minWidth: CARD_W,
                        height: CARD_H,
                        opacity: 0,
                        pointerEvents: 'none',
                      }}
                    />
                  );
                }
                
                return (
                  <div
                    key={feature.uniqueId}
                    className={`flex items-center justify-center will-change-transform
                      ${isFocused 
                        ? 'scale-110 z-10 transition-all duration-500' 
                        : 'scale-90 opacity-60 transition-all duration-500'}
                    `}
                    style={{
                      width: isFocused ? FOCUS_CARD_W : CARD_W,
                      minWidth: isFocused ? FOCUS_CARD_W : CARD_W,
                      height: isFocused ? FOCUS_CARD_H : CARD_H,
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`object-cover rounded-2xl will-change-transform
                        ${isFocused 
                          ? 'h-[380px] w-[340px] shadow-2xl' 
                          : 'h-[320px] w-[260px] shadow-lg'}
                      `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}