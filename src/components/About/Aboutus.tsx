"use client";
import React, { useState } from "react";
import TeamMemberCard from "../common/Teammembers";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      image: "/images/sarah.jpg",
      name: "Srinivas Yanamandra",
      role: "CEO",
      testimonial:
        "Web hosting and cloud infrastructure, Srinivas founded Syncubits to revolutionize hosting solutions for developers and businesses.",
    },
    {
      image: "/images/sarah.jpg",
      name: "Yuva Prakash Sai",
      role: "CTO",
      testimonial:
        "Former tech lead with expertise in distributed systems and scalable infrastructure. Yuva leads our technical vision and innovation.",
    },
    {
      image: "/images/sarah.jpg",
      name: "Mahesh Goud",
      role: "ML & Deep Learning Engineer",
      testimonial:
        "Passionate about building intelligent systems that solve real-world problems using machine learning and deep learning.",
    },
    {
      image: "/images/sarah.jpg",
      name: "Bhavishya Thota",
      role: "Data Analyst",
      testimonial:
        "Enjoys turning raw data into meaningful insights that help drive decision-making and strategy.",
    },
    {
      image: "/images/john.jpg",
      name: "Sathwika",
      role: "Figma Developer",
      testimonial:
        "Specializes in creating clean and engaging UI/UX designs that bring ideas to life through Figma.",
    },
    {
      image: "/images/sarah.jpg",
      name: "Adusumalli Vineetha",
      role: "Frontend Developer",
      testimonial:
        "Focused on building responsive and user-friendly web applications with modern frontend technologies.",
    },
  ];

  const cardsToShow = 3;
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <>
      {/* Team Section */}
      <section className="bg-gray-50 p-10 min-h-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12">This is Our Team</h2>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-3"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                  width: `${(teamMembers.length / cardsToShow) * 100}%`,
                }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-3">
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      testimonial={member.testimonial}
                      image={member.image}
                      alt={`${member.name} profile picture`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav Buttons */}
            {teamMembers.length > cardsToShow && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:scale-110"
                  aria-label="Previous team members"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:scale-110"
                  aria-label="Next team members"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Synqubits Story Section */}
      <section className="bg-[#eaf6f8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-5xl min-h-full font-extrabold text-gray-900 mb-6">
              Synqubits Story.
            </h2>
            <p className="text-gray-800 my-font leading-relaxed mb-4">
              SynQubits is a pioneering quantum computing startup focused on
              developing scalable and fault-tolerant quantum processors. Their
              mission is to harness the principles of quantum mechanics to build
              next-generation computing platforms capable of solving problems
              that are intractable for classical systems.
            </p>
            <p className="text-gray-800 my-font leading-relaxed">
              By leveraging superconducting qubits—tiny circuits that operate at
              near absolute zero. In addition to hardware innovation, SynQubits
              is building a full-stack quantum computing ecosystem, including
              software development kits, simulators, and cloud access to their
              quantum devices.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/about/aboutus[1].png"
              alt="Synqubits team"
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* Synqubits Values Section */}
    <section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
      Synqubits Values.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-lg font-bold rounded-full mx-auto mb-6">
          01
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Innovation First</h3>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-lg font-bold rounded-full mx-auto mb-6">
          02
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Collaboration & Respect</h3>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-lg font-bold rounded-full mx-auto mb-6">
          03
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Integrity & Responsibility </h3>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default AboutUs;
