import { motion, AnimatePresence } from "motion/react";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types/product";
import { formatPrice, installments } from "@/utils/format";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { add, open } = useCart();
  const [fav, setFav] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const inst = installments(product.price);

  const showBack = hovered && !!product.backImage;
  const displayImage = showBack ? product.backImage! : product.image;

  const handleAdd = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error("Por favor, selecione um tamanho", { description: product.name });
      return;
    }
    add(product, selectedSize);
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
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-md bg-card shadow-card transition-shadow hover:shadow-elegant"
    >
      <div 
        className="relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer"
        onClick={() => setHovered(!hovered)}
      >
        <AnimatePresence mode="crossfade" initial={false}>
          <motion.img
            key={displayImage}
            src={displayImage}
            alt={product.name}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Badge de troca frente/costas */}
        {product.backImage && (
          <div className="absolute bottom-14 left-3 flex gap-1 opacity-100 lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">
            <span className="rounded-sm bg-black/40 px-2 py-0.5 text-[9px] tracking-widest text-white/90 uppercase backdrop-blur-sm">
              {hovered ? "costas" : "frente"} (toque para trocar)
            </span>
          </div>
        )}

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
            onClick={(e) => { e.stopPropagation(); setFav((v) => !v); }}
            className="grid h-9 w-9 place-items-center rounded-full glass text-wine-deep transition hover:bg-cream"
          >
            <Heart className={`h-4 w-4 ${fav ? "fill-wine text-wine" : ""}`} />
          </button>
        </div>

        <div className="absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-500 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <button
            onClick={(e) => { e.stopPropagation(); handleAdd(); }}
            className="flex-1 rounded-sm bg-wine px-4 py-2.5 text-[11px] tracking-[0.25em] uppercase text-cream shadow-lg transition hover:bg-wine-deep"
          >
            Comprar
          </button>
          <button
            aria-label="Adicionar ao carrinho"
            onClick={(e) => { e.stopPropagation(); handleAdd(); }}
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
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`rounded border px-2 py-1 text-[10px] tracking-wide uppercase transition-colors ${
                  selectedSize === s 
                    ? "border-wine bg-wine text-cream" 
                    : "border-wine/30 text-wine-deep hover:border-wine"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
