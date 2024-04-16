"use client";

import { useState } from "react";

import { Link, usePathname } from "@/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@referrer/ui";

import { navigation } from "@/config";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="rounded-md p-2 outline-none focus:border focus:border-gray-400"
          onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col lg:hidden">
        {navigation.map((tab) => (
          <Link
            onClick={() => setOpen(!open)}
            href={tab.path}
            key={tab.path}
            className={`${
              pathname === tab.path ? "text-background bg-foreground" : ""
            } relative w-11/12 rounded-md px-8 py-2 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}>
            {tab.title}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
