import { ImageResponse } from "next/og";

// import { Icons } from "@/components/icons/icons";

// import { siteConfig } from "@/config";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>

    const title = searchParams.has("title") && searchParams.get("title")?.slice(0, 100);
    const image = searchParams.get("image") || "";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "hsl(var(--foreground))",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 600,
          }}>
          <svg width="75" viewBox="0 0 75 65" fill="#000" style={{ margin: "0 75px" }}>
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
          <div style={{ marginTop: 40, fontFamily: "hsl(var(--font-heading))" }}>Hello, World</div>
        </div>
      )
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
