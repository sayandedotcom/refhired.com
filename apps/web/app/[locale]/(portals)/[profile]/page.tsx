import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaSuitcase } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import { getProfile } from "@/actions/profile";

import { Separator } from "@referrer/ui";

import { cn } from "@/utils";

export const metadata: Metadata = {
  title: "Profile",
  description: "Get job referrals to the top best companies of the world",
};

type paramsProps = {
  params: { profile: string };
};

const Profile = async ({ params }: paramsProps) => {
  const { profile } = params;

  const userProfile = await getProfile(profile);

  if (!userProfile)
    return (
      <>
        <div className="font-heading flex flex-col items-center gap-2 p-2">
          <Image
            alt="img"
            src="/images/avatar/avatar.png"
            width={120}
            height={120}
            className="rounded-full"
          />
          <h6>@{profile}</h6>

          <h4>This account doesn’t exist</h4>
          <h6 className="font-sans">Try searching for another.</h6>
        </div>
        <Separator />
      </>
    );

  return (
    <>
      <div className="flex w-11/12 flex-col items-center gap-2 p-2">
        <Image
          alt="img"
          src={userProfile.image ?? "/images/avatar/avatar.png"}
          width={120}
          height={120}
          className="cursor-pointer rounded-full"
        />
        <p>{userProfile ? userProfile.name : ""}</p>
        <p>@{userProfile ? userProfile.userName : profile}</p>
        <p className="text-center text-sm md:text-lg">{userProfile.bio}</p>
        <div className="flex gap-3">
          <FaSuitcase />
          <span>{userProfile.workingAt}</span>•<HiLocationMarker />
          <span>Kolkata</span>
        </div>
        <Link
          href="/settings/profile"
          className={cn(
            "focus-visible:ring-ring ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-lg  px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
          Edit Profile
        </Link>
      </div>
      <Separator />
    </>
  );
};

export default Profile;
