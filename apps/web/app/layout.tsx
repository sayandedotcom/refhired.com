import { Metadata } from "next";

import "cal-sans";

import "../styles/globals.css";
import { Provider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Refhired.com",
    template: `%s | Refhired.com`,
  },
  description: "Get job referrals to the top best companies of the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-[#f2f2f2] dark:bg-[#111111] selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin 
      scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
