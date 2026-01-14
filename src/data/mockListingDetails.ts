import type { ListingDetail } from '../types';

export const mockListingDetails: Record<string, ListingDetail> = {
  // Casa en Condominio
  '5': {
    id: '5',
    title: 'Venta de casa en condominio Milenia en Tambor de Alajuela',
    price: '₡66,000,000',
    pricePerSqm: '₡868,421/m²',
    location: 'Tambor, Alajuela',
    category: 'property',
    propertyType: 'casa',
    badge: 'Oportunidad',
    featured: true,
    images: [
      '🏠', '🏡', '🏘️', '🏗️', '🌳', '🏊', '🏋️', '🎾',
      '🛏️', '🛁', '🍳', '🪟', '🚪', '🌄', '🌅', '🏞️',
      '🏖️', '🌺', '🌴', '☀️'
    ],
    basicInfo: {
      bedrooms: 2,
      bathrooms: 2.5,
      area: '76 m²',
      parkingSpots: 2,
      yearBuilt: 2024,
      condition: 'Nuevo',
    },
    description: `Condominio Milenia es un exclusivo desarrollo residencial ubicado en Tambor de Alajuela, diseñado para brindar comodidad, seguridad y un estilo de vida integral a sus residentes.

Este proyecto ofrece tres modelos de casas: Olivo, Almendro y Cerezo, cada uno con características únicas adaptadas a diferentes necesidades familiares.

CARACTERÍSTICAS DESTACADAS:
• Diseño moderno y funcional
• Construcción con acabados de alta calidad
• Amplios espacios iluminados naturalmente
• Cocina integral con muebles incluidos
• Sistema de seguridad 24/7

El condominio cuenta con amenidades de primera clase que incluyen piscina, casa club, gimnasio completamente equipado, áreas verdes, parque para mascotas y áreas de recreación familiar.

Ubicación estratégica con fácil acceso a principales vías, centros comerciales, hospitales y zonas educativas. Perfecto para familias que buscan tranquilidad sin alejarse de la ciudad.

ETAPA ACTUAL: 2/4 Preventa
¡Aprovecha precios de lanzamiento!`,
    features: [
      'Seguridad 24 horas',
      'Piscina',
      'Casa club',
      'Gimnasio completamente equipado',
      'Parque para mascotas',
      'Áreas verdes',
      'Zona de BBQ',
      'Juegos infantiles',
      'Portón eléctrico',
      'Estacionamiento techado para 2 vehículos',
      'Calentador de agua',
      'Cocina con muebles',
      'Closets en habitaciones',
      'Piso en porcelanato',
      'Ventanas de aluminio y vidrio',
    ],
    seller: {
      name: 'Constructora Consultoría Mar Azul',
      type: 'Inmobiliaria',
      image: '🏢',
      memberSince: 'Enero 2018',
      verified: true,
    },
    locationDetails: {
      address: 'Condominio Milenia, Tambor',
      city: 'Tambor',
      region: 'Alajuela',
      coordinates: {
        lat: 10.0458,
        lng: -84.2558,
      },
    },
    publishedDate: '2026-01-10',
    views: 1247,
    code: '30460543',
  },

  // Apartamento en Escazú
  '2': {
    id: '2',
    title: 'Apartamento de lujo en Escazú con vista panorámica',
    price: '$250,000',
    pricePerSqm: '$1,666/m²',
    location: 'Escazú, San José',
    category: 'property',
    propertyType: 'apartamento',
    badge: 'Platino',
    featured: true,
    images: [
      '🏢', '🌆', '🏙️', '🌃', '🛏️', '🛁', '🍳', '🛋️',
      '🪟', '🌅', '🌄', '🏊', '🏋️', '🎾', '🚗', '🔒'
    ],
    basicInfo: {
      bedrooms: 3,
      bathrooms: 2,
      area: '150 m²',
      parkingSpots: 2,
      floors: 1,
      yearBuilt: 2020,
      condition: 'Usado',
    },
    description: `Espectacular apartamento en una de las zonas más exclusivas de Escazú. Ofrece vistas panorámicas impresionantes de la ciudad y las montañas.

CARACTERÍSTICAS DEL APARTAMENTO:
• Sala de estar amplia con balcón
• Comedor formal
• Cocina moderna con electrodomésticos de acero inoxidable
• Habitación principal con baño privado y walk-in closet
• 2 habitaciones secundarias con closets empotrados
• Baño completo para visitas
• Cuarto de pilas independiente
• Piso en porcelanato de alta calidad
• Ventanas de piso a techo con excelente iluminación natural

AMENIDADES DEL EDIFICIO:
• Lobby con recepción 24/7
• Piscina infinity con área lounge
• Gimnasio equipado
• Salón de eventos
• Área de BBQ
• 2 espacios de parqueo techado
• Bodega privada

A pocos minutos de centros comerciales, restaurantes, hospitales y principales avenidas.`,
    features: [
      'Seguridad 24/7',
      'Piscina infinity',
      'Gimnasio',
      'Salón de eventos',
      'Área de BBQ',
      '2 parqueos techados',
      'Bodega',
      'Ascensor',
      'Cocina integral',
      'Electrodomésticos incluidos',
      'Aire acondicionado central',
      'Calentador de agua',
      'Vista panorámica',
      'Balcón amplio',
      'Walk-in closet',
    ],
    seller: {
      name: 'Bienes Raíces Premium',
      type: 'Inmobiliaria',
      image: '🏢',
      memberSince: 'Julio 2015',
      verified: true,
    },
    locationDetails: {
      address: 'Torre Vista Hermosa, Escazú',
      city: 'Escazú',
      region: 'San José',
      coordinates: {
        lat: 9.9189,
        lng: -84.1369,
      },
    },
    publishedDate: '2026-01-05',
    views: 2134,
    code: 'PROP567890',
  },

  // Casa de playa
  '10': {
    id: '10',
    title: 'Casa de playa en Guanacaste con piscina',
    price: '$380,000',
    pricePerSqm: '$1,520/m²',
    location: 'Tamarindo, Guanacaste',
    category: 'property',
    propertyType: 'casa',
    badge: 'Platino',
    images: [
      '🏖️', '🌊', '🏠', '🌴', '🏊', '☀️', '🌅', '🛏️',
      '🛁', '🍳', '🏝️', '🦜', '🐠', '⛱️', '🏄', '🌺'
    ],
    basicInfo: {
      bedrooms: 4,
      bathrooms: 3,
      area: '250 m²',
      parkingSpots: 3,
      floors: 2,
      yearBuilt: 2019,
      condition: 'Usado',
    },
    description: `Hermosa casa de playa ubicada en la prestigiosa zona de Tamarindo, Guanacaste. Perfecta para disfrutar del clima tropical y el estilo de vida playero.

CARACTERÍSTICAS PRINCIPALES:
• Diseño tropical moderno
• Vista al mar desde terraza
• Piscina privada con área de descanso
• Jardín tropical con árboles frutales
• Construcción de alta calidad
• A solo 200 metros de la playa

DISTRIBUCIÓN:
• Sala de estar con vista panorámica
• Comedor con capacidad para 8 personas
• Cocina equipada con barra desayunador
• 4 habitaciones amplias con closets
• Habitación principal con baño privado y terraza
• 2 baños completos adicionales
• Terraza techada para BBQ
• Cuarto de servicio independiente

UBICACIÓN PRIVILEGIADA:
• 200m de la playa
• Cerca de restaurantes y tiendas
• Acceso a rutas de surf
• Zona segura y tranquila
• Ideal para renta vacacional

¡Una oportunidad única de tener tu casa en el paraíso!`,
    features: [
      'Piscina privada',
      'Vista al mar',
      'Jardín tropical',
      'Terraza techada',
      'BBQ integrado',
      'Aire acondicionado',
      'Ventiladores de techo',
      'Cocina equipada',
      'Cuarto de servicio',
      'Parqueo para 3 vehículos',
      'Sistema de agua potable',
      'Tanque de reserva',
      'Portón eléctrico',
      'Muro perimetral',
      'Iluminación exterior',
    ],
    seller: {
      name: 'Pacific Coast Realty',
      type: 'Inmobiliaria',
      image: '🏢',
      memberSince: 'Abril 2012',
      verified: true,
    },
    locationDetails: {
      address: 'Playa Tamarindo, sector residencial',
      city: 'Tamarindo',
      region: 'Guanacaste',
      coordinates: {
        lat: 10.2995,
        lng: -85.8382,
      },
    },
    publishedDate: '2026-01-12',
    views: 3421,
    code: 'PROP102030',
  },
};

// Función helper para obtener detalles por ID
export const getListingDetail = (id: string): ListingDetail | undefined => {
  return mockListingDetails[id];
};
