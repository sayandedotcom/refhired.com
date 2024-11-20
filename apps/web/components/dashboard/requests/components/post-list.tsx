import Link from "next/link";

import { StopwatchIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parse from "html-react-parser";
import { ArrowUpRight, Loader, Star, User } from "lucide-react";
import { useSession } from "next-auth/react";

import { cn } from "@referrer/lib/utils/cn";
import { ScrollArea, Separator } from "@referrer/ui";

import { Badge, TooltipDemo } from "@/components/ui";

import { request } from "@/lib/axios";

import { useStore } from "@/store/store";

import { TDashboardPostsData } from "@/types/posts";

interface PostListProps {
  postId?: string;
  setPostId?: any;
}

export function PostsList({ postId, setPostId }: PostListProps) {
  const { data: session } = useSession();
  const setDisplayRequest = useStore((state) => state.setDisplayRequest);

  const { data, isLoading } = useQuery<TDashboardPostsData>({
    queryKey: ["dashboard", "requests"],
    queryFn: () => {
      return request.get("/dashboard/requests", {
        params: {
          userId: session.user.id,
        },
        headers: {
          Authorization: `Bearer ${session.user.refresh_token}`,
        },
      });
    },
  });

  if (isLoading) {
    return <Loader className="mx-auto my-auto h-8 w-8 animate-spin" />;
  }

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {data?.data?.data?.posts.map((item) => (
          <button
            key={item.id}
            className={cn(
              "hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
              postId === item.id && "bg-muted"
            )}
            onClick={() => {
              setPostId(item.id);
              setDisplayRequest(null);
            }}>
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between">
                <Badge variant="default">Referral Post</Badge>
                <div
                  className={cn(
                    "ml-auto text-xs"
                    // mail.selected === item.id ? "text-foreground" : "text-muted-foreground"
                  )}>
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              {/* <div className="text-xs font-medium">{item.subject}</div> */}
            </div>
            <div className={cn("text-muted-foreground font-heading line-clamp-3 text-sm")}>
              {parse(item.description)}
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Link
                href={`/${session.user.userName}/posts/${item.id}`}
                className={cn("text-muted-foreground line-clamp-2 flex h-5 items-center gap-1")}>
                <ArrowUpRight id="options" className="h-full" />
              </Link>
              <div className={cn("text-muted-foreground line-clamp-2 flex h-5 items-center gap-1")}>
                <Star id="options" className="h-full" /> <p className="text-xs">{item.stars}</p>
              </div>
              <div className={cn("text-muted-foreground line-clamp-2 flex h-5 items-center gap-1")}>
                <User id="options" className="h-full" /> <p className="text-xs">{item.totalApplied}</p>
              </div>
              <div className={cn("text-muted-foreground line-clamp-2 flex h-5 items-center gap-1")}>
                <StopwatchIcon id="options" className="h-full" /> <p className="text-xs">Expired</p>
              </div>
              <TooltipDemo text={`${item.totalApplied} / ${item.acceptLimit} Applied`}>
                <div
                  className={`flex items-center text-base ${
                    item.totalApplied === item.acceptLimit ? "text-red-600" : ""
                  } ${item.acceptLimit ? "" : "hidden"} `}>
                  <svg height="18" width="18" viewBox="0 0 20 20">
                    <circle r="10" cx="10" cy="10" fill="#a1a1aa" />
                    <circle
                      r="5"
                      cx="10"
                      cy="10"
                      fill="transparent"
                      stroke={item.totalApplied === item.acceptLimit ? "#cb2424" : "#ffff"}
                      strokeWidth="10"
                      strokeDasharray={`calc(${
                        item.acceptLimit ? Math.round((100 / item.acceptLimit) * item.totalApplied) : 0
                      } * 31.4 / 100) 31.4`}
                      transform="rotate(-90) translate(-20)"
                    />
                    <circle r="6" cx="10" cy="10" fill="black" />
                  </svg>
                </div>
              </TooltipDemo>
            </div>
          </button>
        ))}
      </div>
      <Separator />
    </ScrollArea>
  );
}
