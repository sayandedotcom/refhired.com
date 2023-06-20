"use client";

import Link from "next/link";
import { Separator } from "@referrer/ui";
import "../../styles/globals.css";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineMail,
  AiFillMail,
} from "react-icons/ai";
import {
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import {
  FaBookmark,
  FaRegBookmark,
  FaRegUser,
  FaUserAlt,
} from "react-icons/fa";

import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { useState } from "react";
import { AvatarDemo, TooltipDemo } from "../../components/ui";
import { useRouter } from "next/navigation";

const portalsList = [
  {
    name: "Home",
    link: "/home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    name: "Search",
    link: "/search",
    icon: <RiSearchLine />,
    activeIcon: <RiSearchFill />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <IoNotificationsOutline />,
    activeIcon: <IoNotificationsSharp />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <FaRegBookmark />,
    activeIcon: <FaBookmark />,
  },
  {
    name: "Requests",
    link: "/requests",
    icon: <AiOutlineHome />,
    activeIcon: <AiOutlineHome />,
  },
  {
    name: "Applied",
    link: "/applied",
    icon: <AiOutlineHome />,
    activeIcon: <AiOutlineHome />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <IoSettingsOutline />,
    activeIcon: <IoSettingsSharp />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <AiOutlineMail />,
    activeIcon: <AiFillMail />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <AiOutlineHome />,
    activeIcon: <AiOutlineHome />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <FaRegUser />,
    activeIcon: <FaUserAlt />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [active, setActive] = useState("Home");

  const handleActive = (name, link) => {
    setActive(name);
    router.push(link);
  };

  return (
    <div className='flex justify-center bg-black'>
      <section className='text-white w-80 flex flex-col items-start'>
        <div
          onClick={() => handleActive("Home", "/home")}
          className='p-2 cursor-pointer'>
          <h2>Referrer</h2>
        </div>
        <div>
          <ul className='w-full list-none text-2xl cursor-pointer p-4'>
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo text={name}>
                <li
                  onClick={() => handleActive(name, link)}
                  className='flex gap-4 items-center py-3 px-6 rounded-full hover:bg-[#16181c] hover:text-gray-300 w-full'>
                  {active !== name ? (
                    <span className='text-3xl'>{icon}</span>
                  ) : (
                    <span className='text-3xl'>{activeIcon}</span>
                  )}
                  <p className='mt-1'>{name}</p>
                </li>
              </TooltipDemo>
            ))}
          </ul>
        </div>
        <TooltipDemo text='Post'>
          <button className='text-xl px-32 py-3 bg-white text-black rounded-full hover:bg-gray-300'>
            Post
          </button>
        </TooltipDemo>
      </section>
      {/* <hr className='h-96 w-5 bg-white' /> */}
      <Separator
        orientation='vertical'
        className='border-0 h-screen w-[0.1px] bg-[#2d3134]'
      />
      <section className='text-white h-screen w-[38rem]'>
        <div className='px-4 py-4'>
          <h5>Name</h5>
        </div>
        <Separator className='bg-[#2d3134]' />
        {children}
      </section>
      <Separator orientation='vertical' className='h-screen bg-[#2d3134]' />
      <section className='text-white w-80 flex flex-col gap-3 p-2'>
        <div className='px-4 py-2 bg-[#16181c] rounded-2xl'>
          <h5>Extras</h5>
        </div>
        <div className='px-4 py-2 bg-[#16181c] rounded-2xl'>
          <AvatarDemo image='none' />
        </div>
      </section>
    </div>
  );
}
