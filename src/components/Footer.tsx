import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail } from "lucide-react";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-24 bg-wine-gradient text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div>
          <span className="font-serif text-3xl tracking-[0.4em]">LUME</span>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Moda feminina que ilumina. Peças pensadas para mulheres que fazem do estilo uma
            assinatura pessoal.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://wa.me/5511953752227" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6a12 12 0 005.8 1.5C18.6 23.9 24 18.5 24 11.9c0-3.2-1.3-6.2-3.5-8.4z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.3em] uppercase text-cream/60">Categorias</h4>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/categoria/$slug" params={{ slug: c.slug }} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.3em] uppercase text-cream/60">Institucional</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-white">Entregas</a></li>
            <li><a href="#faq" className="hover:text-white">Perguntas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.3em] uppercase text-cream/60">Contato</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@lume.com.br</li>
            <li>WhatsApp: +55 11 95375-2227</li>
            <li>Atendimento: Seg-Sex, 9h-18h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/60 md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} LUME. Todos os direitos reservados.</p>
          <p>Feito com cuidado para você.</p>
        </div>
      </div>
    </footer>
  );
}
