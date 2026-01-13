import React from 'react';
import { mockFeatures } from '../data/mockFeatures';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Todo lo que necesitas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 text-center transition-all hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500 bg-white"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
