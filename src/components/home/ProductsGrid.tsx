import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
