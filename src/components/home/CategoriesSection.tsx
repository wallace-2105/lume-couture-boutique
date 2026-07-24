import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { categories } from "@/data/products";
import { SectionHeader } from "./SectionHeader";

export function CategoriesSection() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <SectionHeader eyebrow="Explore" title="Categorias" subtitle="Encontre a peça perfeita para cada momento." />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              to="/categoria/$slug"
              params={{ slug: c.slug }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-md shadow-card transition-all hover:shadow-elegant"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/90 via-wine-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">{c.tagline}</p>
                <h3 className="mt-1 font-serif text-2xl">{c.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
