import React from 'react';
import { getProvinceNames } from '../constants/costaRicaLocations';

interface CountryCardsProps {
  onCountrySelect: (province: string, canton?: string) => void;
}

const provinceGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
];

const CountryCards: React.FC<CountryCardsProps> = ({ onCountrySelect }) => {
  const provinces = getProvinceNames();

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explora por provincia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {provinces.map((province, index) => (
            <div
              key={province}
              className="py-10 px-6 rounded-2xl text-center cursor-pointer transition-transform hover:-translate-y-2 shadow-lg hover:shadow-2xl text-white"
              style={{ background: provinceGradients[index % provinceGradients.length] }}
              onClick={() => onCountrySelect(province)}
            >
              <h3 className="text-2xl font-bold mb-4">{province}</h3>
              <p className="text-5xl font-extrabold mb-2">250+</p>
              <p className="text-base opacity-95">ofertas disponibles</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
