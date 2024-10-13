"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { request } from "@/lib/axios";

function Client() {
  const { data: session } = useSession();
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
