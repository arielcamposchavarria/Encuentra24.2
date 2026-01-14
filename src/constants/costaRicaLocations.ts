export interface Canton {
  name: string;
}

export interface Province {
  name: string;
  cantons: Canton[];
}

export const COSTA_RICA_PROVINCES: Province[] = [
  {
    name: 'San José',
    cantons: [
      { name: 'San José' },
      { name: 'Escazú' },
      { name: 'Desamparados' },
      { name: 'Puriscal' },
      { name: 'Tarrazú' },
      { name: 'Aserrí' },
      { name: 'Mora' },
      { name: 'Goicoechea' },
      { name: 'Santa Ana' },
      { name: 'Alajuelita' },
      { name: 'Vázquez de Coronado' },
      { name: 'Acosta' },
      { name: 'Tibás' },
      { name: 'Moravia' },
      { name: 'Montes de Oca' },
      { name: 'Turrubares' },
      { name: 'Dota' },
      { name: 'Curridabat' },
      { name: 'Pérez Zeledón' },
      { name: 'León Cortés Castro' }
    ]
  },
  {
    name: 'Alajuela',
    cantons: [
      { name: 'Alajuela' },
      { name: 'San Ramón' },
      { name: 'Grecia' },
      { name: 'San Mateo' },
      { name: 'Atenas' },
      { name: 'Naranjo' },
      { name: 'Palmares' },
      { name: 'Poás' },
      { name: 'Orotina' },
      { name: 'San Carlos' },
      { name: 'Zarcero' },
      { name: 'Sarchí' },
      { name: 'Upala' },
      { name: 'Los Chiles' },
      { name: 'Guatuso' },
      { name: 'Río Cuarto' }
    ]
  },
  {
    name: 'Cartago',
    cantons: [
      { name: 'Cartago' },
      { name: 'Paraíso' },
      { name: 'La Unión' },
      { name: 'Jiménez' },
      { name: 'Turrialba' },
      { name: 'Alvarado' },
      { name: 'Oreamuno' },
      { name: 'El Guarco' }
    ]
  },
  {
    name: 'Heredia',
    cantons: [
      { name: 'Heredia' },
      { name: 'Barva' },
      { name: 'Santo Domingo' },
      { name: 'Santa Bárbara' },
      { name: 'San Rafael' },
      { name: 'San Isidro' },
      { name: 'Belén' },
      { name: 'Flores' },
      { name: 'San Pablo' },
      { name: 'Sarapiquí' }
    ]
  },
  {
    name: 'Guanacaste',
    cantons: [
      { name: 'Liberia' },
      { name: 'Nicoya' },
      { name: 'Santa Cruz' },
      { name: 'Bagaces' },
      { name: 'Carrillo' },
      { name: 'Cañas' },
      { name: 'Abangares' },
      { name: 'Tilarán' },
      { name: 'Nandayure' },
      { name: 'La Cruz' },
      { name: 'Hojancha' }
    ]
  },
  {
    name: 'Puntarenas',
    cantons: [
      { name: 'Puntarenas' },
      { name: 'Esparza' },
      { name: 'Buenos Aires' },
      { name: 'Montes de Oro' },
      { name: 'Osa' },
      { name: 'Quepos' },
      { name: 'Golfito' },
      { name: 'Coto Brus' },
      { name: 'Parrita' },
      { name: 'Corredores' },
      { name: 'Garabito' }
    ]
  },
  {
    name: 'Limón',
    cantons: [
      { name: 'Limón' },
      { name: 'Pococí' },
      { name: 'Siquirres' },
      { name: 'Talamanca' },
      { name: 'Matina' },
      { name: 'Guácimo' }
    ]
  }
];

export const getProvinceNames = (): string[] => {
  return COSTA_RICA_PROVINCES.map(province => province.name);
};

export const getCantonsByProvince = (provinceName: string): string[] => {
  const province = COSTA_RICA_PROVINCES.find(p => p.name === provinceName);
  return province ? province.cantons.map(canton => canton.name) : [];
};
