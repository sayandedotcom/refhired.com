"use client";

import { useQuery } from "@tanstack/react-query";

import { requests } from "@/lib/axios";

function Client() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return requests.get(
        "/test"
        // , {
        // headers: {
        //   name: "Sayan De from Client Component",
        // },
        // }
      );
    },
  });
  console.log(
    "from /client😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊BACKEND_PROD_URL",
    process.env.BACKEND_PROD_URL
  );
  console.log("datadatadatadatadata", data, error);

  return <div>{data?.data?.Hi}</div>;
}

export default Client;
