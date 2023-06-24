"use client";

import { Metadata } from "next";
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
    <html lang='en'>
      <body>
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
