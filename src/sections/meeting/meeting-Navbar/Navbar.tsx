import { useEffect, useState } from "react";
import logo from "../../../assets/images/weddings/luxurylogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Groups & Meetings", path: "/meetings" },
    { name: "Weddings", path: "/weddings" },
    { name: "Accomodations", path: "/accommodations" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-10 py-6 transition-all duration-300
      ${
        scrolled
          ? "bg-[#1f3a37] shadow-md text-white border-b border-[#1f3a37]/40"
          : "bg-transparent text-white border-b border-white/30"
      }`}
    >
      {/* LOGO */}
      <img src={logo} alt="Wonder Valley Logo" className="w-[180px]" />

      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="relative cursor-pointer hover:text-white
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-full after:h-[2px] after:bg-current 
              after:scale-x-0 after:origin-center after:transition-transform after:duration-300 
              hover:after:scale-x-100"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <Link
        to={"/contact"}
        className="bg-[#1f3a37] border border-white px-4 py-2 rounded hover:bg-[#16302d] transition text-white"
      >
        START PLANNING
      </Link>
    </nav>
  );
}
