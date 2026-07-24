import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, installments } from "@/utils/format";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { openWhatsAppOrder } from "@/services/whatsapp";

export function CartDrawer() {
  const { isOpen, close, items, setQuantity, remove, subtotal, count } = useCart();
  const inst = installments(subtotal);

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : close())}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-6">
          <SheetTitle className="font-serif text-2xl tracking-wider text-wine-deep">
            Sua Sacola
          </SheetTitle>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {count} {count === 1 ? "peça selecionada" : "peças selecionadas"}
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-wine/10 text-wine">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <p className="font-serif text-xl text-wine-deep">Sua sacola está vazia</p>
              <p className="text-sm text-muted-foreground">
                Explore nossas coleções e descubra peças únicas.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 py-4"
                  >
                    <img src={item.image} alt={item.name} className="h-24 w-20 rounded-sm object-cover" />
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base leading-tight text-wine-deep">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => remove(item.id)}
                          aria-label={`Remover ${item.name}`}
                          className="text-muted-foreground hover:text-wine"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm">{formatPrice(item.price)}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="inline-flex items-center rounded-sm border border-border">
                          <button
                            className="grid h-8 w-8 place-items-center hover:text-wine"
                            aria-label="Diminuir"
                            onClick={() => setQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            className="grid h-8 w-8 place-items-center hover:text-wine"
                            aria-label="Aumentar"
                            onClick={() => setQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4 bg-muted/40">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl text-wine-deep">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              ou {inst.times}x de {formatPrice(inst.value)} sem juros
            </p>
            <button
              onClick={() => openWhatsAppOrder(items, subtotal)}
              className="w-full rounded-sm bg-wine-gradient py-3.5 text-sm tracking-[0.3em] uppercase text-cream shadow-elegant transition hover:opacity-95"
            >
              Finalizar Pedido
            </button>
            <button
              onClick={close}
              className="w-full text-xs tracking-widest uppercase text-muted-foreground hover:text-wine"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
