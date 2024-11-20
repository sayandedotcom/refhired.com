import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parse from "html-react-parser";
import { Loader } from "lucide-react";
import { useSession } from "next-auth/react";

import { cn } from "@referrer/lib/utils/cn";
import { ScrollArea, Separator } from "@referrer/ui";

import { request } from "@/lib/axios";

import { useStore } from "@/store/store";

import { TDashboardRequestsData } from "@/types/posts";

import { Mail } from "../data";

interface MailListProps {
  items: Mail[];
  postId?: string;
}

export function RequestsList({ items, postId }: MailListProps) {
  const { data: session } = useSession();
  const setDisplayRequest = useStore((state) => state.setDisplayRequest);

  const { data, isLoading } = useQuery<TDashboardRequestsData>({
    queryKey: ["dashboard", "requests", postId],
    queryFn: () => {
      return request.get(`/dashboard/requests/${postId}`, {
        headers: {
          Authorization: `Bearer ${session.user.refresh_token}`,
        },
      });
    },
  });

  if (isLoading) {
    return <Loader className="mx-auto my-auto h-8 w-8 animate-spin" />;
  }

  if (data?.data?.data?.applied.length === 0) {
    return <div className="text-muted-foreground p-8 text-center">No request !</div>;
  }

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {data?.data?.data?.applied ? (
          <>
            {data?.data?.data?.applied.map((item) => (
              <>
                <button
                  key={item.id}
                  className={cn(
                    "hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
                    item.visibility === "Unread" && "bg-muted"
                  )}
                  onClick={() => setDisplayRequest(item)}>
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex items-start gap-4 text-sm">
                          <Image
                            id="profile-picture"
                            alt="img"
                            src={item.user.image ?? "/images/avatar/avatar.png"}
                            width={44}
                            height={44}
                            className="mx-auto cursor-pointer rounded-full"
                          />
                          <div className="grid gap-1">
                            <div className="font-semibold">{item.user.name}</div>
                            <div className="line-clamp-1 text-xs">@{item.user.userName}</div>
                            <div className="line-clamp-1 text-xs">
                              <span className="font-medium">{item.user.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "mb-auto ml-auto flex items-center gap-3 text-xs"
                          // mail.selected === item.id ? "text-foreground" : "text-muted-foreground"
                        )}>
                        {formatDistanceToNow(new Date(item.appliedAt), {
                          addSuffix: true,
                        })}
                        {item.visibility === "Unread" && (
                          <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-heading line-clamp-3 text-sm">
                    {parse(item.applyInfo.message)}
                  </div>
                  {/* {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null} */}
                </button>
                <Separator />
              </>
            ))}
          </>
        ) : (
          <div className="text-muted-foreground p-8 text-center">Click on a Post to see requests !</div>
        )}
      </div>
    </ScrollArea>
  );
}
