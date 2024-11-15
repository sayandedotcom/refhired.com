import { headers } from "next/headers";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request, response, { params }: { params: { postId: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("key");
  const headersList = headers();
  const cookieStore = cookies();
  const hasCookie =
    cookieStore.get("__Secure-next-auth.session-token") ?? cookieStore.get("next-auth.session-token");
  const referer = headersList.get("cookie");
  // console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨", request.headers);
  // console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨", referer);
  console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨", hasCookie);

  console.log(
    "tokentokentokentokentokenttokentokentokentokentokenoken🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨",
    token
  );
  try {
    if (token) {
      return NextResponse.json(
        { message: "You are authenticated !!" },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return NextResponse.json(
        { message: "You are NOT authenticated !!" },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    return NextResponse.json(`Error from our side! ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export async function POST(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");
  response.cookies.set("next-auth.session-token", token, { maxAge: 30 * 24 * 60 * 60, httpOnly: true });
  const res = await request.json();
  return NextResponse.json({ res });
}
export async function DELETE(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({ res });
}
