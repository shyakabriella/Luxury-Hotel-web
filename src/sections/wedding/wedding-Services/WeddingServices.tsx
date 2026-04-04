export default function WeddingServices() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1f3a37]">Our Wedding</h2>

        {/* Subheading with lines */}
        <div className="flex items-center justify-center my-6 mb-8">
          <div className="flex-grow h-px bg-[#1f3a37]/30"></div>
          <span className="px-4 text-6xl font-semibold text-[#1f3a37]">
            Services
          </span>
          <div className="flex-grow h-px bg-[#1f3a37]/30"></div>
        </div>

        {/* Services List */}
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12 text-[#1f3a37] text-lg text-left w-full max-w-6xl ml-12">
            {[
              "Exclusive Venue Access",
              "Dedicated Event Team",
              "Discounted Guest Room Blocks",
              "Complimentary Food Tasting",
              "Ceremony Garden",
              "Two Wedding Party Day Use Rooms",
              "Tables, Chairs, Linens & Place Settings",
              "Complimentary Cake Cutting",
              "Hors D'oeuvres Patio",
              "Complimentary On-Site Parking",
              "On-Site Gourmet Catering",
              "Hand-Poured Sparkling Cider Toast",
            ].map((service, i) => (
              <li key={i} className="flex items-center">
                <span className="w-3 h-3 bg-[#1f3a37] rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <hr className="w-full h-px bg-[#1f3a37]/30 my-8" />
      </div>
    </div>
  );
}
