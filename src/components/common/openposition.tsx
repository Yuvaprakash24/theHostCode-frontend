import React from "react";

const openPositions = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Work with React, Next.js, and TailwindCSS to build modern UIs."
  },
  {
    id: 2,
    title: "AI Engineer",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Build cutting-edge AI systems with NLP and Computer Vision."
  }
];

const OpenPositionsPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      

        {/* Cards */}
        <div className="space-y-6">
          {openPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600 mt-2">{job.description}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
              </div>

              <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
     
    </section>
  );
};

export default OpenPositionsPage;
