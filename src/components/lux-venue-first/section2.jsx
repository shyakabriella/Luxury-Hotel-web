import React from "react";

export default function ResortSection() {
  return (
    <div className="bg-[#e9e7e2] py-24 px-10 md:px-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="resort"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* SMALL TITLE */}
          <p className="text-[#9d8b4f] text-sm tracking-wide">
            Corporate Retreat in California
          </p>

          {/* MAIN TITLE */}
          <h2 className="title">
            Our Resort, <br /> Your Canvas
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed text-[15px] max-w-lg">
            Whether you're planning a business conference, corporate retreat, or family reunion, Wonder Valley Ranch Resort offers experiences that no other setting in California can. A wide array of meeting rooms and outdoor venues provide the perfect backdrop in a secluded, natural setting near Fresno, CA, while world-class activities provide your guests with exceptional opportunities for team-building.
          </p>

          {/* BOTTOM IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="people"
            className="w-full h-[260px] object-cover mt-6"
          />
        </div>
      </div>
    </div>
  );
}