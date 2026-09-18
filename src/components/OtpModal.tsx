import React, { useState, useEffect } from 'react';
import { ColorPalette } from '../types';
import { ShieldCheck, X, RefreshCw, CheckCircle2 } from 'lucide-react';

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ColorPalette;
  identifier: string;
  onVerifySuccess: () => void;
}

export const OtpModal: React.FC<OtpModalProps> = ({
  isOpen,
  onClose,
  palette,
  identifier,
  onVerifySuccess
}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setOtp(['', '', '', '']);
      setTimer(30);
      setError(null);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) {
      val = val[val.length - 1];
    }
    const nextOtp = [...otp];
    nextOtp[index] = val;
    setOtp(nextOtp);
    setError(null);

    // Auto-focus next input
    if (val && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleAutoFill = () => {
    setOtp(['7', '3', '9', '2']);
    setError(null);
  };

  const handleVerify = () => {
    const entered = otp.join('');
    if (entered.length < 4) {
      setError('Please enter the 4-digit code');
      return;
    }

    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      onVerifySuccess();
    }, 600);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-[340px] rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transition-all"
        style={{ backgroundColor: palette.surface }}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: palette.cards, color: palette.secondary }}
            >
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">OTP Verification</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 mt-1">
          We have sent a 4-digit verification code to <span className="font-semibold text-slate-900">{identifier}</span>
        </p>

        {/* 4 Digit Boxes */}
        <div className="flex justify-center space-x-3 my-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-input-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className="w-12 h-12 text-center text-xl font-bold rounded-xl border-2 transition-all focus:outline-hidden"
              style={{
                borderColor: digit ? palette.secondary : '#E2E8F0',
                backgroundColor: digit ? palette.cards : '#F8FAFC',
                color: palette.text
              }}
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-xs text-red-600 font-medium mb-3">{error}</p>
        )}

        {/* Resend & Demo Button */}
        <div className="flex items-center justify-between text-xs mb-5">
          <button
            type="button"
            onClick={handleAutoFill}
            className="text-[11px] font-semibold px-2 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
          >
            Auto-fill demo (7392)
          </button>

          {timer > 0 ? (
            <span className="text-slate-400">Resend in <span className="font-semibold text-slate-700">{timer}s</span></span>
          ) : (
            <button
              type="button"
              onClick={() => setTimer(30)}
              className="font-semibold flex items-center space-x-1 hover:underline"
              style={{ color: palette.secondary }}
            >
              <RefreshCw className="w-3 h-3" />
              <span>Resend OTP</span>
            </button>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={handleVerify}
          disabled={verifying}
          className="w-full py-3 rounded-xl text-white font-semibold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center space-x-2"
          style={{ backgroundColor: palette.primary }}
        >
          {verifying ? (
            <span>Verifying...</span>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify & Continue</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
