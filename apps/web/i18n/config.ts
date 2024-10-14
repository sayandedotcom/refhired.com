export type Locale = (typeof locales)[number];

export const locales = ["en", "de", "zh"] as const;
export const defaultLocale: Locale = "en";
