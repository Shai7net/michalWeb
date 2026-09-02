import React, { useState } from 'react';
import { Sparkles, ArrowLeft, Users, Clock, MessageCircle, Info } from 'lucide-react';
import { ACTIVITIES } from '../data/activitiesData';
import { ActivityItem, ActivityCategory } from '../types';

interface ActivitiesListProps {
  selectedCategory: ActivityCategory | 'all';
  onCategoryChange: (cat: ActivityCategory | 'all') => void;
  onOpenActivityDetails: (activity: ActivityItem) => void;
}

export const ActivitiesList: React.FC<ActivitiesListProps> = ({
  selectedCategory,
  onCategoryChange,
  onOpenActivityDetails
}) => {
  const filteredActivities = selectedCategory === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter((act) => act.category === selectedCategory);

  const categoryFilters: { id: ActivityCategory | 'all'; label: string; emoji: string }[] = [
    { id: 'all', label: 'כל הפעילויות', emoji: '✨' },
    { id: 'yoga', label: 'יוגה ותנועה', emoji: '🧘' },
    { id: 'circus', label: 'קרקס ומשחק', emoji: '🎪' },
    { id: 'craft', label: 'יוצרים ביחד', emoji: '✂️' },
  ];

  return (
    <section id="activities" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] text-[#5D4E42] border border-[#E0D5C9] text-xs sm:text-sm font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E73]" />
            <span>סילבוס מקוצר וברור</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#43423E] tracking-tight">
            עולם הפעילויות של מִיכָאֵלָה
          </h2>
          <p className="text-[#8C7A6B] text-base sm:text-lg">
            מידע מפורט על כל פעילות — מותאם לקריאה מהירה להורים ולמנהלים שרוצים תוכנית מקצועית.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categoryFilters.map((filter) => {
            const isActive = selectedCategory === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => onCategoryChange(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D98E73] text-white shadow-xs scale-105'
                    : 'bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] border border-[#E6DCD2]'
                }`}
              >
                <span>{filter.emoji}</span>
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-3xl border-2 border-[#E6DCD2] hover:border-[#D98E73] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group transform hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#43423E] border border-[#E6DCD2] shadow-xs">
                    {activity.badge}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#2D2A26]/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    {activity.categoryName}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 text-right space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-[#43423E] group-hover:text-[#5D4E42] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-[#5A554E] text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
                      {activity.shortDesc}
                    </p>
                  </div>

                  {/* Mini Syllabus Stats */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E6DCD2] text-xs text-[#5A554E]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C7A6B] font-medium">למי מתאים:</span>
                      <span className="font-bold text-[#43423E] truncate max-w-[170px]">{activity.targetAge}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C7A6B] font-medium">משתתפים:</span>
                      <span className="font-bold text-[#43423E]">{activity.participants}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C7A6B] font-medium">משך הפעילות:</span>
                      <span className="font-bold text-[#43423E]">{activity.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenActivityDetails(activity)}
                  className="w-full py-3 px-4 rounded-xl bg-[#F5EFEB] hover:bg-[#EADCCB] text-[#43423E] font-extrabold text-sm border border-[#E6DCD2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Info className="w-4 h-4 text-[#D98E73]" />
                  <span>פרטים מלאים וסילבוס</span>
                </button>

                <a
                  href={`https://wa.me/972500000000?text=${encodeURIComponent(`היי מיכאלה, ראיתי את ״${activity.title}״ באתר ואשמח לשמוע עוד פרטים!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EBF2EB] hover:bg-[#D9E6D9] text-[#4A5D4A] font-bold text-xs border border-[#D9E6D9] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#7A8C7A]" />
                  <span>רוצה לשמוע עוד</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
