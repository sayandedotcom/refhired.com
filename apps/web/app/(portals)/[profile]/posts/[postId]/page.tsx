"use client";

import { useRouter } from "next/navigation";

import Loading from "@/app/(portals)/loading";
import { expired, fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

import { PostCard } from "@/components/custom-components";
import { PauseButton } from "@/components/custom-components/post-card/pause-button";
import {
  ApplyStatus,
  BookmarkButton,
  MultipleButtons,
  ShareButton,
  StarButton,
} from "@/components/custom-components/post-card/post-buttons";
import { ApplyDialog } from "@/components/ui";

import { request } from "@/lib/axios";

import { TPostsData } from "@/types/types";

interface PostProps {
  params: {
    postId: string;
  };
}

// export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
//   const post = await getPostBySlug(params.postId);
//   if (!post)
//     return {
//       title: "Not Found",
//       description: "The page is not found",
//     };

//   return {
//     title: post.title,
//     description: post.description,
//     alternates: {
//       canonical: `/post/${post.id}`, // ! Canonical url for the post
//       languages: {
//         "en-CA": `en-CA/post/${post.id}`, // ! English (Canada) language website
//       },
//     },
//   };
// }

export default function Post({ params }: PostProps) {
  const { data: session } = useSession();

  const router = useRouter();

  const {
    data: postData,
    error,
    isStale,
    isLoading,
    isFetching,
  } = useQuery<TPostsData>({
    queryKey: ["posts", params.postId],
    queryFn: () => {
      return request.get(`/posts/${params.postId}`);
    },
    // refetchInterval: 5000,
    // staleTime: 200000,
    // gcTime: Infinity,
  });
  const data = postData?.data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PostCard key={data.id}>
        <PostCard.Image
          src={data?.user?.image ?? "/images/avatar/avatar.png"}
          name={data?.user?.name}
          userName={data?.user?.userName}
          bio={data?.user?.bio}
        />
        <PostCard.Content>
          <PostCard.Header
            name={data?.user?.name}
            userName={data?.user?.userName}
            image={data?.user?.image ?? "/images/avatar/avatar.png"}
            bio={data?.user?.bio}
            time={fromNow(data.createdAt)}
            timeLeft={data.expiresAt ? fromNow(data.expiresAt) : "No Expiry"}
            postType={data.postType}
            isAuthor={session?.user?.id === data.userId}
            expired={expired(data.expiresAt)}
          />
          <PostCard.Description>{data.description}</PostCard.Description>
          <PostCard.Tags
            allTags
            skills={data.tags}
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
    </>
  );
}
