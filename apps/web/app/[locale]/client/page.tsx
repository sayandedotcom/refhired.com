"use client";

import { useQuery } from "@tanstack/react-query";

import { request } from "@/lib/axios";

function Client() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return request.get(
        "/test"
        // , {
        // headers: {
        //   name: "Sayan De from Client Component",
        // },
        // }
      );
    },
  });

  console.log("datadatadatadatadata", data, error);

  return <div>{data?.data?.Hi}</div>;
}

export default Client;
