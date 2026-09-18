import React, { useState } from 'react';
import { ColorPalette, Language } from '../types';
import { AppHeader } from './AppHeader';
import { PANJIKA_TODAY, CULTURAL_STORIES } from '../data/mockData';
import { Sun, Moon, CalendarDays, Sparkles, BookOpen, Clock, Heart, Share2 } from 'lucide-react';

interface CultureScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang: () => void;
}

export const CultureScreen: React.FC<CultureScreenProps> = ({
  palette,
  lang,
  onToggleLang
}) => {
  const [activeTab, setActiveTab] = useState<'panjika' | 'temple' | 'festivals'>('panjika');

  return (
    <div 
      className="flex flex-col min-h-full pb-4 transition-colors duration-300"
      style={{ backgroundColor: palette.background }}
    >
      <AppHeader palette={palette} lang={lang} onToggleLang={onToggleLang} compact />

      {/* Culture Top Navigation Chips */}
      <div className="px-4 pt-3 flex space-x-2">
        <button
          onClick={() => setActiveTab('panjika')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'panjika' ? 'text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
          style={{ backgroundColor: activeTab === 'panjika' ? palette.primary : undefined }}
        >
          {lang === 'or' ? 'ଓଡ଼ିଆ ପାଞ୍ଜି' : 'Odia Panjika'}
        </button>

        <button
          onClick={() => setActiveTab('temple')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'temple' ? 'text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
          style={{ backgroundColor: activeTab === 'temple' ? palette.primary : undefined }}
        >
          {lang === 'or' ? 'ଶ୍ରୀମନ୍ଦିର ନୀତି' : 'Puri Mandir'}
        </button>

        <button
          onClick={() => setActiveTab('festivals')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'festivals' ? 'text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
          style={{ backgroundColor: activeTab === 'festivals' ? palette.primary : undefined }}
        >
          {lang === 'or' ? 'ପର୍ବପର୍ବାଣୀ' : 'Festivals'}
        </button>
      </div>

      <div className="px-4 py-3 space-y-4">
        {activeTab === 'panjika' && (
          <div className="space-y-3">
            {/* Today's Panjika Hero */}
            <div 
              className="rounded-2xl p-4 border shadow-xs"
              style={{ backgroundColor: palette.surface, borderColor: '#CBD5E1' }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Kohinoor & Asal Khadiratna Panjika
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                    {PANJIKA_TODAY.dateEn}
                  </h4>
                </div>
                <div 
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                  style={{ backgroundColor: palette.cards, color: palette.secondary }}
                >
                  {PANJIKA_TODAY.odiaMonth}
                </div>
              </div>

              {/* Tithi & Nakshatra */}
              <div className="grid grid-cols-2 gap-3 py-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Tithi (ତିଥି)</span>
                  <span className="font-bold text-slate-900 block mt-0.5">
                    {lang === 'or' ? PANJIKA_TODAY.tithiOr : PANJIKA_TODAY.tithiEn}
                  </span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Nakshatra (ନକ୍ଷତ୍ର)</span>
                  <span className="font-bold text-slate-900 block mt-0.5">{PANJIKA_TODAY.nakshatra}</span>
                </div>
              </div>

              {/* Sun Timings */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                <div className="flex items-center space-x-1.5">
                  <Sun className="w-4 h-4 text-amber-600" />
                  <span className="text-[11px] text-slate-700">Sunrise: <strong>{PANJIKA_TODAY.sunrise}</strong></span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="text-[11px] text-slate-700">Sunset: <strong>{PANJIKA_TODAY.sunset}</strong></span>
                </div>
              </div>

              {/* Bela Details */}
              <div className="mt-3 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-900">
                  <span>✅ {PANJIKA_TODAY.auspiciousTime}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-red-50 text-red-900">
                  <span>⚠️ {PANJIKA_TODAY.inauspiciousTime}</span>
                </div>
              </div>
            </div>

            {/* Special Vrata Note */}
            <div 
              className="p-3.5 rounded-xl border flex items-start space-x-3"
              style={{ backgroundColor: palette.cards, borderColor: '#D4E8E7' }}
            >
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-slate-900">Today's Ritual Significance</h5>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  {lang === 'or' ? PANJIKA_TODAY.festivalOr : PANJIKA_TODAY.festival}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'temple' && (
          <div className="space-y-3">
            <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Shree Jagannatha Temple Administration (SJTA)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">
                  Live Niti Status
                </span>
              </div>
              <h3 className="font-bold text-base mt-1">Puri Dham Daily Rituals</h3>
              <p className="text-xs text-white/80 mt-1">
                Public Darshan is currently open at Srimandir. Devotees may enter through Singhadwara (Lion's Gate).
              </p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs space-y-2 text-xs">
              <h5 className="font-bold text-slate-900 mb-2">Today's Completed & Upcoming Niti</h5>
              
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                <span>05:30 AM • Mangala Alati</span>
                <span className="text-[10px] font-bold text-emerald-700">Completed ✓</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                <span>08:30 AM • Gopal Ballav Bhog</span>
                <span className="text-[10px] font-bold text-emerald-700">Completed ✓</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50 border border-teal-200">
                <span>12:30 PM • Madhyanha Dhupa (Abhada)</span>
                <span className="text-[10px] font-bold text-teal-800">In Progress ⏳</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-500">
                <span>06:30 PM • Sandhya Alati & Dhupa</span>
                <span className="text-[10px] font-medium">Scheduled</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-500">
                <span>10:30 PM • Badasinghara Vesha & Pahuda</span>
                <span className="text-[10px] font-medium">Scheduled</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'festivals' && (
          <div className="space-y-3">
            {CULTURAL_STORIES.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: palette.cards, color: palette.secondary }}
                    >
                      {item.imageTag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.sub}</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">{item.description}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span 
                    className="text-xs font-semibold cursor-pointer hover:underline"
                    style={{ color: palette.secondary }}
                  >
                    {item.action}
                  </span>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Heart className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" />
                    <Share2 className="w-3.5 h-3.5 hover:text-teal-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
