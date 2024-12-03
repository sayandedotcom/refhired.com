"use client";

import { PostCardSkeleton } from "@/components/custom-components";

const Loading = () => {
  return (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      {/* <PostCardSkeleton /> */}
    </>
  );
};

export default Loading;
