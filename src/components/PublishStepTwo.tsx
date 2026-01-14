import React, { useState } from 'react';
import { COSTA_RICA_PROVINCES, getCantonsByProvince } from '../constants/costaRicaLocations';

interface PublishStepTwoProps {
  propertyType: string;
  onNext: (province: string, canton: string, district: string, address: string) => void;
  onBack: () => void;
}

const PublishStepTwo: React.FC<PublishStepTwoProps> = ({ propertyType, onNext, onBack }) => {
  const [province, setProvince] = useState<string>('');
  const [canton, setCanton] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const cantons = province ? getCantonsByProvince(province) : [];

  const handleNext = () => {
    if (province && canton && district && address) {
      onNext(province, canton, district, address);
    }
  };

  const getPropertyTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      apartamento: 'Apartamento',
      casa: 'Casa',
      terreno: 'Terreno',
      'local-comercial': 'Local Comercial',
      edificio: 'Edificio',
      proyecto: 'Proyecto',
    };
    return types[type] || type;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#202d59]">Paso 2 de 3</span>
            <span className="text-sm text-gray-500">Ubicación de la propiedad</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#202d59] to-[#a31e22] h-2 rounded-full" style={{ width: '66.66%' }}></div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#202d59] to-[#a31e22] px-8 py-6">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <span>{getPropertyTypeLabel(propertyType)}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Ubicación</span>
            </div>
            <h1 className="text-3xl font-bold text-white">¿Dónde está ubicada?</h1>
            <p className="mt-2 text-white/80">Ingresa la ubicación exacta de tu propiedad</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <form className="space-y-6">
            {/* Province */}
            <div>
              <label htmlFor="province" className="block text-sm font-bold text-gray-900 mb-2">
                Provincia *
              </label>
              <div className="relative">
                <select
                  id="province"
                  value={province}
                  onChange={(e) => {
                    setProvince(e.target.value);
                    setCanton('');
                    setDistrict('');
                  }}
                  className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent appearance-none bg-white transition-all"
                  required
                >
                  <option value="">Selecciona una provincia</option>
                  {COSTA_RICA_PROVINCES.map((prov) => (
                    <option key={prov.name} value={prov.name}>
                      {prov.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Canton */}
            <div>
              <label htmlFor="canton" className="block text-sm font-bold text-gray-900 mb-2">
                Cantón *
              </label>
              <div className="relative">
                <select
                  id="canton"
                  value={canton}
                  onChange={(e) => {
                    setCanton(e.target.value);
                    setDistrict('');
                  }}
                  disabled={!province}
                  className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent appearance-none bg-white transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                >
                  <option value="">Selecciona un cantón</option>
                  {cantons.map((cant) => (
                    <option key={cant} value={cant}>
                      {cant}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* District */}
            <div>
              <label htmlFor="district" className="block text-sm font-bold text-gray-900 mb-2">
                Distrito *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  id="district"
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!canton}
                  placeholder="Ej: Centro, San Pedro, etc."
                  className="block w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-bold text-gray-900 mb-2">
                Dirección Exacta *
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={!district}
                  rows={3}
                  placeholder="Ej: 200 metros norte de la iglesia católica, edificio color blanco, portón negro"
                  className="block w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Incluye referencias claras para facilitar la ubicación de tu propiedad
              </p>
            </div>

            {/* Map Preview Placeholder */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm text-gray-600">Vista previa del mapa</p>
              <p className="text-xs text-gray-500 mt-1">La ubicación se mostrará aquí una vez completes los campos</p>
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center bg-white rounded-xl shadow-md p-6">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Atrás
          </button>
          <button
            onClick={handleNext}
            disabled={!province || !canton || !district || !address}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              province && canton && district && address
                ? 'bg-gradient-to-r from-[#202d59] to-[#a31e22] text-white hover:from-[#a31e22] hover:to-[#202d59] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continuar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Consejo</h4>
              <p className="text-sm text-blue-800">
                Una dirección clara y precisa ayuda a los interesados a encontrar tu propiedad más fácilmente. Incluye referencias conocidas como iglesias, escuelas, o comercios cercanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishStepTwo;
