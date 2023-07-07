"use client";

import { Separator, Skeleton } from "@referrer/ui";

export const PostCardSkeleton = () => {
  return (
    <>
      <Separator />
      <div className="flex w-full gap-1 md:gap-3 max-w-2xl p-1 md:p-4 mx-auto">
        <div className="w-[12%]">
          <Skeleton className="w-10 h-10 md:h-16 md:w-16 rounded-full" />
        </div>
        <div className="w-[88%] flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[50px]" />
            <Skeleton className="h-5 w-[50px]" />
          </div>
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="flex items-center gap-4 mt-4">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
          </div>
          <Skeleton className="rounded-full ml-auto  h-9 w-3/12" />
        </div>
      </div>
      <Separator />
    </>
  );
};
