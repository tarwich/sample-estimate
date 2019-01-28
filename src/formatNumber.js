const formatter = new Intl.NumberFormat();

export function formatNumber(number) {
  return formatter.format(parseInt(String(number)) || 0);
}
