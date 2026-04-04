import JourneySection from "../components/home/journey";
import GalleryBanner from "../sections/gallery/GalleryBanner";
import GalleryImagesFilter from "../sections/gallery/GalleryImageFilter";
import Navbar from "../sections/meeting/meeting-Navbar/Navbar";

export default function Gallery() {
  return (
    <div>
        <Navbar />

        <GalleryBanner />
        <GalleryImagesFilter />

        {/* ===== FOOTER ===== */}
        <JourneySection />
    </div>
  )
}
