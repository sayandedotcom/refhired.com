"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { dashboardNavigation } from "@/config";

import { useStore } from "@/store/store";

export default function DashboardProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const setDisplayRequest = useStore((state) => state.setDisplayRequest);

  return (
    <>
      <section className="scroll-smooth p-2">
        <div className="bg-muted text-muted-foreground items-centerjustify-center inline-flex h-10 rounded-md p-1">
          {dashboardNavigation.map((tab) => (
            <Link
              onClick={() => {
                setDisplayRequest(null);
              }}
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
                  className="bg-foreground absolute inset-0 z-10 rounded-lg mix-blend-difference"
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
