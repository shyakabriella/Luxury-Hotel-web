import { useState } from "react";
import weddingHall from "../../../assets/images/meetings/meeting-hotel-banner.png";
import crowd from "../../../assets/images/meetings/crowd-meeting.png";

export default function MeetingBanner() {
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
        <div className="flex items-end justify-end h-full">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-snug max-w-md text-center md:text-left">
            Disconnect and <br />
            Reconnect in <br />
            Fresno
          </h1>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 shadow-xl rounded-[7px] max-w-sm mx-auto md:ml-0 mt-20 w-[90%]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#1f3a37]">
            START PLANNING
          </h2>
          <form className="space-y-3">
            <div>
              <input
                placeholder="First Name *"
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37]"
                required
              />
            </div>
            <div>
              <input
                placeholder="Last Name *"
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37]"
                required
              />
            </div>
            <div>
              <input
                placeholder="Email *"
                type="email"
                className="w-full border border-[#1f3a37]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37]"
                required
              />
            </div>
            <div>
              <input
                placeholder="Phone Number *"
                type="tel"
                className="w-full border border-[#1f3a37]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37]"
                required
              />
            </div>
            <div>
              <input
                placeholder="Company *"
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37]"
                required
              />
            </div>

            <div className="space-y-4 text-[#1f3a37]">
              <div>
                <p className="text-sm mb-1 font-semibold text-[#1f3a37]">
                  Are Your Dates Flexible?
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="flexible"
                      className="accent-[#1f3a37]"
                    />
                    <span className="text-[#1f3a37]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="flexible"
                      className="accent-[#1f3a37]"
                    />
                    <span className="text-[#1f3a37]">No</span>
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" required className="accent-[#1f3a37]" />
                <span className="text-[#1f3a37]">
                  I agree to the <span className="font-semibold">Privacy Policy</span>.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="accent-[#1f3a37]" />
                <span className="text-[#1f3a37]">
                  Send me exclusive offers and updates.
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-1/2 bg-[#1f3a37] text-white py-2 rounded-md hover:bg-[#16302d] transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#1f3a37]/70 text-white w-20 h-20 rounded-full hover:bg-[#1f3a37] z-20 text-[20px]"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#1f3a37]/70 text-white w-20 h-20 rounded-full hover:bg-[#1f3a37] z-20 text-[20px]"
      >
        →
      </button>
    </section>
  );
}
