"use client";

import { SlidersHorizontal } from "lucide-react";
import { Input, Separator } from "@referrer/ui";
import { TooltipDemo } from "@/components/ui";

const Search = () => {
  return (
    <>
      <div className='flex items-center gap-1 md:gap-2 m-3 md:m-4 md:px-2'>
        <Input
          type='text'
          placeholder='Search.....'
          className='rounded-full w-11/12 bg-muted text-base md:text-lg'
        />
        <TooltipDemo text='Filter'>
          <div className='rounded-full cursor-pointer hover:bg-muted'>
            <SlidersHorizontal className='m-2 h-5 md:h-8' />
          </div>
        </TooltipDemo>
      </div>
      <Separator />
    </>
  );
};

export default Search;
