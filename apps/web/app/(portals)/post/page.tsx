"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@referrer/ui";

import { Drafts, FindReferrer, NormalPost, ReferralPost } from "@/components/ui";

import { useStore } from "@/store/store";

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
        <ReferralPost />
      </TabsContent>
      <TabsContent value="Find">
        <FindReferrer />
      </TabsContent>
      <TabsContent value="Normal">
        <NormalPost />
      </TabsContent>
      <TabsContent value="Drafts">
        <Drafts />
      </TabsContent>
    </Tabs>
  );
};

export default Post;
