import { Metadata } from "next";

import { expired, fromNow } from "@refhiredcom/utils";

import { PostCard } from "@/components/custom-components";
import {
  ApplyStatus,
  BookmarkButton,
  MultipleButtons,
  ShareButton,
  StarButton,
} from "@/components/custom-components/post-card/post-buttons";
import { ApplyDialog } from "@/components/ui";

import { auth } from "@/lib/auth";
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

export const metadata: Metadata = {
  title: "Posts",
  description: "Get job referrals to the top best companies of the world",
};

export default async function Post({ params }: PostProps) {
  const session = await auth();

  const { data } = (await request.get<TPostsData>(`/posts/${params.postId}`)).data;

  return (
    <>
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
          <PostCard.Description showMore={false}>{data.description}</PostCard.Description>
          <PostCard.Tags
            allTags={true}
            companyName={data.companyName}
            locationType={data.jobLocationType}
            location={data.jobLocation}
            experience={data.jobExperience}
            jobType={data.jobType}
            role={data.jobRole}
            salary={data.jobCompensation}
            skills={data.tags}
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
              // <Button
              //   onClick={() => {

              //     router.push(`/dashboard/requests/${data.id}`);
              //   }}
              //   className="h-9 rounded-full text-sm md:w-36">
              //   Requests
              // </Button>
              <></>
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
    </>
  );
}
