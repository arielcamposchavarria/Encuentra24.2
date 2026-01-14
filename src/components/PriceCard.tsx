interface PriceCardProps {
  price: string;
  pricePerSqm?: string;
  badge?: 'Urgente' | 'Ganga' | 'Oportunidad' | 'Platino';
  code?: string;
  publishedDate: string;
  views?: number;
}

const PriceCard = ({ price, pricePerSqm, badge, code, publishedDate, views }: PriceCardProps) => {
  const getBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case 'Urgente':
        return 'bg-red-500';
      case 'Ganga':
        return 'bg-green-500';
      case 'Oportunidad':
        return 'bg-orange-500';
      case 'Platino':
        return 'bg-purple-600';
      default:
        return 'bg-blue-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      {/* Badge */}
      {badge && (
        <div className="mb-4">
          <span className={`${getBadgeColor(badge)} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block`}>
            {badge}
          </span>
        </div>
      )}

      {/* Precio */}
      <div className="mb-6">
        <p className="text-4xl font-bold text-gray-900 mb-2">{price}</p>
        {pricePerSqm && (
          <p className="text-gray-600 text-sm">{pricePerSqm}</p>
        )}
      </div>

      {/* Botones de acción principales */}
      <div className="space-y-3 mb-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Llamar
        </button>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </button>

        <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Enviar mensaje
        </button>
      </div>

      {/* Botones secundarios */}
      <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b">
        <button className="flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Guardar
        </button>

        <button className="flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Compartir
        </button>
      </div>

      {/* Información adicional */}
      <div className="space-y-3 text-sm text-gray-600">
        {code && (
          <div className="flex justify-between">
            <span>Código:</span>
            <span className="font-semibold text-gray-900">{code}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Publicado:</span>
          <span className="font-semibold text-gray-900">{formatDate(publishedDate)}</span>
        </div>

        {views && (
          <div className="flex justify-between items-center">
            <span>Visto:</span>
            <span className="font-semibold text-gray-900 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {views.toLocaleString()} veces
            </span>
          </div>
        )}
      </div>

      {/* Advertencia de seguridad */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex gap-2">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="text-xs text-yellow-800">
            <p className="font-semibold mb-1">Consejos de seguridad</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>No envíes dinero por adelantado</li>
              <li>Inspecciona el artículo antes de comprar</li>
              <li>Reúnete en lugares públicos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
