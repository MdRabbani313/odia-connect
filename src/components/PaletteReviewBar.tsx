import React from 'react';
import { ColorPalette, ColorPaletteId, Language } from '../types';
import { PALETTES } from '../data/palettes';
import { Palette, Smartphone, SplitSquareVertical, Globe, Check, Eye } from 'lucide-react';

interface PaletteReviewBarProps {
  currentPalette: ColorPalette;
  onSelectPalette: (paletteId: ColorPaletteId) => void;
  viewMode: 'side-by-side' | 'interactive';
  onChangeViewMode: (mode: 'side-by-side' | 'interactive') => void;
  lang: Language;
  onToggleLang: () => void;
}

export const PaletteReviewBar: React.FC<PaletteReviewBarProps> = ({
  currentPalette,
  onSelectPalette,
  viewMode,
  onChangeViewMode,
  lang,
  onToggleLang
}) => {
  return (
    <header className="w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white px-4 py-3 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Title & Brand */}
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-xs"
            style={{ backgroundColor: currentPalette.primary }}
          >
            <span className="text-sm tracking-tight">OD</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm tracking-tight text-white">ODIA CONNECT</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-900/60 text-teal-300 border border-teal-700/50">
                Client Review & Prototype
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Odisha Government Citizen Platform • Colors per attached specification
            </p>
          </div>
        </div>

        {/* Palettes Selector (Matches attached specification sheet!) */}
        <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {(['official', 'cultural', 'nature'] as ColorPaletteId[]).map((key) => {
            const pal = PALETTES[key];
            const isSelected = currentPalette.id === key;

            return (
              <button
                key={key}
                onClick={() => onSelectPalette(key)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected 
                    ? 'bg-slate-800 text-white shadow-xs ring-1 ring-slate-700 font-semibold' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {/* Color swatches preview */}
                <div className="flex items-center -space-x-1">
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-slate-900" 
                    style={{ backgroundColor: pal.primary }} 
                    title="Primary"
                  />
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-slate-900" 
                    style={{ backgroundColor: pal.secondary }} 
                    title="Secondary"
                  />
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-slate-900" 
                    style={{ backgroundColor: pal.accent }} 
                    title="Accent"
                  />
                </div>
                <span className="whitespace-nowrap hidden sm:inline">
                  {key === 'official' ? '1. Official (Navy/Teal)' : key === 'cultural' ? '2. Cultural (Red/Gold)' : '3. Nature (Green)'}
                </span>
                {pal.recommended && (
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-950/60 px-1 rounded-xs">
                    ★
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* View Mode & Language Toggles */}
        <div className="flex items-center space-x-2">
          {/* Mode switch */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeViewMode('side-by-side')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs transition-all ${
                viewMode === 'side-by-side'
                  ? 'bg-teal-700 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="View Login & Sign Up side-by-side as in client mockup"
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>

            <button
              onClick={() => onChangeViewMode('interactive')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs transition-all ${
                viewMode === 'interactive'
                  ? 'bg-teal-700 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Test interactive flow (Login, OTP, Dashboard, Services)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive App</span>
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-800 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'en' ? 'ଓଡ଼ିଆ' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
