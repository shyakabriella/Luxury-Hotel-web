import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import Navtop from "./Navtop";

const slides = [
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [showBars, setShowBars] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  // SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down - hide bars
        setShowBars(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show bars
        setShowBars(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // MANUAL CONTROLS
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans">

      {/* BACKGROUND SLIDER */}
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />
{/* navbar */}
      <Navtop />
      {/* TEXT */}
      <div className="absolute bottom-24 left-16 text-white z-20">
        <h1 className="text-[60px] font-extralight leading-[1.1]" style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            }}>
          Disconnect And <br />
          Reconnect In <br />
          Fresno
        </h1>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white"
      >
        <ChevronLeft size={38} strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white"
      >
        <ChevronRight size={38} strokeWidth={1.5} />
      </button>

      {/* FORM */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 z-20 w-[380px] bg-white/85 backdrop-blur-sm border border-gray-200 shadow-lg p-10">

        <h2 className="text-[30px] font-light text-gray-700 mb-6">
          Start Planning
        </h2>

        <div className="flex flex-col gap-4">
          <input type="text" placeholder="First Name *" className="field" />
          <input type="text" placeholder="Last Name *" className="field" />

          <div className="relative">
            <input type="email" placeholder="Email *" className="field pr-10" />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          <input type="text" placeholder="Phone Number *" className="field" />
          <input type="text" placeholder="Company *" className="field" />

          <div className="text-[12px] text-gray-600 mt-2 space-y-2">
            <label className="flex gap-2 items-start">
              <input type="checkbox" className="mt-1" />
              I have read and agree to the Privacy Policy.
            </label>

            <label className="flex gap-2 items-start">
              <input type="checkbox" className="mt-1" />
              Absolutely, I'd like to be contacted regarding my request.
            </label>
          </div>

          <button className="bg-[#9d8b4f] text-white py-3 mt-5 tracking-[2px] text-[12px]">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}