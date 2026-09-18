import React, { useState } from 'react';
import { ColorPaletteId, ActiveScreen, Language, GovService } from './types';
import { PALETTES } from './data/palettes';
import { PhoneFrame } from './components/PhoneFrame';
import { LoginScreen } from './components/LoginScreen';
import { SignUpScreen } from './components/SignUpScreen';
import { HomeScreen } from './components/HomeScreen';
import { ServicesScreen } from './components/ServicesScreen';
import { CultureScreen } from './components/CultureScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNav } from './components/BottomNav';
import { OtpModal } from './components/OtpModal';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { TermsModal } from './components/TermsModal';
import { PaletteReviewBar } from './components/PaletteReviewBar';
import { CheckCircle, Info, Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [paletteId, setPaletteId] = useState<ColorPaletteId>('official');
  const [viewMode, setViewMode] = useState<'side-by-side' | 'interactive'>('side-by-side');
  const [lang, setLang] = useState<Language>('en');

  // Interactive app state
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('login');
  const [user, setUser] = useState<{ name: string; phoneOrEmail: string } | null>(null);

  // Modals
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otpIdentifier, setOtpIdentifier] = useState('98610 24567');
  const [otpSource, setOtpSource] = useState<'login' | 'signup'>('login');
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<GovService | null>(null);

  const currentPalette = PALETTES[paletteId];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'or' : 'en'));
  };

  const handleLoginSuccess = (userData: { name: string; phoneOrEmail: string }) => {
    setUser(userData);
    setActiveScreen('home');
  };

  const handleSignUpSuccess = (userData: { name: string; phoneOrEmail: string }) => {
    setUser(userData);
    setActiveScreen('home');
  };

  const handleTriggerOtp = (identifier: string, source: 'login' | 'signup') => {
    setOtpIdentifier(identifier || '98610 24567');
    setOtpSource(source);
    setOtpModalOpen(true);
  };

  const handleOtpVerified = () => {
    setOtpModalOpen(false);
    setUser({
      name: otpSource === 'signup' ? 'Odia Citizen' : 'Rajesh Kumar Das',
      phoneOrEmail: otpIdentifier
    });
    setActiveScreen('home');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveScreen('login');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      {/* Top Review & Palette Control Bar */}
      <PaletteReviewBar
        currentPalette={currentPalette}
        onSelectPalette={setPaletteId}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center justify-center">
        {/* Color Usage Spec Legend Card (Matching Client Brief) */}
        <div className="w-full max-w-4xl mb-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="font-bold text-sm text-white">
                Color Usage in Screen Guidelines
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-[11px] text-slate-400">
              <span>Selected Theme: <strong className="text-white">{currentPalette.name}</strong></span>
              <span>•</span>
              <span className="italic">{currentPalette.bestFor}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
            {/* Primary */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.primary }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Primary (Navy)</span>
                <span className="text-[10px] text-slate-400 block truncate">Header, Login button</span>
              </div>
            </div>

            {/* Secondary */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.secondary }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Secondary (Teal)</span>
                <span className="text-[10px] text-slate-400 block truncate">Links, OTP button, icons</span>
              </div>
            </div>

            {/* Accent */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.accent }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Accent (Gold)</span>
                <span className="text-[10px] text-slate-400 block truncate">Under-header line</span>
              </div>
            </div>

            {/* Background */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.background }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Background</span>
                <span className="text-[10px] text-slate-400 block truncate">Main screen canvas</span>
              </div>
            </div>

            {/* Surface */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.surface }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Surface</span>
                <span className="text-[10px] text-slate-400 block truncate">Input fields & cards</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex items-center space-x-2.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
              <div 
                className="w-7 h-7 rounded-lg shrink-0 border border-white/20 shadow-xs"
                style={{ backgroundColor: currentPalette.text }}
              />
              <div className="min-w-0">
                <span className="font-bold text-white block truncate">Text</span>
                <span className="text-[10px] text-slate-400 block truncate">Headings & body text</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Mode 1: SIDE-BY-SIDE MOCKUP VIEW (Matches attached client review mockups) */}
        {viewMode === 'side-by-side' ? (
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Client Review Preview — Login & Sign Up Screens
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-lg mx-auto">
                Exact translation of design specification sheet with active inputs, password visibility toggle, OTP modal, and authentic Odisha branding.
              </p>
            </div>

            {/* Side-by-Side Phone Frames */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
              {/* Phone 1: LOGIN SCREEN */}
              <div className="flex flex-col items-center">
                <PhoneFrame 
                  palette={currentPalette} 
                  titleBadge="LOGIN SCREEN"
                >
                  <LoginScreen
                    palette={currentPalette}
                    lang={lang}
                    onToggleLang={toggleLanguage}
                    onNavigateToSignUp={() => {
                      // In side-by-side mode, you can highlight or switch to interactive
                      setViewMode('interactive');
                      setActiveScreen('signup');
                    }}
                    onLoginWithOtp={(id) => handleTriggerOtp(id, 'login')}
                    onForgotPassword={() => setForgotModalOpen(true)}
                    onSuccessLogin={(u) => {
                      setUser(u);
                      setViewMode('interactive');
                      setActiveScreen('home');
                    }}
                  />
                </PhoneFrame>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => {
                      setViewMode('interactive');
                      setActiveScreen('login');
                    }}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 underline"
                  >
                    Interact with Login in Single Device Mode →
                  </button>
                </div>
              </div>

              {/* Phone 2: SIGN UP SCREEN */}
              <div className="flex flex-col items-center">
                <PhoneFrame 
                  palette={currentPalette} 
                  titleBadge="SIGN UP SCREEN"
                >
                  <SignUpScreen
                    palette={currentPalette}
                    lang={lang}
                    onToggleLang={toggleLanguage}
                    onNavigateToLogin={() => {
                      setViewMode('interactive');
                      setActiveScreen('login');
                    }}
                    onSignUpWithOtp={(name, id) => handleTriggerOtp(id, 'signup')}
                    onShowTerms={() => setTermsModalOpen(true)}
                    onSuccessSignUp={(u) => {
                      setUser(u);
                      setViewMode('interactive');
                      setActiveScreen('home');
                    }}
                  />
                </PhoneFrame>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => {
                      setViewMode('interactive');
                      setActiveScreen('signup');
                    }}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 underline"
                  >
                    Interact with Sign Up in Single Device Mode →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: SINGLE INTERACTIVE PHONE APP */
          <div className="flex flex-col items-center w-full">
            <div className="text-center mb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-teal-400">
                Interactive Citizen Experience
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {activeScreen === 'login' && 'Login Screen'}
                {activeScreen === 'signup' && 'Sign Up Screen'}
                {activeScreen === 'home' && 'Citizen Dashboard'}
                {activeScreen === 'services' && 'Odisha Services Directory'}
                {activeScreen === 'culture' && 'Panjika & Culture'}
                {activeScreen === 'profile' && 'Citizen Identity & Locker'}
              </h3>
            </div>

            {/* Phone Screen Container */}
            <div className="relative">
              <PhoneFrame palette={currentPalette}>
                <div className="flex flex-col h-full justify-between">
                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {activeScreen === 'login' && (
                      <LoginScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                        onNavigateToSignUp={() => setActiveScreen('signup')}
                        onLoginWithOtp={(id) => handleTriggerOtp(id, 'login')}
                        onForgotPassword={() => setForgotModalOpen(true)}
                        onSuccessLogin={handleLoginSuccess}
                      />
                    )}

                    {activeScreen === 'signup' && (
                      <SignUpScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                        onNavigateToLogin={() => setActiveScreen('login')}
                        onSignUpWithOtp={(name, id) => handleTriggerOtp(id, 'signup')}
                        onShowTerms={() => setTermsModalOpen(true)}
                        onSuccessSignUp={handleSignUpSuccess}
                      />
                    )}

                    {activeScreen === 'home' && (
                      <HomeScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                        onSelectService={(srv) => {
                          setSelectedService(srv);
                          setActiveScreen('services');
                        }}
                        onNavigateTab={setActiveScreen}
                        userName={user?.name || 'Rajesh Kumar Das'}
                      />
                    )}

                    {activeScreen === 'services' && (
                      <ServicesScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                        selectedService={selectedService}
                        onSelectService={setSelectedService}
                      />
                    )}

                    {activeScreen === 'culture' && (
                      <CultureScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                      />
                    )}

                    {activeScreen === 'profile' && (
                      <ProfileScreen
                        palette={currentPalette}
                        lang={lang}
                        onToggleLang={toggleLanguage}
                        onLogout={handleLogout}
                        userName={user?.name || 'Rajesh Kumar Das'}
                        phoneOrEmail={user?.phoneOrEmail || '98610 24567'}
                      />
                    )}
                  </div>

                  {/* Show bottom navigation bar when inside authenticated citizen portal */}
                  {activeScreen !== 'login' && activeScreen !== 'signup' && (
                    <BottomNav
                      currentScreen={activeScreen}
                      onSelectScreen={setActiveScreen}
                      palette={currentPalette}
                      lang={lang}
                    />
                  )}
                </div>
              </PhoneFrame>
            </div>

            {/* Quick Screen Jump Buttons for Reviewers */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-md">
              <span className="w-full text-center text-[11px] text-slate-500 font-medium mb-1">
                Quick Screen Switcher:
              </span>
              <button
                onClick={() => setActiveScreen('login')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'login'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                1. Login Screen
              </button>
              <button
                onClick={() => setActiveScreen('signup')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'signup'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                2. Sign Up Screen
              </button>
              <button
                onClick={() => {
                  if (!user) setUser({ name: 'Rajesh Kumar Das', phoneOrEmail: '98610 24567' });
                  setActiveScreen('home');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'home'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                3. Citizen Dashboard
              </button>
              <button
                onClick={() => setActiveScreen('services')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'services'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                4. Govt Services
              </button>
              <button
                onClick={() => setActiveScreen('culture')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'culture'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                5. Odia Panjika
              </button>
              <button
                onClick={() => setActiveScreen('profile')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeScreen === 'profile'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                6. Citizen ID & Locker
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Interactive Modals */}
      <OtpModal
        isOpen={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        palette={currentPalette}
        identifier={otpIdentifier}
        onVerifySuccess={handleOtpVerified}
      />

      <ForgotPasswordModal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
        palette={currentPalette}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        palette={currentPalette}
      />
    </div>
  );
}
