import Image from "next/image";
import AltImage from "../../../public/avatar/avatar.png";
import { Separator } from "@referrer/ui";
import { PostCard } from "../../../components/custom";
import { FaSuitcase } from "react-icons/fa";

import { HiLocationMarker } from "react-icons/hi";
import prisma from "@referrer/prisma";
import { notFound } from "next/navigation";

type paramsProps = {
  params: { profile: string };
};

const Profile = async ({ params }: paramsProps) => {
  const { profile } = params;

  const userProfile = await prisma.user.findFirst({
    where: { userName: profile },
  });

  if (!userProfile) return notFound();

  return (
    <>
      <div className='flex flex-col items-center gap-2 p-2'>
        <Image
          alt='img'
          src={userProfile ? userProfile.image : AltImage}
          width={120}
          height={120}
          className='rounded-full cursor-pointer'
        />
        <p>{userProfile ? userProfile.name : ""}</p>
        <p>@{userProfile ? userProfile.userName : profile}</p>
        <p className='text-center text-sm md:text-lg'>{userProfile.bio}</p>
        <div className='flex gap-4'>
          <span>1000 Followers</span>•<span>100 Following</span>
        </div>
        <div className='flex gap-3'>
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
