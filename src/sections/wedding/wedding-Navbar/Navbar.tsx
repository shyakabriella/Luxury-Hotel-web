import { useEffect, useState } from "react";

import logo from "../../../assets/images/luxurylogo.png";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-10 py-15 transition-all duration-300
      ${
        scrolled
          ? "bg-yellow-900 shadow-md text-white border-b border-gray-100"
          : "bg-transparent text-white border-b border-gray-300"
      }`}
    >
    <img src={logo} alt="Wonder Valley Logo" className="w-[180px]" />

      <ul className="hidden md:flex gap-8">
        <li
          className="relative cursor-pointer hover:text-gray-200 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-full after:h-[2px] after:bg-current 
                 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
                 hover:after:scale-x-100"
        >
          Venues
        </li>
        <li
          className="relative cursor-pointer hover:text-gray-200 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-full after:h-[2px] after:bg-current 
                 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
                 hover:after:scale-x-100"
        >
          Wedding Services
        </li>
        <li
          className="relative cursor-pointer hover:text-gray-200 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-full after:h-[2px] after:bg-current 
                 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
                 hover:after:scale-x-100"
        >
          Packages
        </li>
        <li
          className="relative cursor-pointer hover:text-gray-200 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-full after:h-[2px] after:bg-current 
                 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
                 hover:after:scale-x-100"
        >
          Room Blocks
        </li>
        <li
          className="relative cursor-pointer hover:text-gray-200 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-full after:h-[2px] after:bg-current 
                 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
                 hover:after:scale-x-100"
        >
          Gallery
        </li>
      </ul>

      <button className="bg-yellow-800 px-4 py-2 rounded hover:bg-yellow-700 transition">
        START PLANNING
      </button>
    </nav>
  );
}
