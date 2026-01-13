import React, { useState } from 'react';
import { SUBCATEGORIES } from '../constants/categories';

const CONDITIONS = ['Nuevo', 'Usado', 'Certificado'];

const Sidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  return (
    <aside className="bg-white rounded-xl p-6 shadow-md sticky top-24 h-fit">
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h3 className="text-base font-bold text-gray-800 mb-4">Subcategorías</h3>
        <ul className="space-y-2">
          {SUBCATEGORIES.map((sub) => (
            <li key={sub}>
              <a href="#" className="text-gray-600 text-sm transition-colors hover:text-blue-600 block py-1">
                {sub}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 pb-6 border-b border-gray-200">
        <h3 className="text-base font-bold text-gray-800 mb-4">Condición</h3>
        <div className="flex flex-col gap-3">
          {CONDITIONS.map((condition) => (
            <label key={condition} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
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

      <div className="mb-6">
        <h3 className="text-base font-bold text-gray-800 mb-4">Rango de Precio</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Mínimo"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="flex-1 px-2 py-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
          />
          <span className="text-gray-600 font-semibold">-</span>
          <input
            type="number"
            placeholder="Máximo"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="flex-1 px-2 py-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-600"
          />
        </div>
      </div>

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg text-base font-semibold transition-colors hover:bg-blue-700 mb-3">
        Aplicar Filtros
      </button>
      <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg text-base font-semibold transition-colors hover:bg-gray-200">
        Limpiar Filtros
      </button>
    </aside>
  );
};

export default Sidebar;
