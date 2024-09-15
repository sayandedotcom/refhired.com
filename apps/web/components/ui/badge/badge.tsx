"use client";

import { useCallback } from "react";

import { useSearchParams } from "next/navigation";

import { useRouter } from "@/navigation";

import { cn } from "@referrer/lib/utils/cn";
import { BadgeProps, badgeVariants } from "@referrer/ui";

interface Search {
  search?: string;
}

interface Search extends BadgeProps {}

export function Badge({ children, search, className, variant, ...props }: Search) {
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
        router.push("/search" + "?" + createQueryString("search_query", search?.toLowerCase()));
      }}
      className={cn(badgeVariants({ variant }), className, "mx-1 w-fit")}
      {...props}>
      {children}
    </div>
  );
}
