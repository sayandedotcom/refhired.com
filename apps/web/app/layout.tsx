import { Suspense } from "react";

import { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { siteConfig } from "@/config";

import { cn } from "@/utils";

import Loading from "./loading";
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
    //  images: ["../../public/"],
    // images: [siteConfig.ogImage],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../public/fonts/cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default async function RootLayout({
  children,
  loginModal,
}: {
  children: React.ReactNode;
  loginModal: any;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={cn(
            "selection:bg-foreground selection:text-background via-#15081b bg-gradient-to-r from-neutral-900 from-10% via-85% to-gray-900 to-80% font-sans",
            fontSans.variable,
            fontHeading.variable
          )}>
          <Suspense fallback={<Loading />}>
            <NextIntlClientProvider messages={messages}>
              <Provider>
                {children}
                {loginModal}
              </Provider>
            </NextIntlClientProvider>
          </Suspense>
        </body>
      </html>
    </>
  );
}
// selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white font-sans
