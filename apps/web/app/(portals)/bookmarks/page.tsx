"use client";

import { useRouter } from "next/navigation";

import { expired, fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

import { PortalsNotFound } from "@/components/custom-components";
import { PostCard } from "@/components/custom-components";
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

import Loading from "../loading";

const Bookmarks = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["all", "bookmarks"],
    queryFn: () => {
      return request.get("/bookmarks", {
        headers: {
          Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
        },
      });
    },
    refetchOnWindowFocus: false,
  });

  if (!session) {
    return <PortalsNotFound text="Bookmarks" />;
  }

  if (data?.data?.data?.length === 0) {
    return <PortalsNotFound text="Bookmarks" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.data?.data?.map((data) => (
        <PostCard key={data.posts.id}>
          <PostCard.Image
            src={data.posts.user?.image ?? "/images/avatar/avatar.png"}
            name={data.posts.user?.name}
            userName={data.posts.user?.userName}
            bio={data.posts.user?.bio}
          />
          <PostCard.Content>
            <PostCard.Header
              name={data.posts.user?.name}
              userName={data.posts.user?.userName}
              image={data.posts.user?.image ?? "/images/avatar/avatar.png"}
              bio={data.posts.user?.bio}
              time={fromNow(data.posts.createdAt)}
              timeLeft={data.posts.expiresAt ? fromNow(data.posts.expiresAt) : "No Expiry"}
              postType={data.posts.postType}
              isAuthor={session?.user?.id === data.posts.userId}
              expired={expired(data.posts.expiresAt)}
            />
            <Navigate userName={data.posts.user.userName} postId={data.posts.id}>
              <PostCard.Description showMore={true}>{data.posts.description}</PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
              companyName={data.posts.companyName}
              locationType={data.posts.jobLocationType}
              location={data.posts.jobLocation}
              experience={data.posts.jobExperience}
              jobType={data.posts.jobType}
              role={data.posts.jobRole}
              salary={data.posts.jobCompensation}
              postType={data.posts.postType}
            />
            <PostCard.Footer>
              <MultipleButtons>
                {/* <CommentButton /> */}
                <ShareButton
                  link={`${data.posts.user.userName}/posts/${data.posts.id}`}
                  title={data.posts.description}
                />
                <BookmarkButton postId={data.posts.id} />
                <ApplyStatus totalApplied={data.posts.totalApplied} acceptLimit={data.posts.acceptLimit} />
                {data.posts.postType != "POST" && data.posts.postType != "FINDREFERRER" && (
                  <StarButton star={data.posts.stars} />
                )}
              </MultipleButtons>
              {session?.user?.id === data.posts.userId ? (
                data.posts.totalApplied > 0 ? (
                  <Button
                    onClick={() => {
                      router.push(`/dashboard/requests?postId=${data.posts.id}`);
                    }}
                    className="h-9 rounded-full text-sm md:w-36">
                    Explore Requests
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      router.push(`/dashboard/requests?postId=${data.posts.id}`);
                    }}
                    className="h-9 rounded-full text-sm md:w-36">
                    No applies yet
                  </Button>
                )
              ) : (
                <ApplyDialog
                  postType={data.posts.postType}
                  myObject={data.posts.accept}
                  postId={data.posts.id}
                  stars={data.posts.stars}
                  totalApplied={data.posts.totalApplied}
                  acceptLimit={data.posts.acceptLimit}
                  authorId={data.posts.userId}
                  expired={expired(data.posts.expiresAt)}
                />
              )}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
};

export default Bookmarks;
