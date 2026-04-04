import React, { useState, useEffect } from 'react'

const Navtop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 80px
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
  return (
    <>
      {/* TOP BAR - Always visible with gold background */}
      <div className="fixed top-0 left-0 right-0 bg-[#9d8b4f] text-[11px] tracking-[2px] text-white text-center py-2 z-50">
        &lt; TAKE ME BACK TO RESORT WEBSITE
      </div>

      {/* NAVBAR - Changes background on scroll */}
      <div className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white text-black shadow-lg border-b border-gray-200' 
          : 'bg-transparent text-white border-b border-white/30'
      }`}>
        <div className="flex justify-between items-center px-16 py-4">
          <h1 className="tracking-[3px] text-sm font-semibold">
            LUXURY <span className="font-light">GARDEN PALACE</span>
          </h1>
          <div className="hidden md:flex gap-12 text-[12px] tracking-[2px]">
            <span>VENUES</span>
            <span>GROUP SERVICES</span>
            <span>ROOM BLOCKS</span>
            <span>GALLERY</span>
          </div>

          <button className={`px-7 py-2 text-[12px] tracking-[2px] transition-colors duration-300 ${
            scrolled 
              ? 'bg-[#9d8b4f] text-white' 
              : 'bg-[#9d8b4f] text-white'
          }`}>
            START PLANNING
          </button>
        </div>
      </div>
    </>
  )
}

export default Navtop
