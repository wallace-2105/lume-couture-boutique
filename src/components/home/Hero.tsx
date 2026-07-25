import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-wine-gradient" />
      <div
        className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-wine-deep/80 via-transparent to-wine-deep/40" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24 md:pb-32 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-cream"
        >
          <span className="inline-block text-[11px] tracking-[0.5em] uppercase text-cream/70">
            Nova Coleção · Outono 2026
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl text-balance">
            A elegância <br />
            <em className="italic text-cream/90">iluminada</em> por você.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
            Peças atemporais, tecidos nobres e o vinho como fio condutor. Descubra a nova
            coleção LUME, pensada para mulheres que sabem o poder do detalhe.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/categoria/$slug"
              params={{ slug: "vestidos" }}
              className="inline-flex items-center rounded-sm bg-cream px-8 py-3.5 text-xs tracking-[0.3em] uppercase text-wine-deep transition hover:bg-white shadow-elegant"
            >
              Comprar agora
            </Link>
            <a
              href="#colecao"
              className="inline-flex items-center rounded-sm border border-cream/50 px-8 py-3.5 text-xs tracking-[0.3em] uppercase text-cream transition hover:bg-cream/10"
            >
              Ver coleção
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80"
              alt="Modelo com vestido LUME"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-4 left-4 w-52 rounded-md glass p-4 shadow-elegant"
          >
            <p className="text-[10px] tracking-widest uppercase text-wine">Peça em destaque</p>
            <p className="mt-1 font-serif text-lg text-wine-deep">Vestido Bordeaux Longo</p>
            <p className="text-sm text-muted-foreground">R$ 189,99</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
