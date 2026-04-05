import BannerGallery from "../../assets/images/weddings/banner-gallery.png";

const GalleryBanner = () => {
  return (
    <section className="w-full relative h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
      {/* Banner Image */}
      <img
        src={BannerGallery}
        alt="Banner_Gallery"
        className="w-full h-full object-cover"
      />

      {/* Brand-colored overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a37]/70 via-[#1f3a37]/40 to-transparent"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-start pl-5 mt-20">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Gallery</h1>
      </div>
    </section>
  );
};

export default GalleryBanner;
