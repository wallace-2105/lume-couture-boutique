import { SectionHeader } from "./SectionHeader";

const cards = ["Visa", "Mastercard", "Elo", "Amex", "PIX"];

export function PaymentMethods() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10">
      <SectionHeader eyebrow="Formas de pagamento" title="Compre com liberdade" subtitle="Parcele em até 12x sem juros no cartão de crédito." />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {cards.map((c) => (
          <div
            key={c}
            className="rounded-md border border-border bg-card px-6 py-3 font-serif text-sm text-wine-deep shadow-card"
          >
            {c}
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
        PIX · Cartão de Crédito · Cartão de Débito
      </p>
    </section>
  );
}
