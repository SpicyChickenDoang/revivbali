import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prewritten } from "./constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dowa = (message: string, cta: string) => {
  const waUrl = `${cta}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(price)
    .replace("IDR", "Rp");
};

export const getMessage = (key: keyof typeof prewritten, lang: string) => {
  const entry = prewritten[key];
  return lang === "id" ? entry.id : entry.en;
};
