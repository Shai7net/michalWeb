import React, { useState } from 'react';
import { Sparkles, Cake, CheckCircle2, MessageCircle, Plus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BIRTHDAY_PACKAGES } from '../data/activitiesData';

interface BirthdaysSectionProps {
  onPlanBirthday: (packageTitle: string) => void;
}

export const BirthdaysSection: React.FC<BirthdaysSectionProps> = ({ onPlanBirthday }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'האם יום ההולדת מתאים גם לבנים וגם לבנות?',
      a: 'בהחלט! הפעילויות של מיכאלה (קרקס, יוגה, משחקי תנועה) הן אוניברסליות, סוחפות את כל הילדים ומעצימות את כולם בלי קשר למגדר.'
    },
    {
      q: 'איפה הכי מומלץ לחגוג — בפארק או בבית?',
      a: 'שתי האפשרויות נהדרות! מיכאלה מגיעה לכל מקום ומביאה איתה את כל הציוד הנדרש. בפארק יש שפע מרחב לקרקס וחישוקים, ובבית או בסלון מרווח אפשר ליצור אווירה חמימה ואינטימית.'
    },
    {
      q: 'לאיזה גילאים ימי ההולדת מתאימים?',
      a: 'מגיל 4 ועד גיל 12. כל יום הולדת מותאם במדויק לקבוצת הגיל מבחינת רמת האתגר, המוזיקה, המשימות והשפה.'
    },
    {
      q: 'מה קורה בטקס העוגה?',
      a: 'טקס העוגה של מיכאלה הוא רגע שיא מיוחד ומחמם לב: שירים, ברכות אישיות מהחברים, חישוק קסם מואר והרבה כבוד והעצמה לילד/ת יום ההולדת.'
    }
  ];

  return (
    <section id="birthdays" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#EDE1D1]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#DCE6DC]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCEEF2] text-[#8C4A5A] border border-[#F7DBE3] text-xs sm:text-sm font-extrabold">
            <Cake className="w-3.5 h-3.5 text-[#C97A8C]" />
            <span>אירוע של פעם בשנה</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            חוגגים יום הולדת עם מִיכָאֵלָה
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            יום הולדת מיוחד שבו הילד/ה שלכם באמת במרכז — עם צחוק, תנועה, יצירה והמון חום ואהבה.
          </p>
        </div>

        {/* 3 Birthday Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BIRTHDAY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border-2 border-[#E6DCD2] hover:border-[#D98E73] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Package Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#D98E73] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {pkg.badge}
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-6 text-right space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-[#43423E] group-hover:text-[#5D4E42] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D98E73] mt-0.5">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p className="text-[#5A554E] text-xs sm:text-sm leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E6DCD2]">
                    <span className="block text-xs font-bold text-[#43423E] mb-1">
                      מה כוללת החגיגה?
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#5A554E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8C7A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Add-ons */}
                  <div className="bg-[#F5EFEB] p-3 rounded-xl border border-[#E6DCD2] space-y-1 text-xs">
                    <span className="font-bold text-[#5D4E42] flex items-center gap-1">
                      <Plus className="w-3 h-3 text-[#D98E73]" />
                      אפשרות לתוספות שוות:
                    </span>
                    <p className="text-[#6B5E54]">{pkg.addons.join(' • ')}</p>
                  </div>

                </div>
              </div>

              {/* Package Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onPlanBirthday(pkg.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#D98E73] hover:bg-[#C87D62] text-white font-extrabold text-sm shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>בואו נתכנן יום הולדת כזה</span>
                </button>

                <a
                  href={`https://wa.me/972500000000?text=${encodeURIComponent(`היי מיכאלה, מתעניינים ב״${pkg.title}״ ליום הולדת, אשמח לשמוע פרטים ותאריכים פנויים!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-[#EBF2EB] hover:bg-[#D9E6D9] text-[#4A5D4A] font-bold text-xs border border-[#D9E6D9] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#7A8C7A]" />
                  <span>בדיקת תאריך בוואטסאפ</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Addons Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E6DCD2] shadow-xs mb-16 text-right">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <h3 className="text-xl font-black text-[#43423E]">
                רוצים לשדרג את יום ההולדת עם תוספות מיוחדות?
              </h3>
              <p className="text-[#5A554E] text-sm leading-relaxed">
                ניתן לשלב בכל חבילה עמדת איפור פנים אומנותי, קעקועי נצנצים זוהרים, סדנת הכנת כדורי ג׳אגלינג, מקלות סרט ומזכרות אישיות.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <button
                onClick={() => onPlanBirthday('חבילת יום הולדת משודרגת עם תוספות')}
                className="py-3 px-6 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-bold text-sm shadow-xs transition-all cursor-pointer"
              >
                הרכיבו יום הולדת מותאם אישית
              </button>
            </div>
          </div>
        </div>

        {/* Birthday FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          <h3 className="text-xl sm:text-2xl font-black text-[#43423E] text-center mb-6 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D98E73]" />
            שאלות נפוצות על ימי ההולדת
          </h3>

          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E6DCD2] overflow-hidden text-right transition-all shadow-2xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-right font-bold text-sm sm:text-base text-[#43423E] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#D98E73] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8C7A6B] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-[#5A554E] text-xs sm:text-sm leading-relaxed border-t border-[#E6DCD2] bg-[#FAF7F2]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
