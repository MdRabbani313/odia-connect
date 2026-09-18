import React, { useState } from 'react';
import { ColorPalette, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AppHeader } from './AppHeader';
import { Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface LoginScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang?: () => void;
  onNavigateToSignUp: () => void;
  onLoginWithOtp: (identifier: string) => void;
  onForgotPassword: () => void;
  onSuccessLogin: (user: { name: string; phoneOrEmail: string }) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  palette,
  lang,
  onToggleLang,
  onNavigateToSignUp,
  onLoginWithOtp,
  onForgotPassword,
  onSuccessLogin
}) => {
  const t = TRANSLATIONS[lang];
  const [identifier, setIdentifier] = useState('98610 24567');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError(lang === 'or' ? 'ମୋବାଇଲ୍ ବା ଇମେଲ୍ ଦିଅନ୍ତୁ' : 'Please enter your Mobile Number or Email');
      return;
    }
    if (!password.trim()) {
      setError(lang === 'or' ? 'ପାସୱାର୍ଡ଼ ଦିଅନ୍ତୁ' : 'Please enter your password');
      return;
    }

    setLoading(true);
    setError(null);

    // Smooth feedback
    setTimeout(() => {
      setLoading(false);
      onSuccessLogin({
        name: 'Rajesh Kumar Das',
        phoneOrEmail: identifier
      });
    }, 600);
  };

  const handleOtpClick = () => {
    onLoginWithOtp(identifier || '98610 24567');
  };

  return (
    <div 
      className="flex flex-col min-h-full transition-colors duration-300"
      style={{ backgroundColor: palette.background }}
    >
      {/* Signature Odia Connect Header */}
      <AppHeader 
        palette={palette} 
        lang={lang} 
        onToggleLang={onToggleLang} 
      />

      {/* Main Content Card / Form Body */}
      <div className="flex-1 px-5 sm:px-6 py-6 flex flex-col justify-between">
        <div className="w-full">
          {/* Section Titles */}
          <div className="text-center mb-6">
            <h2 
              className="text-xl sm:text-[22px] font-bold tracking-tight mb-1"
              style={{ color: palette.text }}
            >
              {t.welcomeBack}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium">
              {t.loginSub}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-2.5 rounded-lg text-xs bg-red-50 border border-red-200 text-red-700 font-medium">
                {error}
              </div>
            )}

            {/* Input 1: Mobile Number / Email */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
                {/* Secondary (Teal) Icon */}
                <div 
                  className="mr-3 flex items-center justify-center shrink-0"
                  style={{ color: palette.secondary }}
                >
                  {identifier.includes('@') ? (
                    <Mail className="w-5 h-5 stroke-[2]" />
                  ) : (
                    <Phone className="w-5 h-5 stroke-[2]" />
                  )}
                </div>

                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder={t.mobileOrEmail}
                  className="w-full bg-transparent text-sm font-medium focus:outline-hidden"
                  style={{ color: palette.text }}
                />
              </div>
            </div>

            {/* Input 2: Password */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
                {/* Secondary (Teal) Icon */}
                <div 
                  className="mr-3 flex items-center justify-center shrink-0"
                  style={{ color: palette.secondary }}
                >
                  <Lock className="w-5 h-5 stroke-[2]" />
                </div>

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder={t.password}
                  className="w-full bg-transparent text-sm font-medium focus:outline-hidden"
                  style={{ color: palette.text }}
                />

                {/* Password Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 focus:outline-hidden"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-xs font-semibold hover:underline focus:outline-hidden transition-colors"
                style={{ color: palette.secondary }}
              >
                {t.forgotPassword}
              </button>
            </div>

            {/* Primary (Navy) Login Button with Accent (Gold) decorative bar */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full relative py-3.5 px-4 rounded-xl text-white font-semibold text-sm sm:text-[15px] shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex flex-col items-center justify-center cursor-pointer"
                style={{ backgroundColor: palette.primary }}
              >
                <span>{loading ? 'Logging in...' : t.loginBtn}</span>
                {/* Subtle gold decorative underline on login button matching design */}
                <div 
                  className="w-12 h-[2.5px] rounded-full mt-1 transition-colors"
                  style={{ backgroundColor: palette.accent }}
                />
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="w-full border-t border-slate-300" />
            <span 
              className="absolute px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500"
              style={{ backgroundColor: palette.background }}
            >
              {t.orDivider}
            </span>
          </div>

          {/* Secondary (Teal) Login with OTP Button */}
          <button
            type="button"
            onClick={handleOtpClick}
            className="w-full py-3 px-4 rounded-xl font-semibold text-sm sm:text-[15px] transition-all border-2 active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer shadow-2xs hover:bg-teal-50/50"
            style={{ 
              borderColor: palette.secondary,
              color: palette.secondary,
              backgroundColor: palette.surface
            }}
          >
            <span>{t.loginWithOtp}</span>
          </button>
        </div>

        {/* Bottom Link: New User? Create Account */}
        <div className="pt-6 pb-2 text-center text-xs text-slate-700">
          <span>{t.newUser} </span>
          <button
            type="button"
            onClick={onNavigateToSignUp}
            className="font-bold hover:underline focus:outline-hidden cursor-pointer"
            style={{ color: palette.secondary }}
          >
            {t.createAccount}
          </button>
        </div>
      </div>
    </div>
  );
};
