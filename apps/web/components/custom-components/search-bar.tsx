"use client";

import { useRef } from "react";

import { Search, SlidersHorizontal } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

import { Input, Separator } from "@referrer/ui";

import { TooltipDemo } from "@/components/ui";

export const SearchBar = () => {
  const searchRef = useRef();

  const focusSearch = () => {
    const node = searchRef.current as any;
    node.focus();
  };
  useHotkeys("ctrl+/", focusSearch, [searchRef]);
  return (
    <>
      <div className="sticky top-0 m-2 flex items-center gap-1 md:gap-2 lg:w-7/12">
        <form className="bg-muted flex w-full items-center overflow-hidden rounded-full">
          <Search className="w-[10%]" />
          <Input
            type="text"
            ref={searchRef}
            placeholder="Type ctrl+/ to search"
            className="bg-muted ml-auto w-[90%] rounded-none border-0 border-none text-base outline-none focus:border-none focus:outline-none focus-visible:border-none
            focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg"
          />
        </form>
        <TooltipDemo text="Filter">
          <div className="hover:bg-muted cursor-pointer rounded-full">
            <SlidersHorizontal className="m-2 h-4 md:h-5" />
          </div>
        </TooltipDemo>
      </div>
      <Separator />
    </>
  );
};
