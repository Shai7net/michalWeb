import React from 'react';
import { Heart, MessageCircle, Phone, Mail, MapPin, Sparkles, Accessibility } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAccessibility }) => {
  const whatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent('היי מיכאלה, הגעתי דרך האתר ואשמח לשמוע פרטים!')}`;

  return (
    <footer className="bg-[#2D2A26] text-[#E5DDD5] pt-16 pb-24 sm:pb-16 border-t-4 border-[#D98E73] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E3933] text-right">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#38332E] p-3 rounded-2xl inline-block border border-[#4E4740]">
              <BrandLogo size="md" showSubtitle={true} />
            </div>

            <p className="text-[#D3C7BC] text-sm sm:text-base leading-relaxed max-w-md font-medium">
              עולם של תנועה, משחק, יוגה, קרקס ויצירה לילדים, משפחות, מסגרות חינוכיות וארגונים.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#38332E] border border-[#4E4740] text-xs text-[#E8C5B8] font-bold flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#D98E73] fill-current shrink-0" />
              <span>״יש מקום לכל ילד — משחקים. זזים. מגלים.״</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-base border-b border-[#3E3933] pb-2">
              ניווט מהיר
            </h4>
            <ul className="space-y-2 text-sm text-[#D3C7BC] font-medium">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  עמוד הבית
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  מה עושים במיכאלה?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('activities')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  סילבוס הפעילויות
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('birthdays')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  ימי הולדת מיוחדים
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  הסיפור של מיכאלה
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D98E73] transition-colors cursor-pointer"
                >
                  גלריית תמונות
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Areas (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-extrabold text-base border-b border-[#3E3933] pb-2">
              יצירת קשר והזמנות
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#D3C7BC]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#8FAF8F] hover:text-[#A8CAA8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>וואטסאפ: 050-000-0000</span>
              </a>

              <a
                href="tel:0500000000"
                className="flex items-center gap-2.5 hover:text-[#D98E73] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D98E73]" />
                <span className="dir-ltr">050-000-0000</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D98E73]" />
                <span>michaela.movement@gmail.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D98E73]" />
                <span>פעילות בכל הארץ: מרכז, שפלה, ירושלים ודרום</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAccessibility}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#38332E] hover:bg-[#4E4740] text-[#E5DDD5] text-xs font-semibold border border-[#4E4740] transition-colors cursor-pointer"
              >
                <Accessibility className="w-4 h-4 text-[#8FAF8F]" />
                <span>הצהרת נגישות תקן 5568</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89F95] text-center sm:text-right">
          <p>
            © {new Date().getFullYear()} מִיכָאֵלָה — תנועה, משחק, יוגה, קרקס ויצירה. כל הזכויות שמורות.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-[#D3C7BC]">
            <span>נבנה באהבה עבור ילדים ומשפחות</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D98E73] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
