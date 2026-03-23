import { useState } from "react";
import weddingHall from "../../../assets/images/weddings/wedding-hall.png";
import crowd from "../../../assets/images/weddings/crowd.png";

export default function WeddingBanner() {
  const images = [weddingHall, crowd];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover blur-xl scale-105"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <img
        src={images[currentIndex]}
        alt="Wedding"
        className="absolute inset-0 m-auto max-h-full max-w-full object-contain z-0"
      />

      <div className="relative z-10 container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20">
        <div className="flex items-end justify-end  h-full">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-snug max-w-md text-center md:text-left">
            An "I Do" <br />
            Enveloped in <br />
            Natural Beauty
          </h1>
        </div>

        <div className="bg-white/50 backdrop-blur-md p-6 shadow-xl rounded-[7px] max-w-sm mx-auto md:ml-0 mt-20 w-[90%]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-600">
            START PLANNING
          </h2>
          <form className="space-y-3">
            <div>
              <input
                placeholder="First Name *"
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <input
                placeholder="Last Name *"
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <input
                placeholder="Email *"
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <input
                placeholder="Phone Number *"
                type="tel"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <input
                placeholder="Event Start Date *"
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="space-y-4 text-yellow-900">
              <div>
                <p className="text-sm mb-1 font-semibold text-yellow-700">
                  Are Your Dates Flexible?
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="flexible"
                      className="accent-yellow-500"
                    />
                    <span className="text-yellow-800">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="flexible"
                      className="accent-yellow-500"
                    />
                    <span className="text-yellow-800">No</span>
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" required className="accent-yellow-500" />
                <span className="text-yellow-800">
                  I agree to the <span className="font-semibold">Privacy Policy</span>.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="accent-yellow-500" />
                <span className="text-yellow-800">
                  Send me exclusive offers and updates.
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-800 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 text-black w-20 h-20 rounded-full hover:bg-white z-20 text-[20px]"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 text-black w-20 h-20 rounded-full hover:bg-white z-20 text-[20px]"
      >
        →
      </button>
    </section>
  );
}
