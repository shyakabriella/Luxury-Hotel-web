export default function StartPlanning() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center py-10">
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-[#1f3a37] mb-10">
          Start Planning
        </h2>

        <form className="w-full space-y-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Company *
              </label>
              <input
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Event Start Date *
              </label>
              <input
                type="date"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Are Your Dates Flexible?
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="flexible"
                    value="yes"
                    className="accent-[#1f3a37]"
                  />
                  <span className="text-sm text-[#1f3a37]">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="flexible"
                    value="no"
                    className="accent-[#1f3a37]"
                  />
                  <span className="text-sm text-[#1f3a37]">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Expected Number of Guests *
              </label>
              <input
                type="number"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
                Budget Range *
              </label>
              <input
                type="text"
                className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1f3a37] mb-1">
              Comments
            </label>
            <textarea
              className="w-full border border-[#1f3a37]/40 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#1f3a37] focus:border-[#1f3a37]"
            ></textarea>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1f3a37]" />
              <span className="text-sm text-[#1f3a37]">
                I have read and agree to the Privacy Policy.
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1f3a37]" />
              <span className="text-sm text-[#1f3a37]">
                Yes, I would like to receive emails with exclusive specials and
                offers.
              </span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#1f3a37] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#16302d] transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
