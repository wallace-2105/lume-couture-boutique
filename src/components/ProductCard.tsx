import { motion } from "motion/react";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types/product";
import { formatPrice, installments } from "@/utils/format";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { add, open } = useCart();
  const [fav, setFav] = useState(false);
  const inst = installments(product.price);

  const handleAdd = () => {
    add(product);
    toast.success("Adicionado ao carrinho", {
      description: product.name,
      action: { label: "Ver carrinho", onClick: open },
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-md bg-card shadow-card transition-shadow hover:shadow-elegant"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-3 flex items-center justify-between px-3">
          <div className="flex gap-1">
            {product.isNew && (
              <span className="rounded-sm bg-wine px-2 py-0.5 text-[10px] tracking-widest text-cream uppercase">Novo</span>
            )}
            {product.collection && (
              <span className="rounded-sm bg-cream/90 px-2 py-0.5 text-[10px] tracking-widest text-wine-deep uppercase">Coleção</span>
            )}
          </div>
          <button
            aria-label="Favoritar"
            onClick={() => setFav((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full glass text-wine-deep transition hover:bg-cream"
          >
            <Heart className={`h-4 w-4 ${fav ? "fill-wine text-wine" : ""}`} />
          </button>
        </div>

        <div className="absolute inset-x-3 bottom-3 flex translate-y-6 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="flex-1 rounded-sm bg-wine px-4 py-2.5 text-[11px] tracking-[0.25em] uppercase text-cream shadow-lg transition hover:bg-wine-deep"
          >
            Comprar
          </button>
          <button
            aria-label="Adicionar ao carrinho"
            onClick={handleAdd}
            className="grid h-10 w-10 place-items-center rounded-sm glass text-wine-deep transition hover:bg-cream"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-serif text-lg leading-tight text-wine-deep">{product.name}</h3>
        <p className="text-base font-medium text-foreground">{formatPrice(product.price)}</p>
        <p className="text-xs text-muted-foreground">
          ou {inst.times}x de {formatPrice(inst.value)} sem juros
        </p>
      </div>
    </motion.article>
  );
}
