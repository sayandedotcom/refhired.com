"use client";

import { usePathname } from "next/navigation";

import { useIsMounted } from "@/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "cal-sans";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import { PreLoader } from "@/components/custom-components";
import { Announcements, Footer, Header } from "@/components/layout-components";
import ProgressBar from "@/components/ui/progress-bar";

import "../styles/globals.css";

export function Provider({ children }) {
  const queryClient = new QueryClient();
  const isMounted = useIsMounted();
  const pathName = usePathname();
  const showNavbar = ["/", "/docs", "/blogs", "/pricing", "/about-us", "/contact-us"].includes(pathName);

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className="bg-[#f2f2f2] dark:bg-[#111111] selection:bg-foreground selection:text-background scrollbar-rounded-lg scrollbar-thin
      scrollbar-track-white scrollbar-thumb-black dark:scrollbar-track-black dark:scrollbar-thumb-white">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <QueryClientProvider client={queryClient}>
              <SessionProvider>
                <Toaster />
                {!isMounted ? (
                  <PreLoader />
                ) : (
                  <>
                    <ProgressBar />
                    {showNavbar && (
                      <>
                        <Announcements />
                        <Header />
                      </>
                    )}
                    {children}
                    {showNavbar && <Footer />}
                  </>
                )}
              </SessionProvider>
              <ReactQueryDevtools />
            </QueryClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
