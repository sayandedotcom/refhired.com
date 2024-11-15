import { request } from "@/lib/axios";

import { TPosts } from "@/types/posts";

export async function search(urlParams: string): Promise<TPosts[]> {
  const { data } = await request.get("/search", {
    params: urlParams,
  });
  return data;
}
