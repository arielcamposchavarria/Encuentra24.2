import React, { useState } from 'react';
import { SEARCH_CATEGORIES } from '../constants/categories';

const SearchBar: React.FC = () => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className="bg-gray-50 py-6 px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">CategorÃ­a</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors bg-white focus:outline-none focus:border-blue-600"
            >
              <option value="">Seleccionar categorÃ­a</option>
              {SEARCH_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Palabras clave</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Â¿QuÃ© estÃ¡s buscando?"
              className="px-3 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">RegiÃ³n</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="UbicaciÃ³n"
              className="px-3 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-600"
            />
          </div>

          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold transition-colors hover:bg-blue-700 flex items-center justify-center gap-2 whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
