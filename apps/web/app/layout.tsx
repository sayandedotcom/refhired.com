import { Metadata } from "next";

import "cal-sans";

import "../styles/globals.css";
import { Provider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Referrer",
    template: `%s / Referrer`,
  },
  description: "Get job referrals to the top best companies of the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scrollbar-rounded-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
