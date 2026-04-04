import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-[#efefec] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-32">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* IMAGE */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="lake"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="md:w-1/2 w-full">
            <p className="text-xs tracking-wide text-gray-500 mb-3">
              Venues
            </p>

            <h2
              className="text-3xl md:text-4xl text-gray-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Inspiring Vistas
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              Elevate your events with the magnificent backdrop of a secluded
              ranch. Our remarkable natural settings enhance productivity,
              inspire creativity, and foster long-lasting connections.
            </p>

            <button className="bg-yellow-700 text-white text-xs px-6 py-3 tracking-widest hover:bg-yellow-800 transition">
              SEE VENUES
            </button>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* TEXT */}
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <p className="text-xs tracking-wide text-gray-500 mb-3">
              Catering
            </p>

            <h2
              className="text-3xl md:text-4xl text-gray-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Complete Catering
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Enhance your guest experience by adding one of our chef-crafted
              menus to complement your stay. No matter what you're looking for,
              we can put together the perfect catering package for your event.
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="catering"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;