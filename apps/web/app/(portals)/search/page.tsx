"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { Input, Separator } from "@referrer/ui";

import { TooltipDemo } from "@/components/ui";

const SearchPage = () => {
  return (
    <>
      <div className="sticky top-0 m-2 flex items-center gap-1 md:gap-2">
        <form className="flex w-full overflow-hidden rounded-full bg-muted items-center">
          <Search className="w-[10%]" />
          <Input
            type="text"
            placeholder="Search"
            className="w-[90%] rounded-none bg-muted text-base md:text-lg ml-auto outline-none border-none focus:border-none focus:outline-none
            focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none"
          />
        </form>
        <TooltipDemo text="Filter">
          <div className="cursor-pointer rounded-full hover:bg-muted">
            <SlidersHorizontal className="m-2 h-4 md:h-5" />
          </div>
        </TooltipDemo>
      </div>
      <Separator />
    </>
  );
};

export default SearchPage;
