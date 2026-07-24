import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  { q: "Vocês entregam para todo Brasil?", a: "Sim! Realizamos entregas para todas as regiões do Brasil via Correios e transportadoras parceiras." },
  { q: "Qual o prazo de entrega?", a: "O prazo varia de 3 a 10 dias úteis, dependendo da sua região. Você acompanha tudo pelo código de rastreio." },
  { q: "Posso trocar uma peça?", a: "Claro. Você tem até 30 dias após o recebimento para solicitar troca ou devolução sem burocracia." },
  { q: "Como funciona o pagamento?", a: "Atualmente, o pedido é finalizado via WhatsApp. Geramos um link de pagamento seguro por PIX, cartão de crédito ou débito." },
  { q: "Existe loja física?", a: "No momento operamos 100% online, garantindo curadoria e preços especiais direto para você." },
  { q: "Como acompanho meu pedido?", a: "Assim que despachado, enviamos um código de rastreio pelo WhatsApp e e-mail cadastrado." },
  { q: "Qual o prazo para troca?", a: "30 dias corridos após o recebimento. Basta nos chamar no WhatsApp que cuidamos de tudo." },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
      <SectionHeader eyebrow="Suporte" title="Perguntas frequentes" subtitle="Tudo o que você precisa saber antes de comprar." />
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-serif text-lg text-wine-deep hover:text-wine hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
