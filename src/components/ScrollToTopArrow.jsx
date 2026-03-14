import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 
      w-12 h-12 flex items-center justify-center
      rounded-full shadow-lg transition-all duration-300
      bg-[#38163b]
      hover:scale-110
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaChevronUp className="text-white text-lg" />
    </button>
  );
}