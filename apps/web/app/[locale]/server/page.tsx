import { auth } from "@/lib/auth";
import { request } from "@/lib/axios";

async function getTest(refreshToken: string) {
  const response = await request.get("/test", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return response.data;
}

export default async function Server() {
  // const cookieStore = cookies();
  // const hasCookie = cookieStore.get("next-auth.session-token");

  const session = await auth();
  const response = await getTest(session.user.refresh_token);
  console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊datadatadatadatadata", response);

  // console.log(
  //   "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊hasCookiehasCookiehasCookiehasCookiehasCookiehasCookiehasCookiehasCookie",
  //   hasCookie.value
  // );

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
      <h4>{JSON.stringify(session)}</h4>{" "}
    </div>
  );
}
