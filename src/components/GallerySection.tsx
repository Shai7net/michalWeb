import React, { useState } from 'react';
import { Sparkles, Camera, X, ChevronRight, ChevronLeft, Eye } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/galleryData';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'circus', label: 'קרקס וחישוקים' },
    { id: 'yoga', label: 'יוגה ותנועה' },
    { id: 'birthday', label: 'ימי הולדת' },
    { id: 'craft', label: 'סדנאות יצירה' },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF2EB] text-[#4A5D4A] border border-[#D9E6D9] text-xs sm:text-sm font-extrabold">
            <Camera className="w-3.5 h-3.5 text-[#7A8C7A]" />
            <span>רגעים אמיתיים מהשטח</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            קצת ממה שקורה כשמִיכָאֵלָה מגיעה...
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            תמונות אמיתיות של תנועה, חישוקים, יוגה, יצירה וחיוכים רחבים.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#43423E] text-white shadow-xs'
                    : 'bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] border border-[#E6DCD2]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-[#F5EFEB] h-64 sm:h-72 cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300 border border-[#E6DCD2]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/85 via-[#2D2A26]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3">
                <span className="text-[11px] font-bold bg-white/95 text-[#43423E] px-2.5 py-1 rounded-full backdrop-blur-xs border border-[#E6DCD2]">
                  {photo.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 left-3 text-right text-white">
                <h4 className="font-bold text-sm sm:text-base leading-snug">
                  {photo.title}
                </h4>
                <p className="text-xs text-[#FAF7F2]/80 mt-0.5 line-clamp-1">
                  {photo.caption}
                </p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-white/30 backdrop-blur-xs text-white">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#2D2A26] rounded-3xl overflow-hidden shadow-2xl border border-[#43423E]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="סגור תמונה"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="תמונה קודמת"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="תמונה הבאה"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Preview */}
            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption bar */}
            <div className="p-4 sm:p-5 text-right text-white bg-[#2D2A26] border-t border-[#43423E] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#C4B7AA]">
                  {selectedPhoto.caption}
                </p>
              </div>
              <span className="text-xs font-semibold bg-[#43423E] px-3 py-1 rounded-full text-[#FAF7F2]">
                {selectedPhoto.categoryLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
