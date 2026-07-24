import { motion } from "motion/react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <p className="text-[11px] tracking-[0.4em] uppercase text-wine">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-serif text-4xl md:text-5xl text-wine-deep text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-muted-foreground ${align === "center" ? "mx-auto max-w-xl" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-16 bg-wine ${align === "center" ? "mx-auto" : ""}`} />
    </motion.header>
  );
}
