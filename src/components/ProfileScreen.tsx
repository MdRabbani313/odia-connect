import React from 'react';
import { ColorPalette, Language } from '../types';
import { AppHeader } from './AppHeader';
import { USER_DOCUMENTS, APPLICATION_TRACKERS } from '../data/mockData';
import { 
  UserCheck, 
  Download, 
  FileCheck, 
  Clock, 
  LogOut, 
  ShieldCheck, 
  ChevronRight, 
  HelpCircle, 
  Globe 
} from 'lucide-react';

interface ProfileScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang: () => void;
  onLogout: () => void;
  userName?: string;
  phoneOrEmail?: string;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  palette,
  lang,
  onToggleLang,
  onLogout,
  userName = 'Rajesh Kumar Das',
  phoneOrEmail = '98610 24567'
}) => {
  return (
    <div 
      className="flex flex-col min-h-full pb-4 transition-colors duration-300"
      style={{ backgroundColor: palette.background }}
    >
      <AppHeader palette={palette} lang={lang} onToggleLang={onToggleLang} compact />

      {/* Citizen Card Banner */}
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center space-x-3.5">
          <div 
            className="w-13 h-13 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xs shrink-0"
            style={{ backgroundColor: palette.primary }}
          >
            RK
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1.5">
              <h3 className="font-bold text-sm text-slate-900 truncate">{userName}</h3>
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            </div>
            <p className="text-xs text-slate-500 font-mono">{phoneOrEmail}</p>
            <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1 border border-emerald-200">
              Aadhaar & DigiLocker Linked
            </span>
          </div>
        </div>

        {/* Live Application Status Tracker */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {lang === 'or' ? 'ମୋ ଦରଖାସ୍ତ ସ୍ଥିତି' : 'My Application Trackers'}
            </h4>
            <span className="text-[11px] text-slate-400 font-medium">3 Active</span>
          </div>

          <div className="space-y-2">
            {APPLICATION_TRACKERS.map(app => (
              <div 
                key={app.id} 
                className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-xs space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900">{app.serviceName}</h5>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">App ID: {app.appNumber}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    app.status === 'Ready for Download' 
                      ? 'bg-emerald-100 text-emerald-800'
                      : app.status === 'Approved'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {app.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${app.progress}%`,
                      backgroundColor: app.progress === 100 ? '#10B981' : palette.secondary 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Documents in DigiLocker */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {lang === 'or' ? 'ଡିଜିଟାଲ୍ ଲକର୍ ପ୍ରମାଣପତ୍ର' : 'Verified Certificates'}
            </h4>
            <span className="text-[11px] text-teal-700 font-semibold">DigiLocker</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {USER_DOCUMENTS.map(doc => (
              <div 
                key={doc.id}
                className="p-3 rounded-xl border shadow-xs bg-white flex flex-col justify-between"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <FileCheck className="w-4 h-4 text-teal-600" />
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-sm bg-slate-100 text-slate-600">
                      {doc.category}
                    </span>
                  </div>
                  <h5 className="font-bold text-xs text-slate-800 line-clamp-1">{doc.title}</h5>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{doc.docNumber}</p>
                </div>

                <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="truncate max-w-[85px]">{doc.issuer}</span>
                  <Download className="w-3 h-3 text-slate-400 hover:text-teal-600 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings & Logout */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
          <button 
            onClick={onToggleLang}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50"
          >
            <div className="flex items-center space-x-2.5 text-slate-700 font-medium">
              <Globe className="w-4 h-4 text-teal-600" />
              <span>Language / ଭାଷା</span>
            </div>
            <span className="font-bold text-teal-700">{lang === 'en' ? 'English (ଓଡ଼ିଆ କରନ୍ତୁ)' : 'ଓଡ଼ିଆ (English)'}</span>
          </button>

          <button 
            onClick={onLogout}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-red-50 text-red-600 font-semibold"
          >
            <div className="flex items-center space-x-2.5">
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Odia Connect</span>
            </div>
            <ChevronRight className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
