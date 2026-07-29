import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Facebook, Instagram, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { categories } from "@/data/products";

const WHATSAPP_URL = "https://wa.me/5511953752227";

export function Header() {
  const { count, open } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-0 z-40 w-full"
    >
      {/* Announcement */}
      <div className="bg-wine-gradient text-cream text-[11px] tracking-[0.3em] text-center py-2 uppercase">
        Frete grátis acima de R$ 399 · Parcele em até 12x sem juros
      </div>

      <div className="glass border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 h-16 md:h-20">
          <button
            className="md:hidden text-wine-deep"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-6 text-[13px] tracking-widest uppercase text-wine-deep/80">
            <Link to="/" className="hover:text-wine transition-colors">Home</Link>
            <Link to="/categoria/$slug" params={{ slug: "vestidos" }} className="hover:text-wine">Vestidos</Link>
            <Link to="/categoria/$slug" params={{ slug: "conjuntos" }} className="hover:text-wine">Conjuntos</Link>
            <Link to="/categoria/$slug" params={{ slug: "casacos" }} className="hover:text-wine">Casacos</Link>
            <Link to="/categoria/$slug" params={{ slug: "acessorios" }} className="hover:text-wine">Acessórios</Link>
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.4em] text-wine-deep">
              LUME
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-5 ml-auto text-wine-deep">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden sm:inline hover:text-wine">
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hidden sm:inline hover:text-wine">
              <Facebook className="h-[18px] w-[18px]" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hidden sm:inline hover:text-wine">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6a12 12 0 005.8 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.7 9.7 0 012.3 12C2.3 6.6 6.6 2.3 12 2.3c2.6 0 5 1 6.9 2.8 1.8 1.8 2.8 4.3 2.8 6.9 0 5.4-4.3 9.8-9.7 9.8zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4s1 2.9 1.1 3.1c.2.2 2 3.1 4.8 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.2-.1-.3-.2-.5-.3z" /></svg>
            </a>
            <button aria-label="Buscar" className="hover:text-wine hidden sm:inline">
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button aria-label="Conta" className="hover:text-wine hidden sm:inline">
              <User className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label={`Abrir carrinho (${count} itens)`}
              onClick={open}
              className="relative hover:text-wine"
            >
              <ShoppingBag className="h-[20px] w-[20px]" />
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-wine text-[10px] font-medium text-cream"
                >
                  {count}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-wine-deep/95 backdrop-blur-lg text-cream md:hidden overflow-y-auto">
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-2xl tracking-[0.4em]">LUME</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Fechar">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-4 pb-12">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/categoria/$slug"
                params={{ slug: c.slug }}
                onClick={() => setMobileOpen(false)}
                className="border-b border-cream/10 py-4 font-serif text-2xl"
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
