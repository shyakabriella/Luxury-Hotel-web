import { useState } from "react";

export default function Faqs() {
  const faqs = [
    { question: "ARE THERE ANY OTHER FEES?", answer: "All fees are clearly outlined in your package. No hidden charges apply." },
    { question: "IS GUEST PARKING AVAILABLE?", answer: "Yes, ample guest parking is available on-site at no additional cost." },
    { question: "HOW DO I RESERVE WONDER VALLEY FOR MY WEDDING?", answer: "You can reserve by contacting our planning team directly or through our website." },
    { question: "ARE YOUR FACILITIES HANDICAPPED ACCESSIBLE?", answer: "Yes, all facilities are ADA compliant and accessible." },
    { question: "WHAT IS YOUR CANCELLATION POLICY?", answer: "Cancellations must be made in writing. Policies vary depending on package." },
    { question: "CAN I RESERVE THE WEDDING GARDEN VENUE FOR A CEREMONY ONLY?", answer: "Yes, ceremony-only reservations are available upon request." },
    { question: "IS OUTSIDE CATERING ALLOWED?", answer: "Outside catering is not permitted. Our in-house chefs provide all catering." },
    { question: "CAN I BRING IN MY OWN ALCOHOL FOR MY WEDDING?", answer: "Outside alcohol is not allowed. Our bar service provides all beverages." },
    { question: "IF IT RAINS DURING MY CEREMONY, WHAT IS THE BACKUP PLAN?", answer: "We provide indoor facilities as backup to ensure your ceremony continues smoothly." },
    { question: "HOW DO WE MAKE RESERVATIONS FOR LODGING AT WONDER VALLEY RANCH RESORT?", answer: "Reservations can be made directly through our resort booking system or by contacting our staff." },
    { question: "CAN WE HOLD OUR REHEARSAL DINNER AT WONDER VALLEY?", answer: "Yes, rehearsal dinner packages are available with our catering team." },
    { question: "WILL WE BE ABLE TO USE YOUR RECREATION FACILITIES?", answer: "Yes, guests have access to recreation facilities during their stay." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center mb-12">
      <h2 className="text-4xl font-bold text-yellow-900 mb-12">FAQs</h2>

      <div className="w-[90%] max-w-5xl space-y-7">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-yellow-700 text-2xl font-bold hover:text-yellow-600 transition-colors duration-300">
                {openIndex === index ? "–" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
