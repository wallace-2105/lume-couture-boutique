import { Truck, ShieldCheck, RefreshCcw, CreditCard } from "lucide-react";
import { motion } from "motion/react";

const items = [
  { icon: Truck, title: "Envio para todo Brasil", desc: "Frete grátis acima de R$ 399" },
  { icon: CreditCard, title: "Parcele em 12x", desc: "Sem juros no cartão de crédito" },
  { icon: RefreshCcw, title: "Trocas facilitadas", desc: "Até 30 dias após o recebimento" },
  { icon: ShieldCheck, title: "Compra 100% segura", desc: "Site protegido e criptografado" },
];

export function Benefits() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 lg:px-10">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-wine/10 text-wine">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-sm text-wine-deep">{it.title}</p>
              <p className="truncate text-xs text-muted-foreground">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
