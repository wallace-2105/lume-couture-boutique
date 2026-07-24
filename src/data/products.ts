import type { Category, Product } from "@/types/product";

const img = (seed: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const categories: Category[] = [
  { slug: "vestidos", name: "Vestidos", tagline: "Silhuetas atemporais", image: img("1595777457583-95e059d581b8") },
  { slug: "blusas", name: "Blusas", tagline: "Delicadeza no essencial", image: img("1564257577-2d3f9c2fa07f") },
  { slug: "calcas", name: "Calças", tagline: "Alfaiataria contemporânea", image: img("1594633312681-425c7b97ccd1") },
  { slug: "jeans", name: "Jeans", tagline: "O denim reinventado", image: img("1541099649105-f69ad21f3246") },
  { slug: "shorts", name: "Shorts", tagline: "Leveza e movimento", image: img("1591195853828-11db59a44f6b") },
  { slug: "saias", name: "Saias", tagline: "Fluidez feminina", image: img("1583496661160-fb5886a13d44") },
  { slug: "conjuntos", name: "Conjuntos", tagline: "Look completo", image: img("1490481651871-ab68de25d43d") },
  { slug: "macacoes", name: "Macacões", tagline: "Praticidade elegante", image: img("1618932260643-eee4a2f652a6") },
  { slug: "casacos", name: "Casacos", tagline: "Camadas sofisticadas", image: img("1544441893-675973e31985") },
  { slug: "fitness", name: "Moda Fitness", tagline: "Performance com estilo", image: img("1518310383802-640c2de311b2") },
  { slug: "praia", name: "Moda Praia", tagline: "Sol, mar e LUME", image: img("1570976447640-ac859d963c5c") },
  { slug: "acessorios", name: "Acessórios", tagline: "O detalhe faz o luxo", image: img("1611085583191-a3b181a88401") },
];

export const products: Product[] = [
  { id: "p1", name: "Vestido Bordeaux Longo", price: 489.9, category: "vestidos", image: img("1595777457583-95e059d581b8"), featured: true, isNew: true, collection: true },
  { id: "p2", name: "Vestido Midi Seda", price: 359.9, category: "vestidos", image: img("1566174053879-31528523f8ae"), featured: true },
  { id: "p3", name: "Vestido Slip Acetinado", price: 289.9, category: "vestidos", image: img("1572804013309-59a88b7e92f1"), isNew: true },
  { id: "p4", name: "Blusa Elegance Cetim", price: 199.9, category: "blusas", image: img("1564257631407-4deb1f99d992"), featured: true },
  { id: "p5", name: "Camisa Alfaiataria Cru", price: 229.9, category: "blusas", image: img("1551232864-3f0890e580d9"), collection: true },
  { id: "p6", name: "Blusa Trico Ivory", price: 179.9, category: "blusas", image: img("1618354691373-d851c5c3a990") },
  { id: "p7", name: "Calça Wide Leg Vinho", price: 319.9, category: "calcas", image: img("1594633312681-425c7b97ccd1"), featured: true, collection: true },
  { id: "p8", name: "Calça Pantalona Preta", price: 289.9, category: "calcas", image: img("1509551388413-e18d05e13faf") },
  { id: "p9", name: "Jeans Reto Premium", price: 269.9, category: "jeans", image: img("1541099649105-f69ad21f3246"), isNew: true },
  { id: "p10", name: "Jeans Mom High", price: 249.9, category: "jeans", image: img("1602293589930-45aad59ba3ab") },
  { id: "p11", name: "Short Sarja Bege", price: 149.9, category: "shorts", image: img("1591195853828-11db59a44f6b") },
  { id: "p12", name: "Saia Midi Plissada", price: 219.9, category: "saias", image: img("1583496661160-fb5886a13d44"), featured: true },
  { id: "p13", name: "Conjunto Linho Terracota", price: 449.9, category: "conjuntos", image: img("1490481651871-ab68de25d43d"), collection: true, isNew: true },
  { id: "p14", name: "Macacão Fluido Vinho", price: 389.9, category: "macacoes", image: img("1618932260643-eee4a2f652a6"), featured: true },
  { id: "p15", name: "Trench Coat Camel", price: 799.9, category: "casacos", image: img("1544441893-675973e31985"), collection: true },
  { id: "p16", name: "Blazer Estruturado", price: 549.9, category: "casacos", image: img("1591047139829-d91aecb6caea") },
  { id: "p17", name: "Top Fitness Bordeaux", price: 129.9, category: "fitness", image: img("1518310383802-640c2de311b2") },
  { id: "p18", name: "Legging Sculpt Wine", price: 189.9, category: "fitness", image: img("1571019613454-1cb2f99b2d8b"), isNew: true },
  { id: "p19", name: "Biquíni Ravello", price: 219.9, category: "praia", image: img("1570976447640-ac859d963c5c"), featured: true },
  { id: "p20", name: "Kaftan Amalfi", price: 299.9, category: "praia", image: img("1509631179647-0177331693ae"), collection: true },
  { id: "p21", name: "Colar Dourado Fio", price: 159.9, category: "acessorios", image: img("1611085583191-a3b181a88401") },
  { id: "p22", name: "Bolsa Leather Bordeaux", price: 689.9, category: "acessorios", image: img("1584917865442-de89df76afd3"), featured: true, isNew: true },
];

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
export const getFeatured = () => products.filter((p) => p.featured);
export const getNew = () => products.filter((p) => p.isNew);
export const getCollection = () => products.filter((p) => p.collection);
