"use client";

import { useState } from "react";

import Image from "next/image";

// import LoginModal from "@/app/[locale]/@loginModal/(.)auth/login/page";
import { portalsList } from "@/config/portals-list";
import { useWindowSize } from "@/hooks";
import { Link, usePathname, useRouter } from "@/navigation";
import type { User } from "@prisma/client";
import clsx from "clsx";
import { Info, PartyPopper, SlidersHorizontal, Star } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { FaPenNib } from "react-icons/fa";

import { Badge, Button, Separator } from "@referrer/ui";

import { LeftBarMobile, RightBarMobile } from "@/components/custom-components";
import { PostTypeDialog, TooltipDemo, sonerToast } from "@/components/ui";
import { PlaceholdersAndVanishInput } from "@/components/ui";

import { withoutRightBarPages } from "@/config";

import { useStore } from "@/store/store";

export function LeftSection() {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const path = "/" + pathName.split("/")[1];
  const { width } = useWindowSize();

  const [data, setData] = useState<User>();

  return (
    <section className="sticky left-0 top-0 hidden h-screen w-[15%] md:hidden lg:block lg:w-[20%]">
      <div className="flex h-full w-full flex-col items-start justify-start">
        {/* <Link href="/home" className="mx-auto cursor-pointer p-2">
          <Icons.logo />
        </Link> */}
        <div className="font-heading w-full tracking-wider lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer px-2 py-4 text-base">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <Link
                  id={name.toLocaleLowerCase()}
                  href={link ?? session?.user.userName ?? "profile"}
                  className={clsx(
                    "hover:bg-muted flex items-center gap-4 rounded-md px-2 py-2",
                    path === "/" + link?.split("/")[1] && "bg-muted hover:bg-muted/100"
                  )}>
                  {path !== "/" + link?.split("/")[1] ? (
                    <span className="ml-5 text-xl md:text-xl">{icon}</span>
                  ) : (
                    <span className="ml-5 text-xl md:text-xl">{activeIcon}</span>
                  )}
                  <p className="mt-1 hidden lg:block">{name}</p>
                </Link>
              </TooltipDemo>
            ))}
          </div>
        </div>
        <PostTypeDialog>
          <Button
            size="lg"
            className="font-heading mx-auto rounded-full border-2 border-black px-3 py-3 text-2xl font-semibold transition active:scale-95 lg:w-10/12 lg:py-7">
            {width < 1000 ? <FaPenNib /> : "Post"}
          </Button>
        </PostTypeDialog>
        <div className="mx-auto mb-3 mt-auto flex w-full flex-col items-center justify-center gap-3 rounded-lg border p-2 px-4 lg:w-[95%]">
          <div className="flex w-full items-center justify-between gap-3">
            {/* <AvatarDemo
              className="aspect-square h-14 w-14"
              image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
            />  */}
            <Image
              src={session?.user.image ?? "/images/avatar/avatar.png"}
              height={60}
              width={60}
              className="rounded-md"
              alt="img"
            />
            <div className=" mr-auto">
              <p className="hidden text-lg font-semibold lg:block">{session?.user?.name ?? "Your Name"}</p>
              <span className="hidden text-sm lg:block">@{session?.user?.userName ?? "username"}</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-3">
            <Badge className="bg-background text-foreground border-foreground hover:bg-background flex items-center justify-center gap-3 rounded-sm">
              <Star className="h-7" />
              <span className="font-heading mt-1 text-base font-bold">{session?.user.stars ?? 0}</span>
            </Badge>
            {session ? (
              <Button
                className="bg-destructive hover:bg-destructive text-foreground"
                onClick={() => signOut()}>
                Log out
              </Button>
            ) : (
              <Button onClick={() => router.push("/auth/login")}>Log In</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CenterSection({
  children,
  loginModal,
}: {
  children: React.ReactNode;
  loginModal?: React.ReactNode;
}) {
  const pathName = usePathname();
  const largeLayout = withoutRightBarPages.includes(pathName);

  return (
    <>
      <section className={clsx("flex w-full flex-col", largeLayout ? "lg:w-[80%]" : "lg:w-[60%]")}>
        <div className="flex flex-row justify-between px-4 py-4">
          <LeftBarMobile />
          <h5 className="font-heading capitalize md:mx-auto">{pathName.split("/")[1]}</h5>
          <RightBarMobile />
        </div>
        <Separator className="dark:bg-[#2d3134]" />
        {loginModal}
        {children}
      </section>
    </>
  );
}

export function RightSection() {
  const pathName = usePathname();
  const router = useRouter();
  const showExtraSection = withoutRightBarPages.includes(pathName);
  // const { data: session } = useSession();
  // const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  const setJoyRide = useStore((state) => state.setJoyRide);
  console.log(pathName);

  const placeholders = [
    "Remote Front-End Developer jobs",
    "Full Stack jobs in San Francisco",
    "Javascript jobs",
    "Referrals in Google",
  ];

  return (
    <section
      className={clsx(
        showExtraSection && "md:hidden lg:hidden",
        "font-heading sticky right-0 top-0 hidden h-screen w-80 font-medium lg:flex lg:w-[20%] lg:flex-col lg:gap-3 lg:p-2"
      )}>
      {pathName === "/search" ? (
        <>
          <div className="bg-muted flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-lg">
            <SlidersHorizontal className="mb-1 h-5" /> <h5>Filters</h5>
          </div>
        </>
      ) : (
        <>
          <PlaceholdersAndVanishInput
            showSugession={false}
            searchIconWidth={"w-[15%]"}
            className={"flex items-center text-xs"}
            placeholders={placeholders}
          />
          <div className="border-border w-full rounded-3xl border bg-gradient-to-br from-amber-600 via-stone-900 via-60% to-sky-900 p-4">
            <div className="mb-2">
              <div className="flex gap-2">
                <h5>Expiring soon !</h5>
                <PartyPopper />
              </div>
              <p className="text-sm">Get up to 40% off on stars</p>
            </div>
            <div>
              <Button
                onClick={() => router.push("/payments")}
                className="rounded-3xl transition active:scale-95">
                Learn more !
              </Button>
            </div>
          </div>
          <div className="border-border group relative flex w-full flex-col gap-2 overflow-hidden rounded-2xl border bg-neutral-900 p-4 text-gray-50 group-hover:duration-500">
            <div className="z-10 flex flex-col duration-500 before:absolute before:right-16 before:top-20 before:-z-10 before:h-12 before:h-20 before:w-12 before:w-20 before:rounded-full before:bg-sky-400 before:blur-xl before:duration-500 after:absolute after:bottom-32 after:right-16 after:-z-10 after:h-12 after:h-12 after:w-12 after:w-12 after:rounded-full after:bg-orange-400 after:blur-xl after:duration-500 group-hover:before:-translate-y-11 group-hover:before:translate-x-11 group-hover:after:translate-x-11 group-hover:after:translate-y-16">
              <h5>Get Dashboard</h5>
              <p className="text-sm">
                Get an advanced AI-powered dashboard for just $49, with lifetime access!
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="rounded-full transition active:scale-95">Get it now</Button>
              <Button className="z-20 rounded-full transition active:scale-95">Learn more !</Button>
            </div>
          </div>
          <button
            onClick={() => setJoyRide("post-ride")}
            id="start-tour"
            className="bg-muted flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-lg">
            <Info className="mb-1 h-5" /> <p>Info</p>
          </button>
          {/* <div className="bg-muted flex justify-center rounded-sm p-2">
        {session ? (
          <div className="bg-background flex items-center justify-center gap-3 rounded-lg lg:w-[95%] lg:py-2">
            <AvatarDemo image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c" />
            <span className="hidden lg:block">{session.user.userName}</span>
            <ComboboxDropdownMenu>
              <div className="hover:bg-muted cursor-pointer rounded-full">
                <MoreHorizontal className="w-7" />
              </div>
            </ComboboxDropdownMenu>
          </div>
        ) : (
          <Button
            className="flex animate-bounce items-center justify-center gap-3 rounded-lg text-xl lg:w-8/12 lg:py-2"
            onClick={() => setAuthDialogOpen(true)}>
            Click here to Join !
          </Button>
        )}
      </div> */}
          <div className="bg-muted rounded-sm px-4 py-2">
            <h6>Changelog</h6>
          </div>
          <Button
            onClick={() =>
              sonerToast({
                title: "Hi this is the first Toasts",
                message: "Lorem sum dolor sit amet consectetur adipisicing elit. Adipisci modi, ",
                severity: "warning",
              })
            }>
            Soner
          </Button>
          {/* <LoginModal> */}

          {/* <LoginModal>
        <Button>Modal</Button>
      </LoginModal> */}
          {/* </LoginModal> */}
        </>
      )}
    </section>
  );
}
