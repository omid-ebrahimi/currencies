export function formatWithCommas(value: string): string {
  if (isNaN(Number(value))) {
    return value;
  }

  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function numberWithCommas(value: number): string {
  return formatWithCommas(value.toString());
}
