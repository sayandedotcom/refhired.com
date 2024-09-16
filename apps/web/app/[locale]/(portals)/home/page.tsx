"use client";

import { fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";

import { PostCard } from "@/components/custom-components";
import { MultipleButtons } from "@/components/custom-components/post-card/post-buttons";
import Navigate from "@/components/navigate";

import { request } from "@/lib/axios";

import Loading from "../loading";

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return request.get(
        "/posts"
        // , {
        // headers: {
        //   name: "Sayan De from Client Component",
        // },
        // }
      );
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.data?.data.map((data) => (
        <PostCard key={data.id}>
          <PostCard.Image src={data.user?.image ?? "/images/avatar/avatar.png"} />
          <PostCard.Content>
            <PostCard.Header
              name={data.user?.name}
              userName={`@${data.user?.userName}`}
              time={fromNow(data.createdAt)}
              timeLeft={fromNow(data.expiresAt)}
            />
            <Navigate userName={data.user.userName} postId={data.id}>
              <PostCard.Description>{data.description}</PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
              location={data.jobLocation}
              experience={data.jobExperience}
              jobType={data.jobType}
              role={data.jobRole}
              salary={data.jobCompensation}
              // skills={data.tags}
            />
            <PostCard.Footer>
              <MultipleButtons link={`${data.user.userName}/${data.id}`} title={data.description} />
              {/* <ApplyDialog
                myObject={data.accept}
                postID={data.id}
                stars={data.stars}
                totalApplied={data.totalApplied}
                acceptLimit={data.acceptLimit}
                expired={expired(data.expiresAt)}
              /> */}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
}
