"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useWindowSize } from "@/hooks";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";
import { FaPenNib } from "react-icons/fa";

import { Separator } from "@referrer/ui";

import { ThemeSwitcher } from "@/components/custom-components";
import { Icons } from "@/components/icons/icons";
import { AvatarDemo, PostTypeDialog, TooltipDemo } from "@/components/ui";

import { portalsList } from "@/config/portals-list";

import { ComboboxDropdownMenu } from "../post-card/post-more-menu";

export function OptionsSection({ session }: { session: any | null }) {
  const pathName = usePathname();

  const { width } = useWindowSize();

  // const handleActive = (link) => {
  //   setActive(link);
  //   if (link === "/profile") router.push(`/${session}`);
  //   else router.push(link);
  // };
  return (
    <section className="sticky top-0 h-screen w-[15%] overflow-y-auto lg:w-80">
      <div className="flex flex-col items-center justify-center  gap-3">
        {/* <Link
          href="/home"
          // onClick={() => handleActive("/home")}
          className="cursor-pointer p-2">
          <Icons.logo />
        </Link> */}
        <div className="font-heading tracking-wider lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer text-xl">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <Link
                  href={link}
                  // onClick={() => handleActive(link)}
                  className="hover:bg-muted flex items-center gap-4 rounded-full px-3 py-3">
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
          <button className="bg-foreground rounded-full border-2 border-black px-3 py-3 text-xl text-white dark:text-black lg:w-10/12 lg:px-2">
            {width < 1000 ? <FaPenNib /> : "Post"}
          </button>
        </PostTypeDialog>
        <div className="bg-muted flex items-center justify-center gap-3 rounded-full lg:w-10/12 lg:py-2">
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
        <h5 className="font-heading capitalize">{pathName.split("/")}</h5>
      </div>
      <Separator className="dark:bg-[#2d3134]" />
      {children}
    </section>
  );
}

export function ContentLargeSection({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const currentPath = pathName.split("/");
  const path = currentPath[1];
  return (
    <section className="w-[85%] lg:w-full">
      <div className="px-4 py-4">
        <h5 className="font-heading capitalize">{path}</h5>
      </div>
      <Separator className="dark:bg-[#2d3134]" />
      {children}
    </section>
  );
}

export function ExtraSection() {
  return (
    <section className="font-heading sticky top-0 hidden h-screen w-80 font-medium lg:flex lg:flex-col lg:gap-3 lg:p-2">
      <div className="bg-muted rounded-2xl px-4 py-2">
        <h5>Extras</h5>
      </div>
      <ThemeSwitcher />
      <div className="bg-muted rounded-2xl px-4 py-2">
        <h6>Sugessions</h6>
      </div>
    </section>
  );
}

export function NewOptionsSection({ session }: { session: any | null }) {
  const pathName = usePathname();
  const { width } = useWindowSize();

  return (
    <section className="sticky left-0 top-0 h-screen w-[15%] lg:w-[20%]">
      <div className="bg-muted ml-4 mt-3 flex w-11/12 flex-col items-start justify-start rounded-2xl pb-6">
        <Link href="/home" className="mx-auto cursor-pointer p-2">
          <Icons.logo />
        </Link>
        <div className="font-heading mt-3 w-full tracking-wider lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer px-1 text-base">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <Link
                  id={name.toLocaleLowerCase()}
                  href={link}
                  className={clsx(
                    "hover:bg-background mb-1 flex items-center gap-4 rounded-md px-2 py-2",
                    pathName === link && "bg-background"
                  )}>
                  {pathName !== link ? (
                    <span className="ml-5 text-2xl md:text-2xl">{icon}</span>
                  ) : (
                    <span className="ml-5 text-2xl md:text-2xl">{activeIcon}</span>
                  )}
                  <p className="mt-1 hidden lg:block">{name}</p>
                </Link>
              </TooltipDemo>
            ))}
          </div>
        </div>
        <PostTypeDialog>
          <button className="font-heading bg-foreground mx-auto rounded-full border-2 border-black px-3 py-3 text-2xl font-semibold text-white dark:text-black lg:w-10/12 lg:px-2">
            {width < 1000 ? <FaPenNib /> : "Post"}
          </button>
        </PostTypeDialog>
      </div>
      <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
    </section>
  );
}

export function NewContentSection({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <section
      className={clsx(
        "flex w-[85%] flex-col items-center lg:w-[60%]",
        pathName.split("/")[1] === "settings" && "lg:w-full"
      )}>
      <div className="px-4 py-4">
        <h5 className="font-heading capitalize">{pathName.split("/")[1]}</h5>
      </div>
      <Separator className="dark:bg-[#2d3134]" />
      {children}
    </section>
  );
}

export function NewExtraSection() {
  const pathName = usePathname();
  return (
    <section className="font-heading sticky right-0 top-0 hidden h-screen w-80 font-medium lg:flex lg:w-[20%] lg:flex-col lg:gap-3 lg:p-2">
      <div className="bg-muted rounded-2xl px-4 py-2">
        <h5>Extras</h5>
      </div>
      <div id="start-tour" className="bg-muted rounded-2xl px-4 py-2">
        <h5>Take a tour</h5>
      </div>
      <div className="bg-muted rounded-2xl px-2 py-2">
        <div className="bg-background flex items-center justify-center gap-3 rounded-2xl lg:w-[96%] lg:py-2">
          <AvatarDemo image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c" />
          <span className="hidden lg:block">@sayande10</span>
          <ComboboxDropdownMenu>
            <div className="hover:bg-muted cursor-pointer rounded-full">
              <MoreHorizontal className="w-7" />
            </div>
          </ComboboxDropdownMenu>
        </div>
      </div>
      <div className="bg-muted rounded-2xl px-4 py-2">
        <h6>News</h6>
      </div>
      <div className="bg-muted rounded-2xl px-4 py-2">
        <h6>{pathName.split("/")[1] === "search" ? "FIlters" : "Sugessions"}</h6>
      </div>
      <ThemeSwitcher />
    </section>
  );
}
