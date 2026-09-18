import React from 'react';
import { ColorPalette, Language, GovService } from '../types';
import { AppHeader } from './AppHeader';
import { GOV_SERVICES, PANJIKA_TODAY, CULTURAL_STORIES } from '../data/mockData';
import { 
  QrCode, 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Shield, 
  PhoneCall, 
  HeartHandshake, 
  SunMedium, 
  Compass,
  ChevronRight,
  ExternalLink,
  Landmark
} from 'lucide-react';

interface HomeScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang: () => void;
  onSelectService: (service: GovService) => void;
  onNavigateTab: (tab: 'services' | 'culture' | 'profile') => void;
  userName?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  palette,
  lang,
  onToggleLang,
  onSelectService,
  onNavigateTab,
  userName = 'Rajesh Kumar Das'
}) => {
  return (
    <div 
      className="flex flex-col min-h-full pb-4 transition-colors duration-300"
      style={{ backgroundColor: palette.background }}
    >
      {/* Top Odia Connect Header */}
      <AppHeader palette={palette} lang={lang} onToggleLang={onToggleLang} compact />

      {/* Citizen Greeting Bar */}
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="text-xs font-semibold text-slate-500">
              {lang === 'or' ? 'ନମସ୍କାର,' : 'Namaskar,'}
            </span>
            <span className="text-sm font-bold text-slate-800">{userName.split(' ')[0]}</span>
            <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-teal-100 text-teal-800 border border-teal-200">
              ✓ Verified
            </span>
          </div>
          <p className="text-[11px] text-slate-500">Khurda, Odisha • ID: OD-2024-8921</p>
        </div>

        <button
          onClick={() => onNavigateTab('profile')}
          className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-xs overflow-hidden flex items-center justify-center font-bold text-xs hover:ring-2 ring-teal-500 transition-all"
          style={{ backgroundColor: palette.primary, color: '#FFFFFF' }}
        >
          RK
        </button>
      </div>

      <div className="px-4 space-y-4 pt-1">
        {/* Digital Citizen ID Card */}
        <div 
          className="relative rounded-2xl p-4 text-white shadow-md overflow-hidden transition-transform active:scale-[0.99]"
          style={{
            background: `linear-gradient(135deg, ${palette.primary} 0%, #082042 100%)`
          }}
        >
          {/* Subtle Decorative Golden Corner */}
          <div 
            className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-20 pointer-events-none"
            style={{ backgroundColor: palette.accent }}
          />

          <div className="flex items-start justify-between relative z-10">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm bg-white/15 text-white/90">
                  Govt of Odisha
                </span>
                <span className="text-[10px] font-semibold text-amber-300 flex items-center space-x-0.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Subhadra Enabled</span>
                </span>
              </div>
              <h3 className="text-base font-bold tracking-tight">{userName}</h3>
              <p className="text-xs text-white/80 font-mono mt-0.5">ODIA-ID: 9812-4410-8921</p>
            </div>

            <div className="bg-white p-1.5 rounded-xl shadow-xs">
              <QrCode className="w-8 h-8 text-slate-900" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/85">
            <span className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-teal-300" />
              <span>DigiLocker Linked</span>
            </span>
            <button 
              onClick={() => onNavigateTab('profile')}
              className="font-semibold text-amber-300 hover:underline flex items-center space-x-0.5"
            >
              <span>View Full Card</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Quick Government Services Grid */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {lang === 'or' ? 'ପ୍ରମୁଖ ସରକାରୀ ସେବା' : 'Top Citizen Services'}
            </h4>
            <button
              onClick={() => onNavigateTab('services')}
              className="text-xs font-semibold hover:underline flex items-center space-x-0.5"
              style={{ color: palette.secondary }}
            >
              <span>{lang === 'or' ? 'ସବୁ ଦେଖନ୍ତୁ' : 'View All'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {GOV_SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="p-3.5 rounded-xl border shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                style={{ 
                  backgroundColor: palette.surface,
                  borderColor: '#E2E8F0'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: palette.cards,
                        color: palette.secondary
                      }}
                    >
                      {service.category.toUpperCase()}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h5 className="font-bold text-xs text-slate-900 line-clamp-1">
                    {lang === 'or' ? service.nameOr : service.nameEn}
                  </h5>
                  <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-emerald-700">{service.fee}</span>
                  <span className="text-slate-400">{service.processingDays}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Panjika & Jagannath Niti Spotlight */}
        <div 
          className="rounded-2xl p-4 border shadow-xs transition-all"
          style={{ 
            backgroundColor: palette.cards,
            borderColor: '#D4E8E7'
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1.5">
              <SunMedium className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-slate-900">
                {lang === 'or' ? 'ଆଜିର ପାଞ୍ଜି ଓ ଶ୍ରୀମନ୍ଦିର ନୀତି' : "Today's Panjika & Shree Mandira"}
              </span>
            </div>
            <button 
              onClick={() => onNavigateTab('culture')}
              className="text-[11px] font-semibold hover:underline"
              style={{ color: palette.secondary }}
            >
              {lang === 'or' ? 'ବିସ୍ତୃତ' : 'Details'}
            </button>
          </div>

          <div className="bg-white/80 rounded-xl p-3 border border-white/60 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-slate-800 font-semibold">
              <span>{lang === 'or' ? PANJIKA_TODAY.tithiOr : PANJIKA_TODAY.tithiEn}</span>
              <span className="text-[11px] text-amber-700 font-bold">{PANJIKA_TODAY.paksha}</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600">
              <span>Sunrise: {PANJIKA_TODAY.sunrise}</span>
              <span>Sunset: {PANJIKA_TODAY.sunset}</span>
            </div>
            <div className="pt-1 text-[11px] text-slate-700 font-medium">
              ✨ <span className="font-semibold">{PANJIKA_TODAY.auspiciousTime}</span>
            </div>
          </div>
        </div>

        {/* Emergency & 5T Mo Sarkar Helplines */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Citizen Emergency & Mo Sarkar
            </span>
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-white/10 p-2 rounded-xl border border-white/10">
              <span className="text-[10px] text-white/70 block">Emergency</span>
              <span className="font-bold text-sm text-white">112</span>
            </div>
            <div className="bg-white/10 p-2 rounded-xl border border-white/10">
              <span className="text-[10px] text-white/70 block">Mo Sarkar</span>
              <span className="font-bold text-sm text-amber-300">14545</span>
            </div>
            <div className="bg-white/10 p-2 rounded-xl border border-white/10">
              <span className="text-[10px] text-white/70 block">Women Help</span>
              <span className="font-bold text-sm text-white">181</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
