import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "Who Knew??",
    text: `“Lovely cabins on a fantastic property. It was beyond my expectation. 
    I would highly recommend this for groups. Such a beautiful memory from a place 
    I had never heard of before.”`,
    author: "- surfngrandma",
  },
  {
    title: "Amazing Stay",
    text: `“Absolutely stunning location and great experience overall. 
    Perfect for family and group retreats!”`,
    author: "- John Doe",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  return (
    <section className="bg-[#f3f3f3] py-20">
      
      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-light text-gray-700 mb-16">
        Our Favorite Success Stories
      </h2>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto flex items-center justify-center">
        
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-16 w-12 h-12 flex items-center justify-center
                     rounded-full bg-[#8c7a3d] text-white shadow-md hover:scale-105 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* TESTIMONIAL */}
        <div className="text-center px-6">
          
          <h3 className="text-xl text-[#2f4f4f] mb-6 font-medium">
            {testimonials[index].title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
            {testimonials[index].text}
          </p>

          <p className="mt-6 text-gray-700 italic">
            {testimonials[index].author}
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-16 w-12 h-12 flex items-center justify-center
                     rounded-full bg-[#8c7a3d] text-white shadow-md hover:scale-105 transition"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
};

export default TestimonialSection;