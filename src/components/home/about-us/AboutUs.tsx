'use client'
import React from 'react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import { useInView } from 'react-intersection-observer';

const AboutUs: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 bg-[#f7f9fa]">
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className={`home-page-heading mb-12 text-center sticky-heading ${
            headingInView ? 'animate-slide-in-top' : 'opacity-0'
          }`}
        >
          About Syncqubits.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left: Image Card */}
          <div
            ref={leftRef}
            className={`flex justify-center items-center h-full w-full ${
              leftInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <Card
              variant="glass"
              shadow="shadow-2xl"
              rounded="rounded-[48px]"
              className="p-0 flex items-center justify-center w-full h-full"
              image="/about-us.png"
            />
          </div>

          <div
            ref={rightRef}
            className={`text-left px-10 ${rightInView ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <p className="text-gray-800 mb-8 leading-relaxed my-font pr-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus quasi molestiae optio quo explicabo non ullam, enim distinctio qui ipsa illum magni provident. Minus, doloremque earum deleniti voluptates dolorum eum nam at eius tenetur fugiat velit voluptatum alias possimus quis ullam Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, laudantium.
            </p>
            <Button>
              <span className="flex items-center gap-2">
                Explore{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 