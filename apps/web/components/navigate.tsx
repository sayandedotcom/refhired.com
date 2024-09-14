"use client";

import { useRouter } from "@/navigation";

function Navigate({ children, userName, postId }) {
  const router = useRouter();
  return <div onClick={() => router.push(btoa(`/${userName}/${postId}`))}>{children}</div>;
}

export default Navigate;
