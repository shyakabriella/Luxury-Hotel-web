import { useState } from "react";
import { images } from "./galleryImageData";

const buttons = ["ALL", "ROOMS", "WEDDING", "MEETING"];

const GalleryImagesFilter = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter images based on active filter
  const filteredImages =
    activeFilter === "ALL"
      ? images
      : images.filter((img) => img.category === activeFilter);

  // Open lightbox
  const openLightBox = (index) => {
    setCurrentIndex(index);
    setLightBoxOpen(true);
  };

  // Next / Previous images
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  return (
    <section className="w-full p-4 mt-2 mb-20">
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveFilter(btn)}
            className={`px-4 py-2 rounded cursor-pointer transition duration-300 ease-in-out 
              hover:scale-105 font-bold ${
                activeFilter === btn
                  ? "bg-[#1f3a37] text-white"
                  : "bg-[#1f3a37]/70 text-white hover:bg-[#16302d]"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded cursor-pointer group"
            onClick={() => openLightBox(index)}
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#1f3a37]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <span className="bg-white px-2 py-1 m-2 rounded font-semibold text-[#1f3a37]">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightBoxOpen && (
        <div className="fixed inset-0 bg-[#1f3a37]/95 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setLightBoxOpen(false)}
          >
            &times;
          </button>

          {/* Prev / Next */}
          <button
            className="absolute left-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={prevImage}
          >
            &#8592;
          </button>

          <button
            className="absolute right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={nextImage}
          >
            &#8594;
          </button>

          <img
            src={filteredImages[currentIndex].src}
            alt={filteredImages[currentIndex].title}
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryImagesFilter;
