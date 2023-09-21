import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

import { siteConfig } from "@/config";

import { cn } from "@/utils";

import { Provider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Refhired.com", "refer", "jobs", "referrals"],
  authors: [
    {
      name: "Sayan De",
      url: "https://sayande.com",
    },
  ],
  creator: "Sayan De",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@sayan",
  },
  icons: [
    {
      rel: "icon",
      sizes: "any",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  manifest: "/manifest.json",
  metadataBase: new URL("https://refhired.com"),
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "zh" }];
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../public/fonts/cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default async function RootLayout({
  children,
  loginModal,
  params,
}: {
  children: React.ReactNode;
  loginModal: React.ReactNode;
  params;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params?.locale || "en"}.json`)).default;
  } catch (error) {
    console.log(error);
  }
  console.log("params---locale=====================", params?.locale);
  const locale = useLocale();
  console.log("locale=====================", locale);

  // Validate that the incoming `locale` parameter is a valid locale
  if (params?.locale !== locale) {
    notFound();
  }

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={cn(
            "selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white font-sans",
            fontSans.variable,
            fontHeading.variable
          )}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Provider>
              {children}
              {loginModal}
            </Provider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
