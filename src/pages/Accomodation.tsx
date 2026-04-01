import AccomodationBanner from "../sections/accomodation/accomodation-Banner/AccomodationBanner";
import AccomodationClassic from "../sections/accomodation/accomodation-Classic/AccomodationClassic";
import AccomodationFacilities from "../sections/accomodation/accomodation-Facilities/AccomodationFacilities";
import AccomodationJourney from "../sections/accomodation/accomodation-journey-with-us/AccomodationJourney";
import Navbar from "../sections/accomodation/accomodation-Navbar/Navbar";
import AccomodationRooms from "../sections/accomodation/accomodation-Rooms/AccomodationRooms";
import Footer from "../sections/accomodation/footer/Footer";

export default function Accomodation() {
  return (
    <div>
      <Navbar />

        <AccomodationBanner />
        <AccomodationClassic />
        <AccomodationFacilities />
        <AccomodationRooms />
        <AccomodationJourney />

      <Footer />
    </div>
  )
}
