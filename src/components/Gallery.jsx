import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Eye, X, MessageCircle } from 'lucide-react';

/**
 * DEVELOPER / OWNER NOTE:
 * The gallery items below are loaded from `src/data/galleryData.js`.
 * To replace or add real shop photos:
 * 1. Place your images in `/public/images/`
 * 2. Update the entries in `src/data/galleryData.js`
 */
export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit'] mb-3">
            Our Work & Sample Cut Pieces
          </h2>
          <p className="text-base text-slate-600">
            Precision sheet metal components, architectural jaali screens, 3D acrylic signage, and custom engineering fixtures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="card-clean rounded-2xl overflow-hidden bg-white cursor-pointer group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 sm:p-5">
                <p className="text-[11px] font-bold text-orange-600 uppercase tracking-wide mb-1 font-mono">
                  {item.material}
                </p>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-['Outfit'] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-950 shadow-md border border-slate-200 focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-slate-100">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="px-2.5 py-1 rounded bg-orange-100 text-orange-800 text-xs font-bold">
                  {selectedImage.material}
                </span>
                <span className="text-xs text-slate-500 font-mono">{selectedImage.category}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 font-['Outfit']">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {selectedImage.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/918469941403?text=${encodeURIComponent(`Hi SD Laser Cutting, I saw the "${selectedImage.title}" in your gallery and want similar laser cutting in Surat.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire for Similar Design</span>
                </a>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
