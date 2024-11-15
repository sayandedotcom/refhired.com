"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { dashboardNavigation } from "@/config";

export default function DashboardProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <section className="scroll-smooth p-2">
        <div className="bg-muted text-muted-foreground items-centerjustify-center inline-flex h-10 rounded-md p-1">
          {dashboardNavigation.map((tab) => (
            <Link
              href={tab.path}
              key={tab.path}
              className={`${
                pathname === tab.path ? "px-2" : "px-4"
              } relative rounded-lg py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}>
              {pathname === tab.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 rounded-lg bg-orange-50 mix-blend-difference"
                  animate={{
                    scale: 1.2,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="mt-2">{children}</div>
      </section>
    </>
  );
}
