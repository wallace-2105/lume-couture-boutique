export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const installments = (value: number, times = 3) => ({
  times,
  value: value / times,
});
