import { useEffect, useState } from "react";

export default function AccomodationClassic() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h2
        className={`text-xl font-bold mb-4 text-yellow-600 transform transition-all duration-700 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Fresno Hotel Rooms
      </h2>

      <h3
        className={`text-7xl font-semibold mb-12 text-gray-700 transform transition-all duration-700 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        Classic & Comfortable <br /> Lodging
      </h3>

      <p
        className={`text-lg text-gray-600 transform transition-all duration-700 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        Choose from 68 homelike Fresno hotel rooms clustered throughout our property with full access to included activities, ranging from country cottages to resort-style spaces overlooking the Sierra foothills. For larger groups, 52 of the rooms can be converted to family- or dormitory-style spaces accommodating up to eight people.
      </p>
    </section>
  );
}
