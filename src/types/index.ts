export type Country = {
  name: string;
  offers: string;
  gradient: string;
}

export type Listing = {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  featured?: boolean;
  badge?: 'Urgente' | 'Ganga' | 'Oportunidad' | 'Platino';
  specs?: string[];
  category: 'property';
  propertyType?: 'casa' | 'apartamento' | 'local' | 'oficina' | 'terreno' | 'bodega';
}

export type ListingDetail = {
  id: string;
  title: string;
  price: string;
  pricePerSqm?: string;
  location: string;
  category: 'property';
  propertyType: 'casa' | 'apartamento' | 'local' | 'oficina' | 'terreno' | 'bodega';
  featured?: boolean;
  badge?: 'Urgente' | 'Ganga' | 'Oportunidad' | 'Platino';

  // Galería de imágenes
  images: string[];

  // Información básica
  basicInfo: {
    bedrooms?: number;
    bathrooms?: number;
    area: string;
    parkingSpots?: number;
    floors?: number;
    yearBuilt?: number;
    condition?: 'Nuevo' | 'Usado' | 'Remodelado' | 'En construcción';
  };

  // Descripción completa
  description: string;

  // Características/Amenidades
  features: string[];

  // Información del vendedor
  seller: {
    name: string;
    type: 'Particular' | 'Empresa' | 'Inmobiliaria';
    image?: string;
    memberSince?: string;
    verified?: boolean;
  };

  // Ubicación
  locationDetails: {
    address?: string;
    city: string;
    region: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };

  // Metadata
  publishedDate: string;
  views?: number;
  code?: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
}

export type Feature = {
  title: string;
  description: string;
  icon: string;
}
