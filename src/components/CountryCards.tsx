import React from 'react';
import { mockCountries } from '../data/mockCountries';

interface CountryCardsProps {
  onCountrySelect: (country: string) => void;
}

const CountryCards: React.FC<CountryCardsProps> = ({ onCountrySelect }) => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explora por país
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCountries.map((country) => (
            <div
              key={country.name}
              className="py-10 px-6 rounded-2xl text-center cursor-pointer transition-transform hover:-translate-y-2 shadow-lg hover:shadow-2xl text-white"
              style={{ background: country.gradient }}
              onClick={() => onCountrySelect(country.name)}
            >
              <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
              <p className="text-5xl font-extrabold mb-2">{country.offers}</p>
              <p className="text-base opacity-95">ofertas disponibles</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
