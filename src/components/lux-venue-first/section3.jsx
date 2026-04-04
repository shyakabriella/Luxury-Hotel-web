import React from "react";

const MeetingAmenities = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title with lines */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-yellow-700 w-32 mr-6"></div>

          <h2 className="text-4xl text-gray-800 font-serif">
            Our Meeting Amenities
          </h2>

          <div className="h-px bg-yellow-700 w-32 ml-6"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left mt-10 text-gray-700">

          {/* Column 1 */}
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>34,000+ Square Feet of Event Space</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Gourmet Catering</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Customizable Packages</span>
            </li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Theater Seating for up to 350</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Guest Room Blocks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Unique Team Building Activities</span>
            </li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>
                30 Minutes from Fresno/Yosemite International Airport
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Exclusive Ranch Access</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-700">•</span>
              <span>Entertainment Upon Request</span>
            </li>
          </ul>

        </div>

        {/* Bottom line */}
        <div className="mt-16">
          <div className="h-px bg-yellow-700 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default MeetingAmenities;