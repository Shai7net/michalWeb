import React from 'react';
import { Heart, Smile, Sparkles, Shield, Eye, Flame, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Soft background accents */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-[#EDE1D1]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-72 h-72 bg-[#DCE6DC]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCEEF2] text-[#8C4A5A] border border-[#F7DBE3] text-xs sm:text-sm font-extrabold">
            <Heart className="w-3.5 h-3.5 text-[#C97A8C] fill-current" />
            <span>הגישה והלב של המותג</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            הדרך של מִיכָאֵלָה
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#D98E73]">
            ״יש מקום לכל ילד״
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* Main Visual Image & Quote */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6DCD2] shadow-xl bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                alt="מיכאלה בהקשבה ותנועה עם ילדים"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/85 via-[#2D2A26]/30 to-transparent flex items-end p-6">
                <blockquote className="text-white text-sm sm:text-base font-medium leading-relaxed">
                  ״דווקא כשהמסגרת ברורה והילד מרגיש בטוח בתוכה, אפשר באמת להשתחרר, לנסות וליהנות.״
                </blockquote>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -left-3 bg-white p-3 rounded-2xl border-2 border-[#D9E6D9] shadow-lg flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#EBF2EB] text-[#7A8C7A] flex items-center justify-center font-bold">
                🌱
              </div>
              <div className="text-right">
                <span className="block text-xs font-bold text-[#43423E]">גבולות נעימים</span>
                <span className="block text-[10px] text-[#8C7A6B]">ביטחון שמאפשר תעופה</span>
              </div>
            </div>
          </div>

          {/* Core Text & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-right order-1 lg:order-2">
            
            <div className="prose prose-stone text-[#5A554E] text-base sm:text-lg leading-relaxed space-y-4">
              <p className="font-semibold text-[#43423E] text-lg sm:text-xl">
                פעילות טובה מתחילה מבחינתי ב<strong>לראות מי עומד מולי</strong>.
              </p>
              <p>
                כל ילד הוא עולם ומלואו, וכל קבוצה מביאה איתה אנרגיה, קצב וצרכים משלה.
                לכן גם אני משתנה יחד איתם:
              </p>
              <p className="bg-[#F5EFEB] p-4 rounded-2xl border border-[#E6DCD2] text-[#43423E] font-medium text-base">
                לפעמים אני צבעונית, מצחיקה, תיאטרלית ומלאת אנרגיה מתפרצת, ולפעמים אני רגועה, אסופה ומדויקת.
                <strong className="text-[#D98E73]"> מִיכָאֵלָה היא גם וגם.</strong>
              </p>
              <p>
                חשוב לי ליצור מרחב שבו אפשר לחקור, לשחק, להתנסות ולהעז — לצד הנחיה ברורה, רגישות וגבולות נעימים.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-4 rounded-2xl bg-[#EBF2EB] border border-[#D9E6D9] text-right space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#D9E6D9] text-[#4A5D4A] flex items-center justify-center font-bold">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#43423E]">לראות את הילד</h4>
                <p className="text-xs text-[#6B5E54]">מתן מקום לביטוי אישי ולביישנים לצד המוחצנים.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDF1E8] border border-[#F5E1D2] text-right space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#F5E1D2] text-[#8C5D4B] flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#43423E]">להרגיש את הקבוצה</h4>
                <p className="text-xs text-[#6B5E54]">התאמת הקצב והאנרגיה למה שקורה כאן ועכשיו.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F2EB] border border-[#EDE1D1] text-right space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#EDE1D1] text-[#5D4E42] flex items-center justify-center font-bold">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#43423E]">מרחב מוגן ובטוח</h4>
                <p className="text-xs text-[#6B5E54]">החזקת קבוצה אחראית המאפשרת שחרור אמיתי.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
