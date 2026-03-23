import Footer from "../sections/meeting/footer/Footer";
import Navbar from "../sections/meeting/meeting-Navbar/Navbar";
import MeetingBanner from "../sections/meeting/meeting-Banner/MeetingBanner";
import StandoutSettings from "../sections/meeting/meeting-VenuesStandoutSettings/StandoutSettings";
import MeetingServices from "../sections/meeting/meeting-Services/MeetingServices";
import MeetingWhyUs from "../sections/meeting/meeting-Why-Us/MeetingWhyUs";
import StandoutSettingsTwo from "../sections/meeting/meeting-VenuesStandoutSettingsTwo/StandoutSettingsTwo";
import MeetingLocation from "../sections/meeting/meeting-Location/MeetingLocation";
import OurFavorite from "../sections/meeting/meeting-Our-Favorite/OurFavorite";
import GetInspired from "../sections/meeting/meeting-Images/GetInspired";
import StartPlanning from "../sections/meeting/meeting-Start-Planning/StartPlanning";

export default function Meeting() {
  return (
    <div>
      <Navbar />

        <MeetingBanner />
        <StandoutSettings />
        <MeetingServices />
        <MeetingWhyUs />
        <StandoutSettingsTwo />
        <MeetingLocation />
        <OurFavorite />
        <GetInspired />
        <StartPlanning />
      
      <Footer />
    </div>
  )
}
