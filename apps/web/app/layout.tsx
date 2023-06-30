import { Metadata } from "next";
import { Provider } from "./providers";
import "cal-sans";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Referrer",
    template: `%s / Referrer`,
  },
  description: "Get job referrals to the top best companies of the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
