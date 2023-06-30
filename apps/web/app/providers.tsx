"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Announcements, Footer, Header } from "@/components/layouts";

export function Provider({ children }) {
  const queryClient = new QueryClient();
  const pathName = usePathname();
  const showNavbar = [
    "/",
    "/docs",
    "/blogs",
    "/pricing",
    "/about-us",
    "/contact-us",
  ].includes(pathName);
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
