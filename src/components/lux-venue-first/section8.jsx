import React, { useState } from 'react'
import { Eye } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional Meeting",
    className: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury Resort Entrance",
    className: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    alt: "Fine Dining",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=600&q=80",
    alt: "Horse Drawn Carriage",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
  }
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
     <div className="bg-[#f5f5f0] min-h-screen py-16 px-4 md:px-8 lg:px-16 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
          <h1 className="text-4xl md:text-5xl text-[#4a4a4a] font-light italic">
            Imagine Yourself Here
          </h1>
          <button className="bg-[#968354] hover:bg-[#85744a] text-white px-10 py-3 tracking-widest text-[13px] font-semibold transition-colors uppercase">
            View Gallery
          </button>
        </div>

        {/* Layout according to the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[350px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`${image.className} relative overflow-hidden group cursor-pointer`}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with View Icon */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-[#968354]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white text-lg">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </div>
  )
}

