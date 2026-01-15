import React, { useState } from 'react';
import { getProvinceNames } from '../constants/costaRicaLocations';

interface CountryCardsProps {
  onCountrySelect: (province: string, canton?: string) => void;
}

// Paleta de colores basada en la imagen proporcionada
const cardColorSchemes = [
  {
    // Rojo - #a31e22
    from: '#a31e22',
    via: '#c42b2f',
    to: '#8b1a1d',
    hoverFrom: '#8b1a1d',
    hoverVia: '#a31e22',
    hoverTo: '#c42b2f',
  },
  {
    // Azul oscuro - #202d59
    from: '#202d59',
    via: '#2a3a6e',
    to: '#1a2447',
    hoverFrom: '#1a2447',
    hoverVia: '#202d59',
    hoverTo: '#2a3a6e',
  },
  {
    // Cyan - #00cfe5
    from: '#00cfe5',
    via: '#00b8cc',
    to: '#00e5ff',
    hoverFrom: '#00e5ff',
    hoverVia: '#00cfe5',
    hoverTo: '#00b8cc',
  },
  {
    // Beige/Arena - #c3b3a2
    from: '#c3b3a2',
    via: '#d4c4b3',
    to: '#b2a291',
    hoverFrom: '#b2a291',
    hoverVia: '#c3b3a2',
    hoverTo: '#d4c4b3',
  },
  {
    // Rojo + Azul
    from: '#a31e22',
    via: '#5c2640',
    to: '#202d59',
    hoverFrom: '#202d59',
    hoverVia: '#5c2640',
    hoverTo: '#a31e22',
  },
  {
    // Azul + Cyan
    from: '#202d59',
    via: '#107085',
    to: '#00cfe5',
    hoverFrom: '#00cfe5',
    hoverVia: '#107085',
    hoverTo: '#202d59',
  },
  {
    // Cyan + Rojo
    from: '#00cfe5',
    via: '#6f8a8a',
    to: '#a31e22',
    hoverFrom: '#a31e22',
    hoverVia: '#6f8a8a',
    hoverTo: '#00cfe5',
  },
];

interface ProvinceCardProps {
  province: string;
  colorScheme: typeof cardColorSchemes[0];
  onClick: () => void;
}

const ProvinceCard: React.FC<ProvinceCardProps> = ({ province, colorScheme, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradientStyle = {
    background: isHovered
      ? `linear-gradient(135deg, ${colorScheme.hoverFrom} 0%, ${colorScheme.hoverVia} 50%, ${colorScheme.hoverTo} 100%)`
      : `linear-gradient(135deg, ${colorScheme.from} 0%, ${colorScheme.via} 50%, ${colorScheme.to} 100%)`,
    backgroundSize: '200% 200%',
    animation: isHovered ? 'gradientShift 2s ease infinite' : 'none',
    transition: 'all 0.5s ease',
  };

  return (
    <div
      className="py-10 px-6 rounded-2xl text-center cursor-pointer shadow-lg hover:shadow-2xl text-white transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
      style={gradientStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-bold mb-4 drop-shadow-md">{province}</h3>
      <p className="text-5xl font-extrabold mb-2 drop-shadow-lg">250+</p>
      <p className="text-base opacity-95 drop-shadow">ofertas disponibles</p>
    </div>
  );
};

const CountryCards: React.FC<CountryCardsProps> = ({ onCountrySelect }) => {
  const provinces = getProvinceNames();

  return (
    <section className="py-16 px-8 bg-gray-50">
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explora por provincia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {provinces.map((province, index) => (
            <ProvinceCard
              key={province}
              province={province}
              colorScheme={cardColorSchemes[index % cardColorSchemes.length]}
              onClick={() => onCountrySelect(province)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
