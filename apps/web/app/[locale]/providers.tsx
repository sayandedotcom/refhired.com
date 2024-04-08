"use client";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { useIsMounted } from "@/hooks";
import { usePathname } from "@/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Toaster as SonerToaster } from "sonner";

import { PreLoader } from "@/components/custom-components";
import { Banner, Footer, Navbar } from "@/components/layout";
import ProgressBar from "@/components/ui/progress-bar";

import { rootPaths } from "@/config";

import { useStore } from "@/store/store";

import "../../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../public/fonts/cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export function Provider({ children }) {
  const queryClient = new QueryClient();
  const isMounted = useIsMounted();
  const path = usePathname();
  const toastPosition = useStore((state) => state.toastPosition);
  const showNavbar = rootPaths.includes(path);

  // const navv=rootPaths.su

  return (
    <>
      {/* <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white font-sans",
            fontSans.variable,
            fontHeading.variable
          )}> */}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <Toaster />
            <SonerToaster position={toastPosition} />
            {!isMounted ? (
              <PreLoader />
            ) : (
              <>
                <ProgressBar />
                {showNavbar && (
                  <>
                    <Banner />
                    <Navbar />
                  </>
                )}
                {children}
                {showNavbar && <Footer />}
                <Analytics />
              </>
            )}
          </SessionProvider>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ThemeProvider>
      {/* </body>
      </html> */}
    </>
  );
}
