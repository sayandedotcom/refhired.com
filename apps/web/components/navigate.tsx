"use client";

import { useRouter } from "next/navigation";

import { navigateToPostsOfUser } from "@/config/urls";

function Navigate({ children, userName, postId }) {
  const router = useRouter();
  return <div onClick={() => router.push(navigateToPostsOfUser(userName, postId))}>{children}</div>;
}

export default Navigate;
