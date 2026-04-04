import standoutONE from "../../../assets/images/meetings/resort-seats.png";
import standoutTWO from "../../../assets/images/meetings/resort-banner.png";

export default function StandoutSettings() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col gap-20 p-20">
      <div className="flex">
        <div className="w-[90%] md:w-1/2 flex flex-col justify-center px-6">
          <h3 className="text-sm font-semibold text-[#1f3a37] tracking-wide mb-2">
            Corporate Retreat in California
          </h3>
          <h2 className="text-4xl font-bold text-[#1f3a37] mb-6">
            Our Resort, <br />
            Your Canvas
          </h2>
          <p className="text-lg text-[#1f3a37]/80 leading-relaxed mb-8">
            Whether you’re planning a business conference, corporate retreat, or family reunion, Wonder Valley Ranch Resort offers experiences that no other setting in California can. A wide array of meeting rooms and outdoor venues provide the perfect backdrop in a secluded, natural setting near Fresno, CA, while world-class activities provide your guests with exceptional opportunities for team-building.
          </p>
        </div>

        <div className="w-[90%] md:w-1/2 flex justify-center px-6">
          <img
            src={standoutONE}
            alt="Standout Settings Venue"
            className="w-full h-[500px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center px-6">
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
