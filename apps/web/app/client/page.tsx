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
      <div className="bg-background font-heading flex h-full w-full items-start justify-start bg-white p-20 text-black">
        <div className="flex h-full w-full items-center">
          <div className="mr-20 flex flex-1 flex-col">
            <h1 className="text-6xl">
              Refhired.com is looking for a Jr. Front End Developer to join our growing team. Your experience
              here will allow you to improve the fundamentals and learn about top-notch technologies in
              front-end development. If you are passionate about building stellar user experiences and great
              products through
            </h1>
            <p className="mt-0 text-lg text-red-500">hi • cdsv min</p>
          </div>

          <div className="relative flex">
            <svg
              className="absolute left-[-100px] top-[-300px] opacity-20"
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              version="1.1"></svg>
            <img
              style={{ objectFit: "cover" }}
              className="mx-auto h-[300px] w-[300px] rounded-full border-8 border-red-500"
              src="https://static.wikia.nocookie.net/arresteddevelopment/images/4/42/5x15_-_Michael_Bluth_01.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
