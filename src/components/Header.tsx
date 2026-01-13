import React, { useState } from 'react';
import { COUNTRIES } from '../constants/countries';

interface HeaderProps {
  onCountrySelect: (country: string) => void;
  onLogoClick: () => void;
  selectedCountry: string;
}

const Header: React.FC<HeaderProps> = ({ onCountrySelect, onLogoClick, selectedCountry }) => {
  const [language, setLanguage] = useState('ES');

  return (
    <header className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={onLogoClick}>
            <span className="text-3xl font-bold text-blue-600">
              Encuentra<span className="text-red-500">24</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-lg text-base cursor-pointer bg-white transition-colors hover:border-blue-600 focus:outline-none focus:border-blue-600"
            value={selectedCountry}
            onChange={(e) => onCountrySelect(e.target.value)}
          >
            <option value="">Selecciona un paÃ­s</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 transition-colors ${
                language === 'ES' ? 'text-blue-600 font-semibold' : 'text-gray-500'
              } hover:text-blue-600`}
              onClick={() => setLanguage('ES')}
            >
              ES
            </button>
            <span className="text-gray-300">|</span>
            <button
              className={`px-2 py-1 transition-colors ${
                language === 'EN' ? 'text-blue-600 font-semibold' : 'text-gray-500'
              } hover:text-blue-600`}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-base font-medium transition-colors hover:bg-blue-700">
            Iniciar SesiÃ³n
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
