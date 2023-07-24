"use client";

import { useLayoutEffect } from "react";

import { usePathname } from "next/navigation";

import { useLoading } from "@/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import { PreLoader } from "@/components/custom-components";
import { Announcements, Footer, Header } from "@/components/layout-components";
import ProgressBar from "@/components/ui/progress-bar";

export function Provider({ children }) {
  const { loadingValue, setLoadingValue } = useLoading();
  const queryClient = new QueryClient();
  const pathName = usePathname();
  const showNavbar = ["/", "/docs", "/blogs", "/pricing", "/about-us", "/contact-us"].includes(pathName);
  useLayoutEffect(() => {
    setLoadingValue("preLoader");
    setTimeout(() => {
      setLoadingValue("");
    }, 2000);
  }, [setLoadingValue]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Toaster />
          {loadingValue === "preLoader" ? (
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
  );
}
