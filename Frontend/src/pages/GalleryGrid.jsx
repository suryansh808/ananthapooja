
import {images } from "../data/data";

export default function GalleryGrid() {
  return (
    <section className="pt-32 pb-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-3">
            Sacred Moments Gallery
          </h2>
          <p className="text-stone-700 text-lg">
            A glimpse of divine rituals and celebrations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((src, index) => (
            <div
              key={index}
               loading="lazy"
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm tracking-wide">
                 
                </span>
              </div>
            </div>
          ))}
        </div>

          
        {/* section footer cta */}
        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-orange-950 mb-4">Ready to create Your Special Ceremony?</h2>
            <p className="text-stone-700 mb-6">Let us help you create beautiful memories with authentic rituals and experienced pandits</p>
          <a
            href="/poojabooking"
            className="inline-block font-bold bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition shadow-lg"
          >
           Book a Ceremony Now
          </a>
        </div>
          
      </div>
    </section>
  );
}
