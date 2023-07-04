import { Toaster } from "react-hot-toast";
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
      <body className='scrollbar-thin scrollbar-thumb-black dark:scrollbar-thumb-white scrollbar-track-white dark:scrollbar-track-black scrollbar-rounded-lg'>
        <Toaster />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
