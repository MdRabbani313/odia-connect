import React from 'react';
import { ColorPalette, ActiveScreen, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Home, Layers, Calendar, UserCheck } from 'lucide-react';

interface BottomNavProps {
  currentScreen: ActiveScreen;
  onSelectScreen: (screen: ActiveScreen) => void;
  palette: ColorPalette;
  lang: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onSelectScreen,
  palette,
  lang
}) => {
  const t = TRANSLATIONS[lang];

  const items = [
    { id: 'home' as ActiveScreen, label: t.navHome, icon: Home },
    { id: 'services' as ActiveScreen, label: t.navServices, icon: Layers },
    { id: 'culture' as ActiveScreen, label: t.navCulture, icon: Calendar },
    { id: 'profile' as ActiveScreen, label: t.navProfile, icon: UserCheck },
  ];

  return (
    <div 
      className="w-full px-4 py-2 flex items-center justify-around border-t shadow-lg z-20 shrink-0 transition-colors duration-200"
      style={{ 
        backgroundColor: palette.surface,
        borderColor: '#E2E8F0'
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectScreen(item.id)}
            className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative"
            style={{
              color: isActive ? palette.secondary : '#64748B'
            }}
          >
            <div 
              className={`p-1 rounded-lg transition-all ${
                isActive ? 'scale-110' : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: isActive ? palette.cards : 'transparent'
              }}
            >
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>

            <span className={`text-[10px] mt-0.5 font-medium tracking-tight ${
              isActive ? 'font-bold' : ''
            }`}>
              {item.label}
            </span>

            {/* Small active gold indicator */}
            {isActive && (
              <div 
                className="w-1.5 h-1.5 rounded-full absolute -bottom-0.5 transition-all"
                style={{ backgroundColor: palette.accent }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
