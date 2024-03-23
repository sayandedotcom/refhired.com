"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

// import LoginModal from "@/app/[locale]/@loginModal/(.)auth/login/page";
import { portalsList } from "@/config/portals-list";
import { useWindowSize } from "@/hooks";
import { Link, usePathname } from "@/navigation";
import type { User } from "@prisma/client";
import clsx from "clsx";
import { Info, MoreHorizontal, Star } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { FaPenNib } from "react-icons/fa";

import { getProfile } from "@/actions/settings";

import { Badge, Button, Separator, buttonVariants } from "@referrer/ui";

import { ThemeSwitcher } from "@/components/custom-components";
import { Icons } from "@/components/icons/icons";
import { PostTypeDialog, TooltipDemo, sonerToast } from "@/components/ui";

import { useStore } from "@/store/store";

import { ComboboxDropdownMenu } from "../post-card/post-more-menu";

export function NewOptionsSection() {
  const { data: session } = useSession();
  const pathName = usePathname();
  const path = "/" + pathName.split("/")[1];
  const { width } = useWindowSize();

  const [data, setData] = useState<User>();
  const getUsers = async () => {
    const users = await getProfile();
    setData(users);
  };

  useEffect(() => {
    getUsers(); // run it, run it
    // return () => {
    // this now gets called when the component unmounts
    // };
  }, []);
  return (
    <section className="sticky left-0 top-0 h-screen w-[15%] lg:w-[20%]">
      <div className="bg-muted flex h-full w-full flex-col items-start justify-start">
        <Link href="/home" className="mx-auto cursor-pointer p-2">
          <Icons.logo />
        </Link>
        <div className="font-heading mt-3 w-full tracking-wider lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer px-1 py-4 text-base">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <TooltipDemo key={name} text={`Go to ${name}`}>
                <Link
                  id={name.toLocaleLowerCase()}
                  href={link ?? session?.user.userName ?? "profile"}
                  className={clsx(
                    "hover:bg-background/50 flex items-center gap-4 rounded-md px-2 py-2",
                    path === link && "bg-background"
                  )}>
                  {path !== link ? (
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
          <Button
            size="lg"
            className="font-heading mx-auto rounded-full border-2 border-black px-3 py-3 text-2xl font-semibold lg:w-10/12 lg:py-7">
            {width < 1000 ? <FaPenNib /> : "Post"}
          </Button>
        </PostTypeDialog>
        <div className="bg-background mx-auto mb-3 mt-auto flex h-36 w-full flex-col items-center justify-center gap-3 rounded-lg p-2 px-4 lg:w-[95%]">
          <div className="flex w-full items-center justify-between gap-3">
            {/* <AvatarDemo
              className="aspect-square h-14 w-14"
              image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
            /> */}
            <Image
              src={session?.user.image ?? "/images/avatar/avatar.png"}
              height={60}
              width={60}
              className="rounded-md"
              alt="img"
            />
            <div className="mb-2">
              <p className="hidden text-lg font-semibold lg:block">{session?.user?.name ?? "Your Name"}</p>
              <span className="hidden text-sm lg:block">@{session?.user?.userName ?? "username"}</span>
            </div>
            <ComboboxDropdownMenu>
              <div className="hover:bg-muted ml-auto cursor-pointer rounded-full">
                <MoreHorizontal className="w-7" />
              </div>
            </ComboboxDropdownMenu>
          </div>
          <div className="flex w-full items-center justify-between gap-3">
            <Badge className="bg-background text-foreground border-foreground hover:bg-background flex items-center justify-center gap-3 rounded-sm">
              <Star fill="#FFC300" className="h-7" />
              <span className="font-heading mt-1 text-base font-bold">{data?.stars} Stars</span>
            </Badge>
            <Button>Buy Stars</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewContentSection({
  children,
  loginModal,
}: {
  children: React.ReactNode;
  loginModal?: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <section
        className={clsx(
          "flex w-[85%] flex-col items-center",
          pathName.split("/")[1] === "settings" || pathName.split("/")[1] === "dashboard"
            ? "lg:w-[80%]"
            : "lg:w-[60%]"
        )}>
        <div className="px-4 py-4">
          <h5 className="font-heading capitalize">{pathName.split("/")[1]}</h5>
        </div>
        <Separator className="dark:bg-[#2d3134]" />
        {loginModal}
        {children}
      </section>
    </>
  );
}

export function NewExtraSection() {
  const pathName = usePathname();
  // const { data: session } = useSession();
  // const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  const setJoyRide = useStore((state) => state.setJoyRide);
  return (
    <section className="font-heading sticky right-0 top-0 hidden h-screen w-80 font-medium lg:flex lg:w-[20%] lg:flex-col lg:gap-3 lg:p-2">
      <div className="bg-muted rounded-sm px-4 py-2 text-center">
        <h5>Extras</h5>
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
        <h6>News</h6>
      </div>
      <div className="bg-muted rounded-sm px-4 py-2">
        <h6>{pathName.split("/")[1] !== "/search" ? "Filters" : "Sugessions"}</h6>
        <Separator className="dark:bg-[#2d3134]" />
      </div>
      <ThemeSwitcher />
      <Button onClick={() => signOut()}>Sign Out</Button>
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
      <Link href="/auth/login" className={buttonVariants()}>
        Dialog
      </Link>
      {/* <LoginModal> */}

      {/* <LoginModal>
        <Button>Modal</Button>
      </LoginModal> */}
      {/* </LoginModal> */}
    </section>
  );
}
// export function OptionsSection({ session }: { session: any | null }) {
//   const pathName = usePathname();

//   const { width } = useWindowSize();

//   // const handleActive = (link) => {
//   //   setActive(link);
//   //   if (link === "/profile") router.push(`/${session}`);
//   //   else router.push(link);
//   // };
//   return (
//     <section className="sticky top-0 h-screen w-[15%] overflow-y-auto lg:w-80">
//       <div className="flex flex-col items-center justify-center  gap-3">
//         {/* <Link
//           href="/home"
//           // onClick={() => handleActive("/home")}
//           className="cursor-pointer p-2">
//           <Icons.logo />
//         </Link> */}
//         <div className="font-heading tracking-wider lg:flex lg:flex-col lg:justify-start">
//           <div className="cursor-pointer text-xl">
//             {portalsList.map(({ name, link, icon, activeIcon }) => (
//               <TooltipDemo key={name} text={`Go to ${name}`}>
//                 <Link
//                   href={link}
//                   // onClick={() => handleActive(link)}
//                   className="hover:bg-muted flex items-center gap-4 rounded-full px-3 py-3">
//                   {pathName !== link ? (
//                     <span className="text-2xl md:text-2xl">{icon}</span>
//                   ) : (
//                     <span className="text-2xl md:text-2xl">{activeIcon}</span>
//                   )}
//                   <p className="mt-1 hidden lg:block">{name}</p>
//                 </Link>
//               </TooltipDemo>
//             ))}
//           </div>
//         </div>
//         <PostTypeDialog>
//           <button className="bg-foreground rounded-full border-2 border-black px-3 py-3 text-xl text-white dark:text-black lg:w-10/12 lg:px-2">
//             {width < 1000 ? <FaPenNib /> : "Post"}
//           </button>
//         </PostTypeDialog>
//         <div className="bg-muted flex items-center justify-center gap-3 rounded-full lg:w-10/12 lg:py-2">
//           <AvatarDemo image="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c" />
//           <span className="hidden lg:block">Sayan De</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ContentSection({ children }: { children: React.ReactNode }) {
//   const pathName = usePathname();
//   return (
//     <section className="w-[85%] lg:w-[38rem]">
//       <div className="px-4 py-4">
//         <h5 className="font-heading capitalize">{pathName.split("/")}</h5>
//       </div>
//       <Separator className="dark:bg-[#2d3134]" />
//       {children}
//     </section>
//   );
// }

// export function ContentLargeSection({ children }: { children: React.ReactNode }) {
//   const pathName = usePathname();
//   const currentPath = pathName.split("/");
//   const path = currentPath[1];
//   return (
//     <section className="w-[85%] lg:w-full">
//       <div className="px-4 py-4">
//         <h5 className="font-heading capitalize">{path}</h5>
//       </div>
//       <Separator className="dark:bg-[#2d3134]" />
//       {children}
//     </section>
//   );
// }

// export function ExtraSection() {
//   return (
//     <section className="font-heading sticky top-0 hidden h-screen w-80 font-medium lg:flex lg:flex-col lg:gap-3 lg:p-2">
//       <div className="bg-muted rounded-2xl px-4 py-2">
//         <h5>Extras</h5>
//       </div>
//       <ThemeSwitcher />
//       <div className="bg-muted rounded-2xl px-4 py-2">
//         <h6>Sugessions</h6>
//       </div>
//     </section>
//   );
// }
