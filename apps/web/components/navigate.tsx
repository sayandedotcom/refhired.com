"use client";

import { navigateToPostsOfUser } from "@/config/urls";
import { useRouter } from "@/navigation";

function Navigate({ children, userName, postId }) {
  const router = useRouter();
  return <div onClick={() => router.push(navigateToPostsOfUser(userName, postId))}>{children}</div>;
}

export default Navigate;
