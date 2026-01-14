import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ListingCard from './ListingCard';
import { mockListings } from '../data/mockListings';

interface ClassifiedsPageProps {
  location: string;
  onListingClick: (id: string) => void;
}

const ClassifiedsPage: React.FC<ClassifiedsPageProps> = ({ location, onListingClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Sidebar Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Botón de filtros fijo en el lado izquierdo */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-24 z-40 flex items-center justify-center p-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
        title="Abrir filtros"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Header con título y selector de ordenar */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Propiedades en {location || 'Costa Rica'}
            </h1>
            <p className="text-base text-gray-600">
              {mockListings.length} propiedades disponibles
            </p>
          </div>

          {/* Selector de ordenar */}
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 border-2 border-gray-300 rounded-lg text-sm font-semibold cursor-pointer bg-white focus:outline-none focus:border-blue-600 shadow-sm">
              <option>Más recientes</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
              <option>Más relevantes</option>
            </select>
          </div>
        </div>

        {/* Grid de propiedades - 100% de ancho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} onListingClick={onListingClick} />
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center items-center gap-2 py-8 mt-8">
          <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-lg cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow">
            ← Anterior
          </button>
          <button className="px-4 py-2 bg-blue-600 border-2 border-blue-600 text-white rounded-lg cursor-pointer text-sm font-medium shadow">
            1
          </button>
          <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-lg cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow">
            2
          </button>
          <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-lg cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow">
            3
          </button>
          <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-lg cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow">
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassifiedsPage;
