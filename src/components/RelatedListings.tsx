import type { Listing } from '../types';

interface RelatedListingsProps {
  currentListingId: string;
  listings: Listing[];
  onListingClick: (id: string) => void;
}

const RelatedListings = ({ currentListingId, listings, onListingClick }: RelatedListingsProps) => {
  // Filtrar anuncios relacionados (excluyendo el actual)
  const relatedListings = listings
    .filter(listing => listing.id !== currentListingId)
    .slice(0, 4);

  if (relatedListings.length === 0) {
    return null;
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Urgente':
        return 'bg-red-500';
      case 'Ganga':
        return 'bg-green-500';
      case 'Oportunidad':
        return 'bg-orange-500';
      case 'Platino':
        return 'bg-purple-600';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Anuncios relacionados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedListings.map((listing) => (
          <div
            key={listing.id}
            onClick={() => onListingClick(listing.id)}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
          >
            {/* Imagen */}
            <div className="relative bg-gray-100 aspect-video flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <span className="text-6xl">{listing.image}</span>

              {listing.badge && (
                <div className="absolute top-2 left-2">
                  <span className={`${getBadgeColor(listing.badge)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {listing.badge}
                  </span>
                </div>
              )}

              {listing.featured && (
                <div className="absolute top-2 right-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Información */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {listing.title}
              </h3>

              <p className="text-2xl font-bold text-blue-600 mb-2">
                {listing.price}
              </p>

              <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{listing.location}</span>
              </div>

              {listing.specs && listing.specs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {listing.specs.slice(0, 3).map((spec, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Ver más anuncios */}
      <div className="mt-6 text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
          Ver más anuncios similares
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RelatedListings;
