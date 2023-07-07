"use client";

import { Separator, Skeleton } from "@referrer/ui";

export const PostCardSkeleton = () => {
  return (
    <>
      <Separator />
      <div className="mx-auto flex w-full max-w-2xl gap-1 p-1 md:gap-3 md:p-4">
        <div className="w-[12%]">
          <Skeleton className="h-10 w-10 rounded-full md:h-16 md:w-16" />
        </div>
        <div className="flex w-[88%] flex-col gap-2">
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[50px]" />
            <Skeleton className="h-5 w-[50px]" />
          </div>
          <Skeleton className="mt-4 h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="mt-4 flex items-center gap-4">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
          </div>
          <Skeleton className="ml-auto h-9  w-3/12 rounded-full" />
        </div>
      </div>
      <Separator />
    </>
  );
};
