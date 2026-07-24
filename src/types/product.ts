export type CategorySlug =
  | "vestidos"
  | "blusas"
  | "calcas"
  | "jeans"
  | "shorts"
  | "saias"
  | "conjuntos"
  | "macacoes"
  | "casacos"
  | "fitness"
  | "praia"
  | "acessorios";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: CategorySlug;
  image: string;
  featured?: boolean;
  isNew?: boolean;
  collection?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
