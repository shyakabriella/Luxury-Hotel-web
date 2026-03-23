export default function WeddingServices() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-yellow-900">Our Wedding</h2>

        {/* Subheading with lines */}
        <div className="flex items-center justify-center my-6 mb-8">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-6xl font-semibold text-gray-800">
            Services
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Services List */}
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12 text-gray-800 text-lg text-left w-full max-w-6xl ml-12">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Exclusive Venue Access
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Dedicated Event Team
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Discounted Guest Room Blocks
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Complimentary Food Tasting
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Ceremony Garden
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Two Wedding Party Day Use Rooms
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Tables, Chairs, Linens & Place Settings
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Complimentary Cake Cutting
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Hors D'oeuvres Patio
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Complimentary On-Site Parking
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              On-Site Gourmet Catering
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></span>
              Hand-Poured Sparkling Cider Toast
            </li>
          </ul>
        </div>
        <hr className="w-full h-px bg-gray-300 my-8" />
      </div>
    </div>
  );
}
