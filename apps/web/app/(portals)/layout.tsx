"use client";

import { usePathname } from "next/navigation";
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
  IoDocumentsOutline,
  IoDocumentsSharp,
} from "react-icons/io5";
import { TiTickOutline, TiTick } from "react-icons/ti";
import { BsFileBarGraph, BsFileEarmarkBarGraphFill } from "react-icons/bs";
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
import { ThemeSwitcher } from "../../components/custom";

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
    icon: <IoDocumentsOutline />,
    activeIcon: <IoDocumentsSharp />,
  },
  {
    name: "Applied",
    link: "/applied",
    icon: <TiTickOutline />,
    activeIcon: <TiTick />,
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
    icon: <BsFileBarGraph />,
    activeIcon: <BsFileEarmarkBarGraphFill />,
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
  const pathName = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("Home");

  const handleActive = (name, link) => {
    setActive(name);
    router.push(link);
  };

  return (
    <div className='flex justify-center'>
      {/* Oprions Section ************************************************************************/}
      <section className='w-4/12 md:w-80 flex flex-col items-start gap-3'>
        <div
          onClick={() => handleActive("Home", "/home")}
          className='p-2 cursor-pointer'>
          <h2>Referrer</h2>
        </div>
        <div>
          <ul className='w-full list-none text-xl cursor-pointer p-4'>
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo text={`Go to ${name}`}>
                <li
                  onClick={() => handleActive(name, link)}
                  className='flex gap-4 items-center py-3 px-6 rounded-full dark:hover:bg-[#16181c] hover:text-gray-300 w-full'>
                  {active !== name ? (
                    <span className='text-2xl'>{icon}</span>
                  ) : (
                    <span className='text-2xl'>{activeIcon}</span>
                  )}
                  <p className='mt-1'>{name}</p>
                </li>
              </TooltipDemo>
            ))}
          </ul>
        </div>
        <button className='text-xl px-32 py-3 dark:text-black rounded-full bg-white border-2 border-black'>
          Post
        </button>
        <div className='flex items-center justify-start gap-3 w-64 px-14 py-2 bg-muted rounded-full ring'>
          <AvatarDemo image='none' /> Sayan De
        </div>
      </section>
      <Separator
        orientation='vertical'
        className=' h-screen dark:bg-[#2d3134]'
      />
      {/* Content Section ************************************************************************/}
      <section className='h-screen w-[38rem]'>
        <div className='px-4 py-4'>
          <h5 className='capitalize'>{pathName.split("/")}</h5>
        </div>
        <Separator className='dark:bg-[#2d3134]' />
        {children}
      </section>
      <Separator
        orientation='vertical'
        className='h-screen dark:bg-[#2d3134]'
      />

      {/* Extra Section ************************************************************************/}
      <section className='hidden w-80 md:flex md:flex-col md:gap-3 md:p-2'>
        <div className='px-4 py-2 bg-muted rounded-2xl'>
          <h5>Extras</h5>
        </div>
        <ThemeSwitcher />
        <div className='px-4 py-2 bg-muted rounded-2xl'>
          <h6>Sugessions</h6>
        </div>
      </section>
    </div>
  );
}
