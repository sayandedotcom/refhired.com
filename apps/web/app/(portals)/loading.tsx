"use client";

import { PostCardSkeleton } from "@/components/custom-components";

const loading = () => {
  return (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </>
  );
};

export default loading;
