"use client";

import { NormalPost, ReferralPost } from "@/components/ui";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger, Input, Label } from "@referrer/ui";

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
