import SliderOne from "../../../assets/images/meetings/meeting-gathering.png";
import SliderTwo from "../../../assets/images/meetings/horse-riding.png";
import SliderThree from "../../../assets/images/meetings/buffet.png";
import WeddingPalace from "../../../assets/images/weddings/wedding-palace.png";
import { useState } from "react";

export default function MeetingWhyUs() {
  const slides = [
    {
      image: SliderOne,
      title: "Easy to Plan",
      text: "Our seamless event planning experience includes versatile venue options, on-site catering, bar service, conference suites, and overnight accommodations—all in one place, expertly managed by our team."
    },
    {
      image: SliderTwo,
      title: "One-of-A-Kind Experiences",
      text: "Transform your corporate retreat or group event into an experience your colleagues or organization members won’t forget. Wonder Valley offers a variety of activities including horseback riding, go-karts, and archery to engage and entertain attendees."
    },
    {
      image: SliderThree,
      title: "Customizable Packages",
      text: "Our team has created a range of thoughtful packages that you can choose from for your retreat or group getaway. Each of these bundles has its own unique perks and can be fully customized for the needs of your event."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${WeddingPalace})` }}
    >
      <div className="relative z-10 w-[90%] h-[600px] bg-white/10 backdrop-blur-md rounded-md shadow-lg flex justify-between items-center p-8">
        
        <div className="w-1/2 pr-6 text-left">
          <h2 className="text-4xl font-bold text-[#1f3a37] mb-4">
            Why Choose Wonder Valley?
          </h2>
          <h3 className="text-2xl font-semibold text-[#1f3a37]/70 mb-6">
            {slides[currentIndex].title}
          </h3>
          <p className="text-lg text-[#1f3a37]/60">
            {slides[currentIndex].text}
          </p>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-[400px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#1f3a37]/70 text-white h-10 w-10 rounded-full hover:bg-[#1f3a37] transition z-20"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#1f3a37]/70 text-white w-10 h-10 rounded-full hover:bg-[#1f3a37] transition z-20"
      >
        →
      </button>

      {/* Slide Counter */}
      <div className="absolute bottom-1 right-12 text-[#1f3a37]/40 text-[150px] font-semibold z-20">
        0{currentIndex + 1}
      </div>
    </div>
  );
}
