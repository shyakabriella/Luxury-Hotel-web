import { useState } from "react";

export default function GetInspired() {
  const images = [
    "/src/assets/images/weddings/inspired-one.jpeg",
    "/src/assets/images/weddings/inspired-two.jpg",
    "/src/assets/images/weddings/inspired-three.jpg",
    "/src/assets/images/weddings/inspired-four.jpg",
    "/src/assets/images/weddings/inspired-five.jpg",
    "/src/assets/images/weddings/inspired-six.jpg",
  ];

  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const openFullscreen = (index) => setFullscreenIndex(index);
  const closeFullscreen = () => setFullscreenIndex(null);

  const prevImage = () =>
    setFullscreenIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  const nextImage = () =>
    setFullscreenIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-16">
      <div className="w-[90%] max-w-6xl flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-900">Get Inspired</h2>
        <button className="bg-yellow-700 px-5 py-2 rounded-md shadow hover:bg-yellow-800 transition">
          <span className="text-white text-sm font-semibold tracking-wide">VIEW GALLERY</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] max-w-6xl">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer overflow-hidden rounded-md shadow-md"
            onClick={() => openFullscreen(idx)}
          >
            <img
              src={src}
              alt={`Inspired ${idx + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <span className="text-white text-3xl">⤢</span>
            </div>
          </div>
        ))}
      </div>

      {fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 transition-opacity duration-500">
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
          >
            ✕
          </button>

          <img
            src={images[fullscreenIndex]}
            alt="Fullscreen"
            className="max-h-[80%] max-w-[90%] object-contain rounded-md shadow-lg transition-transform duration-500"
          />

          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
