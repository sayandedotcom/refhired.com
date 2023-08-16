import { Metadata } from "next";
import { headers } from "next/headers";

import { getSession } from "@/actions/sessions";

import { Banner, Footer, Navbar } from "@/components/layout-components";

import { rootPaths, siteConfig } from "@/config";

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
      url: "https://sayande.tech",
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  const headersList = headers();

  const pathName = headersList.get("x-invoke-path") || "";

  const showNavbar = rootPaths.includes(pathName);

  return (
    <Provider>
      {showNavbar && (
        <>
          <Banner />
          <Navbar session={session} />
        </>
      )}
      {children}
      {showNavbar && <Footer />}
    </Provider>
  );
}
