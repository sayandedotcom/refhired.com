"use client";

import { fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

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

import { TPosts } from "@/types/types";

import Loading from "../loading";

export default function Home() {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery<TPosts>({
    queryKey: ["posts"],
    queryFn: () => {
      return request.get("/posts");
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.data?.data?.map((data) => (
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
            />
            <PostCard.Footer>
              <MultipleButtons>
                {/* <CommentButton /> */}
                <ShareButton link={`${data.user.userName}/posts/${data.id}`} title={data.description} />
                <BookmarkButton />
                <ApplyStatus totalApplied={data.totalApplied} acceptLimit={data.acceptLimit} />
                <StarButton star={data.stars} />
              </MultipleButtons>
              {session?.user?.id === data.userId ? (
                <></>
              ) : (
                // <Button className="h-9 rounded-full text-sm md:w-36">Analytics</Button>
                <ApplyDialog
                  myObject={data.accept}
                  postId={data.id}
                  stars={data.stars}
                  totalApplied={data.totalApplied}
                  acceptLimit={data.acceptLimit}
                  authorId={data.userId}
                  // expired={expired(data.expiresAt)}
                />
              )}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
}
