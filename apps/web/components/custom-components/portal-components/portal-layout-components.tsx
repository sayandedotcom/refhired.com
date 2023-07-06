"use client";

import { usePathname } from "next/navigation";
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
  FaPenNib,
  FaRegBookmark,
  FaRegUser,
  FaUserAlt,
} from "react-icons/fa";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { useState } from "react";
import { AvatarDemo, PostTypeDialog, TooltipDemo } from "@/components/ui";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/custom-components";
import { useWindowSize } from "@/lib/hooks";
import { Separator } from "@referrer/ui";

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

export function OptionsSection({ session }: { session: any | null }) {
  const router = useRouter();
  const pathName = usePathname();
  const [active, setActive] = useState("/home");
  const { width, height } = useWindowSize();

  const handleActive = (link) => {
    setActive(link);
    if (link === "/profile") router.push(`/${session}`);
    else router.push(link);
  };
  return (
    <section className='w-[15%] lg:w-80 h-screen sticky top-0 overflow-y-auto'>
      <div className='flex flex-col items-center justify-center  gap-3'>
        <div
          onClick={() => handleActive("/home")}
          className='p-2 cursor-pointer'>
          <h2 className='hidden lg:block'>Referrer</h2>
          <h4 className='hidden md:block lg:hidden'>Referrer</h4>
          <h3 className='md:hidden lg:hidden'>R</h3>
        </div>
        <div className='lg:flex lg:flex-col lg:justify-start'>
          <div className='text-xl cursor-pointer'>
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <div
                  onClick={() => handleActive(link)}
                  className='flex gap-4 items-center py-3 px-3 rounded-full hover:bg-muted'>
                  {active !== link ? (
                    <span className='text-2xl md:text-3xl'>{icon}</span>
                  ) : (
                    <span className='text-2xl md:text-3xl'>{activeIcon}</span>
                  )}
                  <p className='hidden lg:block mt-1'>{name}</p>
                </div>
              </TooltipDemo>
            ))}
          </div>
        </div>
        <PostTypeDialog>
          <button className='lg:w-10/12 text-xl py-3 px-3 lg:px-2 dark:text-black rounded-full bg-white border-2 border-black'>
            {width < 1000 ? <FaPenNib /> : "Post"}
          </button>
        </PostTypeDialog>
        <div className='flex items-center justify-center gap-3 lg:w-10/12 lg:py-2 bg-muted rounded-full'>
          <AvatarDemo image='https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c' />
          <span className='hidden lg:block'>Sayan De</span>
        </div>
      </div>
    </section>
  );
}

export function ContentSection({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <section className='w-[85%] lg:w-[38rem]'>
      <div className='px-4 py-4'>
        <h5 className='capitalize'>{pathName.split("/")}</h5>
      </div>
      <Separator className='dark:bg-[#2d3134]' />
      {children}
    </section>
  );
}

export function ExtraSection() {
  return (
    <section className='hidden w-80 lg:flex lg:flex-col lg:gap-3 lg:p-2 h-screen sticky top-0'>
      <div className='px-4 py-2 bg-muted rounded-2xl'>
        <h5>Extras</h5>
      </div>
      <ThemeSwitcher />
      <div className='px-4 py-2 bg-muted rounded-2xl'>
        <h6>Sugessions</h6>
      </div>
    </section>
  );
}
