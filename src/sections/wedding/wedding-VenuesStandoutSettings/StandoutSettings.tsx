import standoutONE from "../../../assets/images/weddings/standout-one.jpg";
import standoutTWO from "../../../assets/images/weddings/standout-two.jpg";

export default function StandoutSettings() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col gap-20 p-20">
      <div className="flex">
        <div className="w-[90%] md:w-1/2 flex flex-col justify-center px-6">
          <h3 className="text-sm font-semibold text-yellow-900 tracking-wide mb-2">
            VENUES
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Standout Settings
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Set the scene for your dream ceremony at one of our enchanting
            venues. Framed by the stunning Blossom Trail, surrounded by quaint
            and secluded orchards, our incredibly versatile settings in a
            picturesque backdrop make an awe-inspiring reality, making for an
            experience that truly takes your breath away.
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
            Tempting Tastes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Make your celebration deliciously memorable. Our resort offers
            exquisite American classics, chef-curated on-site in our lake
            kitchen for the freshest, most flavorful fare at your wedding
            reception.
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
