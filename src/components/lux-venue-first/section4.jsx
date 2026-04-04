import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        {/* WHITE FADE OVERLAY (PREMIUM LOOK) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 backdrop-blur-[2px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row bg-white shadow-xl">

          {/* LEFT TEXT */}
          <div className="md:w-1/2 w-full p-12 md:p-16 flex flex-col justify-center">

            <p className="text-sm tracking-wide text-gray-500 mb-4">
              Why Choose luxury Garden Palace?
            </p>

            <h2
              className="text-4xl md:text-5xl text-gray-800 mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Easy to Plan
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
              Our seamless event planning experience includes versatile venue
              options, on-site catering, bar service, conference suites, and
              overnight accommodations—all in one place, expertly managed by our
              team.
            </p>

            {/* CONTROLS */}
            <div className="flex gap-4 mt-10">
              <button className="w-11 h-11 rounded-full bg-yellow-700 hover:bg-yellow-800 transition text-white flex items-center justify-center shadow-md">
                <ChevronLeft size={18} />
              </button>
              <button className="w-11 h-11 rounded-full bg-yellow-700 hover:bg-yellow-800 transition text-white flex items-center justify-center shadow-md">
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 w-full relative h-[400px] md:h-auto">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="meeting"
              className="w-full h-full object-cover"
            />

            {/* NUMBER */}
            <span className="absolute bottom-6 right-6 text-white text-6xl md:text-7xl font-light opacity-90">
              01
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;