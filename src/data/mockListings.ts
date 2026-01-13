import type { Listing } from '../types';

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Toyota Corolla 2020',
    price: '$18,500',
    location: 'San José',
    image: '🚗',
    badge: 'Urgente',
    specs: ['2020', 'Automático', 'Gasolina', '45,000 km']
  },
  {
    id: '2',
    title: 'Apartamento en Escazú',
    price: '$250,000',
    location: 'Escazú',
    image: '🏢',
    badge: 'Platino',
    featured: true,
    specs: ['150 m²', '3 hab', '2 baños']
  },
  {
    id: '3',
    title: 'iPhone 14 Pro',
    price: '$950',
    location: 'San José Centro',
    image: '📱',
    badge: 'Ganga',
    specs: ['128GB', 'Como nuevo']
  },
  {
    id: '4',
    title: 'Honda CRV 2019',
    price: '$25,000',
    location: 'Heredia',
    image: '🚙',
    specs: ['2019', 'Automático', '60,000 km']
  },
  {
    id: '5',
    title: 'Casa en Cartago',
    price: '$180,000',
    location: 'Cartago Centro',
    image: '🏠',
    badge: 'Oportunidad',
    specs: ['200 m²', '4 hab', '3 baños']
  },
  {
    id: '6',
    title: 'MacBook Pro M2',
    price: '$1,800',
    location: 'San José',
    image: '💻',
    specs: ['16GB RAM', '512GB SSD', '2023']
  },
  {
    id: '7',
    title: 'Mazda 3 2021',
    price: '$22,000',
    location: 'Alajuela',
    image: '🚗',
    specs: ['2021', 'Manual', '30,000 km']
  },
  {
    id: '8',
    title: 'Oficina en Santa Ana',
    price: '$120,000',
    location: 'Santa Ana',
    image: '🏢',
    featured: true,
    specs: ['80 m²', 'Amueblada']
  },
  {
    id: '9',
    title: 'PlayStation 5',
    price: '$550',
    location: 'San José',
    image: '🎮',
    badge: 'Ganga',
    specs: ['Nueva', 'Con 2 controles']
  }
];
