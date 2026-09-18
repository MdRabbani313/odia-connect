export type ColorPaletteId = 'official' | 'cultural' | 'nature';

export interface ColorPalette {
  id: ColorPaletteId;
  name: string;
  tagline: string;
  recommended?: boolean;
  bestFor: string;
  primary: string;       // Navy #0A2F5C or Crimson #8B1E1E or Green #1B5E4B
  secondary: string;     // Teal #0D7377 or Charcoal #1C1C1C or Ochre #8B5E3C
  accent: string;        // Gold #E8B923 or Gold #D4A017 or Gold #E2B13C
  background: string;    // #F8F5F0 or #F9F3E9 or #F2F7F4
  surface: string;       // #FFFFFF
  cards: string;         // #E8F4F3 or #F0E6D2 or #F5EDE4
  text: string;          // #1A1A1A
  support?: string;
}

export type ActiveScreen = 'login' | 'signup' | 'home' | 'services' | 'culture' | 'profile';

export type Language = 'en' | 'or'; // English or Odia (ଓଡ଼ିଆ)

export interface GovService {
  id: string;
  nameEn: string;
  nameOr: string;
  category: 'health' | 'farmer' | 'social' | 'revenue' | 'transport' | 'education';
  dept: string;
  description: string;
  fee: string;
  processingDays: string;
  documents: string[];
  popular?: boolean;
  onlineLink?: string;
}

export interface PanjikaInfo {
  dateEn: string;
  tithiEn: string;
  tithiOr: string;
  paksha: string;
  odiaMonth: string;
  nakshatra: string;
  sunrise: string;
  sunset: string;
  auspiciousTime: string;
  inauspiciousTime: string;
  festival?: string;
  festivalOr?: string;
}

export interface CitizenDocument {
  id: string;
  title: string;
  docNumber: string;
  issuer: string;
  issueDate: string;
  verified: boolean;
  category: string;
}

export interface ApplicationTracker {
  id: string;
  serviceName: string;
  appNumber: string;
  appliedDate: string;
  status: 'Submitted' | 'Under Scrutiny' | 'Field Verification' | 'Approved' | 'Ready for Download';
  dept: string;
  progress: number;
}
