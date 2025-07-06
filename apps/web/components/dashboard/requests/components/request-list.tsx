import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useMutation, useQuery } from "@tanstack/react-query";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parse from "html-react-parser";
import { CheckCircle2, Loader, XCircle } from "lucide-react";
import { useSession } from "next-auth/react";

import { cn } from "@/utils";
import { ScrollArea, Separator } from "@referrer/ui";

import { Badge } from "@/components/ui";

import { request } from "@/lib/axios";

import { useStore } from "@/store/store";

import { TDashboardRequestsData } from "@/types/posts";

export function RequestsList() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const postId = searchParams.get("postId");
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
    // staleTime: 20 * 60 * 1000,
  });

  const { mutate, variables } = useMutation({
    mutationKey: ["dashboard", "requests", "read", postId],
    mutationFn: ({ visibility }: { visibility: "Read" }) => {
      return request.patch(`/dashboard/requests/${postId}`, {
        headers: {
          Authorization: `Bearer ${session.user.refresh_token}`,
        },
      });
    },
    // staleTime: 20 * 60 * 1000,
  });

  const displayRequest = (item) => {
    setDisplayRequest(item);
    mutate({ visibility: "Read" });
  };

  if (!postId) {
    return <div className="text-muted-foreground p-8 text-center">Click on a Post to see requests !</div>;
  }

  if (isLoading) {
    return <Loader className="mx-auto my-auto h-8 w-8 animate-spin" />;
  }

  if (data?.data?.data?.applied.length === 0) {
    return <div className="text-muted-foreground p-8 text-center">No request !</div>;
  }

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {data?.data?.data?.applied.map((item) => (
          <>
            <button
              key={item.id}
              className={cn(
                "hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
                variables?.visibility === "Read" || item.visibility === "Read" ? "" : "bg-muted/40"
              )}
              onClick={() => displayRequest(item)}>
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
                    {variables?.visibility === "Read" || item.visibility === "Read" ? (
                      <></>
                    ) : (
                      // item.visibility === "Unread" && (
                      <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                      // )
                    )}
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground font-heading line-clamp-3 text-sm">
                {parse(item.applyInfo.message)}
              </div>
              <div className="flex w-full justify-end gap-2">
                {item?.reply ? (
                  <Badge variant="secondary">
                    <CheckCircle2 className="h-3" /> Responded
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <XCircle className="h-3" /> Not Responded
                  </Badge>
                )}
                {item?.status === "Accepted" && (
                  <Badge variant="default">
                    <CheckCircle2 className="h-3" /> Accepted
                  </Badge>
                )}
                {item?.status === "Rejected" && (
                  <Badge variant="destructive">
                    <XCircle className="h-3" /> Rejected
                  </Badge>
                )}
              </div>
            </button>
            <Separator />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
