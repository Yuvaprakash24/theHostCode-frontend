import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sai Srinivas",
      position: "Founder of theHostCode",
      avatar: "/logo.png",
      content:
        "Quam ut gravida cras nulla duis magnis. Facilisis bibendum amet vulputate facilisi consectetur tempus in turpis. Gravida tortor quisque donec adipiscing.",
    },
    {
      name: "Srinu",
      position: "Founder of Cyqubit",
      avatar: "/logo.png",
      content:
        "Quam ut gravida cras nulla duis magnis. Facilisis bibendum amet vulputate facilisi consectetur tempus in turpis. Gravida tortor quisque donec adipiscing.",
    },
    {
      name: "Laxmi Sai Srinivas",
      position: "Founder of Syncqubit",
      avatar: "/logo.png",
      content:
        "Quam ut gravida cras nulla duis magnis. Facilisis bibendum amet vulputate facilisi consectetur tempus in turpis. Gravida tortor quisque donec adipiscing.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </p>
        </div>
        {/* First row: left to right */}
        <div className="overflow-x-auto pb-12 pt-12 hide-scrollbar">
          <div className="flex animate-scroll-x gap-8 w-max">
            {/* First track */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="bg-white rounded-2xl testimonial-shadow p-6 flex flex-col gap-4 min-w-[400px] max-w-[500px] my-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <div className="text-gray-800 text-base">
                  {testimonial.content}
                </div>
              </div>
            ))}
            {/* Second track (duplicate) */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="bg-white rounded-2xl testimonial-shadow p-6 flex flex-col gap-4 min-w-[400px] max-w-[500px] my-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <div className="text-gray-800 text-base">
                  {testimonial.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second row: right to left (infinite) */}
        <div className="overflow-x-auto pb-12 pt-2 hide-scrollbar">
          <div className="flex animate-scroll-x-reverse gap-8 w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-reverse-${index}`}
                className="bg-white rounded-2xl testimonial-shadow p-6 flex flex-col gap-4 min-w-[400px] max-w-[500px] my-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <div className="text-gray-800 text-base">
                  {testimonial.content}
                </div>
              </div>
            ))}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-reverse-${index}`}
                className="bg-white rounded-2xl testimonial-shadow p-6 flex flex-col gap-4 min-w-[400px] max-w-[500px] my-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <div className="text-gray-800 text-base">
                  {testimonial.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 