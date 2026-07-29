import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, Product } from "@/types/product";

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (product: Product, size?: string) => void;
  remove: (cartItemId: string) => void;
  setQuantity: (cartItemId: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lume-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = items.reduce((s, i) => s + i.quantity * i.price, 0);
    return {
      items,
      count,
      subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      add: (product, size) =>
        setItems((prev) => {
          const cartItemId = size ? `${product.id}-${size}` : product.id;
          const found = prev.find((i) => (i.selectedSize ? `${i.id}-${i.selectedSize}` : i.id) === cartItemId);
          if (found) {
            return prev.map((i) => {
              const currentId = i.selectedSize ? `${i.id}-${i.selectedSize}` : i.id;
              return currentId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i;
            });
          }
          return [...prev, { ...product, quantity: 1, selectedSize: size }];
        }),
      remove: (cartItemId) => setItems((prev) => prev.filter((i) => (i.selectedSize ? `${i.id}-${i.selectedSize}` : i.id) !== cartItemId)),
      setQuantity: (cartItemId, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => (i.selectedSize ? `${i.id}-${i.selectedSize}` : i.id) !== cartItemId)
            : prev.map((i) => {
                const currentId = i.selectedSize ? `${i.id}-${i.selectedSize}` : i.id;
                return currentId === cartItemId ? { ...i, quantity: qty } : i;
              }),
        ),
      clear: () => setItems([]),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
