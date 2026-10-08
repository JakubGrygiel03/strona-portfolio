import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPln(value: number): string {
  const amount = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  return `${amount}\u00a0zł`;
}

export function pluralForm(count: number, one: string, few: string, many: string) {
  if (count === 1) return one;
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

export function daysLabel(min: number, max: number) {
  if (min === max) return `${min} ${min === 1 ? "dzień" : "dni"}`;
  return `${min}–${max} dni`;
}

export function pluralProjects(count: number): string {
  if (count === 1) return "1 projekt";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} projekty`;
  }
  return `${count} projektów`;
}
