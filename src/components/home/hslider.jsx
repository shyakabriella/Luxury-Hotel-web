import { useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(1);
  const [zoomImg, setZoomImg] = useState(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#f5f3ef] py-10">
      <div className="relative w-[90%] max-w-6xl flex items-center justify-center overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-5 z-10 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-white/70 backdrop-blur"
        >
          ←
        </button>

        {/* SLIDER */}
        <div className="flex items-center gap-6 transition-all duration-500">

          {slides.map((img, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                onClick={() => setZoomImg(img)}
                className={`cursor-pointer transition-all duration-500 rounded-xl overflow-hidden
                  ${isActive ? "w-[600px] h-[350px]" : "w-[250px] h-[300px] opacity-70 hover:opacity-100"}
                `}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}

        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-5 z-10 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-white/70 backdrop-blur"
        >
          →
        </button>

      </div>

      {/* ZOOM MODAL */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImg(null)}
        >
          <div className="relative max-w-5xl w-full px-4">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setZoomImg(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={zoomImg}
              alt=""
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}