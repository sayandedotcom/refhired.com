"use client";

import { fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";

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
          <PostCard.Image src={data.user?.image ?? "/images/avatar/avatar.png"} />
          <PostCard.Content>
            <PostCard.Header
              name={data.user?.name}
              userName={data.user?.userName}
              time={fromNow(data.createdAt)}
              timeLeft={data.expiresAt ? fromNow(data.expiresAt) : "No Expiry"}
              postType={data.postType}
            />
            <Navigate userName={data.user.userName} postId={data.id}>
              <PostCard.Description showMore={true}>
                {data.description.substring(0, 300)}
              </PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
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
              <ApplyDialog
                myObject={data.accept}
                postID={data.id}
                stars={data.stars}
                totalApplied={data.totalApplied}
                acceptLimit={data.acceptLimit}
                // expired={expired(data.expiresAt)}
              />
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
}
