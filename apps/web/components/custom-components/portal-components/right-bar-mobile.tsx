"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Info, ListFilter } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@referrer/ui";

import { withoutRightBarPages } from "@/config";

import { useStore } from "@/store/store";

export function RightBarMobile() {
  const pathName = usePathname();
  const showExtraSection = withoutRightBarPages.includes(pathName);
  const [open, setOpen] = useState(false);
  const setJoyRide = useStore((state) => state.setJoyRide);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="rounded-md p-2 outline-none focus:border focus:border-gray-400 lg:hidden"
          onClick={() => setOpen(!open)}>
          <ListFilter />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <section className={clsx(showExtraSection && "md:hidden lg:hidden", "font-heading font-medium")}>
          <div className="bg-muted rounded-sm px-4 py-2 text-center">
            <h5>Extras</h5>
          </div>
          <button
            onClick={() => setJoyRide("post-ride")}
            id="start-tour"
            className="bg-muted flex items-center justify-center gap-2 rounded-sm py-2 text-lg">
            <Info className="mb-1 h-5" /> <p>Info</p>
          </button>
          <div className="bg-muted rounded-sm px-4 py-2 text-center">
            <h6>News</h6>
          </div>
          <div className="bg-muted rounded-sm px-4 py-2 text-center">
            <h6>{pathName.split("/")[1] !== "/search" ? "Filters" : "Sugessions"}</h6>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
