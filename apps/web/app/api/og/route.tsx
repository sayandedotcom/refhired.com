import { ImageResponse } from "next/og";

import { Icons } from "@/components/icons/icons";

import { siteConfig } from "@/config";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "My default title";
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
          }}>
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}>
            <Icons.logo />
            <h4 tw="font-heading mt-2">{siteConfig.name}</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 40,
              width: "auto",
              maxWidth: 550,
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              lineHeight: 1.4,
            }}>
            {title}
          </div>
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
