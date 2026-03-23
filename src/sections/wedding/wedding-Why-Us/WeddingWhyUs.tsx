import SliderOne from "../../../assets/images/weddings/slider-photo-one.webp";
import SliderTwo from "../../../assets/images/weddings/slider-photo-two.webp";
import SliderThree from "../../../assets/images/weddings/slider-photo-three.webp";
import SliderFour from "../../../assets/images/weddings/slider-photo-four.webp";
import SliderFive from "../../../assets/images/weddings/slider-photo-five.webp";
import WeddingPalace from "../../../assets/images/weddings/wedding-palace.png";
import { useState } from "react";

export default function WeddingWhyUs() {
  const slides = [
    {
      image: SliderOne,
      title: "Exceptional Activities",
      text: "Turn your wedding into a weekend to remember. Wonder Valley offers a variety of activities to keep your family and friends entertained. Enjoy horseback riding, go‑karts, archery, and so much more."
    },
    {
      image: SliderTwo,
      title: "Effortless Event Planning",
      text: "Our seamless event experience includes your wedding venue, on‑site catering, bar service, event planning, rental items, two‑day suites, and overnight accommodations—all in one place, expertly managed by our team. No detail is left behind."
    },
    {
      image: SliderThree,
      title: "Family Owned & Operated",
      text: "Our venue is family owned—and has been for over five decades! Our collective industry experience has honed our ability to plan and execute spectacular events. Book with us to become part of the family."
    },
    {
      image: SliderFour,
      title: "Singular Settings",
      text: "The Sierra Nevada Foothills offer a breathtaking backdrop for outdoor ceremonies in our garden. A smooth transition to our lakeside patio for hors d'oeuvres, then guests are brought indoors for a dinner reception that offers all‑inclusive convenience beloved by all."
    },
    {
      image: SliderFive,
      title: "Exquisite Dining",
      text: "Enjoy exquisite dining and drinks crafted by our in‑house chef. Our culinary team works to create fresh, mouthwatering flavors for your event. Gourmet rehearsal dinner packages are also available."
    }
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
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            Why Choose Wonder Valley?
          </h2>
          <h3 className="text-2xl font-semibold text-gray-400 mb-6">
            {slides[currentIndex].title}
          </h3>
          <p className="text-lg text-gray-300">
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

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/70 text-black h-10 w-10 rounded-full hover:bg-white z-20"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/70 text-black w-10 h-10 rounded-full hover:bg-white z-20"
      >
        →
      </button>

      <div className="absolute bottom-1 right-12 text-gray-300 text-[150px] font-semibold z-20">
        0{currentIndex + 1}
      </div>
    </div>
  );
}
