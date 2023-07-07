"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Button, Input, Separator } from "@referrer/ui";
import { TooltipDemo } from "@/components/ui";

const SearchPage = () => {
  return (
    <>
      <div className="sticky top-0 flex items-center gap-1 md:gap-2 m-2">
        <form className="flex w-full rounded-full overflow-hidden bg-transparent">
          <Input
            type="text"
            placeholder="Search....."
            className="bg-muted text-base md:text-lg rounded-none w-11/12"
          />
          <TooltipDemo text="Search">
            <Button size="icon" className="rounded-none w-1/12">
              <Search />
            </Button>
          </TooltipDemo>
        </form>
        <TooltipDemo text="Filter">
          <div className="rounded-full cursor-pointer hover:bg-muted">
            <SlidersHorizontal className="m-2 h-4 md:h-5" />
          </div>
        </TooltipDemo>
      </div>
      <Separator />
    </>
  );
};

export default SearchPage;
