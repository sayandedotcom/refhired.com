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
  const session = await auth();

  const response = await getTest(session.user.refresh_token);

  console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊datadatadatadatadata", response);

  return (
    <div>
      Server
      {response?.message}
      <h4>{JSON.stringify(session)}</h4>{" "}
    </div>
  );
}
