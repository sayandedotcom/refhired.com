"use client";

import Link from "next/link";

function UsernameNavigate({ children, userName }) {
  return <Link href={`/${userName}`}>{children}</Link>;
}

export default UsernameNavigate;
