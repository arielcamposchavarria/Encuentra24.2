import { useEffect } from 'react';
import type { Listing } from '../types';
import { getListingDetail } from '../data/mockListingDetails';
import ImageGallery from './ImageGallery';
import PriceCard from './PriceCard';
import PropertyInfo from './PropertyInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';
import RelatedListings from './RelatedListings';

interface DetailPageProps {
  listingId: string;
  onBack: () => void;
  onListingClick: (id: string) => void;
  allListings: Listing[];
}

const DetailPage = ({ listingId, onBack, onListingClick, allListings }: DetailPageProps) => {
  const listingDetail = getListingDetail(listingId);

  // Scroll al inicio cuando se carga el detalle
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [listingId]);

  if (!listingDetail) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold text-red-900 mb-2">Anuncio no encontrado</h2>
          <p className="text-red-700 mb-6">
            El anuncio que buscas no está disponible o no existe en nuestra base de datos.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a los anuncios
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Barra de navegación superior */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a los anuncios
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda - Contenido principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galería de imágenes */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ImageGallery images={listingDetail.images} title={listingDetail.title} />
            </div>

            {/* Información de la propiedad */}
            <PropertyInfo listing={listingDetail} />

            {/* Mapa de ubicación */}
            <LocationMap
              city={listingDetail.locationDetails.city}
              region={listingDetail.locationDetails.region}
              address={listingDetail.locationDetails.address}
              coordinates={listingDetail.locationDetails.coordinates}
            />

            {/* Formulario de contacto */}
            <ContactForm
              listingTitle={listingDetail.title}
              sellerName={listingDetail.seller.name}
            />
          </div>

          {/* Columna derecha - Tarjeta de precio (sticky) */}
          <div className="lg:col-span-1">
            <PriceCard
              price={listingDetail.price}
              pricePerSqm={listingDetail.pricePerSqm}
              badge={listingDetail.badge}
              code={listingDetail.code}
              publishedDate={listingDetail.publishedDate}
              views={listingDetail.views}
            />
          </div>
        </div>

        {/* Anuncios relacionados */}
        <div className="mt-8">
          <RelatedListings
            currentListingId={listingDetail.id}
            listings={allListings}
            onListingClick={onListingClick}
          />
        </div>
      </div>

      {/* Barra de acciones flotante (móvil) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-20">
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar
          </button>
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </button>
        </div>
        <div className="mt-2 text-center">
          <p className="text-2xl font-bold text-gray-900">{listingDetail.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
