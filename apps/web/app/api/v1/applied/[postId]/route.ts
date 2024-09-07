import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  // * Get Posts by ID
  const { params } = context;
  console.log("params=============", params);

  return NextResponse.json(
    {
      message: "Hi",
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  // * Create Posts

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: NextRequest) {
  // * Delete Posts

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function PATCH(request: NextRequest) {
  // * Update Posts

  const res = await request.json();
  return NextResponse.json({ res });
}
