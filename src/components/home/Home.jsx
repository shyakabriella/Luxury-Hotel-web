import React, { useState, useEffect, useRef } from "react";
import { Image, Trees } from "lucide-react";
import ImageSlider from "./hslider";
import JourneySection from "./journey";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/weddings/luxurylogo.png";
import { useNavigate } from "react-router-dom";

// ================= ACTIVITIES SLIDER =================
const slides = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Lake Adventures",
    desc: "Enjoy peaceful canoe rides and water activities surrounded by nature.",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Horseback Riding",
    desc: "Explore scenic trails with guided horseback riding experiences.",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Mountain Hiking",
    desc: "Discover breathtaking views through curated hiking adventures.",
  },
];

function ActivitiesSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[600px] overflow-hidden mt-24">
      <AnimatePresence>
        {slides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide.img}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1.05 : 1,
            }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 w-full h-full object-cover ${i === index ? "z-10" : "z-0"
              }`}
          />
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#2f3e36] z-20" />

      <motion.div
        className="absolute right-20 top-1/2 -translate-y-1/2 text-white max-w-md z-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        key={index}
      >
        <motion.p
          className="text-[14px] tracking-[0.2em] mb-4 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          For Every Event
        </motion.p>
        <motion.h2
          className="text-[56px] font-light leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {slides[index].title}
        </motion.h2>
        <motion.p
          className="text-[14px] opacity-80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {slides[index].desc}
        </motion.p>
        <motion.button
          className="bg-white text-black px-6 py-3 text-[13px] tracking-[0.2em] hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.button
            onClick={prev}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={next}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}

// ================= TESTIMONIAL SLIDER =================
const testimonials = [
  {
    title: "BIRTHDAY GETAWAY",
    text: `So much to do! Beautiful, clean hotel. The staff was so helpful and kind. The kids loved it and didn't want to leave. If you're looking for the place to relax with family, this is it.`,
    author: "Shannel C, TripAdvisor",
  },
  {
    title: "FAMILY RETREAT",
    text: `An unforgettable experience! The atmosphere is peaceful, and the activities kept everyone entertained. Highly recommended for families.`,
    author: "David M, Google Reviews",
  },
  {
    title: "PERFECT ESCAPE",
    text: `The perfect mix of relaxation and adventure. Everything was well organized and the staff went above and beyond.`,
    author: "Sarah K, Booking.com",
  },
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <motion.section
      className="w-full bg-[#1f3a37] text-white py-24 px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[40px] md:text-[48px] font-light text-[#c2a86f]">
          From The Horse's Mouth
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.button
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#c2a86f] rounded-full flex items-center justify-center text-[#c2a86f] hover:bg-[#c2a86f] hover:text-black transition"
          whileHover={{ scale: 1.1, backgroundColor: "#c2a86f", color: "#000" }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#c2a86f] rounded-full flex items-center justify-center text-[#c2a86f] hover:bg-[#c2a86f] hover:text-black transition"
          whileHover={{ scale: 1.1, backgroundColor: "#c2a86f", color: "#000" }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-[14px] tracking-[0.2em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[index].title}"
            </motion.p>
            <motion.p
              className="text-[16px] md:text-[18px] leading-relaxed opacity-90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[index].text}"
            </motion.p>
            <motion.p
              className="text-[14px] opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4 }}
            >
              - {testimonials[index].author}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

// ================= LOCATION SECTION =================
function LocationSection() {
  return (
    <motion.section
      className="w-full bg-[#efede8] py-24 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
            alt="Resort landscape"
            className="w-full h-[420px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 w-20 h-20 bg-[#efede8] rounded-full items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Trees className=" h-[60px] w-[30px] text-[#2f3e36]" />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="text-[#2f3e36] max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.p
            className="text-[14px] tracking-[0.25em] text-[#8c6b4f] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Location
          </motion.p>
          <motion.h2
            className="text-[48px] md:text-[64px] font-light leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            The Lay <br /> Of The Land
          </motion.h2>
          <motion.p
            className="text-[15px] leading-relaxed opacity-80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Our one-of-a-kind property sets the scene for exceptional activities
            with state-of-the-art facilities. We invite you to explore sports
            courts, horseshoe pits, swimming pools, biking trails, a trampoline
            center, a paintball course, and so much more.
          </motion.p>
          <motion.button
            className="bg-[#2f3e36] text-white px-6 py-3 text-[13px] tracking-[0.15em] hover:opacity-90 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ================= HERO IMAGES =================
const heroImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

// ================= HERO SECTION =================
export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDragStart = (e) => {
    setDragStart(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleDragEnd = (e) => {
    const dragEnd = e.clientX || e.changedTouches?.[0]?.clientX || dragStart;
    const distance = dragStart - dragEnd;
    const threshold = 50;

    if (distance > threshold) {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    } else if (distance < -threshold) {
      setHeroImageIndex(
        (prev) => (prev - 1 + heroImages.length) % heroImages.length,
      );
    }
  };

  return (
    <div className="w-full font-serif">
      {/* ================= NAVBAR ================= */}
      <motion.div
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-16 py-6 z-50 transition-all duration-300 ${scrolled
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-white"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="text-[18px] tracking-[0.25em] font-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Luxury Garden Palace Logo"
            className="w-[300px] h-[100px] object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden lg:flex gap-12 text-[13px] tracking-[0.15em]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            onClick={() => navigate("/meetings")}
            whileHover={{ y: -2 }}
            className="cursor-pointer"
          >
            Groups & Meetings
          </motion.span>
          <motion.span
            onClick={() => navigate("/weddings")}
            whileHover={{ y: -2 }}
            className="cursor-pointer"
          >
            Weddings
          </motion.span>
          <motion.span
            onClick={() => navigate("/accommodations")}
            whileHover={{ y: -2 }}
            className="cursor-pointer"
          >
            Accommodations
          </motion.span>
          <motion.span
            onClick={() => navigate("/gallery")}
            whileHover={{ y: -2 }}
            className="cursor-pointer"
          >
            Gallery
          </motion.span>
        </motion.div>

        <motion.div
          className="flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {!open && (
            <span className="text-[9px] tracking-[0.2em] opacity-80 hidden md:block w-[140px] text-center">
              PHONE: (559) 787-2551
            </span>
          )}

          {!open && (
            <div className="flex items-center gap-3 w-[140px]">
              <motion.div
                onClick={() => setOpen(!open)}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col gap-[3px]">
                  <motion.span
                    className={`w-5 h-[1px] ${scrolled ? "bg-black" : "bg-white"}`}
                    layout
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`w-5 h-[1px] ${scrolled ? "bg-black" : "bg-white"}`}
                    layout
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`w-5 h-[1px] ${scrolled ? "bg-black" : "bg-white"}`}
                    layout
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-[10px] tracking-[0.3em] mt-1">MENU</span>
              </motion.div>

              <motion.button
                className={`py-2 px-4 flex-1 text-[11px] tracking-[0.2em] ${scrolled ? "bg-black text-white" : "bg-white text-black"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                RESERVE
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Dropdown Menu (Right Sidebar with dark background image) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop - Click outside to close */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-20 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ pointerEvents: "auto" }}
            />

            <motion.div
              className="fixed top-0 right-0 h-screen w-64 text-white z-30 flex flex-col items-center justify-center text-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay to darken the image */}
              <motion.div
                className="absolute inset-0 bg-black/80 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
              />

              {/* Close Button */}
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity bg-transparent rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ zIndex: 100, pointerEvents: "auto", border: "none" }}
              >
                <span className="w-6 h-[2px] bg-white absolute rotate-45" />
                <span className="w-6 h-[2px] bg-white absolute -rotate-45" />
              </motion.button>

              <div className="relative flex flex-col items-center justify-center h-full w-full text-center z-10">
                {[
                  "Home",
                  "Groups & Meetings",
                  "Weddings",
                  "Accommodations",
                  "Contact",
                ].map((item, i) => (
                  <motion.span
                    key={item}
                    className="text-2xl mb-6 cursor-pointer z-10"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.1, color: "#c2a86f" }}
                    onClick={() => {
                      setOpen(false);
                      if (item === "Contact") {
                        navigate("/contact");
                      } else if (item === "Home") {
                        navigate("/");
                      } else if (item === "Groups & Meetings") {
                        navigate("/meetings");
                      } else if (item === "Weddings") {
                        navigate("/weddings");
                      } else if (item === "Accommodations") {
                        navigate("/accommodations");
                      }
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <motion.div
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover ${index === heroImageIndex ? "z-10" : "z-0"
              }`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === heroImageIndex ? 1 : 0,
              scale: index === heroImageIndex ? 1.05 : 1,
            }}
            transition={{ duration: 1.5 }}
            style={{ willChange: "opacity" }}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 pointer-events-none">
          <motion.h1
            className="text-[72px] md:text-[90px] font-extralight mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unforgettable
          </motion.h1>
          <motion.p
            className="mt-4 text-[14px] tracking-[0.4em] translate-x-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 24 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            CHARM & ADVENTURE
          </motion.p>
        </div>
      </motion.div>

      {/* ================= ESCAPE SECTION ================= */}
      <motion.section
        className="w-full bg-[#e9e6e1] py-20 px-10 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-[300px] object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div
            className="text-[#2f3e36]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-[12px] tracking-[0.2em] mb-4 opacity-70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              LUXURY GARDEN PALACE Ranch Resort <br /> & Conference Center
            </motion.p>
            <motion.h2
              className="text-[48px] md:text-[56px] font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Escape The <br /> Ordinary
            </motion.h2>
            <motion.p
              className="text-[14px] opacity-80 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Blending serenity with adventure, creating unforgettable
              experiences.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 border-t border-[#cfcac2] pt-6 flex flex-col md:flex-row items-center justify-between text-[#2f3e36] max-w-6xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-[16px] font-light mb-4 md:mb-0">
            Book With Us
          </div>
          <div className="flex items-center gap-6 text-[12px] uppercase opacity-80">
            <motion.span whileHover={{ opacity: 1 }}>
              No Resort Fees
            </motion.span>
            <span>|</span>
            <motion.span whileHover={{ opacity: 1 }}>
              Free Wi-Fi & Parking
            </motion.span>
            <span>|</span>
            <motion.span whileHover={{ opacity: 1 }}>
              Flexible Rates
            </motion.span>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= ACTIVITIES SECTION ================= */}
      <motion.section
        className="w-full bg-[#f5f3ef] py-24 px-10 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-[#2f3e36]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-[13px] tracking-[0.2em] mb-4 text-[#8c6b4f]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              On-Site Adventures
            </motion.p>
            <motion.h2
              className="text-[52px] md:text-[64px] font-light leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Endless <br /> Activities
            </motion.h2>
            <motion.p
              className="text-[14px] leading-relaxed opacity-80 max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Jump right into the fun of LUXURY GARDEN PALACE Ranch Resort. From
              horseback riding and archery to tennis, volleyball, go-karts, and
              ziplining, you'll find a plethora of adventurous activities to
              choose from during your time at our resort.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-[#2f3e36] text-white px-6 py-3 text-[13px] tracking-[0.15em] hover:opacity-90"
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Specials
              </motion.button>
              <motion.button
                className="bg-[#2f3e36] text-white px-6 py-3 text-[13px] tracking-[0.15em] hover:opacity-90"
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                See All Activities
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              className="w-full h-[420px] object-cover"
              alt="activities"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ACTIVITIES SLIDER ================= */}
      <ActivitiesSlider />

      {/* ================= COZY LODGING SECTION ================= */}
      <motion.section
        className="w-full relative py-20 px-6 md:px-16 bg-[#efede8]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* LEFT TEXT */}
          <motion.div
            className="relative p-10 md:p-16 bg-white/60 backdrop-blur-sm z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-[14px] text-[#8c6b4f] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Accommodations
            </motion.p>
            <motion.h2
              className="text-[48px] md:text-[64px] font-light text-[#2f3e36] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Cozy Lodging
            </motion.h2>
            <motion.p
              className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From homelike cottages to resort-style hotel rooms, our resort
              offers classic accommodations for every guest. Settle into a
              traditional living space with all the thoughtful guest amenities,
              including complimentary Wi-Fi and in-room coffee service.
            </motion.p>
            <motion.button
              className="bg-[#2f3e36] text-white px-6 py-3 text-[13px] tracking-[0.15em] hover:opacity-90 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
              alt="Cozy lodging room"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIAL SLIDER ================= */}
      <TestimonialSlider />

      {/* ================= LOCATION SECTION ================= */}
      <LocationSection />
      {/* image slider */}
      <ImageSlider />
      {/* journey section */}
      <JourneySection />
    </div>
  );
}
