"use client";

import { Separator, Skeleton } from "@referrer/ui";

export const PostCardSkeleton = () => {
  return (
    <>
      <Separator />
      <div className='flex w-full gap-3 max-w-2xl p-4 mx-auto'>
        <Skeleton className='h-16 aspect-square rounded-full' />
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex items-center gap-4'>
            <Skeleton className='h-5 w-[100px]' />
            <Skeleton className='h-5 w-[100px]' />
            <Skeleton className='h-5 w-[50px]' />
            <Skeleton className='h-5 w-[50px]' />
          </div>
          <Skeleton className='h-4 w-full mt-4' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <div className='flex items-center gap-4 mt-4'>
            <Skeleton className='h-5 w-[100px]' />
            <Skeleton className='h-5 w-[100px]' />
            <Skeleton className='h-5 w-[100px]' />
            <Skeleton className='h-5 w-[100px]' />
          </div>
          <Skeleton className='h-11 w-[140px] rounded-full ml-auto' />
        </div>
      </div>
      <Separator />
    </>
  );
};
