import React from "react";

const LocationSection = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden text-white">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* DARK GRADIENT OVERLAY (KEY FIX) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
        
        {/* LEFT IMAGES */}
        <div className="relative w-[55%] hidden lg:block">
          
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt=""
            className="w-full h-[420px] object-cover rounded-sm shadow-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
            className="absolute w-[320px] h-[220px] object-cover rounded-sm shadow-2xl
                       right-[-80px] top-[120px]"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="ml-40 w-full lg:w-[40%] max-w-lg">
          
          <p className="text-sm text-gray-200 mb-4 tracking-wide">
            Location
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-light mb-6">
            A Setting That <br /> Inspires Wonder
          </h2>

          <p className="text-gray-200 leading-relaxed text-[15px]">
            Wonder Valley Ranch Resort is located up in the Sierra Nevada
            foothills, just outside the city of Fresno. This setting provides all
            types of groups with a uniquely secluded event locale, made even
            better by wide-ranging facilities and immersive team experiences.
          </p>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;