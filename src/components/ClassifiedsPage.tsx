import React from 'react';
import CategoryNav from './CategoryNav';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import ListingCard from './ListingCard';
import { mockListings } from '../data/mockListings';

interface ClassifiedsPageProps {
  country: string;
}

const ClassifiedsPage: React.FC<ClassifiedsPageProps> = ({ country }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CategoryNav />
      <SearchBar />

      <div className="max-w-7xl mx-auto py-8 px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Clasificados en {country}
          </h1>
          <p className="text-base text-gray-600">
            {mockListings.length} anuncios encontrados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <Sidebar />

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-gray-700">Ordenar por:</label>
                <select className="px-4 py-2 border-2 border-gray-300 rounded-md text-sm cursor-pointer bg-white focus:outline-none focus:border-blue-600">
                  <option>Más recientes</option>
                  <option>Menor precio</option>
                  <option>Mayor precio</option>
                  <option>Más relevantes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 py-8">
              <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-md cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600">
                ← Anterior
              </button>
              <button className="px-4 py-2 bg-blue-600 border-2 border-blue-600 text-white rounded-md cursor-pointer text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-md cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600">
                2
              </button>
              <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-md cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600">
                3
              </button>
              <button className="px-4 py-2 border-2 border-gray-300 bg-white rounded-md cursor-pointer text-sm font-medium transition-all text-gray-700 hover:border-blue-600 hover:text-blue-600">
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassifiedsPage;
