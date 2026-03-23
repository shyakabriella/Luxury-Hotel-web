import OurAwards from "../sections/wedding/wedding-Awards/OurAwards";
import WeddingBanner from "../sections/wedding/wedding-Banner/WeddingBanner";
import Faqs from "../sections/wedding/wedding-FAQ/Faqs";
import Footer from "../sections/wedding/wedding-Footer/Footer";
import GetInspired from "../sections/wedding/wedding-Get-Inspired/GetInspired";
import Navbar from "../sections/wedding/wedding-Navbar/Navbar";
import OurFavorite from "../sections/wedding/wedding-Our-Favorite/OurFavorite";
import WeddingServices from "../sections/wedding/wedding-Services/WeddingServices";
import StartPlanning from "../sections/wedding/wedding-start-planning/StartPlanning";
import WeddingVenues from "../sections/wedding/wedding-Venues/WeddingVenues";
import StandoutSettings from "../sections/wedding/wedding-VenuesStandoutSettings/StandoutSettings";
import WeddingWhyUs from "../sections/wedding/wedding-Why-Us/WeddingWhyUs";

export default function Wedding() {
  return (
    <div>
      <Navbar />

        <WeddingBanner />
        <WeddingVenues />
        <WeddingServices />
        <WeddingWhyUs />
        <StandoutSettings />
        <OurFavorite />
        <OurAwards />
        <Faqs />
        <GetInspired />
        <StartPlanning />
        
      <Footer />
    </div>
  )
}
