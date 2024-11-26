"use client";

import Image from "next/image";
import Link from "next/link";

import { expired, fromNow } from "@refhiredcom/utils";
import { Calendar, Mail, MapPin } from "lucide-react";
import { useSession } from "next-auth/react";

import { Separator } from "@referrer/ui";

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

import { cn } from "@/utils";

export function ProfilePage({ data }) {
  const { data: session } = useSession();
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
          <Link
            href="/settings/profile"
            className={cn(
              "focus-visible:ring-ring ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-lg  px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            )}>
            Edit Profile
          </Link>
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
                <StarButton star={data.stars} />
              </MultipleButtons>
              {session?.user.id === data.id ? (
                <></>
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
