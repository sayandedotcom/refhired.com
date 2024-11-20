import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("key");
  const headersList = headers();

  const referer = headersList.get("commonRequest");
  // console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊", headersList);
  console.log("😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊", query);
  try {
    return NextResponse.json(
      { Hi: "Hello, Test/demo" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(`Error from our side! ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({ res });
}
