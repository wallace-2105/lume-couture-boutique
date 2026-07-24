import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { categories, getProductsByCategory } from "@/data/products";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import type { CategorySlug } from "@/types/product";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    const products = getProductsByCategory(params.slug as CategorySlug);
    return { category, products };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name ?? "Categoria"} · LUME` },
      {
        name: "description",
        content: `Descubra ${loaderData?.category.name.toLowerCase()} da LUME. ${loaderData?.category.tagline}.`,
      },
      { property: "og:title", content: `${loaderData?.category.name} · LUME` },
      { property: "og:description", content: loaderData?.category.tagline },
      { property: "og:type", content: "website" },
      { property: "og:image", content: loaderData?.category.image },
      { name: "twitter:image", content: loaderData?.category.image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/categoria/${loaderData?.category.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl text-wine-deep">Categoria não encontrada</h1>
      <p className="mt-4 text-muted-foreground">Volte para a home e explore outras coleções.</p>
      <Link to="/" className="mt-6 inline-block rounded-sm bg-wine px-6 py-3 text-xs uppercase tracking-widest text-cream">Voltar</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl text-wine-deep">Não foi possível carregar</h1>
      <button onClick={reset} className="mt-6 rounded-sm bg-wine px-6 py-3 text-xs uppercase tracking-widest text-cream">Tentar novamente</button>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={category.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-wine-deep/70" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 text-cream lg:px-10">
          <p className="text-[11px] tracking-[0.4em] uppercase text-cream/70">Categoria</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">{category.name}</h1>
          <p className="mt-3 max-w-xl text-cream/80">{category.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {products.length > 0 ? (
          <ProductsGrid products={products} />
        ) : (
          <p className="py-20 text-center font-serif text-2xl text-wine-deep">
            Em breve novidades nesta categoria.
          </p>
        )}
      </section>
    </>
  );
}
