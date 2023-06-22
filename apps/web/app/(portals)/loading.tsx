"use client";

import { PostCardSkeleton } from "../../components/custom";

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
