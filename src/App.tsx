import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActivityCategories } from './components/ActivityCategories';
import { CustomMixer } from './components/CustomMixer';
import { Philosophy } from './components/Philosophy';
import { AudienceFilter } from './components/AudienceFilter';
import { ActivitiesList } from './components/ActivitiesList';
import { ActivityModal } from './components/ActivityModal';
import { BirthdaysSection } from './components/BirthdaysSection';
import { GallerySection } from './components/GallerySection';
import { MyStory } from './components/MyStory';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ActivityItem, ActivityCategory } from './types';
import { ACTIVITIES } from './data/activitiesData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'all'>('all');
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [contactPresetActivity, setContactPresetActivity] = useState<string>('');
  const [contactPresetNotes, setContactPresetNotes] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategoryFromHero = (category: ActivityCategory) => {
    setSelectedCategory(category);
    scrollToSection('activities');
  };

  const handleSelectAudienceActivity = (activityTitle: string) => {
    const found = ACTIVITIES.find(a => a.title.includes(activityTitle) || activityTitle.includes(a.title));
    if (found) {
      setSelectedActivity(found);
    } else {
      setContactPresetActivity(activityTitle);
      scrollToSection('contact');
    }
  };

  const handlePlanBirthday = (pkgTitle: string) => {
    setContactPresetActivity(`יום הולדת: ${pkgTitle}`);
    scrollToSection('contact');
  };

  const handleCustomMixerPreset = (presetText: string) => {
    setContactPresetNotes(presetText);
    scrollToSection('contact');
  };

  const handleOpenAccessibility = () => {
    const btn = document.getElementById('a11y-trigger-btn');
    if (btn) btn.click();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#43423E] flex flex-col relative selection:bg-[#EADCCB] selection:text-[#43423E] font-sans" dir="rtl">
      
      {/* Top Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero */}
        <Hero
          onFindActivity={() => scrollToSection('categories')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. מה עושים במיכאלה? - 4 Categories */}
        <ActivityCategories
          onSelectCategory={handleSelectCategoryFromHero}
          onSelectBirthdays={() => scrollToSection('birthdays')}
        />

        {/* 3. לא מצאתם בדיוק? - Custom Activity Mixer */}
        <CustomMixer
          onOpenContactWithPreset={handleCustomMixerPreset}
        />

        {/* 4. הדרך של מיכאלה - יש מקום לכל ילד */}
        <Philosophy />

        {/* 5. למי הפעילויות מתאימות? - Audience Tabs */}
        <AudienceFilter
          onSelectAudienceActivity={handleSelectAudienceActivity}
        />

        {/* 6. עולם הפעילויות והסילבוס */}
        <ActivitiesList
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenActivityDetails={setSelectedActivity}
        />

        {/* 7. ימי הולדת מיוחדים */}
        <BirthdaysSection
          onPlanBirthday={handlePlanBirthday}
        />

        {/* 8. גלריה */}
        <GallerySection />

        {/* 9. הסיפור שלי */}
        <MyStory />

        {/* 10. המלצות */}
        <Testimonials />

        {/* 11. יצירת קשר */}
        <ContactForm
          initialActivity={contactPresetActivity}
          initialNotes={contactPresetNotes}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenAccessibility={handleOpenAccessibility}
      />

      {/* Activity Details Modal */}
      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onBookInForm={(actTitle) => {
          setContactPresetActivity(actTitle);
          scrollToSection('contact');
        }}
      />

      {/* Floating Israeli Accessibility Widget */}
      <AccessibilityWidget />

      {/* Floating Desktop WhatsApp Button */}
      <a
        href="https://wa.me/972500000000?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%94%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D!"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 left-6 z-40 bg-[#7A8C7A] hover:bg-[#687868] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#7A8C7A]/40"
        aria-label="שיחת וואטסאפ מהירה עם מיכאלה"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs group-hover:pr-2">
          דברו איתי בוואטסאפ
        </span>
      </a>

      {/* Mobile Sticky Bottom Quick Action Bar */}
      <MobileBottomBar
        onOpenBooking={() => scrollToSection('contact')}
        onNavigateToSection={scrollToSection}
      />

    </div>
  );
}
