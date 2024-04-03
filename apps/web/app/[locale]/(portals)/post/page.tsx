"use client";

import { useCallback } from "react";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@referrer/ui";

import Loading from "../../loading";

const DynamicReferralPost = dynamic(() => import("@/components/ui/post-forms/referral-post"), {
  loading: () => <Loading />,
});

const DynamicNormalPost = dynamic(() => import("@/components/ui/post-forms/normal-post"), {
  loading: () => <Loading />,
});

const DynamicFindReferrer = dynamic(() => import("@/components/ui/post-forms/find-referrer"), {
  loading: () => <Loading />,
});

const DynamicDrafts = dynamic(() => import("@/components/ui/post-forms/drafts"), {
  loading: () => <Loading />,
});

type TabParams = { tab: "referral" | "find" | "normal" | "drafts" };

export default function Post() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  // const postType = useStore((state) => state.postType);
  return (
    <Tabs activationMode="manual" defaultValue={searchParams.get("tab")} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger
          onClick={() => {
            router.push(pathName + "?" + createQueryString("tab", "referral"));
          }}
          value="referral">
          Referral Post
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            router.push(pathName + "?" + createQueryString("tab", "find"));
          }}
          value="find">
          Find Referer
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            router.push(pathName + "?" + createQueryString("tab", "normal"));
          }}
          value="normal">
          Post
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            router.push(pathName + "?" + createQueryString("tab", "drafts"));
          }}
          value="drafts">
          Drafts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="referral">
        <DynamicReferralPost />
      </TabsContent>
      <TabsContent value="find">
        <DynamicFindReferrer />
      </TabsContent>
      <TabsContent value="normal">
        <DynamicNormalPost />
      </TabsContent>
      <TabsContent value="drafts">
        <DynamicDrafts />
      </TabsContent>
    </Tabs>
  );
}
