import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : size === 'xl' ? 1.6 : 1;

  return (
    <div
      className={`inline-flex flex-col items-center select-none cursor-pointer group transition-transform duration-300 hover:scale-[1.03] ${className}`}
      id="brand-logo-container"
    >
      {/* Cloud-pill badge with warm natural earth outline */}
      <div 
        className="relative px-4 py-1.5 rounded-full bg-[#F5EFEB] border-[2.5px] border-[#E0D5C9] shadow-xs flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-[#D98E73]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Playful Colorful Letters for 'מִיכָאֵלָה' in rich natural tones */}
        <div className="flex items-center gap-1 font-black text-2xl tracking-tight text-center">
          <span className="text-[#7A8C7A] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:-rotate-6 transition-transform">מִ</span>
          <span className="text-[#D98E73] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:rotate-6 transition-transform">י</span>
          <span className="text-[#8C7A6B] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:-rotate-3 transition-transform">כָ</span>
          <span className="text-[#658B85] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:rotate-6 transition-transform">אֵ</span>
          <span className="text-[#C97A8C] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:-rotate-6 transition-transform">לָ</span>
          <span className="text-[#B37D56] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] inline-block transform hover:rotate-3 transition-transform">ה</span>
        </div>
      </div>

      {showSubtitle && (
        <span 
          className="text-[#8C7A6B] font-extrabold text-xs sm:text-sm tracking-wide mt-1"
          style={{ transform: `scale(${scale * 0.95})` }}
        >
          הפעלות והדרכות לילדים
        </span>
      )}
    </div>
  );
};
