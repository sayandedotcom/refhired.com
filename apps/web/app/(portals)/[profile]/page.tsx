"use client";

import Image from "next/image";
import AltImage from "../../../public/avatar/avatar.png";
import { Separator } from "@referrer/ui";
import { PostCard } from "../../../components/custom";
import { FaSuitcase } from "react-icons/fa";

import { HiLocationMarker } from "react-icons/hi";

const Profile = () => {
  return (
    <>
      <div className='flex flex-col items-center gap-2 p-2'>
        <Image
          alt='img'
          src={AltImage}
          width={120}
          height={120}
          className='rounded-full cursor-pointer'
        />
        <p>Full Name</p>
        <p>@username</p>
        <p className='text-center text-sm md:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero qui
          accusamus reprehenderit atque excepturi culpa praesentium corrupti
          iste dolorem sunt. Enim, sunt reiciendis! Magnam nemo debitis ex ipsum
          distinctio error
        </p>
        <div className='flex gap-4'>
          <span>1000 Followers</span>•<span>100 Following</span>
        </div>
        <div className='flex gap-3'>
          <FaSuitcase />
          <span>Google</span>•<HiLocationMarker />
          <span>Kolkata</span>
        </div>
      </div>
      <Separator />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};

export default Profile;
