import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { message: "👋 Hi, welcome to our Version 1 of our API !" },
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
