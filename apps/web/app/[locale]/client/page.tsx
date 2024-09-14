"use client";

import { useQuery } from "@tanstack/react-query";

import { requests } from "@/lib/axios";

function Client() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return requests.get("/test", {
        headers: {
          name: "Sayan De from Client Component",
        },
      });
    },
  });
  console.log("datadatadatadatadata", data);

  return <div>{data?.data?.Hi}</div>;
}

export default Client;
