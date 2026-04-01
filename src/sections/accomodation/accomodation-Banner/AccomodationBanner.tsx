import { useEffect, useState } from "react";
import AccomodationBanner from "../../../assets/images/accomodation/accomodation-banner.png";

export default function AccommodationBanner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimate(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur */}
      <div
        className={`absolute inset-0 bg-center bg-cover blur-xl transform transition-all duration-1000 ease-out ${
          animate ? "opacity-100 scale-105" : "opacity-0 scale-110"
        }`}
        style={{ backgroundImage: `url(${AccomodationBanner})` }}
      ></div>

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 ease-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Main image */}
      <img
        src={AccomodationBanner}
        alt="Banner"
        className={`absolute inset-0 m-auto max-h-full max-w-full object-contain z-0 transform transition-all duration-1000 ease-out ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
      />
    </section>
  );
}
