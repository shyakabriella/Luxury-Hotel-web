import React, { useState, useRef } from 'react'
import Footer from './Footer'

export const Last = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    eventStartDate: '',
    eventEndDate: '',
    attendees: '',
    guestRooms: '',
    plannerType: '',
    budgetRange: '',
    comments: ''
  })
  const [fileName, setFileName] = useState('')
  const [flexibleYes, setFlexibleYes] = useState(false)
  const [flexibleNo, setFlexibleNo] = useState(false)
  const [agreedPrivacy, setAgreedPrivacy] = useState(false)
  const [agreedContact, setAgreedContact] = useState(false)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { form, fileName, flexibleYes, flexibleNo, agreedPrivacy, agreedContact })
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1e4242" }}>
      

      {/* Main content area */}
      <div
        className="flex flex-col items-center justify-start flex-1"
        style={{ background: "linear-gradient(to bottom, #f0ede8 0%, #f0ede8 340px, #1e4242 340px, #1e4242 100%)" }}
      >
        {/* White form card */}
        <div
          className="bg-white shadow-lg w-full max-w-4xl mx-auto mt-0 mb-0 px-10 py-10"
          style={{ minHeight: "420px" }}
        >
          <h2
            className="text-center text-3xl font-light mb-8"
            style={{ color: "#2c3e50", fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}
          >
            Start Planning
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Row 1: First Name | Event Start Date | Upload File */}
            <div className="flex gap-3 mb-3 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272", background: "#fff" }}
                />
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  name="eventStartDate"
                  placeholder="Event Start Date *"
                  value={form.eventStartDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: form.eventStartDate ? "#4a6272" : "#9aabb5" }}
                />
              </div>
              {/* Upload + Comments spans 2 rows */}
              <div className="flex items-center gap-2" style={{ minWidth: "200px" }}>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-sm font-semibold text-white tracking-widest"
                  style={{ background: "#8a7a2e", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  UPLOAD FILE
                </button>
                <span className="text-sm text-gray-500 truncate max-w-[110px]">{fileName}</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Row 2: Last Name | Event End Date | Comments (rowspan) */}
            <div className="flex gap-3 mb-3 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  name="eventEndDate"
                  placeholder="Event End Date *"
                  value={form.eventEndDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: form.eventEndDate ? "#4a6272" : "#9aabb5" }}
                />
              </div>
              {/* Comments textarea spanning rows 2-6 */}
              <div style={{ minWidth: "200px", width: "200px" }}>
                <textarea
                  name="comments"
                  placeholder="Comments"
                  value={form.comments}
                  onChange={handleChange}
                  rows={8}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e] resize-none"
                  style={{ color: "#4a6272", height: "196px" }}
                />
              </div>
            </div>

            {/* Row 3: Email | Flexible Dates */}
            <div className="flex gap-3 mb-3 items-center">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 px-3 py-2">
                <span className="text-sm" style={{ color: "#4a6272" }}>
                  Are Your Dates Flexible?
                </span>
                <label className="flex items-center gap-1 text-sm cursor-pointer" style={{ color: "#4a6272" }}>
                  <input
                    type="checkbox"
                    checked={flexibleYes}
                    onChange={() => setFlexibleYes(!flexibleYes)}
                    className="accent-[#8a7a2e]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 text-sm cursor-pointer" style={{ color: "#4a6272" }}>
                  <input
                    type="checkbox"
                    checked={flexibleNo}
                    onChange={() => setFlexibleNo(!flexibleNo)}
                    className="accent-[#8a7a2e]"
                  />
                  No
                </label>
              </div>
              <div style={{ minWidth: "200px", width: "200px" }} />
            </div>

            {/* Row 4: Phone | Attendees */}
            <div className="flex gap-3 mb-3 items-center">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  name="attendees"
                  placeholder="Number of Attendees *"
                  value={form.attendees}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div style={{ minWidth: "200px", width: "200px" }} />
            </div>

            {/* Row 5: Company | Planner Type */}
            <div className="flex gap-3 mb-3 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  name="company"
                  placeholder="Company *"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div className="flex-1">
                <select
                  name="plannerType"
                  value={form.plannerType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e] appearance-none bg-white"
                  style={{ color: form.plannerType ? "#4a6272" : "#9aabb5" }}
                >
                  <option value="" disabled>Planner Type *</option>
                  <option value="corporate">Corporate Planner</option>
                  <option value="wedding">Wedding Planner</option>
                  <option value="social">Social Event Planner</option>
                  <option value="independent">Independent Planner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ minWidth: "200px", width: "200px" }} />
            </div>

            {/* Row 6: Guest Rooms | Budget Range */}
            <div className="flex gap-3 mb-5 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  name="guestRooms"
                  placeholder="Guest Rooms *"
                  value={form.guestRooms}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e]"
                  style={{ color: "#4a6272" }}
                />
              </div>
              <div className="flex-1">
                <select
                  name="budgetRange"
                  value={form.budgetRange}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8a7a2e] appearance-none bg-white"
                  style={{ color: form.budgetRange ? "#4a6272" : "#9aabb5" }}
                >
                  <option value="" disabled>Budget Range *</option>
                  <option value="under10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 – $25,000</option>
                  <option value="25k-50k">$25,000 – $50,000</option>
                  <option value="50k-100k">$50,000 – $100,000</option>
                  <option value="over100k">Over $100,000</option>
                </select>
              </div>
              <div style={{ minWidth: "200px", width: "200px" }} />
            </div>

            {/* Checkboxes */}
            <div className="mb-2">
              <label className="flex items-start gap-2 text-sm cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={agreedPrivacy}
                  onChange={() => setAgreedPrivacy(!agreedPrivacy)}
                  className="mt-0.5 accent-[#8a7a2e]"
                  required
                />
                <span style={{ color: "#4a6272" }}>
                  I have read and agree to the{" "}
                  <a href="#" className="underline" style={{ color: "#4a6272" }}>
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <label className="flex items-start gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedContact}
                  onChange={() => setAgreedContact(!agreedContact)}
                  className="mt-0.5 accent-[#8a7a2e]"
                />
                <span style={{ color: "#4a9090" }}>
                  Absolutely, I'd like to be contacted regarding my request.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-12 py-3 text-sm font-semibold tracking-widest text-white transition-opacity hover:opacity-90"
                style={{ background: "#8a7a2e", letterSpacing: "0.15em" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="w-full flex flex-col items-center py-10" style={{ background: "#1e4242" }}>
          <p className="text-center text-sm font-semibold mb-1" style={{ color: "#d4c8a0" }}>
            Wonder Valley Ranch Resort
          </p>
          <a
            href="https://maps.google.com/?q=6450+Elwood+Road+Sanger+CA+93657"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm underline block"
            style={{ color: "#d4c8a0" }}
          >
            6450 Elwood Road
          </a>
          <a
            href="https://maps.google.com/?q=6450+Elwood+Road+Sanger+CA+93657"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm underline block"
            style={{ color: "#d4c8a0" }}
          >
            Sanger, CA 93657
          </a>
          <a
            href="tel:5597872551"
            className="text-center text-sm underline block"
            style={{ color: "#d4c8a0" }}
          >
            (559) 787-2551
          </a>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
