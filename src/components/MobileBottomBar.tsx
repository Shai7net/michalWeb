import React from 'react';
import { MessageCircle, Phone, Sparkles, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onNavigateToSection
}) => {
  const whatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent('היי מיכאלה, ראיתי את האתר במובייל ואשמח לפרטים!')}`;

  return (
    <div
      id="mobile-sticky-bar"
      className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E6DCD2] shadow-2xl p-2.5 flex items-center justify-around gap-2"
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-extrabold text-xs shadow-xs active:scale-95 transition-transform"
        aria-label="שלחו וואטסאפ למיכאלה"
      >
        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
        <span className="truncate">וואטסאפ</span>
      </a>

      {/* Book / Plan Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#D98E73] hover:bg-[#C87D62] text-white font-extrabold text-xs shadow-xs active:scale-95 transition-transform cursor-pointer"
        aria-label="התאמת פעילות"
      >
        <Sparkles className="w-4 h-4 shrink-0" />
        <span className="truncate">התאמת פעילות</span>
      </button>

      {/* Direct Call Button */}
      <a
        href="tel:0500000000"
        className="p-2.5 rounded-2xl bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] border border-[#E6DCD2] flex items-center justify-center active:scale-95 transition-transform"
        aria-label="התקשרו למיכאלה"
      >
        <Phone className="w-4 h-4 text-[#43423E]" />
      </a>
    </div>
  );
};
