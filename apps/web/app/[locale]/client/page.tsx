"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";

import { request } from "@/lib/axios";

function Client() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error !== "RefreshTokenError") return;
    signIn("google"); // Force sign in to obtain a new set of access and refresh tokens
  }, [session?.error]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return request.get("/test", {
        headers: {
          Authorization: `Bearer ${session.user.refresh_token}`,
        },
      });
    },
  });

  console.log("datadatadatadatadata", data, error);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      Client
      {data?.data?.message}
      <h4>{JSON.stringify(session)}</h4>
    </div>
  );
}

export default Client;
