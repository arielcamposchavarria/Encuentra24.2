import React, { useState } from 'react';

interface PublishStepThreeProps {
  propertyType: string;
  location: {
    province: string;
    canton: string;
    district: string;
    address: string;
  };
  onSubmit: (details: PropertyDetails) => void;
  onBack: () => void;
}

export interface PropertyDetails {
  transactionType: 'venta' | 'alquiler';
  price: string;
  title: string;
  description: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  amenities: string[];
  images: File[];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

const PublishStepThree: React.FC<PublishStepThreeProps> = ({ propertyType, location, onSubmit, onBack }) => {
  const [formData, setFormData] = useState<PropertyDetails>({
    transactionType: 'venta',
    price: '',
    title: '',
    description: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    amenities: [],
    images: [],
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const amenitiesList = [
    'Piscina',
    'Gimnasio',
    'Área de juegos',
    'Seguridad 24/7',
    'Ascensor',
    'Jardín',
    'Terraza',
    'Balcón',
    'Cocina equipada',
    'Aire acondicionado',
    'Calentador de agua',
    'Lavandería',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...filesArray],
      }));

      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const validateForm = () => {
    return (
      formData.title &&
      formData.description &&
      formData.price &&
      formData.area &&
      formData.contactName &&
      formData.contactPhone &&
      formData.contactEmail
    );
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
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#202d59]">Paso 3 de 3</span>
            <span className="text-sm text-gray-500">Detalles de la propiedad</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#202d59] to-[#a31e22] h-2 rounded-full" style={{ width: '100%' }}></div>
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
              <span>{location.canton}, {location.province}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Detalles</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Completa los detalles</h1>
            <p className="mt-2 text-white/80">Cuéntanos más sobre tu propiedad</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Transaction Type */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tipo de Transacción</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, transactionType: 'venta' })}
                className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                  formData.transactionType === 'venta'
                    ? 'border-[#202d59] bg-blue-50 text-[#202d59]'
                    : 'border-gray-300 text-gray-600 hover:border-[#202d59]'
                }`}
              >
                En Venta
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, transactionType: 'alquiler' })}
                className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                  formData.transactionType === 'alquiler'
                    ? 'border-[#202d59] bg-blue-50 text-[#202d59]'
                    : 'border-gray-300 text-gray-600 hover:border-[#202d59]'
                }`}
              >
                En Alquiler
              </button>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Información Básica</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-gray-900 mb-2">
                  Título del Anuncio *
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ej: Hermosa casa con jardín en zona residencial"
                  className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-bold text-gray-900 mb-2">
                  Descripción *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe tu propiedad en detalle: características, ventajas, estado, etc."
                  className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-bold text-gray-900 mb-2">
                    Precio ({formData.transactionType === 'venta' ? 'USD' : 'USD/mes'}) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0"
                      className="block w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-bold text-gray-900 mb-2">
                    Área (m²) *
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="number"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="0"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Property Features */}
          {propertyType !== 'terreno' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Características</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-bold text-gray-900 mb-2">
                    Habitaciones
                  </label>
                  <input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="0"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-bold text-gray-900 mb-2">
                    Baños
                  </label>
                  <input
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="0"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="parking" className="block text-sm font-bold text-gray-900 mb-2">
                    Parqueos
                  </label>
                  <input
                    id="parking"
                    name="parking"
                    type="number"
                    value={formData.parking}
                    onChange={handleChange}
                    placeholder="0"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Amenities */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Amenidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenitiesList.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => handleAmenityToggle(amenity)}
                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    formData.amenities.includes(amenity)
                      ? 'border-[#202d59] bg-blue-50 text-[#202d59]'
                      : 'border-gray-300 text-gray-600 hover:border-[#202d59]'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Fotografías</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="images" className="cursor-pointer">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium mb-1">Haz clic para subir imágenes</p>
                  <p className="text-sm text-gray-500">PNG, JPG hasta 10MB</p>
                </label>
              </div>

              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="contactName" className="block text-sm font-bold text-gray-900 mb-2">
                  Nombre de Contacto *
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-bold text-gray-900 mb-2">
                    Teléfono *
                  </label>
                  <input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+506 1234-5678"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-bold text-gray-900 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202d59] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center bg-white rounded-xl shadow-md p-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Atrás
            </button>
            <button
              type="submit"
              disabled={!validateForm()}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                validateForm()
                  ? 'bg-gradient-to-r from-[#202d59] to-[#a31e22] text-white hover:from-[#a31e22] hover:to-[#202d59] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishStepThree;
