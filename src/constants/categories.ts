import type { Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'vehicles', name: 'VehÃƒÂ­culos', icon: 'Ã°Å¸Å¡â€”' },
  { id: 'real-estate', name: 'Bienes RaÃƒÂ­ces', icon: 'Ã°Å¸ÂÂ ' },
  { id: 'jobs', name: 'Empleos y Servicios', icon: 'Ã°Å¸â€™Â¼' },
  { id: 'marketplace', name: 'Marketplace', icon: 'Ã°Å¸â€ºÂÃ¯Â¸Â' }
];

export const SEARCH_CATEGORIES = [
  'Todas las categorÃƒÂ­as',
  'Autos',
  'Inmuebles',
  'Empleos',
  'Servicios',
  'TecnologÃƒÂ­a',
  'Muebles',
  'Mascotas'
] as const;

export const SUBCATEGORIES = [
  'Autos Usados',
  'Autos Nuevos',
  'Motos',
  'Camiones',
  'Piezas y Accesorios',
  'Alquiler de VehÃƒÂ­culos'
] as const;
