"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Client() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return axios.get("/api/v1/test", {
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
