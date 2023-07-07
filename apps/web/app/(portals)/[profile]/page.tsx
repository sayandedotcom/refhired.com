import { Metadata } from "next";
import Image from "next/image";

import { FaSuitcase } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import prisma from "@referrer/prisma";
import { Separator } from "@referrer/ui";

import { PostCard } from "@/components/custom-components";

import AltImage from "../../../public/avatar/avatar.png";

export const metadata: Metadata = {
  title: "Profile",
  description: "Get job referrals to the top best companies of the world",
};

type paramsProps = {
  params: { profile: string };
};

const Profile = async ({ params }: paramsProps) => {
  const { profile } = params;

  const userProfile = await prisma.user.findFirst({
    where: { userName: profile },
  });

  if (!userProfile)
    return (
      <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Image alt="img" src={AltImage} width={120} height={120} className="cursor-pointer rounded-full" />
          <p>@{profile}</p>

          <h6>No Users Found !!</h6>
        </div>
        <Separator />
      </>
    );

  return (
    <>
      <div className="flex flex-col items-center gap-2 p-2">
        <Image alt="img" src={AltImage} width={120} height={120} className="cursor-pointer rounded-full" />
        <p>{userProfile ? userProfile.name : ""}</p>
        <p>@{userProfile ? userProfile.userName : profile}</p>
        <p className="text-center text-sm md:text-lg">{userProfile.bio}</p>
        <div className="flex gap-4">
          <span>1000 Followers</span>•<span>100 Following</span>
        </div>
        <div className="flex gap-3">
          <FaSuitcase />
          <span>{userProfile.workingAt}</span>•<HiLocationMarker />
          <span>Kolkata</span>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Profile;
