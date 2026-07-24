import type { CartItem } from "@/types/product";
import { formatPrice } from "@/utils/format";

export const WHATSAPP_NUMBER = "5511953752227";

export function buildOrderMessage(items: CartItem[], total: number) {
  const lines = items.map(
    (i) => `• ${i.name} (x${i.quantity}) - ${formatPrice(i.price * i.quantity)}`,
  );
  return [
    "Olá!",
    "",
    "Gostaria de realizar um pedido.",
    "",
    "Itens escolhidos:",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Aguardar geração do link de pagamento.",
    "",
    "Muito obrigado!",
  ].join("\n");
}

export function openWhatsAppOrder(items: CartItem[], total: number) {
  const message = buildOrderMessage(items, total);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
}
