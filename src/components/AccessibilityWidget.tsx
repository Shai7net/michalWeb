import React, { useState, useEffect } from 'react';
import { 
  Accessibility, 
  X, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  SunMedium, 
  Moon, 
  Eye, 
  MousePointer, 
  Type, 
  Link2, 
  PauseCircle, 
  FileText,
  Check
} from 'lucide-react';
import { AccessibilitySettings } from '../types';

const INITIAL_SETTINGS: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  darkContrast: false,
  grayscale: false,
  invert: false,
  readableFont: false,
  highlightLinks: false,
  largeCursor: false,
  stopAnimations: false,
};

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('michaela_a11y_settings');
      return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  // Apply classes to document body
  useEffect(() => {
    try {
      localStorage.setItem('michaela_a11y_settings', JSON.stringify(settings));
    } catch {}

    const body = document.body;
    const html = document.documentElement;

    // Font size
    html.classList.remove('text-[18px]', 'text-[20px]');
    if (settings.fontSize === 'large') {
      html.style.fontSize = '112.5%';
    } else if (settings.fontSize === 'xlarge') {
      html.style.fontSize = '125%';
    } else {
      html.style.fontSize = '100%';
    }

    // Toggle body classes
    body.classList.toggle('a11y-high-contrast', settings.highContrast);
    body.classList.toggle('a11y-dark-contrast', settings.darkContrast);
    body.classList.toggle('a11y-grayscale', settings.grayscale);
    body.classList.toggle('a11y-invert', settings.invert);
    body.classList.toggle('a11y-readable-font', settings.readableFont);
    body.classList.toggle('a11y-highlight-links', settings.highlightLinks);
    body.classList.toggle('a11y-large-cursor', settings.largeCursor);
    body.classList.toggle('a11y-stop-animations', settings.stopAnimations);
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(INITIAL_SETTINGS);
  };

  const activeCount = Object.entries(settings).filter(([key, val]) => {
    if (key === 'fontSize') return val !== 'normal';
    return Boolean(val);
  }).length;

  return (
    <>
      {/* Floating Accessibility Trigger Button */}
      <button
        id="a11y-trigger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="פתח תפריט נגישות"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-[#0284C7] hover:bg-[#0369A1] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 flex items-center justify-center group"
      >
        <Accessibility className="w-6 h-6 transition-transform group-hover:scale-110" />
        {activeCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-amber-500 text-amber-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
            {activeCount}
          </span>
        )}
      </button>

      {/* Accessibility Panel Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-sky-100 p-6 sm:p-7 text-[#2D2A26] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Accessibility className="w-6 h-6" />
                </div>
                <div>
                  <h2 id="a11y-modal-title" className="text-xl font-bold text-gray-900">
                    תפריט נגישות (ת״י 5568)
                  </h2>
                  <p className="text-xs text-gray-500">
                    התאמת האתר לצפייה נוחה ומונגשת
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="סגור תפריט נגישות"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Font Size Scaling */}
            <div className="mb-6">
              <span className="block text-sm font-semibold text-gray-700 mb-2">
                גודל טקסט
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => updateSetting('fontSize', 'normal')}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                    settings.fontSize === 'normal'
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                  }`}
                >
                  רגיל (100%)
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 'large')}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-center gap-1 ${
                    settings.fontSize === 'large'
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                  }`}
                >
                  <ZoomIn className="w-4 h-4" /> מוגדל (112%)
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 'xlarge')}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-center gap-1 ${
                    settings.fontSize === 'xlarge'
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                  }`}
                >
                  <ZoomIn className="w-4 h-4" /> ענק (125%)
                </button>
              </div>
            </div>

            {/* Toggle Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* High Contrast */}
              <button
                onClick={() => {
                  updateSetting('highContrast', !settings.highContrast);
                  if (!settings.highContrast) updateSetting('darkContrast', false);
                }}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.highContrast
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <SunMedium className="w-5 h-5 text-amber-600" />
                  <span className="text-sm">ניגודיות גבוהה</span>
                </div>
                {settings.highContrast && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Dark Mode Contrast */}
              <button
                onClick={() => {
                  updateSetting('darkContrast', !settings.darkContrast);
                  if (!settings.darkContrast) updateSetting('highContrast', false);
                }}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.darkContrast
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Moon className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm">ניגודיות כהה</span>
                </div>
                {settings.darkContrast && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Grayscale */}
              <button
                onClick={() => updateSetting('grayscale', !settings.grayscale)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.grayscale
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">גווני אפור</span>
                </div>
                {settings.grayscale && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Invert */}
              <button
                onClick={() => updateSetting('invert', !settings.invert)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.invert
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-5 h-5 text-teal-600" />
                  <span className="text-sm">היפוך צבעים</span>
                </div>
                {settings.invert && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Readable Font */}
              <button
                onClick={() => updateSetting('readableFont', !settings.readableFont)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.readableFont
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Type className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">גופן קריא וברור</span>
                </div>
                {settings.readableFont && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Highlight Links */}
              <button
                onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.highlightLinks
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Link2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">הדגשת קישורים</span>
                </div>
                {settings.highlightLinks && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Large Cursor */}
              <button
                onClick={() => updateSetting('largeCursor', !settings.largeCursor)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.largeCursor
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MousePointer className="w-5 h-5 text-rose-600" />
                  <span className="text-sm">סמן עכבר מוגדל</span>
                </div>
                {settings.largeCursor && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Stop Animations */}
              <button
                onClick={() => updateSetting('stopAnimations', !settings.stopAnimations)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all ${
                  settings.stopAnimations
                    ? 'bg-sky-50 border-sky-500 text-sky-900 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <PauseCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm">עצירת אנימציות</span>
                </div>
                {settings.stopAnimations && <Check className="w-4 h-4 text-sky-600" />}
              </button>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={resetSettings}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> איפוס הגדרות
              </button>

              <button
                onClick={() => setShowStatement(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-sky-700 hover:bg-sky-50 rounded-xl font-medium transition-colors border border-sky-200"
              >
                <FileText className="w-3.5 h-3.5" /> הצהרת נגישות מלאה
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Israeli Accessibility Statement Dialog */}
      {showStatement && (
        <div 
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowStatement(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-[#2D2A26] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-4 mb-5">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-6 h-6 text-sky-600" />
                הצהרת נגישות — מִיכָאֵלָה
              </h3>
              <button
                onClick={() => setShowStatement(false)}
                className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-right">
              <p>
                אתר <strong>״מִיכָאֵלָה — תנועה, משחק, יוגה, קרקס ויצירה״</strong> רואה חשיבות עליונה בהנגשת שירותיו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, מתוך תפיסת עולם שבה <strong>״יש מקום לכל ילד ולכל אדם״</strong>.
              </p>

              <h4 className="font-bold text-gray-900 text-base">עמידה בתקן הנגישות</h4>
              <p>
                האתר נבנה בהתאם להוראות הנגישות המופיעות בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, ובהתאם להנחיות תקן ישראלי <strong>ת״י 5568</strong> ברמת <strong>AA</strong> (המבוסס על מסמך WCAG 2.1 הבינלאומי).
              </p>

              <h4 className="font-bold text-gray-900 text-base">התאמות שבוצעו באתר</h4>
              <ul className="list-disc list-inside space-y-1.5 pr-2">
                <li>תמיכה מלאה בניווט מקלדת (טאב, אנטר, חיצים).</li>
                <li>התאמה מלאה למסכי מגע ומכשירים ניידים.</li>
                <li>ניגודיות צבעים תקנית לקריאות מרבית.</li>
                <li>טקסט אלטרנטיבי (ALT) לתמונות.</li>
                <li>תפריט נגישות המאפשר הגדלת טקסט, שינוי ניגודיות, עצירת אנימציות וגופן קריא.</li>
                <li>מבנה סמנטי תקין עם תגיות כותרות היררכיות.</li>
              </ul>

              <h4 className="font-bold text-gray-900 text-base">רכזת נגישות ויצירת קשר</h4>
              <p>
                אם נתקלתם בבעיית נגישות או שיש לכם הצעה לשיפור, נשמח מאוד לשמוע ולתקן:
              </p>
              <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 space-y-1 text-sky-900">
                <p><strong>שם:</strong> מיכאלה</p>
                <p><strong>טלפון ו-WhatsApp:</strong> 050-0000000</p>
                <p><strong>דוא״ל:</strong> michaela.movement@gmail.com</p>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                הצהרת הנגישות עודכנה לאחרונה בשנת 2026.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t flex justify-end">
              <button
                onClick={() => setShowStatement(false)}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
              >
                הבנתי, תודה
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
