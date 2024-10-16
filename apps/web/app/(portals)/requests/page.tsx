import { Metadata } from "next";
import dynamic from "next/dynamic";

import { PortalsNotFound } from "@/components/custom-components";

import { auth } from "@/lib/auth";
import { request } from "@/lib/axios";

import Loading from "../../loading";

export const metadata: Metadata = {
  title: "Requests",
  description: "Get job referrals to the top best companies of the world",
};

const DynamicRequestDataTable = dynamic(() => import("@/components/requests/requests-data-table"), {
  loading: () => <Loading />,
});

async function getAllRequests() {
  const response = await request.get("/requests");

  return response.data;
}

const transformArray = (originalArray) => {
  const transformedArray = [];

  originalArray?.forEach((obj) => {
    obj.applied.forEach((applyInfo) => {
      const transformedObj = {
        id: obj.id,
        received: applyInfo.appliedAt,
        // status: "Read",
        post: obj.description.slice(0, 17) + "...",
        email: applyInfo.user.email,
        amount: obj.stars * 10,
        message: applyInfo.applyInfo.message,
        pdfs: applyInfo.applyInfo.pdfs,
        links: applyInfo.applyInfo.links,
      };
      transformedArray.push(transformedObj);
    });
  });

  return transformedArray;
};

const Requests = async () => {
  const session = await auth();

  if (!session) {
    return <PortalsNotFound text="Requests" />;
  }

  const data = await getAllRequests();

  const formattedArray = transformArray(data?.data?.posts);

  return <DynamicRequestDataTable data={formattedArray || []} />;
};

export default Requests;
