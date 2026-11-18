export const sequence = (length: number): number[] => Array.from({ length }, (_, index) => index);
export function hideImage(event: Event): void {
  (event.target as HTMLImageElement).style.display = 'none';
}
export function imageFallback(event: Event): void {
  hideImage(event);
  const placeholder = (event.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
  if (placeholder) placeholder.style.display = 'flex';
}
export const LEVEL_LABELS: Record<string, string> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};
export const CATEGORY_COLORS: Record<string, string> = {
  PARCHE: 'orange',
  'NUEVO SET': 'blue',
  SISTEMAS: 'purple',
  BALANCE: 'yellow',
  EVENTO: 'green',
};
export const costColors: Record<number, string> = {
  1: 'hex-cost-1',
  2: 'hex-cost-2',
  3: 'hex-cost-3',
  4: 'hex-cost-4',
  5: 'hex-cost-5',
};
