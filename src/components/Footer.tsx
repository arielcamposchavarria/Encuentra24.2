import React from 'react';

const Footer: React.FC = () => {
  const footerSections = {
    marca: ['Acerca de', 'Blog', 'Careers'],
    soporte: ['Centro de Ayuda', 'Contacto', 'FAQ'],
    clasificados: ['Autos', 'Inmuebles', 'Empleos', 'Servicios'],
    legal: ['Términos y Condiciones', 'Política de Privacidad', 'Cookies']
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Marca</h3>
            <ul className="space-y-2">
              {footerSections.marca.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Soporte Técnico</h3>
            <ul className="space-y-2">
              {footerSections.soporte.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Anuncios Clasificados</h3>
            <ul className="space-y-2">
              {footerSections.clasificados.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold text-indigo-500">
              Encuentra<span className="text-red-500">24</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 Encuentra24.com AG. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:-translate-y-1 transition-transform">📘</a>
            <a href="#" className="text-2xl hover:-translate-y-1 transition-transform">📷</a>
            <a href="#" className="text-2xl hover:-translate-y-1 transition-transform">🐦</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
