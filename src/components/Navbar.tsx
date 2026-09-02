import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'בית' },
    { id: 'categories', label: 'מה עושים?' },
    { id: 'activities', label: 'הפעילויות' },
    { id: 'birthdays', label: 'ימי הולדת' },
    { id: 'philosophy', label: 'הדרך שלנו' },
    { id: 'story', label: 'הסיפור שלי' },
    { id: 'gallery', label: 'גלריה' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'דברו איתי' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const whatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent('היי מיכאלה, הגעתי דרך האתר ואשמח לשמוע על פעילות מתאימה!')}`;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E6DCD2] py-2.5'
          : 'bg-[#FAF7F2]/85 backdrop-blur-xs py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D98E73] rounded-2xl"
            aria-label="מִיכָאֵלָה - דף הבית"
          >
            <BrandLogo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#EADCCB] text-[#43423E] font-bold shadow-xs'
                      : 'text-[#5A554E] hover:text-[#43423E] hover:bg-[#F3E9DF]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white text-sm font-bold shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="שליחת הודעת וואטסאפ למיכאלה"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>וואטסאפ</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-[#D98E73] hover:bg-[#C57B60] text-white text-sm font-bold shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>התאימו פעילות</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl bg-[#7A8C7A] text-white shadow-xs"
              aria-label="וואטסאפ"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-[#F5EFEB] text-[#43423E] border border-[#E6DCD2] hover:bg-[#EADCCB] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF7F2] border-b border-[#E6DCD2] shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto px-5 py-6 space-y-3 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="p-3 bg-[#F5EFEB] rounded-2xl border border-[#E6DCD2] mb-4 flex items-center gap-2 text-xs font-semibold text-[#5D4E42]">
            <Heart className="w-4 h-4 text-[#D98E73] fill-current shrink-0" />
            <span>יש מקום לכל ילד — פעילויות תנועה, יוגה וקרקס</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-right px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-[#D98E73] text-white shadow-xs font-bold'
                    : 'bg-[#F3E9DF]/80 hover:bg-[#EADCCB] text-[#43423E]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E6DCD2] space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-bold text-sm shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              דברו איתי בוואטסאפ
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#D98E73] hover:bg-[#C57B60] text-white font-bold text-sm shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              בואו נתכנן פעילות ביחד
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
