import React, { useState } from 'react';
import { COSTA_RICA_PROVINCES, getCantonsByProvince } from '../constants/costaRicaLocations';

interface HeaderProps {
  onLocationSelect: (province: string, canton?: string) => void;
  onLogoClick: () => void;
  selectedProvince: string;
  selectedCanton?: string;
  showSearch?: boolean;
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
  onPublishClick?: () => void;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({
  onLocationSelect,
  onLogoClick,
  selectedProvince,
  selectedCanton,
  showSearch = false,
  isAuthenticated = false,
  onLoginClick,
  onPublishClick,
  userName
}) => {
  const [language, setLanguage] = useState('ES');
  const [searchText, setSearchText] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
              <img
                src="/cccbrlogo.png"
                alt="CCCBR"
                className="h-10 sm:h-12 w-auto object-contain"
              />
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
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
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
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  />
                </div>

                <button className="px-4 py-2 bg-[#202d59] text-white rounded-lg font-medium hover:bg-[#a31e22] transition-colors flex items-center gap-1.5 shadow-sm flex-shrink-0">
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
                  className="flex items-center gap-1 px-2 py-2 border border-gray-300 rounded-lg text-sm cursor-pointer bg-white transition-colors hover:border-[#202d59] focus:outline-none focus:border-[#202d59]"
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
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${!selectedProvince ? 'bg-[#00cfe5]/10 text-[#202d59] font-semibold' : 'text-gray-700'}`}
                        >
                          Todas las ubicaciones
                        </button>

                        {COSTA_RICA_PROVINCES.map((province) => (
                          <div key={province.name}>
                            <div className="flex items-center justify-between hover:bg-gray-50">
                              <button
                                onClick={() => handleProvinceSelect(province.name)}
                                className={`flex-1 text-left px-4 py-2 text-sm ${selectedProvince === province.name && !selectedCanton ? 'bg-[#00cfe5]/10 text-[#202d59] font-semibold' : 'text-gray-700'}`}
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
                              <div className="bg-gray-50 border-l-2 border-[#202d59] ml-4">
                                {getCantonsByProvince(province.name).map((canton) => (
                                  <button
                                    key={canton}
                                    onClick={() => handleCantonClick(province.name, canton)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                      selectedProvince === province.name && selectedCanton === canton
                                        ? 'bg-[#00cfe5]/20 text-[#202d59] font-semibold'
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
                    language === 'ES' ? 'text-[#202d59] font-semibold' : 'text-gray-500'
                  } hover:text-[#202d59]`}
                  onClick={() => setLanguage('ES')}
                >
                  ES
                </button>
                <span className="text-gray-300">|</span>
                <button
                  className={`px-2 py-1 transition-colors ${
                    language === 'EN' ? 'text-[#202d59] font-semibold' : 'text-gray-500'
                  } hover:text-[#202d59]`}
                  onClick={() => setLanguage('EN')}
                >
                  EN
                </button>
              </div>

              {isAuthenticated ? (
                <>
                  <button
                    onClick={onPublishClick}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#202d59] to-[#a31e22] text-white rounded-lg text-sm font-semibold transition-all hover:from-[#a31e22] hover:to-[#202d59] shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Publicar
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-[#202d59] to-[#a31e22] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {userName?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showUserMenu && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setShowUserMenu(false)}
                        />
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                          <div className="px-4 py-3 border-b border-gray-200">
                            <p className="text-sm font-semibold text-gray-900">{userName || 'Usuario'}</p>
                            <p className="text-xs text-gray-500 mt-1">Miembro activo</p>
                          </div>
                          <div className="py-1">
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              Mi Perfil
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              Mis Publicaciones
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              Favoritos
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Configuración
                            </button>
                          </div>
                          <div className="border-t border-gray-200">
                            <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              Cerrar Sesión
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="hidden sm:block px-4 py-2 bg-[#202d59] text-white rounded-lg text-sm font-medium transition-colors hover:bg-[#a31e22]"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
