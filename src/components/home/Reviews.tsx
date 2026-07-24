import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reviews = [
  { name: "Marina S.", avatar: "https://i.pravatar.cc/100?img=47", stars: 5, text: "A qualidade me surpreendeu. Tecido impecável e caimento perfeito." },
  { name: "Julia P.", avatar: "https://i.pravatar.cc/100?img=32", stars: 5, text: "Entrega muito rápida e embalagem digna de presente." },
  { name: "Beatriz L.", avatar: "https://i.pravatar.cc/100?img=45", stars: 5, text: "Tecido maravilhoso. É a terceira compra e não decepciona." },
  { name: "Camila R.", avatar: "https://i.pravatar.cc/100?img=48", stars: 5, text: "Atendimento excelente pelo WhatsApp, tiraram todas as dúvidas." },
  { name: "Rafaela M.", avatar: "https://i.pravatar.cc/100?img=44", stars: 5, text: "Voltarei a comprar com certeza. Recebi vários elogios." },
  { name: "Larissa T.", avatar: "https://i.pravatar.cc/100?img=49", stars: 4, text: "Preço muito justo pelo que entregam. Recomendo demais." },
];

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <SectionHeader eyebrow="Quem usa, ama" title="Avaliações reais" subtitle="Mais de 12 mil clientes satisfeitas." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-md border border-border bg-card p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <img src={r.avatar} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="font-serif text-base text-wine-deep">{r.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-3.5 w-3.5 ${s < r.stars ? "fill-wine text-wine" : "text-border"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{r.text}"</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
