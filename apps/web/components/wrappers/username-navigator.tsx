"use client";

import { Link } from "@/navigation";

function UsernameNavigate({ children, userName }) {
  return <Link href={`/${userName}`}>{children}</Link>;
}

export default UsernameNavigate;
