import React, { useState, useEffect } from 'react';

const PROPERTY_TYPES = ['Casa', 'Apartamento', 'Local', 'Oficina', 'Terreno', 'Bodega'];
const CONDITIONS = ['Nuevo', 'Usado', 'Remodelado', 'En construcción'];
const ROOMS = ['1+', '2+', '3+', '4+', '5+'];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<string>('');

  // Bloquear scroll cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handlePropertyTypeChange = (type: string) => {
    setSelectedPropertyTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleClearFilters = () => {
    setPriceRange([0, 500000]);
    setSelectedCondition([]);
    setSelectedPropertyTypes([]);
    setSelectedRooms('');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cerrar filtros"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tipo de Propiedad */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-base font-bold text-gray-800 mb-4">Tipo de Propiedad</h3>
            <div className="flex flex-col gap-3">
              {PROPERTY_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedPropertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeChange(type)}
                    className="w-4 h-4 cursor-pointer accent-blue-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rango de Precio */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-base font-bold text-gray-800 mb-4">Rango de Precio</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Mínimo"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
                />
                <span className="text-gray-600 font-semibold">-</span>
                <input
                  type="number"
                  placeholder="Máximo"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="text-xs text-gray-500">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </div>
            </div>
          </div>

          {/* Habitaciones */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-base font-bold text-gray-800 mb-4">Habitaciones</h3>
            <div className="grid grid-cols-5 gap-2">
              {ROOMS.map((room) => (
                <button
                  key={room}
                  onClick={() => setSelectedRooms(room === selectedRooms ? '' : room)}
                  className={`py-2 px-3 text-sm font-semibold rounded-lg border-2 transition-all ${
                    selectedRooms === room
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          {/* Condición */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-base font-bold text-gray-800 mb-4">Condición</h3>
            <div className="flex flex-col gap-3">
              {CONDITIONS.map((condition) => (
                <label key={condition} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedCondition.includes(condition)}
                    onChange={() => handleConditionChange(condition)}
                    className="w-4 h-4 cursor-pointer accent-blue-600"
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3 sticky bottom-0 bg-white pt-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg text-base font-semibold transition-colors hover:bg-blue-700">
              Aplicar Filtros
            </button>
            <button
              onClick={handleClearFilters}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg text-base font-semibold transition-colors hover:bg-gray-200"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
