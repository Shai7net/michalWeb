import React from 'react';
import { Sparkles, MessageCircle, Heart, ArrowDown, ShieldCheck, Smile } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onFindActivity: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindActivity, onContactClick }) => {
  const whatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent('שלום מיכאלה, הגעתי דרך האתר ואשמח להתייעץ על פעילות / סדנה!')}`;

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2]"
    >
      {/* Playful Floating Decorative Elements in Natural Earth Tones */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-[#EDE1D1]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-64 h-64 bg-[#DCE6DC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#F7E5DE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Playful Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEB] border border-[#E0D5C9] text-[#5D4E42] text-xs sm:text-sm font-extrabold shadow-2xs animate-bounce duration-1000">
              <Sparkles className="w-4 h-4 text-[#D98E73] fill-current" />
              <span>יש מקום לכל ילד ✨ חוויה של תנועה והעצמה</span>
            </div>

            {/* Main Brand Headline with Niqqud */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <BrandLogo size="xl" showSubtitle={false} className="mb-1" />
              </div>
              
              {/* Category Subtitle in Natural Harmony */}
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5D4E42] flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="text-[#7A8C7A]">תנועה</span>
                <span className="text-[#D98E73]">•</span>
                <span className="text-[#B37D56]">משחק</span>
                <span className="text-[#7A8C7A]">•</span>
                <span className="text-[#8C7A6B]">קרקס</span>
                <span className="text-[#D98E73]">•</span>
                <span className="text-[#7A8C7A]">יוגה</span>
                <span className="text-[#8C7A6B]">•</span>
                <span className="text-[#C97A8C]">יצירה</span>
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#43423E] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              פעילויות שמאפשרות לילדים <strong className="text-[#2D2A26] font-extrabold underline decoration-[#D98E73]/70 decoration-wavy decoration-2">לזוז, לחקור, להעז, ללמוד</strong> ובעיקר — ליהנות מחוויה מעצימה ומשחררת.
            </p>

            {/* Value Pillars List */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-[#5D4E42] font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#EBF2EB] text-[#7A8C7A] flex items-center justify-center">
                  <Smile className="w-4 h-4" />
                </div>
                <span>הקשבה אישית לכל ילד</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#FDF1E8] text-[#D98E73] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>גבולות נעימים ובטוחים</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F7F2EB] text-[#8C7A6B] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#C97A8C] fill-current" />
                </div>
                <span>שילוב צחוק עם רוגע מדויק</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-find-activity-btn"
                onClick={onFindActivity}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#D98E73] hover:bg-[#C57B60] text-white font-extrabold text-base sm:text-lg shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 fill-current" />
                <span>בואו נמצא את הפעילות שמתאימה לכם</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-[#EBF2EB] text-[#7A8C7A] border-2 border-[#7A8C7A] font-bold text-base sm:text-lg shadow-2xs hover:shadow-xs transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#7A8C7A] fill-current" />
                <span>דברו איתי בוואטסאפ</span>
              </a>
            </div>
          </div>

          {/* Authentic Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Curated Picture with natural border frame */}
              <div className="relative rounded-3xl p-3 bg-white border-2 border-[#E6DCD2] shadow-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                  alt="מיכאלה מפעילה סדנת קרקס, חישוקים ויוגה לילדים"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Overlay Floating Card: 'מיכאלה בפעולה' */}
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E6DCD2] shadow-lg flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#D98E73] flex items-center justify-center text-white font-black text-xl shrink-0 shadow-xs">
                    🎪
                  </div>
                  <div>
                    <p className="font-extrabold text-[#43423E] text-sm">
                      עולם של חישוקים, יוגה וצחוק
                    </p>
                    <p className="text-xs text-[#8C7A6B]">
                      התאמה מלאה לכל קבוצה, חלל וגיל
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge 1 */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs border-2 border-[#D9E6D9] rounded-2xl px-3.5 py-2 shadow-md hidden sm:flex items-center gap-2">
                <span className="text-xl">🧘‍♀️</span>
                <div className="text-right">
                  <span className="block text-xs font-bold text-[#43423E]">יוגה והקשבה</span>
                  <span className="block text-[10px] text-[#7A8C7A]">שלווה וביטחון</span>
                </div>
              </div>

              {/* Floating Mini Badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xs border-2 border-[#F5E1D2] rounded-2xl px-3.5 py-2 shadow-md hidden sm:flex items-center gap-2">
                <span className="text-xl">✨</span>
                <div className="text-right">
                  <span className="block text-xs font-bold text-[#43423E]">ימי הולדת וסדנאות</span>
                  <span className="block text-[10px] text-[#D98E73]">חוויות שלא שוכחים</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onFindActivity}
          className="flex flex-col items-center gap-1 text-[#8C7A6B] hover:text-[#5D4E42] transition-colors text-xs font-semibold cursor-pointer group"
          aria-label="גללו לפעילויות"
        >
          <span>גלו מה עושים במיכאלה</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 animate-pulse text-[#D98E73]" />
        </button>
      </div>
    </section>
  );
};
