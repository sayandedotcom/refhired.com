"use client";

import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

import { Input } from "@referrer/ui";

import { history } from "@/config";

import { cn } from "@/utils";

export function PlaceholdersAndVanishInput({ placeholders, className, searchIconWidth, showSugession }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search_query");
  const [value, setValue] = useState(search ?? "");
  const [isInputFocused, setInputFocused] = useState(false);
  const outsideRef = useRef();
  useOnClickOutside(outsideRef, () => setInputFocused(false));

  const optionClick = (item) => {
    setValue(item);
    setInputFocused(false);
  };

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  return (
    <div className={className}>
      <form className={cn("bg-muted relative flex w-full items-center overflow-hidden rounded-full")}>
        <Search className={searchIconWidth} />
        <Input
          onFocus={() => setInputFocused(true)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          className={cn(
            "ml-auto w-[90%] rounded-none border-0 border-none bg-transparent text-base outline-none focus:border-none focus:outline-none focus-visible:border-none focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg"
          )}
        />
        <X
          className={`mr-4 h-[4%] w-[4%] cursor-pointer rounded-full  ${value?.length === 0 ? "hidden" : ""}`}
          onClick={() => setValue("")}
        />
        <div className="pointer-events-none absolute inset-0 ml-auto flex w-[96%] items-center rounded-full">
          <AnimatePresence mode="wait">
            {!value && (
              <motion.p
                initial={{
                  y: 5,
                  opacity: 0,
                }}
                key={`current-placeholder-${currentPlaceholder}`}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -15,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
                className="w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal text-neutral-500 sm:pl-12 sm:text-base dark:text-zinc-500">
                {placeholders[currentPlaceholder]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
      {showSugession && (
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
      )}
    </div>
  );
}
