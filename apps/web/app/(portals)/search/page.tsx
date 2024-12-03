"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { expired, fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Frown, Smile } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

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

const SearchPage = () => {
  const { data: session } = useSession();

  const searchParams = useSearchParams();

  const router = useRouter();

  const { data, isLoading, error, isError } = useQuery<TPosts>({
    queryKey: ["search", searchParams.toString()],
    queryFn: () => {
      return request.get(`/search?${searchParams.toString()}`);
    },
    refetchOnWindowFocus: false,
  });

  console.log(data, error, isError);

  return (
    <>
      {/* <SearchBar /> */}
      {/* <PlaceholdersAndVanishInput
        showSugession={true}
        className={"sticky top-0 m-2 flex items-center gap-1 md:mx-auto md:gap-2 lg:w-7/12"}
        searchIconWidth={"w-[10%]"}
      /> */}
      {/* <Separator /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.data?.data === null ? (
            <div className="font-heading text-muted-foreground flex h-full flex-col items-center justify-center">
              <Smile className="h-10 w-10" />
              <h5>Search anything to get started!</h5>
            </div>
          ) : (
            data?.data?.data?.map((data) => (
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
                  />
                  <PostCard.Footer>
                    <MultipleButtons>
                      {/* <CommentButton /> */}
                      <ShareButton link={`${data.user.userName}/posts/${data.id}`} title={data.description} />
                      <BookmarkButton postId={data.id} />
                      <ApplyStatus totalApplied={data.totalApplied} acceptLimit={data.acceptLimit} />
                      <StarButton star={data.stars} />
                    </MultipleButtons>
                    {session?.user?.id === data.userId ? (
                      data.totalApplied > 0 && (
                        <Button
                          onClick={() => {
                            router.push(`/dashboard/requests?postId=${data.id}`);
                          }}
                          className="h-9 rounded-full text-sm md:w-36">
                          Explore Requests
                        </Button>
                      )
                    ) : (
                      <ApplyDialog
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
        </>
      )}
      {axios.isAxiosError(error) && error?.response.status === 404 && (
        <div className="font-heading text-muted-foreground flex h-full flex-col items-center justify-center">
          <Frown className="h-10 w-10" />
          <h5>No results found !</h5>
          <h6>Try adjusting your filters or searching with different keywords.</h6>
        </div>
      )}
    </>
  );
};

export default SearchPage;

// const search_query = searchParams.get("search_query");
// const jobURL = searchParams.get("jobURL");
// const jobCode = searchParams.get("jobCode");
// const postType = searchParams.getAll("postType");
// const companyName = searchParams.getAll("companyName");
// const jobExperience = searchParams.getAll("jobExperience");
// const jobType = searchParams.getAll("jobType");
// const jobRole = searchParams.getAll("jobRole");
// const skills = searchParams.getAll("skills");
// const jobLocation = searchParams.getAll("jobLocation");
