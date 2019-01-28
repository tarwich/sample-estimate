const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export function formatMoney(number) {
  return formatter.format(parseInt(String(number)) || 0);
}
