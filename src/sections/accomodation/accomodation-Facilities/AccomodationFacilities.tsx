import { useEffect, useState } from "react";

export default function AccommodationFacilities() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const facilities = [
    "Heating & Air-Conditioning",
    "In-Room Coffee Service",
    "Free Wi-Fi Access",
    "Satellite TV",
    "Iron & Ironing Board",
    "Hair Dryer",
  ];

  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-yellow-600 text-center">
        With Every Room
      </h2>
      <ul className="divide-y divide-gray-300 text-left text-lg text-gray-700">
        {facilities.map((item, index) => (
          <li
            key={index}
            className={`py-3 flex items-center transform transition-all duration-700 ease-out ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
