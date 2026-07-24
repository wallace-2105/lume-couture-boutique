import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Informe um e-mail válido");
    setLoading(true);
    setTimeout(() => {
      toast.success("Obrigada! Você já faz parte do universo LUME.");
      setEmail("");
      setLoading(false);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-wine-gradient" />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center text-cream lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-cream/70">Novidades</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Receba novidades da LUME</h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/80">
            Cadastre seu e-mail e fique por dentro das novas coleções, promoções exclusivas e
            conteúdos criados só para você.
          </p>

          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              aria-label="E-mail para newsletter"
              className="flex-1 rounded-sm border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-sm bg-cream px-6 py-3 text-xs tracking-[0.3em] uppercase text-wine-deep transition hover:bg-white disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Cadastrar"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
