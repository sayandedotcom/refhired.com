"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { expired, fromNow } from "@refhiredcom/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useInView } from "react-intersection-observer";

import { Button } from "@referrer/ui";

import { NewPosts, PostCard, PostCardSkeleton } from "@/components/custom-components";
import { PauseButton } from "@/components/custom-components/post-card/pause-button";
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

  const [showFetchedData, setShowFetchedData] = useState<TPosts>();

  const router = useRouter();

  const {
    data,
    isLoading: isInfiniteLoading,
    fetchNextPage,
    hasNextPage,
    isFetched: isInfiniteFetched,
    isFetchingPreviousPage,
  } = useInfiniteQuery<TPosts>({
    queryKey: ["timeline", "infinite"],
    queryFn: ({ pageParam = 0 }) => {
      return request.get("/timeline", {
        params: {
          skip: pageParam,
          take: 10,
        },
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (lastPage.data.data?.length < 10) {
        return undefined;
      }
      return allPages?.length * 10;
    },
  });

  const {
    data: refetchData,
    isFetched,
    isFetching,
    fetchStatus,
    isRefetching,
    isFetchedAfterMount,
    isSuccess,
  } = useQuery<TPosts>({
    queryKey: ["timeline", "morePosts"],
    queryFn: () => {
      return request.get("/timeline", {
        params: {
          skip: data?.pageParams?.length * 10,
          take: 10,
        },
      });
    },
    refetchInterval(query) {
      return data?.pageParams?.length > 1 ? 5000 : undefined; // Only set interval if pageParams exist
    },
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,

    // 5000 300000
    enabled: data?.pageParams?.length > 1,
  });

  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 0,
  });

  useEffect(() => {
    if (isSuccess && refetchData) {
      setShowFetchedData(refetchData);
    }
  }, [isSuccess, refetchData]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  if (isInfiniteLoading) {
    return <Loading />;
  }

  console.log(
    isFetchingPreviousPage,
    isInfiniteFetched,
    data?.pageParams?.length,
    refetchData,
    data.pageParams,
    data,
    isFetched,
    fetchStatus,
    isFetching,
    isFetchedAfterMount,
    isRefetching
  );

  return (
    <>
      {/* {isFetched && isFetching && (
        <Badge
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant",
            });
          }}
          className="fixed left-2/4 top-4 -translate-x-1/2 transform cursor-pointer">
          <ArrowUp />
          <AvatarCircles numPeople={10} avatarUrls={avatars} />
        </Badge>
      )} */}
      <NewPosts fetch={isRefetching && isRefetching} />
      {showFetchedData?.data?.data?.map((data) => (
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
              jobURL={data.jobURL}
              jobCode={data.jobCode}
            />
            <PostCard.Footer>
              <MultipleButtons>
                {/* <CommentButton /> */}
                <ShareButton link={`${data.user.userName}/posts/${data.id}`} title={data.description} />
                <BookmarkButton postId={data.id} />
                <ApplyStatus totalApplied={data.totalApplied} acceptLimit={data.acceptLimit} />
                {data.postType === "REFERRALPOST" && <StarButton star={data.stars} />}
              </MultipleButtons>
              {data.postType === "REFERRALPOST" && session?.user?.id === data.userId ? (
                <div className="flex items-center gap-3">
                  <PauseButton postId={data.id} isPause={data.isPause} />
                  <Button
                    disabled={data.totalApplied === 0}
                    onClick={() => {
                      router.push(`/dashboard/requests?postId=${data.id}`);
                    }}
                    className="h-9 rounded-full text-sm md:w-36">
                    {data.totalApplied > 0 ? "Explore Requests" : "No Applies"}
                  </Button>
                </div>
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
                  isPaused={data.isPause}
                />
              )}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
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
                jobURL={data.jobURL}
                jobCode={data.jobCode}
              />
              <PostCard.Footer>
                <MultipleButtons>
                  {/* <CommentButton /> */}
                  <ShareButton link={`${data.user.userName}/posts/${data.id}`} title={data.description} />
                  <BookmarkButton postId={data.id} />
                  <ApplyStatus totalApplied={data.totalApplied} acceptLimit={data.acceptLimit} />
                  {data.postType === "REFERRALPOST" && <StarButton star={data.stars} />}
                </MultipleButtons>
                {data.postType === "REFERRALPOST" && session?.user?.id === data.userId ? (
                  <div className="flex items-center gap-3">
                    <PauseButton postId={data.id} isPause={data.isPause} />
                    <Button
                      disabled={data.totalApplied === 0}
                      onClick={() => {
                        router.push(`/dashboard/requests?postId=${data.id}`);
                      }}
                      className="h-9 rounded-full text-sm md:w-36">
                      {data.totalApplied > 0 ? "Explore Requests" : "No Applies"}
                    </Button>
                  </div>
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
                    isPaused={data.isPause}
                  />
                )}
              </PostCard.Footer>
            </PostCard.Content>
          </PostCard>
        ))
      )}
      {!hasNextPage && (
        <div className="flex flex-col items-center justify-center p-9">
          <CheckCircle2 className="mb-3 h-10 w-10" />
          <h6 className="font-heading">You&apos;re all caught up</h6>
          <p className="text-sm">You&apos;ve seen all new posts !</p>
        </div>
      )}
      {hasNextPage && (
        <div ref={ref}>
          <PostCardSkeleton />
        </div>
      )}
    </>
  );
}
