import { Metadata } from "next";
import dynamic from "next/dynamic";

import { unstable_setRequestLocale } from "next-intl/server";

import { PortalsNotFound } from "@/components/custom-components";

import { getServerAuthSession } from "@/lib/auth";
import { request } from "@/lib/axios";

import Loading from "../../loading";

export const metadata: Metadata = {
  title: "Applied",
  description: "Get job referrals to the top best companies of the world",
};

const DynamicAppliedDataTable = dynamic(() => import("@/components/applied/applied-data-table"), {
  loading: () => <Loading />,
});

async function getAllAppliedPosts() {
  const response = await request.get("/apply");

  return response.data;
}

const transformArray = (originalData) => {
  const transformedArray = [];

  originalData?.forEach((appliedInfo) => {
    const transformedObj = {
      id: appliedInfo.id,
      sent: appliedInfo.appliedAt,
      // status: "Read",
      post: appliedInfo.posts.description.slice(0, 17) + "...", // Truncate post description
      amount: appliedInfo.posts.stars * 10, // Calculate amount
      message: appliedInfo.applyInfo.message,
      pdfs: appliedInfo.applyInfo.pdfs,
      links: appliedInfo.applyInfo.links,
    };
    transformedArray.push(transformedObj);
  });

  return transformedArray;
};

const Applied = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const session = await getServerAuthSession();

  if (!session) {
    return <PortalsNotFound text="Requests" />;
  }

  const data = await getAllAppliedPosts();
  const formattedArray = transformArray(data.data);

  return <DynamicAppliedDataTable data={formattedArray || []} />;
};

export default Applied;
