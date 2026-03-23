import { useState } from "react";

export default function OurAwards() {
  const awards = [
    "Best Of Central California Gold Wedding Venue Winner",
    "Institute For Family Business' California Family Business Of The Year Award Winner",
    "First Five Fresno County Child-Friendly Business Award Winner",
    "Best Wedding Venue in Central California",
    "Wedding Wire Couples Choice Award Winner",
    "The San Joaquin Valley Outstanding Family Business Award Winner",
    "The Business Journal's Legacy Award Winner For Family Owned Business",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? awards.length - 3 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 3 >= awards.length ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-white flex flex-col justify-center items-center py-16">
      <div className="flex items-center w-full justify-center mb-12">
        <div className="flex-grow border-t border-yellow-700 mx-4"></div>
        <h2 className="text-4xl font-bold text-yellow-900 whitespace-nowrap">
          Our Awards
        </h2>
        <div className="flex-grow border-t border-yellow-700 mx-4"></div>
      </div>

      <div className="overflow-hidden w-[90%] max-w-5xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {awards.map((award, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/3 px-4">
              <div className="h-40 flex items-center justify-center bg-yellow-700 rounded-md shadow-md p-6 text-lg text-white text-center">
                {award}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center w-[90%] max-w-5xl mt-10">
        <button
          onClick={prev}
          className="bg-yellow-700 text-white w-10 h-10 rounded-full hover:bg-yellow-800 transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="bg-yellow-700 text-white w-10 h-10 rounded-full hover:bg-yellow-800 transition"
        >
          →
        </button>
      </div>
      <div className="w-[98%] mt-10 border-t border-yellow-700"></div>
    </div>
  );
}
