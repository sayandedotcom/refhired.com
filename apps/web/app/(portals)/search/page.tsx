"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Button, Input, Separator } from "@referrer/ui";
import { TooltipDemo } from "@/components/ui";

const SearchPage = () => {
  return (
    <>
      <div className="sticky top-0 m-2 flex items-center gap-1 md:gap-2">
        <form className="flex w-full overflow-hidden rounded-full bg-transparent">
          <Input
            type="text"
            placeholder="Search....."
            className="w-11/12 rounded-none bg-muted text-base md:text-lg"
          />
          <TooltipDemo text="Search">
            <Button size="icon" className="w-1/12 rounded-none">
              <Search />
            </Button>
          </TooltipDemo>
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
