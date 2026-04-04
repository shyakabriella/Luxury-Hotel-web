import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import JourneySection from "../home/journey";

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-white text-black min-h-screen">
      {/* ================= NAVBAR ================= */}
      <motion.div
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-16 py-6 z-50 transition-all duration-300 text-black ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-[18px] tracking-[0.25em] font-light">
          LUXURY <span className="font-semibold">GARDEN PALACE</span>
        </div>

        <div className="hidden lg:flex gap-12 text-[13px] tracking-[0.15em]">
          <Link to="/meetings" className="hover:opacity-70 transition">Groups & Meetings</Link>
          <Link to="/weddings" className="hover:opacity-70 transition">Weddings</Link>
          <Link to="/accommodations" className="hover:opacity-70 transition">Accommodations</Link>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="text-[9px] tracking-[0.2em] opacity-80 hidden md:block w-[140px] text-center">
            PHONE: (559) 787-2551
          </span>

          <div className="flex items-center gap-3 w-[140px]">
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-5 h-[1px] bg-black" />
                <span className="w-5 h-[1px] bg-black" />
                <span className="w-5 h-[1px] bg-black" />
              </div>
              <span className="text-[10px] tracking-[0.3em] mt-1">MENU</span>
            </div>

            <button
              className="py-2 px-4 flex-1 text-[11px] tracking-[0.2em] bg-black text-white hover:opacity-90 transition"
            >
              RESERVE
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Dropdown Menu (Right Sidebar with dark background image) */}
      {open && (
        <div
          className="fixed top-0 right-0 h-screen w-64 text-white z-30 flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay to darken the image */}
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative flex flex-col items-center justify-center h-full w-full text-center z-10">
            <span 
              className="text-2xl mb-6 cursor-pointer hover:opacity-70 z-10" 
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              Home
            </span>
            <span className="text-2xl mb-6 cursor-pointer hover:opacity-70 z-10">Groups & Meetings</span>
            <span className="text-2xl mb-6 cursor-pointer hover:opacity-70 z-10">Weddings</span>
            <span className="text-2xl mb-6 cursor-pointer hover:opacity-70 z-10">Accommodations</span>
            <span 
              className="text-2xl cursor-pointer hover:opacity-70 z-10 text-[#c7a96b]" 
              onClick={() => setOpen(false)}
            >
              Contact
            </span>
          </div>
        </div>
      )}
      {/* ===== HEADER ===== */}
      <div className="text-center py-20 px-6 pt-32">
        <h1 className="text-5xl font-light tracking-wide mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We'd love to hear from you. Reach out for reservations, events, or any inquiries.
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 pb-20">

        {/* ===== CONTACT INFO ===== */}
        <div className="space-y-8">

          <div>
            <h2 className="text-xl tracking-widest text-[#c7a96b] mb-2">
              LOCATION
            </h2>
            <p className="text-gray-600">
              Luxury Garden Palace <br />
              Kigali, Rwanda
            </p>
          </div>

          <div>
            <h2 className="text-xl tracking-widest text-[#c7a96b] mb-2">
              PHONE
            </h2>
            <p className="text-gray-600">
              +250 700 000 000
            </p>
          </div>

          <div>
            <h2 className="text-xl tracking-widest text-[#c7a96b] mb-2">
              EMAIL
            </h2>
            <p className="text-gray-600">
              info@luxurygardenpalace.com
            </p>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div className="bg-gray-50 p-8 rounded-xl border border-[#c7a96b]/30">

          <h2 className="text-2xl mb-6 font-light">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-[#c7a96b] px-4 py-3 outline-none placeholder:text-gray-400 text-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-[#c7a96b] px-4 py-3 outline-none placeholder:text-gray-400 text-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-[#c7a96b] px-4 py-3 outline-none placeholder:text-gray-400 text-black"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-transparent border border-[#c7a96b] px-4 py-3 outline-none placeholder:text-gray-400 text-black"
            ></textarea>

            <button
              type="submit"
              className="bg-[#c7a96b] text-black px-6 py-3 w-full font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
     <JourneySection/>
    </div>
  );
}