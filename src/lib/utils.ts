import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dowa = (message: string, phone: string = "6281315405911") => {
  const waUrl = `https://wa.me/${phone}?text=Hello+Revivbali! ${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price).replace('IDR', 'Rp');
};
