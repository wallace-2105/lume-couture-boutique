import type { Category, Product } from "@/types/product";

// ─── Unsplash helper (usado apenas para banners de categoria) ──────────────
const img = (seed: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ─── Imports das imagens locais ───────────────────────────────────────────
import basicEmRibana from "@/assets/Basic em ribana.jpeg";
import basicModalPremium from "@/assets/Basic modal Premium golinha.jpeg";
import basicModalPremium2 from "@/assets/Basic modal Premium golinha 2.jpeg";
import basicRenda from "@/assets/Basic renda.jpeg";
import basicRenda2 from "@/assets/Basic renda 2.jpeg";
import bicolorEmRibana from "@/assets/Bicolor em ribana.jpeg";
import blusaFredo from "@/assets/Blusa Fredo.jpeg";
import blusaFredo2 from "@/assets/blusa  fredo 2.jpeg";
import blusaBella from "@/assets/Blusa bella.jpeg";
import blusaBellaDrapeado from "@/assets/Blusa bella - decote drapeado em poliamida.jpeg";
import blusaListrasZiper from "@/assets/Blusa listras zíper.jpeg";
import blusaListrasZiper2 from "@/assets/Blusa listras zíper 2.jpeg";
import blusaModeladora from "@/assets/Blusa modeladora.jpeg";
import jaquetaSuede from "@/assets/Jaqueta suede.jpeg";
import jaquetaSuedeVinho from "@/assets/Jaqueta suede vinho.jpeg";
import jaquetaSuedeBlack from "@/assets/Jaqueta suede black premuim.jpeg";
import listradaEmRibana from "@/assets/Listrada em ribana.jpeg";
import listradaEmRibana2 from "@/assets/listrada em ribana 2.jpeg";
import poloLuise from "@/assets/Polo luise.jpeg";
import poloLuise2 from "@/assets/Polo luise 2.jpeg";
import poloListrada from "@/assets/polo listrada.jpeg";
import teeBaloon from "@/assets/Tee Baloon.jpeg";
import teeBaloon2 from "@/assets/Tee baloon 2.jpeg";
import teeFlowers from "@/assets/Tee Flowers.jpeg";
import teePoa from "@/assets/Tee Poá.jpeg";
import teeEmPoa2 from "@/assets/Tee em poa  2.jpeg";
import vestidoNivea from "@/assets/Vestido longo Nívea.jpeg";
import vestidoNivea2 from "@/assets/Vestido longo Nívea 2.jpeg";
import vestidoIris from "@/assets/Vestido íris.jpeg";
import vestidoIris2 from "@/assets/Vestido íris2.jpeg";
import aneis from "@/assets/aneis.webp";
import calcaJens from "@/assets/calça jens.jpeg";
import calcaJens2 from "@/assets/calça jens 2.jpeg";
import calcaJensClaro from "@/assets/calça jens claro.jpeg";
import jensClaro2 from "@/assets/jens claro 2.jpeg";
import jensClaro3 from "@/assets/jens claro 3.jpeg";
import cinto from "@/assets/cinto.jpg";
import saia from "@/assets/saia.jpeg";
import saidaDePraia from "@/assets/saida de praia.webp";
import shorts from "@/assets/shorts.jpeg";
import shorts2 from "@/assets/shorts 2.jpeg";
import vestidoOrange from "@/assets/vestido orange.jpg";
import modaPraiaBanner from "@/assets/moda praia.webp";
import saiaCapa from "@/assets/saia capa.webp";
import blusaFemininaCapа from "@/assets/blusa feminina.webp";

// ─── Tamanhos padrão ──────────────────────────────────────────────────────
const SIZES_PMG = ["P", "M", "G"];
const SIZES_PPMG = ["PP", "P", "M", "G"];
const SIZES_JEANS = ["34", "36", "38", "40", "42"];
const TAMANHO_UNICO = ["Único"];

// ─── Categorias ───────────────────────────────────────────────────────────
export const categories: Category[] = [
  { slug: "vestidos",   name: "Vestidos",      tagline: "Silhuetas atemporais",          image: img("1595777457583-95e059d581b8") },
  { slug: "blusas",     name: "Blusas",        tagline: "Delicadeza no essencial",        image: blusaFemininaCapа },
  { slug: "calcas",     name: "Calças",        tagline: "Alfaiataria contemporânea",      image: img("1594633312681-425c7b97ccd1") },
  { slug: "jeans",      name: "Jeans",         tagline: "O denim reinventado",            image: img("1541099649105-f69ad21f3246") },
  { slug: "shorts",     name: "Shorts",        tagline: "Leveza e movimento",             image: img("1591195853828-11db59a44f6b") },
  { slug: "saias",      name: "Saias",         tagline: "Fluidez feminina",               image: saiaCapa },
  { slug: "conjuntos",  name: "Conjuntos",     tagline: "Look completo",                  image: img("1490481651871-ab68de25d43d") },
  { slug: "macacoes",   name: "Macacões",      tagline: "Praticidade elegante",           image: img("1618932260643-eee4a2f652a6") },
  { slug: "casacos",    name: "Casacos",       tagline: "Camadas sofisticadas",           image: img("1544441893-675973e31985") },
  { slug: "fitness",    name: "Moda Fitness",  tagline: "Performance com estilo",         image: img("1518310383802-640c2de311b2") },
  { slug: "praia",      name: "Moda Praia",    tagline: "Sol, mar e LUME",                image: modaPraiaBanner },
  { slug: "acessorios", name: "Acessórios",    tagline: "O detalhe faz o luxo",           image: img("1611085583191-a3b181a88401") },
];

// ─── Produtos ─────────────────────────────────────────────────────────────
export const products: Product[] = [

  // ── BLUSAS ───────────────────────────────────────────────────────────────
  {
    id: "blusa-tee-flowers",
    name: "Tee Flowers",
    price: 59.99,
    category: "blusas",
    image: teeFlowers,
    sizes: TAMANHO_UNICO,
    isNew: true,
  },
  {
    id: "blusa-fredo",
    name: "Blusa Fredo",
    price: 79.99,
    category: "blusas",
    image: blusaFredo,
    backImage: blusaFredo2,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "blusa-listras-ziper",
    name: "Blusa Listras Zíper",
    price: 79.99,
    category: "blusas",
    image: blusaListrasZiper,
    backImage: blusaListrasZiper2,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "basic-modal-premium",
    name: "Basic Modal Premium",
    price: 79.99,
    category: "blusas",
    image: basicModalPremium,
    backImage: basicModalPremium2,
    sizes: TAMANHO_UNICO,
    featured: true,
  },
  {
    id: "polo-luise",
    name: "Polo Luise",
    price: 65.90,
    category: "blusas",
    image: poloLuise,
    backImage: poloLuise2,
    sizes: SIZES_PMG,
  },
  {
    id: "polo-listrada",
    name: "Polo Listrada",
    price: 59.99,
    category: "blusas",
    image: poloListrada,
    sizes: SIZES_PMG,
  },
  {
    id: "basic-em-ribana",
    name: "Basic em Ribana",
    price: 49.99,
    category: "blusas",
    image: basicEmRibana,
    sizes: SIZES_PMG,
  },
  {
    id: "listrada-em-ribana",
    name: "Listrada em Ribana",
    price: 49.99,
    category: "blusas",
    image: listradaEmRibana,
    backImage: listradaEmRibana2,
    sizes: SIZES_PPMG,
  },
  {
    id: "bicolor-em-ribana",
    name: "Bicolor em Ribana",
    price: 49.99,
    category: "blusas",
    image: bicolorEmRibana,
    sizes: SIZES_PMG,
  },
  {
    id: "tee-poa",
    name: "Tee Poá",
    price: 59.99,
    category: "blusas",
    image: teePoa,
    backImage: teeEmPoa2,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "tee-baloon",
    name: "Tee Baloon",
    price: 89.99,
    category: "blusas",
    image: teeBaloon,
    backImage: teeBaloon2,
    sizes: TAMANHO_UNICO,
    collection: true,
  },
  {
    id: "blusa-bella-drapeado",
    name: "Blusa Bella – Decote Drapeado",
    price: 45.99,
    category: "blusas",
    image: blusaBellaDrapeado,
    backImage: blusaBella,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "basic-renda",
    name: "Basic Renda",
    price: 59.99,
    category: "blusas",
    image: basicRenda,
    backImage: basicRenda2,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "blusa-modeladora",
    name: "Blusa Modeladora",
    price: 47.99,
    category: "blusas",
    image: blusaModeladora,
    sizes: TAMANHO_UNICO,
  },

  // ── CALÇAS JEANS ─────────────────────────────────────────────────────────
  {
    id: "calca-jeans-1",
    name: "Calça Jeans",
    price: 135.00,
    category: "jeans",
    image: calcaJens,
    backImage: calcaJens2,
    sizes: SIZES_JEANS,
    featured: true,
  },
  {
    id: "calca-jeans-2",
    name: "Calça Jeans Claro",
    price: 135.00,
    category: "jeans",
    image: calcaJensClaro,
    sizes: SIZES_JEANS,
  },
  {
    id: "calca-jeans-3",
    name: "Calça Jeans Premium",
    price: 135.00,
    category: "jeans",
    image: jensClaro3,
    backImage: jensClaro2,
    sizes: SIZES_JEANS,
  },

  // ── SHORTS ───────────────────────────────────────────────────────────────
  {
    id: "shorts-1",
    name: "Shorts",
    price: 79.99,
    category: "shorts",
    image: shorts,
    sizes: SIZES_JEANS,
  },
  {
    id: "shorts-2",
    name: "Shorts",
    price: 79.99,
    category: "shorts",
    image: shorts2,
    sizes: SIZES_JEANS,
  },

  // ── SAIAS ────────────────────────────────────────────────────────────────
  {
    id: "saia-1",
    name: "Saia",
    price: 79.99,
    category: "saias",
    image: saia,
    sizes: TAMANHO_UNICO,
  },

  // ── CASACOS / JAQUETAS ────────────────────────────────────────────────────
  {
    id: "jaqueta-suede",
    name: "Jaqueta Suede",
    price: 169.99,
    category: "casacos",
    image: jaquetaSuede,
    sizes: TAMANHO_UNICO,
    featured: true,
    collection: true,
  },
  {
    id: "jaqueta-suede-vinho",
    name: "Jaqueta Suede Vinho",
    price: 169.99,
    category: "casacos",
    image: jaquetaSuedeVinho,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "jaqueta-suede-black",
    name: "Jaqueta Suede Black Premium",
    price: 169.99,
    category: "casacos",
    image: jaquetaSuedeBlack,
    sizes: TAMANHO_UNICO,
  },

  // ── VESTIDOS ──────────────────────────────────────────────────────────────
  {
    id: "vestido-nivea",
    name: "Vestido Longo Nívea",
    price: 129.99,
    category: "vestidos",
    image: vestidoNivea,
    backImage: vestidoNivea2,
    sizes: TAMANHO_UNICO,
    featured: true,
    isNew: true,
  },
  {
    id: "vestido-iris",
    name: "Vestido Íris",
    price: 129.99,
    category: "vestidos",
    image: vestidoIris,
    backImage: vestidoIris2,
    sizes: TAMANHO_UNICO,
    isNew: true,
  },
  {
    id: "vestido-orange",
    name: "Vestido Orange",
    price: 129.99,
    category: "vestidos",
    image: vestidoOrange,
    sizes: TAMANHO_UNICO,
  },

  // ── MODA PRAIA ────────────────────────────────────────────────────────────
  {
    id: "saida-de-praia",
    name: "Saída de Praia",
    price: 79.99,
    category: "praia",
    image: saidaDePraia,
    sizes: TAMANHO_UNICO,
    isNew: true,
  },

  // ── ACESSÓRIOS ────────────────────────────────────────────────────────────
  {
    id: "aneis",
    name: "Anéis",
    price: 29.99,
    category: "acessorios",
    image: aneis,
    sizes: TAMANHO_UNICO,
  },
  {
    id: "cinto",
    name: "Cinto",
    price: 49.99, // preço estimado — confirmar com a loja
    category: "acessorios",
    image: cinto,
    sizes: ["34", "36", "38", "40"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
export const getFeatured = () => products.filter((p) => p.featured);
export const getNew = () => products.filter((p) => p.isNew);
export const getCollection = () => products.filter((p) => p.collection);
