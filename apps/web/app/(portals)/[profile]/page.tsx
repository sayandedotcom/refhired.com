import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { fromNow } from "@refhiredcom/utils";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Button, Separator } from "@referrer/ui";

import { PostCard } from "@/components/custom-components";
import { MultipleButtons } from "@/components/custom-components/post-card/post-buttons";
import Navigate from "@/components/navigate";
import { ApplyDialog } from "@/components/ui";

import { request } from "@/lib/axios";

export const metadata: Metadata = {
  title: "Profile",
  description: "Get job referrals to the top best companies of the world",
};

type paramsProps = {
  params: { profile: string };
};

async function getProfile(profile) {
  const response = await request.get(`/username/${profile}`);

  return response.data;
}

const Profile = async ({ params }: paramsProps) => {
  const { profile } = params;

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
          <h6 className="font-sans">Profile donot exists</h6>
          <Link href={"/auth/login"}>
            <Button>
              Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <Separator />
      </>
    );

  const { data } = await getProfile(profile);

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
      <div className="flex w-11/12 flex-col items-center gap-2 p-2">
        <Image
          alt="img"
          src={data.image ?? "/images/avatar/avatar.png"}
          width={120}
          height={120}
          className="cursor-pointer rounded-full"
        />
        <p>@{data.userName}</p>
        <p className="text-center text-sm md:text-lg">{data.name}</p>
        <div className="flex gap-3">
          <Mail />
          <span>{data.email}</span>•<MapPin />
          <span>Kolkata</span>•<p>{fromNow(data.createdAt)}</p>
        </div>
        {/* {session?.user.id === data?.id && (
          <Link
            href="/settings/profile"
            className={cn(
              "focus-visible:ring-ring ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-lg  px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            )}>
            Edit Profile
          </Link>
        )} */}
      </div>
      <Separator />
      {data?.posts.map((postData) => (
        <PostCard key={postData.id}>
          <PostCard.Image src={data?.image ?? "/images/avatar/avatar.png"} />
          <PostCard.Content>
            <PostCard.Header
              name={data?.name}
              userName={data?.userName}
              time={fromNow(postData.createdAt)}
              timeLeft={fromNow(postData.expiresAt)}
            />
            <Navigate userName={data.userName} postId={postData.id}>
              <PostCard.Description>{postData.description}</PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
              location={postData.jobLocation}
              experience={postData.jobExperience}
              jobType={postData.jobType}
              role={postData.jobRole}
              salary={postData.jobCompensation}
              // skills={postData.tags}
            />
            <PostCard.Footer>
              <MultipleButtons />
              <ApplyDialog
                myObject={data.accept}
                postID={data.id}
                stars={data.stars}
                totalApplied={data.totalApplied}
                acceptLimit={data.acceptLimit}
                // expired={data.expiresAt}
              />
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
};

export default Profile;
