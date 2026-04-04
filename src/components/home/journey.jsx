export default function JourneySection() {
  return (
    <div className="bg-[#1f3a37] text-white pt-20">

      {/* ===== TOP SIGNUP SECTION ===== */}
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-5xl font-light mb-10 tracking-wide">
          Journey With Us
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border border-[#c7a96b] px-4 py-3 w-[250px] outline-none placeholder:text-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent border border-[#c7a96b] px-4 py-3 w-[250px] outline-none placeholder:text-gray-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-[#c7a96b] px-4 py-3 w-[300px] outline-none placeholder:text-gray-300"
          />

          <button className="bg-[#c7a96b] text-black px-6 py-3 font-medium hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c7a96b]" />
            I have read and agree to the Privacy Policy.
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c7a96b]" />
            Yes, I would like to receive emails with exclusive specials and offers.
          </label>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#c7a96b]/40 mt-16"></div>

      {/* ===== FOOTER ===== */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-sm">

        {/* LEFT */}
        <div className="space-y-4">
          <h3 className="text-lg tracking-widest font-semibold">
            LUXURY GARDEN PALACE
          </h3>
          <p className="text-gray-300">
            Luxury Garden Palace Resort <br />
            Kigali, Rwanda <br />
            +250 700 000 000
          </p>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <div className="border border-[#c7a96b]/40 rounded-full p-6 text-center">
            <p className="text-sm tracking-wide">Luxury Garden</p>
            <p className="text-xs text-gray-300">
              Palace Resort
            </p>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex justify-between">
          <div className="space-y-2 text-gray-300">
            <p className="hover:text-[#c7a96b] cursor-pointer">Contact Us</p>
            <p className="hover:text-[#c7a96b] cursor-pointer">Careers</p>
            <p className="hover:text-[#c7a96b] cursor-pointer">Events</p>
          </div>

          <div className="space-y-2 text-gray-300">
            <p className="hover:text-[#c7a96b] cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#c7a96b] cursor-pointer">Accessibility</p>
            <p className="hover:text-[#c7a96b] cursor-pointer">Sitemap</p>
            <p className="hover:text-[#c7a96b] cursor-pointer">Consent Preferences</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#c7a96b]/40 py-4 text-center text-xs text-gray-400">
        Luxury Garden Palace Resort. 2026. All Rights Reserved.
      </div>
    </div>
  );
}