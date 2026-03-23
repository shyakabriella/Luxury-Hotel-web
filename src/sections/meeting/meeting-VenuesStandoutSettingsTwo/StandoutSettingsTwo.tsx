import standoutTWO from "../../../assets/images/meetings/slider-photo-one.webp";
import standoutONE from "../../../assets/images/meetings/resort-banner.png";

export default function StandoutSettingsTwo() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col gap-20 p-20">
      <div className="flex">
        <div className="w-[90%] md:w-1/2 flex flex-col justify-center px-6">
          <h3 className="text-sm font-semibold text-yellow-900 tracking-wide mb-2">
            VENUES
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Inspiring Vistas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Elevate your events with the magnificent backdrop of a secluded ranch. Our remarkable natural settings enhance productivity, inspire creativity, and foster long-lasting connections.
          </p>
          <button className="px-12 py-4 bg-yellow-700 text-white font-semibold rounded-md shadow hover:bg-yellow-800 transition">
            SEE VENUES
          </button>
        </div>

        <div className="w-[90%] md:w-1/2 flex justify-center px-6">
          <img
            src={standoutONE}
            alt="Standout Settings Venue"
            className="w-full h-[500px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <div className="w-[90%] md:w-1/2 flex flex-col justify-center px-6">
          <h3 className="text-sm font-semibold text-yellow-900 tracking-wide mb-2">
            CATERING
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete Catering
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Enhance your guest experience by adding one of our chef-crafted menus to complement your stay. No matter what you’re looking for, we can put together the perfect catering package for your event.
          </p>
          <button className="px-12 py-4 bg-yellow-700 text-white font-semibold rounded-md shadow hover:bg-yellow-800 transition">
            LEARN MORE
          </button>
        </div>

        <div className="w-[90%] md:w-1/2 flex justify-center px-6">
          <img
            src={standoutTWO}
            alt="Tempting Tastes Catering"
            className="w-full h-[500px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
