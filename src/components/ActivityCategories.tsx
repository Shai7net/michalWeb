import React from 'react';
import { ArrowLeft, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { ActivityCategory } from '../types';

interface ActivityCategoriesProps {
  onSelectCategory: (category: ActivityCategory) => void;
  onSelectBirthdays: () => void;
}

export const ActivityCategories: React.FC<ActivityCategoriesProps> = ({
  onSelectCategory,
  onSelectBirthdays
}) => {
  const categories = [
    {
      id: 'yoga' as ActivityCategory,
      title: 'יוגה ותנועה',
      emoji: '🧘',
      subtitle: 'גוף • נשימה • משחק • דמיון',
      description: 'פעילויות שמחברות בין הקשבה לגוף, משחק, חיזוק ביטחון אישי ושלווה פנימית.',
      items: [
        'יוגה לילדים וחוגים',
        'יוגה הורים וילדים',
        'אקרו־יוגה לילדים',
        'יוגה בסיפור קסום'
      ],
      ctaText: 'לפעילויות היוגה',
      badge: 'מרגיע ומעצים',
      bgGradient: 'from-[#FDF1E8] via-[#FAF7F2] to-white',
      borderColor: 'border-[#F5E1D2] hover:border-[#D98E73]',
      badgeColor: 'bg-[#F5E1D2] text-[#8C5D4B]',
      buttonColor: 'bg-[#D98E73] hover:bg-[#C57B60] text-white',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      onClick: () => onSelectCategory('yoga')
    },
    {
      id: 'circus' as ActivityCategory,
      title: 'קרקס ומשחק',
      emoji: '🎪',
      subtitle: 'חישוקים • אתגרים • התנסות חופשית',
      description: 'מסע קרקסי שמזמין כל אחד למצוא את הדרך שלו להצליח. מתאים לקבוצות של עד 40–50 משתתפים.',
      items: [
        'סדנת חישוקים ולהטוטים',
        'צלחות מסתובבות וכדורים',
        'משחקי תנועה ושובבות',
        'הפנינג פתוח או מונחה'
      ],
      ctaText: 'בואו לקרקס',
      badge: 'אנרגיה וצחוק',
      bgGradient: 'from-[#EBF2EB] via-[#FAF7F2] to-white',
      borderColor: 'border-[#D9E6D9] hover:border-[#7A8C7A]',
      badgeColor: 'bg-[#D9E6D9] text-[#4A5D4A]',
      buttonColor: 'bg-[#7A8C7A] hover:bg-[#687868] text-white',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
      onClick: () => onSelectCategory('circus')
    },
    {
      id: 'craft' as ActivityCategory,
      title: 'יוצרים ביחד',
      emoji: '✂️',
      subtitle: 'עשייה בידיים • תוצר אישי • שמחה',
      description: 'סדנאות יצירה פשוטות וכיפיות שמתחברות לעולם התנועה, אותן ניתן להתאים לאופי האירוע.',
      items: [
        'יצירת כדורי ג׳אגלינג אישיים',
        'מקלות סרט מתנפנפים',
        'יצירה תנועתית לגנים וכיתות',
        'מזכרת אישית לקחת הביתה'
      ],
      ctaText: 'לסדנאות היצירה',
      badge: 'יצירתי ואישי',
      bgGradient: 'from-[#F7F2EB] via-[#FAF7F2] to-white',
      borderColor: 'border-[#EDE1D1] hover:border-[#8C7A6B]',
      badgeColor: 'bg-[#EDE1D1] text-[#5D4E42]',
      buttonColor: 'bg-[#8C7A6B] hover:bg-[#786658] text-white',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
      onClick: () => onSelectCategory('craft')
    },
    {
      id: 'birthday' as ActivityCategory,
      title: 'חוגגים עם מִיכָאֵלָה',
      emoji: '🎂',
      subtitle: 'ימי הולדת בלתי נשכחים מלאי לב',
      description: 'חגיגות מותאמות אישית ששמות את הילד/ה במרכז — עם שמחה, כבוד וחוויה בלתי נשכחת.',
      items: [
        'יום הולדת קרקס ולהטוטים',
        'יום הולדת יוגה ורוגע קסום',
        'יום הולדת של פעם (נוסטלגי)',
        'תוספות: איפור, נצנצים ויצירה'
      ],
      ctaText: 'בואו נתכנן יום הולדת',
      badge: 'החוגג/ת במרכז',
      bgGradient: 'from-[#FCEEF2] via-[#FAF7F2] to-white',
      borderColor: 'border-[#F7DBE3] hover:border-[#C97A8C]',
      badgeColor: 'bg-[#F7DBE3] text-[#8C4A5A]',
      buttonColor: 'bg-[#C97A8C] hover:bg-[#B56779] text-white',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
      onClick: onSelectBirthdays
    }
  ];

  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs sm:text-sm font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E73]" />
            <span>מגוון עולמות של חוויה</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            אז מה בא לכם לעשות?
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            בחרו את עולם התוכן שמעניין אתכם וגלו את כל האפשרויות והתוכניות המותאמות.
          </p>
        </div>

        {/* 4 Large Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-3xl border-2 ${cat.borderColor} bg-gradient-to-b ${cat.bgGradient} p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1`}
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl filter drop-shadow-xs">{cat.emoji}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-black text-[#43423E] group-hover:text-[#5D4E42] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-bold text-[#8C7A6B] mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Card image preview */}
                <div className="rounded-2xl overflow-hidden h-36 border border-[#E6DCD2] relative shadow-2xs">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* Description */}
                <p className="text-[#5A554E] text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-1.5 pt-1 border-t border-[#E6DCD2]">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#5A554E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8C7A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4">
                <button
                  onClick={cat.onClick}
                  className={`w-full py-3 px-4 rounded-2xl ${cat.buttonColor} font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>{cat.ctaText}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
