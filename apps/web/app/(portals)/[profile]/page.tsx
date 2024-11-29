"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Loading from "@/app/loading";
import { expired, fromNow } from "@refhiredcom/utils";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Mail, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button, Separator } from "@referrer/ui";

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

import { cn } from "@/utils";

import { TProfile } from "@/types/types";

type paramsProps = {
  params: { profile: string };
};

export default function ProfilePage({ params }: paramsProps) {
  const { profile } = params;
  const { data: session } = useSession();
  const router = useRouter();

  const {
    data: profileData,
    error,
    isStale,
    isLoading,
    isFetching,
  } = useQuery<TProfile>({
    queryKey: ["username", profile],
    queryFn: () => {
      return request.get(`/username/${profile}`);
    },
    // refetchInterval: 5000,
    // staleTime: 200000,
    // gcTime: Infinity,
  });

  const data = profileData?.data?.data;

  console.log(isLoading, isFetching, isStale);

  if (profile === "profile")
    return (
      <>
        <div className="font-heading flex flex-col items-center gap-2 p-2">
          <Image
            alt="img"
            src="/images/avatar/avatar.png"
            width={120}
            height={120}
            className="rounded-full"
          />
          <h6 className="font-sans">Get your profile !</h6>
          <Link href={"/auth/login"}>
            <Button>
              Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <Separator />
      </>
    );

  if (isLoading) return <Loading />;

  if (!data)
    return (
      <>
        <div className="font-heading flex flex-col items-center gap-2 p-2">
          <Image
            alt="img"
            src="/images/avatar/avatar.png"
            width={120}
            height={120}
            className="rounded-full"
          />
          <h6>@{profile}</h6>
          <h4>This account doesn’t exist</h4>
          <h6 className="font-sans">Try searching for another.</h6>
        </div>
        <Separator />
      </>
    );

  return (
    <>
      <div className="flex flex-col items-center gap-2 p-2">
        <Image
          alt="img"
          src={data.image ?? "/images/avatar/avatar.png"}
          width={120}
          height={120}
          className="cursor-pointer rounded-full"
        />
        <p className="font-heading text-center text-sm md:text-xl">{data.name}</p>
        <p>@{data?.userName}</p>
        <span>{data?.bio}</span>
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-2">
            <Mail className="h-6" />
            <span>{data?.email}</span>
          </div>
          {data?.location && (
            <div className="flex gap-2">
              <MapPin />
              <span>{data.location}</span>
            </div>
          )}
          <div className="flex gap-2">
            <Calendar className="h-5" />
            <span>Joined {fromNow(data.createdAt)}</span>
          </div>
          {/* <div className="flex gap-2">
            <BriefcaseBusiness />
            <span>{data?.workingAt}</span>
          </div> */}
        </div>
        {session?.user.userName === data?.userName && (
          <Button
            onClick={() => {
              router.push("/settings/profile");
            }}
            className={cn("rounded-3xl")}>
            Edit Profile
          </Button>
        )}
      </div>
      <Separator />
      {data?.posts.map((postData) => (
        <PostCard key={postData.id}>
          <PostCard.Image
            src={data?.image ?? "/images/avatar/avatar.png"}
            name={data.name}
            userName={data.userName}
            bio={data.bio}
          />
          <PostCard.Content>
            <PostCard.Header
              name={data.name}
              userName={data.userName}
              image={data.image ?? "/images/avatar/avatar.png"}
              bio={data.bio}
              time={fromNow(data.createdAt)}
              timeLeft={postData.expiresAt ? fromNow(postData.expiresAt) : "No Expiry"}
              postType={postData.postType}
              isAuthor={session?.user?.id === data.id}
              expired={expired(postData.expiresAt)}
            />
            <Navigate userName={data.userName} postId={data.id}>
              <PostCard.Description showMore={true}>
                {postData.description.substring(0, 350).concat(" ...")}
              </PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
              companyName={postData.companyName}
              locationType={postData.jobLocationType}
              location={postData.jobLocation}
              experience={postData.jobExperience}
              jobType={postData.jobType}
              role={postData.jobRole}
              salary={postData.jobCompensation}
            />
            <PostCard.Footer>
              <MultipleButtons>
                {/* <CommentButton /> */}
                <ShareButton link={`${data.userName}/posts/${data.id}`} title={postData.description} />
                <BookmarkButton />
                <ApplyStatus totalApplied={postData.totalApplied} acceptLimit={postData.acceptLimit} />
                <StarButton star={postData.stars} />
              </MultipleButtons>
              {session?.user.id === data.id ? (
                postData.totalApplied > 0 && (
                  <Button
                    onClick={() => {
                      router.push(`/dashboard/requests?postId=${data.id}`);
                    }}
                    className="h-9 rounded-full text-sm md:w-36">
                    Explore Requests
                  </Button>
                )
              ) : (
                // <Button className="h-9 rounded-full text-sm md:w-36">Analytics</Button>
                <ApplyDialog
                  myObject={postData.accept}
                  postId={postData.id}
                  stars={postData.stars}
                  totalApplied={postData.totalApplied}
                  acceptLimit={postData.acceptLimit}
                  authorId={postData.userId}
                  expired={expired(postData.expiresAt)}
                />
              )}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
}
