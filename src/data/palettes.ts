import { ColorPalette } from '../types';

export const PALETTES: Record<string, ColorPalette> = {
  official: {
    id: 'official',
    name: '1. Official & Trustworthy',
    tagline: 'Recommended for Odisha Government Citizen Portal',
    recommended: true,
    bestFor: 'Govt services, jobs, education & healthcare',
    primary: '#0A2F5C',      // Deep Navy
    secondary: '#0D7377',    // Emerald Teal
    accent: '#E8B923',       // Royal Gold
    background: '#F8F5F0',   // Warm Ivory Off-white
    surface: '#FFFFFF',      // Pure White Card/Inputs
    cards: '#E8F4F3',        // Soft Mint Surface
    text: '#1A1A1A',         // Rich Charcoal Black
  },
  cultural: {
    id: 'cultural',
    name: '2. Cultural Heritage',
    tagline: 'Rooted in Jagannath culture, terracotta & temple architecture',
    recommended: false,
    bestFor: 'Tourism, culture & strong Odia identity',
    primary: '#8B1E1E',      // Heritage Crimson Red
    secondary: '#1C1C1C',    // Deep Charcoal
    accent: '#D4A017',       // Antique Temple Gold
    background: '#F9F3E9',   // Warm Parchment
    surface: '#FFFFFF',
    cards: '#F0E6D2',        // Muted Terracotta Tint
    support: '#C45C26',      // Earth Clay
    text: '#1A1A1A',
  },
  nature: {
    id: 'nature',
    name: '3. Nature & Prosperity',
    tagline: 'Inspired by Chilika Lake, Similipal forests & coastal wealth',
    recommended: false,
    bestFor: 'Everyday use, agriculture & tourism feel',
    primary: '#1B5E4B',      // Forest Green
    secondary: '#8B5E3C',    // Earth Bark
    accent: '#E2B13C',       // Sunlight Yellow
    background: '#F2F7F4',   // Fresh Sage Tint
    surface: '#FFFFFF',
    cards: '#F5EDE4',        // Wheat Harvest Surface
    support: '#4A9B8C',      // Lagoon Teal
    text: '#1A1A1A',
  }
};
