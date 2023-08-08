import { Metadata } from "next";

import { getPostBySlug } from "@/lib/getData";

interface PostProps {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostBySlug(params.postId);
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/post/${post.id}`, // Canonical url for the post
      languages: {
        "en-CA": `en-CA/post/${post.id}`, // English (Canada) language website
      },
    },
  };
}

export const metadata: Metadata = {
  title: "Profile",
  description: "Get job referrals to the top best companies of the world",
};

export default function Post() {
  return <div>Post</div>;
}
