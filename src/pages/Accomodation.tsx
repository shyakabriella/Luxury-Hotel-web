import JourneySection from "../components/home/journey";
import AccomodationBanner from "../sections/accomodation/accomodation-Banner/AccomodationBanner";
import AccomodationClassic from "../sections/accomodation/accomodation-Classic/AccomodationClassic";
import AccomodationFacilities from "../sections/accomodation/accomodation-Facilities/AccomodationFacilities";
import Navbar from "../sections/accomodation/accomodation-Navbar/Navbar";
import AccomodationRooms from "../sections/accomodation/accomodation-Rooms/AccomodationRooms";

export default function Accomodation() {
  return (
    <div>
      <Navbar />

        <AccomodationBanner />
        <AccomodationClassic />
        <AccomodationFacilities />
        <AccomodationRooms />

      {/* ===== FOOTER ===== */}
      <JourneySection />
    </div>
  )
}
