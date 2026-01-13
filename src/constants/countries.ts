export const COUNTRIES = [
  'Costa Rica',
  'El Salvador',
  'Guatemala',
  'Honduras',
  'Nicaragua',
  'Panamá',
  'República Dominicana',
  'Ecuador',
  'Colombia'
] as const;

export type CountryName = typeof COUNTRIES[number];
