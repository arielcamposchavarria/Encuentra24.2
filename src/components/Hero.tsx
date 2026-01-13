import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 py-16 px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Encuentra anuncios de bienes de consumo, autos, inmuebles, empleos y más
        </h1>

        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <div className="relative flex-1 flex items-center">
            <svg className="absolute left-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg text-base text-gray-800 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="¿Qué estás buscando?"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="relative flex-1 flex items-center">
            <svg className="absolute left-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg text-base text-gray-800 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Ubicación"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button className="py-3 px-10 bg-red-500 text-white rounded-lg text-base font-semibold transition-colors hover:bg-red-600 whitespace-nowrap">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
