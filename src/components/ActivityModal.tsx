import React from 'react';
import { 
  X, 
  MessageCircle, 
  Users, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  CalendarCheck,
  Send
} from 'lucide-react';
import { ActivityItem } from '../types';

interface ActivityModalProps {
  activity: ActivityItem | null;
  onClose: () => void;
  onBookInForm: (activityTitle: string) => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  activity,
  onClose,
  onBookInForm
}) => {
  if (!activity) return null;

  const whatsappUrl = `https://wa.me/972500000000?text=${encodeURIComponent(`היי מיכאלה, קראתי על הפעילות ״${activity.title}״ באתר ואשמח לשמוע פרטים ותאריכים פנויים!`)}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto border-2 border-[#E6DCD2] text-[#43423E] relative my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image & Close Button */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-t-3xl">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/85 via-[#2D2A26]/25 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#43423E] shadow-md transition-all focus:outline-none cursor-pointer"
            aria-label="סגור חלון"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 right-4 left-4 text-right text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D98E73] text-white font-extrabold text-xs mb-1.5 shadow-xs">
              {activity.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6 text-right">
          
          {/* Main Description */}
          <div className="space-y-2">
            <h4 className="font-bold text-base text-[#43423E] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D98E73]" />
              מה קורה בפעילות?
            </h4>
            <p className="text-[#5A554E] text-sm sm:text-base leading-relaxed">
              {activity.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-[#F5EFEB] rounded-2xl p-4 border border-[#E6DCD2] space-y-2">
            <h5 className="font-bold text-xs sm:text-sm text-[#43423E]">
              דגשים ויתרונות מרכזיים:
            </h5>
            <ul className="space-y-1.5">
              {activity.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#5A554E]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A8C7A] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Mini Syllabus Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2] space-y-1">
              <div className="flex items-center gap-2 text-[#8C5D4B] font-bold text-xs">
                <Users className="w-4 h-4" />
                <span>למי מתאים וגילאים</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#43423E]">
                {activity.targetAge}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2] space-y-1">
              <div className="flex items-center gap-2 text-[#8C5D4B] font-bold text-xs">
                <Users className="w-4 h-4" />
                <span>מספר משתתפים</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#43423E]">
                {activity.participants}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2] space-y-1">
              <div className="flex items-center gap-2 text-[#8C5D4B] font-bold text-xs">
                <Clock className="w-4 h-4" />
                <span>משך הפעילות</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#43423E]">
                {activity.duration}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DCD2] space-y-1">
              <div className="flex items-center gap-2 text-[#8C5D4B] font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>מה צריך במקום?</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#43423E]">
                {activity.venueNeeds}
              </p>
            </div>
          </div>

          {/* Adaptability Box */}
          <div className="p-4 rounded-2xl bg-[#EBF2EB] border border-[#D9E6D9] text-xs sm:text-sm text-[#4A5D4A]">
            <p className="font-bold mb-1">אפשר להתאים לקבוצה?</p>
            <p className="text-[#3E523E] leading-relaxed">{activity.adaptability}</p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 border-t border-[#E6DCD2]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 rounded-2xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>רוצה לשמוע עוד בוואטסאפ</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookInForm(activity.title);
              }}
              className="flex-1 py-3.5 px-4 rounded-2xl bg-[#D98E73] hover:bg-[#C87D62] text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>השאירו פרטים לתאום מועד</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
