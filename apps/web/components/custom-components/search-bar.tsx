"use client";

import { useRef, useState } from "react";

import { useSearchParams } from "next/navigation";

import clsx from "clsx";
import { Search, X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

import { Input } from "@referrer/ui";

import { history } from "@/config";

export const SearchBar = ({ searchString }: { searchString?: string }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [value, setValue] = useState(search ?? "");
  const [isInputFocused, setInputFocused] = useState(false);
  const outsideRef = useRef();
  useOnClickOutside(outsideRef, () => setInputFocused(false));

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const optionClick = (item) => {
    setValue(item);
    setInputFocused(false);
  };

  return (
    <>
      <div className="sticky top-0 m-2 flex items-center gap-1 md:mx-auto md:gap-2 lg:w-7/12">
        <form
          ref={outsideRef}
          className="bg-muted relative flex w-full items-center overflow-hidden rounded-full">
          <Search className="w-[10%]" />
          <Input
            type="text"
            value={value}
            onFocus={() => setInputFocused(true)}
            placeholder="Type ctrl+/ to search"
            onChange={handleChange}
            className="bg-muted ml-auto w-[90%] rounded-none border-0 border-none text-base outline-none focus:border-none focus:outline-none focus-visible:border-none
            focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg"
          />
          <X
            className={`mr-4 h-[4%] w-[4%] cursor-pointer rounded-full  ${
              value?.length === 0 ? "hidden" : ""
            }`}
            onClick={() => setValue("")}
          />
        </form>
        <div
          ref={outsideRef}
          className={clsx(
            "bg-muted absolute top-12 h-[300px] w-full rounded-2xl",
            !isInputFocused && "hidden"
          )}>
          {history.map((item) => (
            <div
              key={item}
              onClick={() => optionClick(item)}
              className="hover:bg-background mx-1 mt-1 flex h-[15%] cursor-pointer items-center rounded-md">
              <Search className="mr-3 w-[10%]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// <TooltipDemo text="Filter">
//   <div className="hover:bg-muted cursor-pointer rounded-full">
//     <SlidersHorizontal className="m-2 h-4 md:h-5" />
//   </div>
// </TooltipDemo>
