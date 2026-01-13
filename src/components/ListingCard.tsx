import React from 'react';
import type { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

const getBadgeStyles = (badge?: string) => {
  const styles = {
    Urgente: 'bg-red-500',
    Ganga: 'bg-green-500',
    Oportunidad: 'bg-amber-500',
    Platino: 'bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800'
  };
  return badge ? styles[badge as keyof typeof styles] || 'bg-blue-500' : '';
};

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative ${listing.featured ? 'border-2 border-amber-500' : ''}`}>
      {listing.badge && (
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase z-10 text-white ${getBadgeStyles(listing.badge)}`}>
          {listing.badge}
        </span>
      )}

      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-indigo-500 to-purple-600">
          {listing.image}
        </div>
        <button className="absolute top-4 right-4 bg-white/90 border-none w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-xl transition-all hover:bg-white hover:scale-110">
          â™¡
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {listing.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">ðŸ“ {listing.location}</p>

        {listing.specs && listing.specs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {listing.specs.map((spec, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                {spec}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <p className="text-xl font-bold text-blue-600">{listing.price}</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-semibold transition-colors hover:bg-green-600">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
