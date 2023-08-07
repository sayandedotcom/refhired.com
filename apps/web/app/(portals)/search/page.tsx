"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { Input, Separator } from "@referrer/ui";

import { TooltipDemo } from "@/components/ui";

const SearchPage = () => {
  return (
    <>
      <div className="sticky top-0 m-2 flex items-center gap-1 md:gap-2">
        <form className="bg-muted flex w-full items-center overflow-hidden rounded-full">
          <Search className="w-[10%]" />
          <Input
            type="text"
            placeholder="Search"
            className="bg-muted ml-auto w-[90%] rounded-none border-none text-base outline-none focus:border-none focus:outline-none focus-visible:border-none
            focus-visible:outline-none focus-visible:ring-0 md:text-lg"
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

export default SearchPage;
