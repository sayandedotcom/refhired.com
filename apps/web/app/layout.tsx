"use client";
import { Footer, Header } from "@referrer/ui";
import "@referrer/ui/styles.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
