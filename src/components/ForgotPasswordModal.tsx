import React, { useState } from 'react';
import { ColorPalette } from '../types';
import { KeyRound, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ColorPalette;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  palette
}) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-[340px] rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transition-all"
        style={{ backgroundColor: palette.surface }}
      >
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: palette.cards, color: palette.secondary }}
            >
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Reset Password</h3>
          </div>
          <button 
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Reset Link Sent</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We have sent password recovery instructions and a secure link to <span className="font-semibold text-slate-900">{phoneOrEmail}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full mt-3 py-2.5 rounded-xl font-semibold text-xs text-white"
              style={{ backgroundColor: palette.primary }}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <p className="text-xs text-slate-600">
              Enter your registered mobile number or email address associated with your Odia Citizen account.
            </p>

            <div 
              className="flex items-center rounded-xl px-3.5 py-3 border"
              style={{ borderColor: '#D4DFDC', backgroundColor: '#F8FAFC' }}
            >
              <input
                type="text"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder="Mobile Number / Email"
                required
                className="w-full bg-transparent text-sm focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold text-xs shadow-md active:scale-[0.99] flex items-center justify-center space-x-1.5"
              style={{ backgroundColor: palette.primary }}
            >
              <span>Send Reset Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
