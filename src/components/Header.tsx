import React, { useState } from 'react';
import { COSTA_RICA_PROVINCES, getCantonsByProvince } from '../constants/costaRicaLocations';

interface HeaderProps {
  onLocationSelect: (province: string, canton?: string) => void;
  onLogoClick: () => void;
  selectedProvince: string;
  selectedCanton?: string;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLocationSelect, onLogoClick, selectedProvince, selectedCanton, showSearch = false }) => {
  const [language, setLanguage] = useState('ES');
  const [searchText, setSearchText] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);

  const getLocationLabel = () => {
    if (selectedCanton && selectedProvince) {
      return `${selectedCanton}, ${selectedProvince}`;
    }
    if (selectedProvince) {
      return selectedProvince;
    }
    return 'Ubicación';
  };

  const handleProvinceClick = (provinceName: string) => {
    if (expandedProvince === provinceName) {
      // Si ya está expandida, la colapsamos
      setExpandedProvince(null);
    } else {
      // Expandimos esta provincia
      setExpandedProvince(provinceName);
    }
  };

  const handleCantonClick = (provinceName: string, cantonName: string) => {
    onLocationSelect(provinceName, cantonName);
    setShowLocationDropdown(false);
    setExpandedProvince(null);
  };

  const handleProvinceSelect = (provinceName: string) => {
    onLocationSelect(provinceName);
    setShowLocationDropdown(false);
    setExpandedProvince(null);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Barra superior unificada */}
      <div className="border-b border-gray-200">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4">
            {/* Logo - completamente a la izquierda */}
            <div className="cursor-pointer flex-shrink-0" onClick={onLogoClick}>
              <span className="text-xl sm:text-2xl font-bold text-blue-600">
                Encuentra<span className="text-red-500">24</span>
              </span>
            </div>

            {/* Barra de búsqueda compacta en el centro */}
            {showSearch && (
              <div className="flex-1 flex items-center gap-2 max-w-2xl">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="hidden md:block w-40 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Ubicación"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="hidden sm:inline text-sm">Buscar</span>
                </button>
              </div>
            )}

            {/* Controles derecha */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Selector de ubicación (Provincias/Cantones) */}
              <div className="relative">
                <button
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  className="flex items-center gap-1 px-2 py-2 border border-gray-300 rounded-lg text-sm cursor-pointer bg-white transition-colors hover:border-blue-600 focus:outline-none focus:border-blue-600"
                  title={getLocationLabel()}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="hidden lg:inline text-gray-700 font-medium max-w-[150px] truncate">
                    {getLocationLabel()}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showLocationDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => {
                        setShowLocationDropdown(false);
                        setExpandedProvince(null);
                      }}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-96 overflow-y-auto">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            onLocationSelect('');
                            setShowLocationDropdown(false);
                            setExpandedProvince(null);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${!selectedProvince ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'}`}
                        >
                          Todas las ubicaciones
                        </button>

                        {COSTA_RICA_PROVINCES.map((province) => (
                          <div key={province.name}>
                            <div className="flex items-center justify-between hover:bg-gray-50">
                              <button
                                onClick={() => handleProvinceSelect(province.name)}
                                className={`flex-1 text-left px-4 py-2 text-sm ${selectedProvince === province.name && !selectedCanton ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'}`}
                              >
                                {province.name}
                              </button>
                              <button
                                onClick={() => handleProvinceClick(province.name)}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                              >
                                <svg
                                  className={`w-4 h-4 transition-transform ${expandedProvince === province.name ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>

                            {expandedProvince === province.name && (
                              <div className="bg-gray-50 border-l-2 border-blue-600 ml-4">
                                {getCantonsByProvince(province.name).map((canton) => (
                                  <button
                                    key={canton}
                                    onClick={() => handleCantonClick(province.name, canton)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                      selectedProvince === province.name && selectedCanton === canton
                                        ? 'bg-blue-100 text-blue-600 font-semibold'
                                        : 'text-gray-600'
                                    }`}
                                  >
                                    {canton}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="hidden sm:flex items-center gap-2">
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

              <button className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors hover:bg-blue-700">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
