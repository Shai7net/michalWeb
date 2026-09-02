import React from 'react';
import { Heart, Sparkles, MapPin, Smile, Sun, Award } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const MyStory: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#EDE1D1]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#DCE6DC]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs sm:text-sm font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E73]" />
            <span>המסע והאהבה לתחום</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            הסיפור שלי
          </h2>
          <p className="text-xl sm:text-2xl font-extrabold text-[#D98E73]">
            נעים מאוד, אני מיכאלה 👋
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Visual Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl p-3 bg-white border-2 border-[#E6DCD2] shadow-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="מיכאלה - מדריכת יוגה, קרקס ותנועה לילדים"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E6DCD2] shadow-md text-right">
                <p className="font-extrabold text-[#43423E] text-sm">
                  מיכאלה
                </p>
                <p className="text-xs text-[#8C5D4B] font-semibold">
                  מדריכת יוגה מוסמכת לילדים • אמנית חישוקים וקרקס
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-3 -right-3 bg-white p-3 rounded-2xl border-2 border-[#E6DCD2] shadow-md hidden sm:flex items-center gap-2">
              <span className="text-xl">🌸</span>
              <div className="text-right">
                <span className="block text-xs font-bold text-[#43423E]">מערד עד לתל אביב</span>
                <span className="block text-[10px] text-[#8C7A6B]">מסע של תשוקה ולמידה</span>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 text-right space-y-5 text-[#5A554E] text-base sm:text-lg leading-relaxed">
            
            <p className="font-medium">
              הכול התחיל מ<strong>יוגה</strong>. לפני כמה שנים התחלתי לתרגל יוגה, ובתקופה של הרבה שינויים היא הפכה בשבילי למקום של יציבות עמוקה — בגוף ובנפש.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F5EFEB] border border-[#E6DCD2] space-y-2">
              <div className="flex items-center gap-2 text-[#43423E] font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#D98E73]" />
                <span>המסע והלימודים</span>
              </div>
              <p className="text-sm sm:text-base text-[#5A554E]">
                בתקופת הקורונה חזרתי לערד. בין תרגול יוגה אישי למשחק עם חישוק שמעתי על קורס להכשרת מדריכי יוגה לילדים. פעם בשבוע נסעתי מערד עד תל אביב ללמוד — ושם נפתח בפניי עולם שלם ומואר.
              </p>
            </div>

            <p>
              גיליתי כמה טוב אפשר להעניק לילדים דרך תנועה ויוגה כבר מגיל צעיר: להכיר את הגוף, לפגוש את הנשימה, לשחק, לחקור וליהנות תוך כדי.
            </p>

            {/* Emotional Highlight Box */}
            <div className="p-5 rounded-2xl bg-[#FDF1E8] border-2 border-[#F5E1D2] text-[#43423E] space-y-2 shadow-2xs">
              <p className="font-extrabold text-base sm:text-lg text-[#8C5D4B] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D98E73] fill-current" />
                ואז הבנתי משהו מאוד פשוט:
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#5A554E]">
                ✨ אני אוהבת לשמח ילדים.<br />
                ✨ אני אוהבת להפעיל אותם, ללמד אותם ולראות אותם מגלים שהם מסוגלים!
              </p>
            </div>

            <p>
              מהיוגה הגעתי לחישוקים, מהחישוקים לקרקס, ומשם לעוד ועוד משחקים, אביזרים, יצירה ורעיונות.
            </p>

            <p className="font-bold text-[#43423E] text-lg">
              וככה, לאט לאט ובאהבה גדולה — נולדה <span className="text-[#D98E73]">מִיכָאֵלָה</span>.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
