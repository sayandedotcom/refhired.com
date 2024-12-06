"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { expired, fromNow } from "@refhiredcom/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import { useSession } from "next-auth/react";
import { useInView } from "react-intersection-observer";

import { Button } from "@referrer/ui";

import { PostCard, PostCardSkeleton } from "@/components/custom-components";
import {
  ApplyStatus,
  BookmarkButton,
  MultipleButtons,
  ShareButton,
  StarButton,
} from "@/components/custom-components/post-card/post-buttons";
import Navigate from "@/components/navigate";
import { ApplyDialog } from "@/components/ui";

import { request } from "@/lib/axios";

import { TPosts } from "@/types/types";

import Loading from "../loading";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<TPosts>({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 0 }) => {
      return request.get("/posts", {
        params: {
          skip: pageParam,
          take: 10,
        },
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      // return allPages.length * 10;
      if (lastPage.data && lastPage.data.data.length > 0) {
        return allPages.length * 10; // Calculate the next skip value
      }
      return null; // Stop fetching when no more items
    },
  });

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.pages?.map((page) =>
        page?.data?.data?.map((data) => (
          <PostCard key={data.id}>
            <PostCard.Image
              src={data.user?.image ?? "/images/avatar/avatar.png"}
              name={data.user?.name}
              userName={data.user?.userName}
              bio={data.user?.bio}
            />
            <PostCard.Content>
              <PostCard.Header
                name={data.user?.name}
                userName={data.user?.userName}
                image={data.user?.image ?? "/images/avatar/avatar.png"}
                bio={data.user?.bio}
                time={fromNow(data.createdAt)}
                timeLeft={data.expiresAt ? fromNow(data.expiresAt) : "No Expiry"}
                postType={data.postType}
                isAuthor={session?.user?.id === data.userId}
                expired={expired(data.expiresAt)}
              />
              <Navigate userName={data.user.userName} postId={data.id}>
                <PostCard.Description showMore={true}>{data.description}</PostCard.Description>
              </Navigate>
              <PostCard.Tags
                allTags={false}
                companyName={data.companyName}
                locationType={data.jobLocationType}
                location={data.jobLocation}
                experience={data.jobExperience}
                jobType={data.jobType}
                role={data.jobRole}
                salary={data.jobCompensation}
                postType={data.postType}
              />
              <PostCard.Footer>
                <MultipleButtons>
                  {/* <CommentButton /> */}
                  <ShareButton link={`${data.user.userName}/posts/${data.id}`} title={data.description} />
                  <BookmarkButton postId={data.id} />
                  <ApplyStatus totalApplied={data.totalApplied} acceptLimit={data.acceptLimit} />
                  {data.postType === "REFERRALPOST" && <StarButton star={data.stars} />}
                </MultipleButtons>
                {session?.user?.id === data.userId ? (
                  data.totalApplied > 0 ? (
                    <Button
                      onClick={() => {
                        router.push(`/dashboard/requests?postId=${data.id}`);
                      }}
                      className="h-9 rounded-full text-sm md:w-36">
                      Explore Requests
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        router.push(`/dashboard/requests?postId=${data.id}`);
                      }}
                      className="h-9 rounded-full text-sm md:w-36">
                      No applies yet
                    </Button>
                  )
                ) : (
                  <ApplyDialog
                    postType={data.postType}
                    myObject={data.accept}
                    postId={data.id}
                    stars={data.stars}
                    totalApplied={data.totalApplied}
                    acceptLimit={data.acceptLimit}
                    authorId={data.userId}
                    expired={expired(data.expiresAt)}
                  />
                )}
              </PostCard.Footer>
            </PostCard.Content>
          </PostCard>
        ))
      )}
      {!hasNextPage && (
        <div className="flex flex-col items-center justify-center p-9">
          <CircleCheck className="mb-3 h-10 w-10" />
          <h6 className="font-heading">You&apos;re all caught up</h6>
          <p className="text-sm">You&apos;ve seen all new posts !</p>
        </div>
      )}
      {isFetchingNextPage && (
        <div ref={ref}>
          <PostCardSkeleton />
        </div>
      )}
    </>
  );
}
