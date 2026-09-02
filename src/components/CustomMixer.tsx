import React, { useState } from 'react';
import { Sparkles, MessageCircle, Sliders, Check, Send, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CustomMixerProps {
  onOpenContactWithPreset: (presetData: string) => void;
}

export const CustomMixer: React.FC<CustomMixerProps> = ({ onOpenContactWithPreset }) => {
  const [selectedElements, setSelectedElements] = useState<string[]>(['יוגה', 'קרקס וחישוקים']);
  const [selectedAudience, setSelectedAudience] = useState<string>('ילדים ומשפחות');
  const [selectedLocation, setSelectedLocation] = useState<string>('בפארק / בחוץ');

  const mixElements = [
    { id: 'יוגה', label: '🧘 יוגה והרפיה', desc: 'חיבור, נשימה וגמישות' },
    { id: 'קרקס וחישוקים', label: '🎪 קרקס וחישוקים', desc: 'אנרגיה, להטוטים וצחוק' },
    { id: 'סדנת יצירה', label: '✂️ סדנת יצירה', desc: 'כדורי ג׳אגלינג / מקלות סרט' },
    { id: 'יום הולדת', label: '🎂 חגיגת יום הולדת', desc: 'טקס והעצמת החוגג/ת' },
    { id: 'איפור וקעקועי נצנצים', label: '✨ נצנצים ואיפור', desc: 'צבעוניות וזוהר' },
    { id: 'הורה וילד', label: '👨‍👧 תנועה הורה וילד', desc: 'זמן איכות וחיבור זוגי' },
  ];

  const toggleElement = (id: string) => {
    if (selectedElements.includes(id)) {
      if (selectedElements.length > 1) {
        setSelectedElements(selectedElements.filter(item => item !== id));
      }
    } else {
      setSelectedElements([...selectedElements, id]);
    }
  };

  const handleSendMixWhatsApp = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 }
      });
    } catch {}

    const text = `היי מיכאלה! הרכבתי רעיון באתר:
שילוב של: ${selectedElements.join(' + ')}
קהל יעד: ${selectedAudience}
מיקום משוער: ${selectedLocation}
אשמח שנדבר ונבנה משהו מותאם יחד!`;

    const url = `https://wa.me/972500000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="custom-mixer" className="py-16 md:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-10 w-60 h-60 bg-[#EDE1D1]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-[#DCE6DC]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Prominent Card */}
        <div className="bg-white rounded-3xl border-2 border-[#E6DCD2] shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs font-extrabold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E73] fill-current" />
            <span>גמישות והתאמה אישית מלאה</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#43423E] leading-tight">
                לא מצאתם בדיוק את מה שחיפשתם?
              </h2>
              
              <p className="text-[#5D4E42] text-base sm:text-lg leading-relaxed font-semibold">
                לא הכול חייב להגיע בחבילה מוכנה מראש.
              </p>

              <p className="text-[#5A554E] text-sm sm:text-base leading-relaxed">
                יש לכם קבוצה מיוחדת? גילאים מעורבים? חלל ייחודי? רעיון מחוץ לקופסה? 
                אפשר לשלב בין העולמות של <strong>מִיכָאֵלָה</strong> ולבנות פעילות שמתאימה בול לקבוצה, למקום ולמה שאתם רוצים ליצור.
              </p>

              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E6DCD2] text-xs sm:text-sm text-[#43423E] space-y-1">
                <p className="font-bold text-[#5D4E42] flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#D98E73]" />
                  דוגמאות לשילובים אהובים:
                </p>
                <p>• יוגה + יצירת כדורי ג׳אגלינג</p>
                <p>• יום הולדת קרקס + מעגל רגיעה ונצנצים</p>
                <p>• הפנינג תנועה מותאם לשכבות בית ספר שונות</p>
              </div>
            </div>

            {/* Right Interactive Mixer Tool */}
            <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#E6DCD2] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#E6DCD2] pb-3">
                <span className="font-extrabold text-[#43423E] text-sm flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#D98E73]" />
                  הרכיבו את השילוב שלכם:
                </span>
                <span className="text-[11px] text-[#8C7A6B] font-medium">
                  {selectedElements.length} אלמנטים נבחרו
                </span>
              </div>

              {/* Elements Selection */}
              <div>
                <span className="block text-xs font-bold text-[#5D4E42] mb-2">
                  מה תרצו לשלב בפעילות?
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {mixElements.map((el) => {
                    const isSelected = selectedElements.includes(el.id);
                    return (
                      <button
                        key={el.id}
                        type="button"
                        onClick={() => toggleElement(el.id)}
                        className={`p-2.5 rounded-xl border text-right transition-all cursor-pointer text-xs ${
                          isSelected
                            ? 'bg-[#EADCCB] border-[#D98E73] text-[#43423E] font-bold shadow-2xs'
                            : 'bg-white hover:bg-[#F5EFEB] border-[#E6DCD2] text-[#5A554E]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{el.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#D98E73] shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Audience & Location Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-[#5D4E42] mb-1">
                    מי הקהל?
                  </label>
                  <select
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value)}
                    className="w-full text-xs font-medium bg-white border border-[#E6DCD2] rounded-xl p-2.5 text-[#43423E] focus:ring-2 focus:ring-[#D98E73]"
                  >
                    <option value="ילדים ומשפחות">ילדים ומשפחות</option>
                    <option value="גן ילדים / בית ספר">גן ילדים / בית ספר</option>
                    <option value="אירוע חברה / ארגון">אירוע חברה / ארגון</option>
                    <option value="קבוצת חברים קטנה">קבוצת חברים קטנה</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5D4E42] mb-1">
                    איפה החלל?
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full text-xs font-medium bg-white border border-[#E6DCD2] rounded-xl p-2.5 text-[#43423E] focus:ring-2 focus:ring-[#D98E73]"
                  >
                    <option value="בפארק / בחוץ">בפארק / בחוץ</option>
                    <option value="בבית / בסלון">בבית / בסלון</option>
                    <option value="באולם / סטודיו / גן">באולם / סטודיו / גן</option>
                    <option value="עדיין מחפשים מקום">עדיין מחפשים מקום</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleSendMixWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-bold text-sm shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>יש לי רעיון – בואי נדבר בוואטסאפ!</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenContactWithPreset(`רעיון משולב: ${selectedElements.join(' + ')} עבור ${selectedAudience} ב${selectedLocation}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#5D4E42] border border-[#E6DCD2] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#D98E73]" />
                  <span>או השאירו פרטים בטופס האתר</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
