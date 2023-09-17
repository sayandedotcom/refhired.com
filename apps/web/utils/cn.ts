import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://chadnext.moinulmoin.com";

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}
