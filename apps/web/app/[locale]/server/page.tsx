import { auth, signIn } from "@/lib/auth";
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
  if (session?.error === "RefreshTokenError") {
    await signIn("google"); // Force sign in to obtain a new set of access and refresh tokens
  }
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
