interface LocationMapProps {
  city: string;
  region: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const LocationMap = ({ city, region, address, coordinates }: LocationMapProps) => {
  // Esta es una representación mockup del mapa
  // En producción, aquí se integraría Google Maps, Mapbox, o Leaflet

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Ubicación
      </h2>

      {/* Información de ubicación */}
      <div className="mb-4 space-y-2">
        {address && (
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div>
              <p className="text-sm text-gray-600">Dirección</p>
              <p className="font-semibold text-gray-900">{address}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Ciudad y Región</p>
            <p className="font-semibold text-gray-900">{city}, {region}</p>
          </div>
        </div>

        {coordinates && (
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div>
              <p className="text-sm text-gray-600">Coordenadas</p>
              <p className="font-mono text-sm text-gray-900">
                {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mockup del mapa */}
      <div className="relative bg-gradient-to-br from-green-100 via-blue-100 to-green-200 rounded-lg overflow-hidden aspect-video">
        {/* Simulación de calles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 right-0 h-1 bg-white/50"></div>
          <div className="absolute top-2/3 left-0 right-0 h-1 bg-white/50"></div>
          <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-white/50"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-white/50"></div>
        </div>

        {/* Pin de ubicación */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <div className="relative animate-bounce">
            <svg className="w-12 h-12 text-red-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Controles del mapa (mockup) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="bg-white p-2 rounded shadow-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="bg-white p-2 rounded shadow-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
        </div>

        {/* Indicador de mockup */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          Vista de mapa - Integración pendiente
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Ver en mapa completo
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cómo llegar
        </button>
      </div>

      {/* Nota sobre integración */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-900">
          <span className="font-semibold">Nota de desarrollo:</span> Este es un mockup visual.
          Para integrar un mapa real, se puede usar Google Maps API, Mapbox, o Leaflet con OpenStreetMap.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
