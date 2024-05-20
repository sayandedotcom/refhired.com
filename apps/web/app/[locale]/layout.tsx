import { Suspense } from "react";

import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";

import { locales } from "@/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { cloakSSROnlySecret } from "ssr-only-secrets";

import { ApolloWrapper } from "@/lib/apollo-client/apollo-wrapper";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../public/fonts/cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default function RootLayout({
  children,
  loginModal,
  params: { locale },
}: {
  children: any;
  loginModal: any;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();

  const token = cookies().get("next-auth.session-token")?.value;

  const sessionId = cloakSSROnlySecret(token ?? "", "SECRET_KEY_VAR");

  return (
    <>
      {/* <ApolloWrapper sessionId={sessionId}> */}
      <html lang={locale} suppressHydrationWarning>
        <body
          className={cn(
            "selection:bg-foreground selection:text-background font-sans",
            fontSans.variable,
            fontHeading.variable
          )}>
          <Suspense fallback={<Loading />}>
            <ApolloWrapper sessionId={sessionId}>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <Provider>
                  {/* <ApolloWrapper> */}
                  {children}
                  {loginModal}
                  {/* </ApolloWrapper> */}
                </Provider>
              </NextIntlClientProvider>
            </ApolloWrapper>
          </Suspense>
        </body>
      </html>
      {/* </ApolloWrapper> */}
    </>
  );
}
// selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white font-sans
