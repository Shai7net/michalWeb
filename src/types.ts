export type ActivityCategory = 'yoga' | 'circus' | 'craft' | 'birthday';

export interface ActivityItem {
  id: string;
  title: string;
  category: ActivityCategory;
  categoryName: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  targetAge: string;
  participants: string;
  duration: string;
  venueNeeds: string;
  adaptability: string;
  image: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    buttonBg: string;
  };
}

export type AudienceType = 'parents' | 'educators' | 'organizations' | 'producers';

export interface AudienceInfo {
  id: AudienceType;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  tags: string[];
  description: string;
  benefits: string[];
  recommendedActivities: string[];
}

export interface BirthdayPackage {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  suitableFor: string;
  duration: string;
  color: string;
  image: string;
  addons: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  tag: string;
  avatarText: string;
  content: string;
  rating: number;
  highlight: string;
  date?: string;
  isWhatsAppStyle?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'yoga' | 'circus' | 'birthday' | 'craft' | 'family';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  darkContrast: boolean;
  grayscale: boolean;
  invert: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
  stopAnimations: boolean;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  audience: string;
  activityInterest: string;
  participantsCount: string;
  eventDate: string;
  notes: string;
}
