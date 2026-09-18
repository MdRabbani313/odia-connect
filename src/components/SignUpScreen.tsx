import React, { useState } from 'react';
import { ColorPalette, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AppHeader } from './AppHeader';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

interface SignUpScreenProps {
  palette: ColorPalette;
  lang: Language;
  onToggleLang?: () => void;
  onNavigateToLogin: () => void;
  onSignUpWithOtp: (name: string, identifier: string) => void;
  onShowTerms: () => void;
  onSuccessSignUp: (user: { name: string; phoneOrEmail: string }) => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  palette,
  lang,
  onToggleLang,
  onNavigateToLogin,
  onSignUpWithOtp,
  onShowTerms,
  onSuccessSignUp
}) => {
  const t = TRANSLATIONS[lang];
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError(lang === 'or' ? 'ଦୟାକରି ଆପଣଙ୍କ ପୂରା ନାମ ଲେଖନ୍ତୁ' : 'Please enter your Full Name');
      return;
    }
    if (!identifier.trim()) {
      setError(lang === 'or' ? 'ମୋବାଇଲ୍ ବା ଇମେଲ୍ ଦିଅନ୍ତୁ' : 'Please enter your Mobile Number or Email');
      return;
    }
    if (!password.trim()) {
      setError(lang === 'or' ? 'ପାସୱାର୍ଡ଼ ଦିଅନ୍ତୁ' : 'Please choose a password');
      return;
    }
    if (password !== confirmPassword) {
      setError(lang === 'or' ? 'ପାସୱାର୍ଡ଼ ମେଳ ଖାଉନାହିଁ' : 'Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setError(lang === 'or' ? 'ଦୟାକରି ନିୟମ ଓ ସର୍ତ୍ତାବଳୀରେ ସମ୍ମତ ହୁଅନ୍ତୁ' : 'Please agree to Terms & Conditions');
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      setLoading(false);
      onSuccessSignUp({
        name: fullName,
        phoneOrEmail: identifier
      });
    }, 600);
  };

  const handleOtpClick = () => {
    onSignUpWithOtp(fullName || 'Odia Citizen', identifier || '98610 24567');
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

      {/* Main Form Body */}
      <div className="flex-1 px-5 sm:px-6 py-5 flex flex-col justify-between">
        <div className="w-full">
          {/* Section Titles */}
          <div className="text-center mb-5">
            <h2 
              className="text-xl sm:text-[22px] font-bold tracking-tight mb-1"
              style={{ color: palette.text }}
            >
              {t.signUpTitle}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium">
              {t.signUpSub}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {error && (
              <div className="p-2.5 rounded-lg text-xs bg-red-50 border border-red-200 text-red-700 font-medium">
                {error}
              </div>
            )}

            {/* Input 1: Full Name */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
                <div 
                  className="mr-3 flex items-center justify-center shrink-0"
                  style={{ color: palette.secondary }}
                >
                  <User className="w-5 h-5 stroke-[2]" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder={t.fullName}
                  className="w-full bg-transparent text-sm font-medium focus:outline-hidden"
                  style={{ color: palette.text }}
                />
              </div>
            </div>

            {/* Input 2: Mobile Number / Email */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
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

            {/* Input 3: Password */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 focus:outline-hidden"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Input 4: Confirm Password */}
            <div className="relative">
              <div 
                className="flex items-center rounded-xl px-3.5 py-3 transition-all duration-200 border shadow-xs"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: '#D4DFDC'
                }}
              >
                <div 
                  className="mr-3 flex items-center justify-center shrink-0"
                  style={{ color: palette.secondary }}
                >
                  <Lock className="w-5 h-5 stroke-[2]" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder={t.confirmPassword}
                  className="w-full bg-transparent text-sm font-medium focus:outline-hidden"
                  style={{ color: palette.text }}
                />
              </div>
            </div>

            {/* Checkbox: Terms & Conditions */}
            <div className="flex items-start space-x-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded-sm border-slate-300 text-teal-700 focus:ring-teal-500 cursor-pointer"
                style={{ accentColor: palette.secondary }}
              />
              <label htmlFor="terms" className="text-xs text-slate-700 leading-snug cursor-pointer select-none">
                {t.agreeTerms}{' '}
                <button
                  type="button"
                  onClick={onShowTerms}
                  className="font-semibold hover:underline focus:outline-hidden"
                  style={{ color: palette.secondary }}
                >
                  {t.termsLink}
                </button>
                {' '}&{' '}
                <button
                  type="button"
                  onClick={onShowTerms}
                  className="font-semibold hover:underline focus:outline-hidden"
                  style={{ color: palette.secondary }}
                >
                  {t.privacyLink}
                </button>
              </label>
            </div>

            {/* Primary (Navy) Sign Up Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl text-white font-semibold text-sm sm:text-[15px] shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: palette.primary }}
              >
                <span>{loading ? 'Creating Account...' : t.signUpBtn}</span>
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="relative my-3.5 flex items-center justify-center">
            <div className="w-full border-t border-slate-300" />
            <span 
              className="absolute px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500"
              style={{ backgroundColor: palette.background }}
            >
              {t.orDivider}
            </span>
          </div>

          {/* Secondary (Teal) Sign Up with OTP Button */}
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
            <span>{t.signUpWithOtp}</span>
          </button>
        </div>

        {/* Bottom Link: Already have an account? Login */}
        <div className="pt-4 pb-2 text-center text-xs text-slate-700">
          <span>{t.alreadyHaveAccount} </span>
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="font-bold hover:underline focus:outline-hidden cursor-pointer"
            style={{ color: palette.secondary }}
          >
            {t.loginBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
