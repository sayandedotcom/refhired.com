"use client";

import { useCallback } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { BadgeProps, badgeVariants } from "@referrer/ui";

import { cn } from "@/utils";

interface Search {
  search?: string;
  search_query?: string;
}

interface Search extends BadgeProps {}

export function Badge({ children, search, search_query, className, variant, ...props }: Search) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      onClick={() => {
        search && router.push("/search" + "?" + createQueryString(search_query, search));
      }}
      className={cn(badgeVariants({ variant }), "mx-1 w-fit", className)}
      {...props}>
      {children}
    </div>
  );
}
