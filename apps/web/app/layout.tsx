"use client";

import { Metadata } from "next";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Footer, Header, Announcements } from "@referrer/ui";
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
  const showNavbar = ["/", "/docs", "/blog", "/pricing", "/about-us"].includes(
    pathName
  );

  return (
    <html lang='en'>
      <body>
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
      </body>
    </html>
  );
}
