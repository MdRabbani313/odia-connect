import React from 'react';
import { ColorPalette } from '../types';
import { Shield, X, Check } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ColorPalette;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, palette }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-[350px] max-h-[80%] rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl flex flex-col"
        style={{ backgroundColor: palette.surface }}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-teal-700" />
            <h3 className="font-bold text-sm text-slate-900">Terms & Privacy Policy</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto custom-scrollbar my-4 text-xs text-slate-600 space-y-3 leading-relaxed pr-1">
          <p className="font-semibold text-slate-800">
            Government of Odisha — Odia Connect Citizen Platform
          </p>
          <p>
            1. <strong>Purpose:</strong> Odia Connect provides unified digital access to welfare schemes, certificates, temple rituals, and civic services across Odisha.
          </p>
          <p>
            2. <strong>Data Privacy:</strong> Your Aadhaar, land records, and welfare data are encrypted in accordance with the Digital Personal Data Protection Act and Odisha IT guidelines.
          </p>
          <p>
            3. <strong>Identity Verification:</strong> Mobile OTP and biometric credentials ensure that welfare incentives directly reach authorized beneficiaries without intermediaries.
          </p>
          <p>
            4. <strong>Mo Sarkar:</strong> All interactions on this portal are tracked under the 5T Mo Sarkar initiative for quality governance, transparency, and timely delivery.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl font-semibold text-xs text-white flex items-center justify-center space-x-1.5"
          style={{ backgroundColor: palette.primary }}
        >
          <Check className="w-4 h-4" />
          <span>I Understand & Accept</span>
        </button>
      </div>
    </div>
  );
};
