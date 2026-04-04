import { useState } from "react";

export default function OurFavorite() {
  const testimonials = [
    {
      title: "Who Knew??",
      quote:
        "Wonder Valley Resort made our wedding feel like a true fairy tale. The team was professional, attentive, and incredibly accommodating.",
      author: "– Travis G."
    },
    {
      title: "Magical Atmosphere",
      quote:
        "From the moment we arrived, everything felt magical. The staff made us feel like royalty and the setting was breathtaking. Our guests still talk about it!",
      author: "– Sarah & Omar"
    },
    {
      title: "Flawless Coordination",
      quote:
        "The food, the venue, the coordination—everything was flawless. We felt supported every step of the way. Highly recommend Wonder Valley!",
      author: "– Priya M."
    },
    {
      title: "Stress-Free Wedding",
      quote:
        "We wanted a stress-free wedding, and Wonder Valley delivered. The team handled every detail with care and professionalism.",
      author: "– James & Lina"
    },
    {
      title: "A Dream Come True",
      quote:
        "The lake, the gardens, the reception hall—it was all picture perfect. Thank you for making our day unforgettable.",
      author: "– Amina R."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative py-16 w-full bg-cover bg-center flex justify-center items-center">
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-4xl text-center px-6">
        <h2 className="text-4xl font-bold text-[#1f3a37] mb-8">
          Our Favorite Love Stories
        </h2>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#1f3a37] mb-4">
          {testimonials[currentIndex].title}
        </h3>

        {/* Quote */}
        <p className="text-xl text-[#1f3a37]/80 italic leading-relaxed mb-4">
          “{testimonials[currentIndex].quote}”
        </p>

        {/* Author */}
        <p className="text-lg text-[#1f3a37]/70 font-semibold">
          {testimonials[currentIndex].author}
        </p>

        {/* Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prev}
            className="bg-[#1f3a37]/70 text-white w-10 h-10 rounded-full hover:bg-[#1f3a37] transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-[#1f3a37]/70 text-white w-10 h-10 rounded-full hover:bg-[#1f3a37] transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
