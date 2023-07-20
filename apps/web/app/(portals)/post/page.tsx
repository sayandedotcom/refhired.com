"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@referrer/ui";

import { NormalPost, ReferralPost } from "@/components/ui";

const Post = () => {
  return (
    <Tabs defaultValue="Referral" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Referral">Referral Post</TabsTrigger>
        <TabsTrigger value="Normal">Normal Post</TabsTrigger>
      </TabsList>
      <TabsContent value="Referral">
        <ReferralPost />
      </TabsContent>
      <TabsContent value="Normal">
        <NormalPost />
      </TabsContent>
    </Tabs>
  );
};

export default Post;
