export default function MeetingServices() {
  return (
    <div className="w-full bg-white py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1f3a37]">Our Meeting</h2>

        {/* Subheading with lines */}
        <div className="flex items-center justify-center my-6 mb-8">
          <div className="flex-grow h-px bg-[#1f3a37]/30"></div>
          <span className="px-4 text-6xl font-semibold text-[#1f3a37]">
            Amenities
          </span>
          <div className="flex-grow h-px bg-[#1f3a37]/30"></div>
        </div>

        {/* Services List */}
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12 text-[#1f3a37] text-lg text-left w-full max-w-6xl ml-12">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              34,000+ Square Feet of Event Space
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Gourmet Catering
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Customizable Packages
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Theater Seating for up to 350
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Guest Room Blocks
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Unique Team Building Activities
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              30 Minutes from International Airport
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Exclusive Ranch Access
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
              Entertainment Upon Request
            </li>
          </ul>
        </div>
        <hr className="w-full h-px bg-[#1f3a37]/30 my-8" />
      </div>
    </div>
  );
}
