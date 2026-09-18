import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';
import { ColorPalette } from '../types';

interface PhoneFrameProps {
  children: React.ReactNode;
  palette: ColorPalette;
  time?: string;
  battery?: string;
  deviceType?: 'iphone' | 'android' | 'minimal';
  className?: string;
  titleBadge?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  palette,
  time = '9:41',
  battery = '100%',
  deviceType = 'iphone',
  className = '',
  titleBadge
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {titleBadge && (
        <div className="mb-2.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-800/80 border border-slate-700/60 shadow-xs">
          {titleBadge}
        </div>
      )}
      
      {/* Mobile chassis */}
      <div 
        className="relative w-[360px] sm:w-[390px] h-[780px] max-h-[92vh] rounded-[44px] p-3 shadow-2xl transition-all duration-300 flex flex-col"
        style={{
          backgroundColor: '#0F172A',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 4px #1E293B, 0 0 0 6px #0F172A'
        }}
      >
        {/* Physical buttons simulation */}
        <div className="absolute -left-[7px] top-[110px] w-[3px] h-[30px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[7px] top-[155px] w-[3px] h-[48px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[7px] top-[215px] w-[3px] h-[48px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[7px] top-[160px] w-[3px] h-[64px] bg-slate-700 rounded-r-sm" />

        {/* Screen inner wrapper */}
        <div 
          className="relative w-full h-full rounded-[36px] overflow-hidden flex flex-col select-none"
          style={{ backgroundColor: palette.background }}
        >
          {/* Status Bar */}
          <div 
            className="w-full px-6 pt-3 pb-1 flex items-center justify-between text-xs font-semibold z-30 shrink-0 transition-colors duration-200"
            style={{ 
              backgroundColor: palette.primary,
              color: '#FFFFFF'
            }}
          >
            {/* Clock */}
            <span className="tracking-tight text-white/95 font-medium">{time}</span>

            {/* Dynamic Island / Notch capsule */}
            {deviceType === 'iphone' && (
              <div className="w-24 h-4 bg-black/40 rounded-full mx-auto backdrop-blur-xs flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400/40" />
              </div>
            )}

            {/* Status Icons */}
            <div className="flex items-center space-x-1.5 text-white/95">
              <Signal className="w-3.5 h-3.5 stroke-[2.2]" />
              <Wifi className="w-3.5 h-3.5 stroke-[2.2]" />
              <span className="text-[11px] font-semibold tracking-tighter ml-0.5">{battery}</span>
              <BatteryMedium className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative flex-1 overflow-y-auto custom-scrollbar flex flex-col">
            {children}
          </div>

          {/* Home Indicator bar */}
          <div 
            className="w-full py-1.5 flex justify-center items-center z-30 shrink-0"
            style={{ backgroundColor: palette.background }}
          >
            <div className="w-32 h-1 rounded-full bg-slate-400/50" />
          </div>
        </div>
      </div>
    </div>
  );
};
