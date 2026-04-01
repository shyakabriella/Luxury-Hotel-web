export default function AccomodationJourney() {
  return (
    <section className="bg-yellow-800 py-20 px-6 text-center text-white mb-8">
      <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-wide text-white">
        Journey With Us
      </h2>

      <div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="First Name"
          className="flex-1 min-w-[150px] p-3 bg-transparent border border-yellow-900 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="flex-1 min-w-[150px] p-3 bg-transparent border border-yellow-900 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 min-w-[200px] p-3 bg-transparent border border-yellow-900 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button className="border border-yellow-900 text-gray-300 px-12 py-3 rounded-md hover:bg-yellow-700 transition">
          Sign Up
        </button>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 text-sm text-gray-300 justify-center">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-[#d4af37]" />
          <span>I agree to the Privacy Policy</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-[#d4af37]" />
          <span>Send me exclusive offers</span>
        </label>
      </div>
    </section>
  );
}
