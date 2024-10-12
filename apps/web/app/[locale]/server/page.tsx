import { cookies } from "next/headers";

import { getServerAuthSession } from "@/lib/auth";
import { request } from "@/lib/axios";

async function getTest(hasCookie: string) {
  const response = await request.get("/test", {
    withCredentials: true,

    headers: { withCredentials: true, Authorization: `Bearer ${hasCookie}` },
  });

  return response.data;
}

export default async function Server() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.get("next-auth.session-token");
  const response = await getTest(hasCookie?.value);
  // console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊datadatadatadatadata", response);

  // console.log(
  //   "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊hasCookiehasCookiehasCookiehasCookiehasCookiehasCookiehasCookiehasCookie",
  //   hasCookie.value
  // );

  const session = await getServerAuthSession();
  // const response = await fetch("http://localhost:3000/api/v1/test", {
  //   method: "GET",
  // }).then((ans) => ans.json());
  // .get("/api/v1/test", {
  //   headers: {
  //     name: "Sayan De from Server Component",
  //   },
  // })
  // .then((ans) => ans.data);

  // console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊datadatadatadatadata", response);
  return (
    <div>
      Server
      {response?.message}
      <h4>{JSON.stringify(session?.user)}</h4>{" "}
    </div>
  );
}
