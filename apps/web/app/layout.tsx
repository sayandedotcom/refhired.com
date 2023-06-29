"use client";

import { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Announcements, Footer, Header } from "../components/layouts";
import { ThemeProvider } from "./providers";
import "cal-sans";
import "../styles/globals.css";

const metadata: Metadata = {
  title: {
    default: "Referrer",
    template: " %s | Referrer",
  },
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const pathName = usePathname();
  const showNavbar = [
    "/",
    "/docs",
    "/blogs",
    "/pricing",
    "/about-us",
    "/contact-us",
  ].includes(pathName);

  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <QueryClientProvider client={queryClient}>
            <SessionProvider>
              {showNavbar && (
                <>
                  <Announcements />
                  <Header />
                </>
              )}
              {children}
              {showNavbar && <Footer />}
            </SessionProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
