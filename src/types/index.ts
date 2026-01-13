export type Country = {
  name: string;
  offers: string;
  gradient: string;
}

export type Listing = {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  featured?: boolean;
  badge?: 'Urgente' | 'Ganga' | 'Oportunidad' | 'Platino';
  specs?: string[];
}

export type Category = {
  id: string;
  name: string;
  icon: string;
}

export type Feature = {
  title: string;
  description: string;
  icon: string;
}
