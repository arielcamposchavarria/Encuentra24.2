export const COUNTRIES = [
  'Costa Rica',
  'El Salvador',
  'Guatemala',
  'Honduras',
  'Nicaragua',
  'PanamÃƒÂ¡',
  'RepÃƒÂºblica Dominicana',
  'Ecuador',
  'Colombia'
] as const;

export type CountryName = typeof COUNTRIES[number];
