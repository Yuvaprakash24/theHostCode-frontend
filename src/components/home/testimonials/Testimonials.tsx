import React from 'react';

const Testimonials = () => {
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
    <section className="py-16 bg-main-color w-full">
      <div className="w-full px-0">
        <div className="text-center mb-6">
          <h2 className="home-page-heading mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </p>
        </div>
        {/* First row: left to right */}
        <div className="overflow-x-auto pb-3 pt-6 hide-scrollbar w-full">
          <div className="flex animate-scroll-x gap-8 w-full px-4">
            {/* First track */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 min-w-[280px] max-w-[280px] h-[280px] md:min-w-[500px] md:max-w-[500px] md:h-[200px] my-6" style={{ boxShadow: '-20px 20px 22px 0px #0000004D' }}
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
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 min-w-[280px] max-w-[280px] h-[280px] md:min-w-[500px] md:max-w-[500px] md:h-[200px] my-6" style={{ boxShadow: '-20px 20px 22px 0px #0000004D' }}
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
          <div className="flex animate-scroll-x-reverse gap-8 w-full px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-reverse-${index}`}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 min-w-[280px] max-w-[280px] h-[280px] md:min-w-[500px] md:max-w-[500px] md:h-[200px] my-6" style={{ boxShadow: '-20px 20px 22px 0px #0000004D' }}
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
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 min-w-[280px] max-w-[280px] h-[280px] md:min-w-[500px] md:max-w-[500px] md:h-[200px] my-6" style={{ boxShadow: '-20px 20px 22px 0px #0000004D' }}
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