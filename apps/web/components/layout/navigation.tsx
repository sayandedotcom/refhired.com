"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { navigation } from "@/config";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center justify-center space-x-1 space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
      {navigation.map((tab) => (
        <Link
          href={tab.path}
          key={tab.path}
          className={`${
            pathname === tab.path ? "" : ""
          } relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}>
          {pathname === tab.path && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-orange-50 mix-blend-difference"
              style={{ borderRadius: 9999 }}
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
  );
}
