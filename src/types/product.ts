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
  /** Imagem principal (frente) */
  image: string;
  /** Imagem de verso/extra — quando presente, o card troca ao passar o mouse */
  backImage?: string;
  /** Tamanhos disponíveis. Ex: ["P","M","G"] ou ["34","36","38","40","42"] */
  sizes?: string[];
  featured?: boolean;
  isNew?: boolean;
  collection?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}
