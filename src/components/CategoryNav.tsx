import React, { useState } from 'react';
import { CATEGORIES } from '../constants/categories';

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <nav className="bg-white border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto flex gap-2 px-8 overflow-x-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`flex items-center gap-2 px-6 py-4 border-b-3 transition-all font-medium whitespace-nowrap ${
              activeCategory === category.id
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="font-semibold">{category.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
