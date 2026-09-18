import React from 'react';
import { ColorPalette, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Globe } from 'lucide-react';

interface AppHeaderProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang?: () => void;
  showBack?: boolean;
  onBack?: () => void;
  compact?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  palette,
  lang,
  onToggleLang,
  showBack,
  onBack,
  compact = false
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="relative w-full z-20 shrink-0">
      {/* Primary Navy Background Header */}
      <div 
        className="w-full pt-3 pb-4 px-5 text-center text-white relative transition-colors duration-300"
        style={{ backgroundColor: palette.primary }}
      >
        {/* Quick Language / Back Controls */}
        <div className="flex items-center justify-between absolute top-2.5 left-4 right-4">
          {showBack ? (
            <button
              onClick={onBack}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Go Back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          ) : <div className="w-5" />}

          {onToggleLang && (
            <button
              onClick={onToggleLang}
              className="flex items-center space-x-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white hover:bg-white/25 transition-all border border-white/20 backdrop-blur-xs"
              title="Toggle Language"
            >
              <Globe className="w-3 h-3 text-amber-300" />
              <span>{lang === 'en' ? 'ଓଡ଼ିଆ' : 'English'}</span>
            </button>
          )}
        </div>

        {/* Title */}
        <h1 
          className={`font-bold tracking-tight text-white ${compact ? 'text-lg mt-3' : 'text-xl sm:text-[22px] mt-2'} leading-tight`}
          style={{ letterSpacing: '-0.015em' }}
        >
          {t.appName}
        </h1>

        {/* Subtitle */}
        <p className="text-[12px] sm:text-[13px] text-white/90 font-medium mt-1 leading-snug">
          {t.appSub}
        </p>

        {/* Tagline */}
        <p className="text-[11px] text-white/75 font-normal mt-0.5 tracking-wide">
          {t.appTagline}
        </p>
      </div>

      {/* Accent (Gold) Decorative line under header */}
      <div 
        className="w-full h-[4px] transition-colors duration-300 shadow-xs"
        style={{ backgroundColor: palette.accent }}
      />
    </div>
  );
};
