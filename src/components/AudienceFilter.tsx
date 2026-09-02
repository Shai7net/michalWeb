import React, { useState } from 'react';
import { 
  HeartHandshake, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  CheckCircle, 
  ArrowLeft,
  Users
} from 'lucide-react';
import { AUDIENCE_DATA } from '../data/activitiesData';
import { AudienceType } from '../types';

interface AudienceFilterProps {
  onSelectAudienceActivity: (activityTitle: string) => void;
}

export const AudienceFilter: React.FC<AudienceFilterProps> = ({ onSelectAudienceActivity }) => {
  const [selectedTab, setSelectedTab] = useState<AudienceType>('parents');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentAudience = AUDIENCE_DATA.find((a) => a.id === selectedTab) || AUDIENCE_DATA[0];

  return (
    <section id="audience" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs sm:text-sm font-extrabold">
            <Users className="w-3.5 h-3.5 text-[#D98E73]" />
            <span>התאמה מדויקת לצורך שלכם</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            למי הפעילויות מתאימות?
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            בחרו את הפרופיל שלכם וראו איך מיכאלה יכולה לשדרג את האירוע או המסגרת שלכם.
          </p>
        </div>

        {/* Audience Selection Tabs (Mobile Scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {AUDIENCE_DATA.map((aud) => {
            const isSelected = selectedTab === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setSelectedTab(aud.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D98E73] text-white shadow-xs scale-105'
                    : 'bg-white hover:bg-[#F5EFEB] text-[#43423E] border border-[#E6DCD2]'
                }`}
              >
                {getIcon(aud.iconName)}
                <span>{aud.title}</span>
              </button>
            );
          })}
        </div>

        {/* Audience Detailed Panel Card */}
        <div className="bg-white rounded-3xl border-2 border-[#E6DCD2] shadow-sm p-6 sm:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-right">
              
              <div>
                <span className="text-xs font-bold text-[#8C5D4B] bg-[#F5E1D2] px-3 py-1 rounded-full inline-block mb-2">
                  {currentAudience.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#43423E]">
                  {currentAudience.title}
                </h3>
              </div>

              <p className="text-[#5A554E] text-base sm:text-lg leading-relaxed">
                {currentAudience.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentAudience.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-[#E6DCD2]">
                <span className="block text-xs font-bold text-[#43423E]">
                  הערך הייחודי שתקבלו:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentAudience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5A554E]">
                      <CheckCircle className="w-4 h-4 text-[#7A8C7A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Recommended Activities (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#E6DCD2] space-y-4">
              <h4 className="font-extrabold text-[#43423E] text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D98E73]" />
                פעילויות מומלצות במיוחד עבורכם:
              </h4>

              <div className="space-y-2.5">
                {currentAudience.recommendedActivities.map((actTitle, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-[#E6DCD2] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#43423E] group-hover:text-[#D98E73] transition-colors">
                      {actTitle}
                    </span>
                    <button
                      onClick={() => onSelectAudienceActivity(actTitle)}
                      className="px-3 py-1.5 rounded-lg bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>פרטים</span>
                      <ArrowLeft className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`https://wa.me/972500000000?text=${encodeURIComponent(`היי מיכאלה, פניתי כ${currentAudience.title} ואשמח לקבל פרטים!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#7A8C7A] hover:bg-[#687868] text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
                >
                  <span>התייעצות מהירה בוואטסאפ</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
