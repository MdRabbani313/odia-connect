import React, { useState } from 'react';
import { ColorPalette, Language, GovService } from '../types';
import { AppHeader } from './AppHeader';
import { GOV_SERVICES } from '../data/mockData';
import { Search, FileText, CheckCircle2, ChevronRight, X, Clock, AlertCircle } from 'lucide-react';

interface ServicesScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang: () => void;
  selectedService: GovService | null;
  onSelectService: (service: GovService | null) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  palette,
  lang,
  onToggleLang,
  selectedService,
  onSelectService
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const categories = [
    { id: 'all', labelEn: 'All Services', labelOr: 'ସମସ୍ତ' },
    { id: 'social', labelEn: 'Welfare & Women', labelOr: 'ସମାଜ କଲ୍ୟାଣ' },
    { id: 'farmer', labelEn: 'Agriculture', labelOr: 'କୃଷି ଓ କୃଷକ' },
    { id: 'health', labelEn: 'Health & Care', labelOr: 'ସ୍ୱାସ୍ଥ୍ୟ' },
    { id: 'revenue', labelEn: 'Revenue & Land', labelOr: 'ରାଜସ୍ୱ ଓ ପଟ୍ଟା' },
    { id: 'transport', labelEn: 'Transit & Bus', labelOr: 'ପରିବହନ' },
  ];

  const filteredServices = GOV_SERVICES.filter(srv => {
    const matchesCat = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch = srv.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          srv.nameOr.includes(searchQuery) ||
                          srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenDetail = (srv: GovService) => {
    onSelectService(srv);
    setApplyModalOpen(true);
    setApplicationSubmitted(false);
  };

  return (
    <div 
      className="flex flex-col min-h-full pb-4 transition-colors duration-300"
      style={{ backgroundColor: palette.background }}
    >
      <AppHeader palette={palette} lang={lang} onToggleLang={onToggleLang} compact />

      {/* Search Header */}
      <div className="p-4 space-y-3">
        <div 
          className="flex items-center rounded-xl px-3.5 py-2.5 border shadow-xs"
          style={{ 
            backgroundColor: palette.surface,
            borderColor: '#CBD5E1'
          }}
        >
          <Search className="w-4 h-4 mr-2" style={{ color: palette.secondary }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'or' ? 'ସରକାରୀ ଯୋଜନା ବା ସେବା ଖୋଜନ୍ତୁ...' : 'Search Odisha schemes, certificates...'}
            className="w-full text-xs font-medium bg-transparent focus:outline-hidden"
            style={{ color: palette.text }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="p-0.5 text-slate-400">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex space-x-2 overflow-x-auto custom-scrollbar pb-1 text-xs">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all text-[11px] ${
                activeCategory === cat.id 
                  ? 'text-white shadow-xs' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? palette.primary : undefined
              }}
            >
              {lang === 'or' ? cat.labelOr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>{filteredServices.length} {lang === 'or' ? 'ସେବା ଉପଲବ୍ଧ' : 'Services Available'}</span>
          <span>Official Direct Benefit (DBT)</span>
        </div>

        {filteredServices.map(srv => (
          <div
            key={srv.id}
            onClick={() => handleOpenDetail(srv)}
            className="p-3.5 rounded-xl border shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            style={{ 
              backgroundColor: palette.surface,
              borderColor: '#E2E8F0'
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <div className="flex items-center space-x-2 mb-1">
                  <span 
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                    style={{ 
                      backgroundColor: palette.cards,
                      color: palette.secondary
                    }}
                  >
                    {srv.category}
                  </span>
                  {srv.popular && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-sm bg-amber-100 text-amber-800 border border-amber-200">
                      ★ Popular
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  {lang === 'or' ? srv.nameOr : srv.nameEn}
                </h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 mt-1">
                  {srv.description}
                </p>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <div 
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs mb-1"
                  style={{ backgroundColor: palette.secondary }}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-700">{srv.fee}</span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
              <span className="truncate max-w-[190px]">{srv.dept}</span>
              <span className="flex items-center space-x-1 shrink-0">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{srv.processingDays}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail & Application Modal */}
      {applyModalOpen && selectedService && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div 
            className="w-full sm:max-w-[360px] max-h-[85%] rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl flex flex-col"
            style={{ backgroundColor: palette.surface }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: palette.cards, color: palette.secondary }}
                >
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-slate-900 leading-tight">
                    {lang === 'or' ? selectedService.nameOr : selectedService.nameEn}
                  </h3>
                  <p className="text-[10px] text-slate-500">{selectedService.dept}</p>
                </div>
              </div>
              <button 
                onClick={() => setApplyModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-600">
                  Your application for <span className="font-semibold text-slate-900">{selectedService.nameEn}</span> has been securely logged with Odisha Single Window.
                </p>
                <div className="p-3 bg-slate-100 rounded-xl text-xs font-mono text-slate-800">
                  Acknowledgement No: <span className="font-bold text-teal-800">OD-2026-APP-9428</span>
                </div>
                <button
                  onClick={() => setApplyModalOpen(false)}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-white"
                  style={{ backgroundColor: palette.primary }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="overflow-y-auto custom-scrollbar my-3 text-xs space-y-3 pr-1">
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">About the Scheme</h5>
                  <p className="text-slate-600 leading-relaxed text-[11px]">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Processing Fee</span>
                    <span className="font-bold text-emerald-700">{selectedService.fee}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Estimated Timeline</span>
                    <span className="font-bold text-slate-800">{selectedService.processingDays}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                    <span>Mandatory Documents</span>
                    <span className="text-[10px] text-teal-700 font-semibold">Auto-fetched from DigiLocker</span>
                  </h5>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {selectedService.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setApplicationSubmitted(true)}
                    className="w-full py-3 rounded-xl font-semibold text-xs text-white shadow-md active:scale-[0.99] flex items-center justify-center space-x-1.5"
                    style={{ backgroundColor: palette.primary }}
                  >
                    <span>Instant Apply via Odia Connect</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
