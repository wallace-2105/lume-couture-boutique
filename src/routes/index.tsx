import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { SectionHeader } from "@/components/home/SectionHeader";
import { Benefits } from "@/components/home/Benefits";
import { Reviews } from "@/components/home/Reviews";
import { FAQ } from "@/components/home/FAQ";
import { Newsletter } from "@/components/home/Newsletter";
import { PaymentMethods } from "@/components/home/PaymentMethods";
import { getCollection, getFeatured, getNew } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUME · Moda Feminina Premium" },
      {
        name: "description",
        content:
          "LUME é moda feminina que ilumina. Descubra vestidos, conjuntos, casacos e acessórios com curadoria e envio para todo Brasil.",
      },
      { name: "keywords", content: "moda feminina, vestidos, conjuntos, LUME, roupas, moda premium" },
      { property: "og:title", content: "LUME · Moda Feminina Premium" },
      { property: "og:description", content: "Curadoria em moda feminina, com envio para todo Brasil e parcelamento em 12x." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Benefits />

      <section id="novidades" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeader eyebrow="Chegou agora" title="Novidades" subtitle="As peças mais recentes desembarcaram na sua loja." />
        <ProductsGrid products={getNew()} />
      </section>

      <CategoriesSection />

      <section id="destaques" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 bg-gradient-to-b from-transparent to-secondary/40">
        <SectionHeader eyebrow="Selecionadas para você" title="Produtos em destaque" subtitle="Nossa curadoria de peças mais desejadas." />
        <ProductsGrid products={getFeatured()} />
      </section>

      <section id="colecao" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeader eyebrow="Editorial" title="Coleção da semana" subtitle="Bordeaux, terracota e neutros luminosos em peças que atravessam estações." />
        <ProductsGrid products={getCollection()} />
      </section>

      <Reviews />
      <PaymentMethods />
      <FAQ />
      <Newsletter />
    </>
  );
}
