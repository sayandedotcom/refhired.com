"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { useWindowSize } from "@/hooks";
import { AiFillHome, AiFillMail, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaBookmark, FaPenNib, FaRegBookmark, FaRegUser, FaUserAlt } from "react-icons/fa";
import {
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { TiTick, TiTickOutline } from "react-icons/ti";

import { Separator } from "@referrer/ui";

import { ThemeSwitcher } from "@/components/custom-components";
import { Icons } from "@/components/icons/icons";
import { AvatarDemo, PostTypeDialog, TooltipDemo } from "@/components/ui";

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
    link: "/settings/profile",
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
    icon: <Icons.dashboard />,
    activeIcon: <Icons.dashboard />,
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

  // const handleActive = (link) => {
  //   setActive(link);
  //   if (link === "/profile") router.push(`/${session}`);
  //   else router.push(link);
  // };
  return (
    <section className="sticky top-0 h-screen w-[15%] overflow-y-auto lg:w-80">
      <div className="flex flex-col items-center justify-center  gap-3">
        <Link
          href="/home"
          // onClick={() => handleActive("/home")}
          className="cursor-pointer p-2">
          <h3 className="hidden lg:block">Refhired.com</h3>
          <h4 className="hidden md:block lg:hidden">Refhired.com</h4>
          <h3 className="md:hidden lg:hidden">R</h3>
        </Link>
        <div className="lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer text-xl">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <Link
                  href={link}
                  // onClick={() => handleActive(link)}
                  className="flex items-center gap-4 rounded-full px-3 py-3 hover:bg-muted">
                  {pathName !== link ? (
                    <span className="text-2xl md:text-2xl">{icon}</span>
                  ) : (
                    <span className="text-2xl md:text-2xl">{activeIcon}</span>
                  )}
                  <p className="mt-1 hidden lg:block">{name}</p>
                </Link>
              </TooltipDemo>
            ))}
          </div>
        </div>
        <PostTypeDialog>
          <button className="rounded-full border-2 border-black bg-foreground px-3 py-3 text-xl dark:text-black text-white lg:w-10/12 lg:px-2">
            {width < 1000 ? <FaPenNib /> : "Post"}
          </button>
        </PostTypeDialog>
        <div className="flex items-center justify-center gap-3 rounded-full bg-muted lg:w-10/12 lg:py-2">
          <AvatarDemo image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c" />
          <span className="hidden lg:block">Sayan De</span>
        </div>
      </div>
    </section>
  );
}

export function ContentSection({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <section className="w-[85%] lg:w-[38rem]">
      <div className="px-4 py-4">
        <h5 className="capitalize">{pathName.split("/")}</h5>
      </div>
      <Separator className="dark:bg-[#2d3134]" />
      {children}
    </section>
  );
}

export function ContentLargeSection({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <section className="w-[85%] lg:w-full">
      <div className="px-4 py-4">
        <h5 className="capitalize">{pathName.includes("Settings") ? "Settings" : pathName.split("/")}</h5>
      </div>
      <Separator className="dark:bg-[#2d3134]" />
      {children}
    </section>
  );
}

export function ExtraSection() {
  return (
    <section className="sticky top-0 hidden h-screen w-80 lg:flex lg:flex-col lg:gap-3 lg:p-2">
      <div className="rounded-2xl bg-muted px-4 py-2">
        <h5>Extras</h5>
      </div>
      <ThemeSwitcher />
      <div className="rounded-2xl bg-muted px-4 py-2">
        <h6>Sugessions</h6>
      </div>
    </section>
  );
}
