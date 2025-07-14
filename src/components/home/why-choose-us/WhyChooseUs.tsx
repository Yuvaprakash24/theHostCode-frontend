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

const CARD_W = 260;        // px
const CARD_H = 320;        // px
const FOCUS_CARD_W = 340;  // px
const FOCUS_CARD_H = 380;  // px
const GAP     = 24;        // px
const STEP    = CARD_W + GAP;

export default function WhyChooseUs() {
  const clone = [...features, ...features, ...features];   // 3×
  const [idx, setIdx] = useState(features.length);         // start in the middle copy
  const [enable, setEnable] = useState(true);              // CSS transition toggle
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // store interval id
  const snapping = useRef(false);                          // track if snapping

  /* autoplay ---------------------------------------------------------- */
  useEffect(() => {
    if (!enable || snapping.current) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setIdx(i => i + 1), 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enable]);

  /* infinite loop with reset ---------------------- */
  const handleTransitionEnd = () => {
    // Reset to the middle copy when reaching the end
    if (idx >= features.length * 2) {
      snapping.current = true;
      setEnable(false);
      setTimeout(() => {
        setIdx(features.length);
        setTimeout(() => {
          setEnable(true);
          snapping.current = false;
        }, 50);
      }, 50);
    }
    // Also handle the case when we go backwards
    if (idx <= 0) {
      snapping.current = true;
      setEnable(false);
      setTimeout(() => {
        setIdx(features.length);
        setTimeout(() => {
          setEnable(true);
          snapping.current = false;
        }, 50);
      }, 50);
    }
  };

  const x = -(idx * STEP) + (FOCUS_CARD_W - CARD_W) / 2 + 32; // center focus card, add left padding
  const focus = idx % features.length;          // which original card is in focus

  return (
    <section className="py-16 bg-gray-50">
      <h2
          className="text-5xl font-extrabold text-gray-900 mb-12 text-center sticky-heading"
        >
          Why Choose Us?
        </h2>
      <div className="container mx-auto pt-12 pl-4">

        {/* Title with Slide-Up Animation */}
        <div key={focus} className="animate-slide-up pl-4">
          <h2 className="text-5xl lg:text-7xl font-semibold text-gray-900 mb-8">
            {features[focus].title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">

          {/* Left: description ---------------------------------------- */}
          <div className="w-full lg:w-[30%] min-w-[320px]">
            <p className="text-lg lg:text-xl text-gray-700 mb-10 pl-4 lg:pl-6 whitespace-pre-line">
              {features[focus].description}
            </p>
            <Button className="ml-4 lg:ml-6 mt-2 px-6 py-2 font-semibold">
              Explore now
            </Button>
          </div>

          {/* Right: infinite carousel ---------------------------------- */}
          {/* Mobile: Only show focused image, centered */}
          <div className="w-full flex justify-center items-center h-[380px] lg:hidden">
            <img
              src={features[focus].image}
              alt={features[focus].title}
              className="object-cover h-[320px] w-[260px] rounded-2xl shadow-2xl"
            />
          </div>
          {/* Desktop: Infinite carousel */}
          <div className="w-full lg:w-[70%] overflow-hidden h-[480px] pl-8 pr-8 items-center hide-scrollbar hidden lg:flex">
            <div
              className="flex items-center gap-6"
              style={{
                transform: `translateX(${x}px)`,
                transition: enable ? 'transform 0.5s ease' : 'none',
                width: clone.length * STEP,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {clone.map((f, i) => {
                const isFocus = i === idx;
                return (
                  <div
                    key={`${f.title}-${i}`}
                    onMouseEnter={() => setIdx(i)}
                    className={`transition-transform duration-500 flex items-center justify-center 
                      ${isFocus ? 'scale-110 z-10 shadow-2xl' : 'scale-90 opacity-60'}
                      ${i < idx ? 'invisible pointer-events-none' : ''}`}
                    style={{
                      width: isFocus ? FOCUS_CARD_W : CARD_W,
                      minWidth: isFocus ? FOCUS_CARD_W : CARD_W,
                      height: isFocus ? FOCUS_CARD_H : CARD_H,
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={f.image}
                      alt={f.title}
                      className={`object-cover ${isFocus ? 'h-[380px] w-[340px]' : 'h-[320px] w-[260px]'} rounded-2xl ${isFocus ? 'shadow-2xl' : 'shadow-lg'}`}
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
