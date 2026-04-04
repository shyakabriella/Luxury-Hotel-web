export default function WeddingVenues() {
  return (
    <div className="w-full bg-[#1f3a37]/5 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="w-full">
          <img
            src="/src/assets/images/weddings/couple-wedding-1.jpeg"
            alt="Wedding Venue"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 h-full">
          <div className="h-full">
            <h2 className="text-4xl font-bold text-[#1f3a37] mb-6">
              Wedding Venues Near Fresno, CA
            </h2>
            <p className="text-[#1f3a37]/80 leading-relaxed mb-6">
              Wonder Valley Ranch Resort is a scenic destination that you and
              your guests will never forget. With gorgeous 360-degree views from
              our lakeside venue paired with our elevated standard of service,
              every detail will be just as you’ve always imagined.
            </p>
            <button
              type="submit"
              className="w-1/2 bg-[#1f3a37] text-white py-4 rounded-md hover:bg-[#16302d] transition duration-300 mt-4"
            >
              <span className="text-[20px]">TAKE A TOUR</span>
            </button>
          </div>

          {/* Video */}
          <div className="w-full">
            <video
              src="/src/assets/videos/wedding-vid-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
