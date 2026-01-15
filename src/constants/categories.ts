import type { Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'vehicles', name: 'Vehículos', icon: '🚗' },
  { id: 'real-estate', name: 'Bienes Raíces', icon: '🏠' },
  { id: 'jobs', name: 'Empleos y Servicios', icon: '💼' },
  { id: 'marketplace', name: 'Marketplace', icon: '🛍️' }
];

export const SEARCH_CATEGORIES = [
  'Todas las categorías',
 
  'Inmuebles'
  
] as const;

export const SUBCATEGORIES = [
  'Autos Usados',
  'Autos Nuevos',
  'Motos',
  'Camiones',
  'Piezas y Accesorios',
  'Alquiler de Vehículos'
] as const;
