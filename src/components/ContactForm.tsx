import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  Sparkles, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  CheckCircle2, 
  HeartHandshake,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';

interface ContactFormProps {
  initialActivity?: string;
  initialNotes?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialActivity = '',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    audience: 'הורים ומשפחה',
    activityInterest: initialActivity || 'יוגה ותנועה',
    participantsCount: '15-20',
    eventDate: '',
    notes: initialNotes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialActivity) {
      setFormData((prev) => ({ ...prev, activityInterest: initialActivity }));
    }
  }, [initialActivity]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {}

    setSubmitted(true);

    // Prepare WhatsApp message
    const message = `היי מיכאלה! השארתי פנייה דרך האתר:
📌 שם: ${formData.fullName}
📞 טלפון: ${formData.phone}
${formData.email ? `✉️ אימייל: ${formData.email}\n` : ''}👥 קהל יעד: ${formData.audience}
🎯 פעילות מבוקשת: ${formData.activityInterest}
🔢 כמות משתתפים משוערת: ${formData.participantsCount}
📅 תאריך מבוקש: ${formData.eventDate || 'גמיש / טרם נקבע'}
📝 פרטים נוספים: ${formData.notes || 'אשמח שנשוחח ונתאים יחד'}`;

    const url = `https://wa.me/972500000000?text=${encodeURIComponent(message)}`;
    
    // Auto-open WhatsApp after a brief delay for optimal UX
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  const directWhatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent('היי מיכאלה, אשמח להתייעץ על פעילות מתאימה!')}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EDE1D1]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#DCE6DC]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs sm:text-sm font-extrabold">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D98E73]" />
            <span>סיום חם ופשוט</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            אז… מה נעשה יחד?
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            לא בטוחים איזו פעילות מתאימה? זה בסדר גמור!
            ספרו לי מי אתם ומה אתם מתכננים — ונחשוב יחד על פעילות שמתאימה בדיוק לכם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Quick WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E6DCD2] shadow-xs text-right space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#4A5D4A] bg-[#EBF2EB] border border-[#D9E6D9] px-3 py-1 rounded-full inline-block">
                הדרך הכי מהירה לדבר
              </span>
              <h3 className="text-2xl font-black text-[#43423E]">
                שיחה ישירה עם מיכאלה
              </h3>
              <p className="text-[#5A554E] text-sm leading-relaxed">
                רוצים מענה מיידי או לבדוק תאריך פנוי באופן ישיר? שלחו הודעה קצרה בוואטסאפ ונדבר בחיוך.
              </p>
            </div>

            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-extrabold text-base shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>דברו איתי בוואטסאפ</span>
            </a>

            {/* Direct Contact Info */}
            <div className="space-y-3 pt-3 border-t border-[#E6DCD2] text-xs sm:text-sm text-[#5A554E]">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2]">
                <span className="text-[#8C7A6B] font-medium">טלפון ישיר:</span>
                <a href="tel:0500000000" className="font-bold text-[#43423E] hover:text-[#7A8C7A] dir-ltr">
                  050-000-0000
                </a>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2]">
                <span className="text-[#8C7A6B] font-medium">דוא״ל:</span>
                <span className="font-bold text-[#43423E]">michaela.movement@gmail.com</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2]">
                <span className="text-[#8C7A6B] font-medium">אזורי פעילות:</span>
                <span className="font-bold text-[#43423E]">מרכז, שפלה, דרום ואירועים מיוחדים</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-[#E6DCD2] text-xs text-[#5D4E42] font-medium leading-relaxed">
              ⭐ <strong>זמינות:</strong> מענה מהיר ביום העבודה, ניתן לתאם שיחת ייעוץ קולית בכיף.
            </div>

          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#E6DCD2] shadow-md text-right relative">
            
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#EBF2EB] text-[#4A5D4A] rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#43423E]">
                  תודה רבה, הפרטים נשלחו!
                </h3>
                <p className="text-[#5A554E] text-sm max-w-md mx-auto leading-relaxed">
                  ההודעה נפתחה גם בוואטסאפ לתיאום מהיר. אחזור אליכם בהקדם האפשרי עם חיוך והצעה שמתאימה בול לקבוצה שלכם.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] text-xs font-bold transition-colors cursor-pointer border border-[#E6DCD2]"
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="border-b border-[#E6DCD2] pb-3 mb-2">
                  <h3 className="text-xl font-black text-[#43423E] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D98E73]" />
                    השאירו פרטים ונחזור אליכם
                  </h3>
                  <p className="text-xs text-[#8C7A6B] mt-0.5">
                    טופס קצר ונוח — נחזור עם כל הפרטים וההתאמות
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      שם מלא <span className="text-[#D98E73]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="איך קוראים לכם?"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 focus:border-[#D98E73] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      טלפון <span className="text-[#D98E73]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="050-0000000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 focus:border-[#D98E73] transition-all text-right"
                    />
                  </div>
                </div>

                {/* Email & Audience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      אימייל (לא חובה)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      מי הקהל?
                    </label>
                    <select
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all"
                    >
                      <option value="הורים ומשפחה">הורים ומשפחה (יום הולדת / חוג)</option>
                      <option value="גן ילדים">צוות גן ילדים</option>
                      <option value="בית ספר / מוסד חינוכי">בית ספר / מוסד חינוכי</option>
                      <option value="חברה / ארגון">חברה / ארגון / ועד עובדים</option>
                      <option value="מפיק/ת אירועים">מפיק/ת אירועים</option>
                      <option value="אחר">אחר</option>
                    </select>
                  </div>
                </div>

                {/* Activity & Participants */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      איזו פעילות מעניינת אתכם?
                    </label>
                    <select
                      name="activityInterest"
                      value={formData.activityInterest}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all"
                    >
                      <option value="יוגה ותנועה">🧘 יוגה ותנועה / יוגה בסיפור</option>
                      <option value="קרקס ומשחק">🎪 קרקס וחישוקים</option>
                      <option value="סדנת יצירה">✂️ סדנת יצירת ג׳אגלינג / מקלות סרט</option>
                      <option value="יום הולדת קרקס">🎂 יום הולדת קרקס ולהטוטים</option>
                      <option value="יום הולדת יוגה">🎂 יום הולדת יוגה ורוגע</option>
                      <option value="יום הולדת של פעם">🎂 יום הולדת של פעם</option>
                      <option value="הורה וילד">👨‍👧 סדנת הורה וילד</option>
                      <option value="שילוב מותאם אישית">✨ שילוב מותאם אישית</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#43423E] mb-1">
                      כמה משתתפים משוערים?
                    </label>
                    <input
                      type="text"
                      name="participantsCount"
                      placeholder="לדוגמה: 15–20 ילדים"
                      value={formData.participantsCount}
                      onChange={handleChange}
                      className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-bold text-[#43423E] mb-1">
                    תאריך משוער (אם כבר ידוע)
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#43423E] mb-1">
                    ספרו לי קצת מה אתם מחפשים
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="גילאי הילדים, מיקום מתוכנן, שאלות או רעיונות מיוחדים..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full text-sm bg-[#FAF7F2] border border-[#E6DCD2] rounded-xl p-3 text-[#43423E] focus:bg-white focus:ring-2 focus:ring-[#D98E73]/40 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#D98E73] hover:bg-[#C87D62] text-white font-extrabold text-base shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    <span>שלחו למִיכָאֵלָה (וואטסאפ מהיר)</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
