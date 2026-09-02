import React from 'react';
import { Star, MessageCircle, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#DCE6DC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#EDE1D1]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF2EB] text-[#4A5D4A] border border-[#D9E6D9] text-xs sm:text-sm font-extrabold">
            <Heart className="w-3.5 h-3.5 text-[#D98E73] fill-current" />
            <span>מילים חמות מהשטח</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            מספרים על מִיכָאֵלָה
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            הורים, גננות, מנהלות ורכזי אירועים משתפים מהחוויות עם הילדים.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-right border-2 ${
                item.isWhatsAppStyle
                  ? 'bg-[#F4F8F4] border-[#D9E6D9] hover:border-[#7A8C7A]'
                  : 'bg-white border-[#E6DCD2] hover:border-[#D98E73]'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#D98E73] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#43423E] text-base leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C7A6B] font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {item.isWhatsAppStyle && (
                    <div className="p-1.5 rounded-full bg-[#EBF2EB] text-[#4A5D4A]" title="הודעת WhatsApp מאומתת">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 text-[#D98E73]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#8C7A6B] mr-1.5">{item.date}</span>
                </div>

                {/* Key Highlight Quote */}
                <p className="font-extrabold text-sm sm:text-base text-[#43423E] bg-[#F5EFEB] p-3 rounded-xl border border-[#E6DCD2] leading-snug">
                  {item.highlight}
                </p>

                {/* Content */}
                <p className="text-[#5A554E] text-xs sm:text-sm leading-relaxed">
                  {item.content}
                </p>

              </div>

              {/* Tag Footer */}
              <div className="pt-4 mt-4 border-t border-[#E6DCD2] flex items-center justify-between text-xs">
                <span className="font-bold text-[#4A5D4A] bg-[#EBF2EB] px-2.5 py-1 rounded-lg">
                  {item.tag}
                </span>
                <span className="text-[11px] text-[#8C7A6B] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#7A8C7A]" /> המלצה מאומתת
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
