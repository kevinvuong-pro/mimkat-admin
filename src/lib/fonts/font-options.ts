export const fontOptions = [
  { key: 'inter', label: 'Inter', variable: '--font-inter' },
  { key: 'roboto', label: 'Roboto', variable: '--font-roboto' },
  { key: 'poppins', label: 'Poppins', variable: '--font-poppins' },
  { key: 'geist', label: 'Geist', variable: '--font-geist' },
  { key: 'geistMono', label: 'Geist Mono', variable: '--font-geist-mono' },
  { key: 'jakarta', label: 'Plus Jakarta Sans', variable: '--font-jakarta' },
  { key: 'nunito', label: 'Nunito', variable: '--font-nunito' },
  { key: 'gabriela', label: 'Gabriela', variable: '--font-gabriela' },
  { key: 'outfit', label: 'Outfit', variable: '--font-outfit' },
  { key: 'manrope', label: 'Manrope', variable: '--font-manrope' },
  { key: 'dmSans', label: 'DM Sans', variable: '--font-dm-sans' },
  { key: 'greatVibes', label: 'Great Vibes', variable: '--font-great-vibes' },
] as const;

export type FontKey = (typeof fontOptions)[number]['key'];
