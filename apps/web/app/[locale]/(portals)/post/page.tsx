"use client";

import dynamic from "next/dynamic";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@referrer/ui";

import { useStore } from "@/store/store";

const DynamicReferralPost = dynamic(() => import("@/components/ui/post-forms/referral-post"), {
  loading: () => <p>Loading...</p>,
});

const DynamicNormalPost = dynamic(() => import("@/components/ui/post-forms/normal-post"), {
  loading: () => <p>Loading...</p>,
});

const DynamicFindReferrer = dynamic(() => import("@/components/ui/post-forms/find-referrer"), {
  loading: () => <p>Loading...</p>,
});

const DynamicDrafts = dynamic(() => import("@/components/ui/post-forms/drafts"), {
  loading: () => <p>Loading...</p>,
});

const Post = () => {
  const postType = useStore((state) => state.postType);
  return (
    <Tabs defaultValue={postType ?? "Referral"} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="Referral">Referral Post</TabsTrigger>
        <TabsTrigger value="Find">Find Referer</TabsTrigger>
        <TabsTrigger value="Normal">Post</TabsTrigger>
        <TabsTrigger value="Drafts">Drafts</TabsTrigger>
      </TabsList>
      <TabsContent value="Referral">
        <DynamicReferralPost />
      </TabsContent>
      <TabsContent value="Find">
        <DynamicFindReferrer />
      </TabsContent>
      <TabsContent value="Normal">
        <DynamicNormalPost />
      </TabsContent>
      <TabsContent value="Drafts">
        <DynamicDrafts />
      </TabsContent>
    </Tabs>
  );
};

export default Post;
