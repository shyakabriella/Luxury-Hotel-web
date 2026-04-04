import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AccomodationCard({
  header,
  title,
  capacity,
  description,
  images,
  reverse = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  // Auto-swap every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } mb-12 gap-8`}
      >
        {/* Left side text */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-[#1f3a37] mb-2">{header}</h2>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 mb-2">Capacity: {capacity}</p>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="w-full flex items-center gap-5">
            <Link to={''} className="bg-[#1f3a37] text-white px-6 py-2 rounded hover:border hover:border-[#1f3a37] hover:text-[#1f3a37] hover:bg-white transition">
              Book Now
            </Link>
            <Link to={''} className="border border-[#1f3a37] text-[#1f3a37] px-6 py-2 rounded hover:bg-[#162b29] hover:text-white transition">
              View Room
            </Link>
          </div>
        </div>

        {/* Right side carousel */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={title}
            className="w-full h-full object-cover cursor-pointer rounded-lg shadow-lg"
            onClick={() => setLightboxOpen(true)}
          />
          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>

      {/* Lightbox full screen */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={title}
              className="max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
