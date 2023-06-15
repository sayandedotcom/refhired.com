"use client";

import { usePathname } from "next/navigation";
import { Footer, Header } from "@referrer/ui";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang='en'>
      <body>
        {pathName === "/" ||
        pathName === "/blogs" ||
        pathName === "/docs" ||
        pathName === "/about-us" ||
        pathName === "/pricing" ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
