"use client";

import { useState } from "react";

import Image from "next/image";

import { Link, usePathname } from "@/navigation";
import clsx from "clsx";
import { MoreHorizontal, Star } from "lucide-react";
import { useSession } from "next-auth/react";

import { Sheet, SheetContent, SheetTrigger } from "@referrer/ui";
import { Badge, Button } from "@referrer/ui";

import { PostTypeDialog } from "@/components/ui";

import { portalsList } from "@/config";

import { ComboboxDropdownMenu } from "../post-card/post-more-menu";

export function LeftBarMobile() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const pathName = usePathname();

  const path = "/" + pathName.split("/")[1];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Image
          src={session?.user.image ?? "/images/avatar/avatar.png"}
          height={40}
          width={40}
          onClick={() => setOpen(!open)}
          className="cursor-pointer rounded-full lg:hidden"
          alt="img"
        />
      </SheetTrigger>
      <SheetContent side="left" className="mg:hidden bg-muted flex w-full flex-col">
        <div className="font-heading mt-3 w-full tracking-wider lg:flex lg:flex-col lg:justify-start">
          <div className="cursor-pointer px-1 py-4 text-base">
            {portalsList.map(({ name, link, icon, activeIcon }) => (
              <Link
                onClick={() => setOpen(!open)}
                key={name}
                id={name.toLocaleLowerCase()}
                href={link ?? session?.user.userName ?? "profile"}
                className={clsx(
                  "hover:bg-background flex items-center gap-4 rounded-md px-2 py-2",
                  path === "/" + link?.split("/")[1] && "bg-foreground text-background hover:bg-foreground/90"
                )}>
                {path !== "/" + link?.split("/")[1] ? (
                  <span className="ml-5 text-2xl md:text-2xl">{icon}</span>
                ) : (
                  <span className="ml-5 text-2xl md:text-2xl">{activeIcon}</span>
                )}
                <p className="mt-1 lg:block">{name}</p>
              </Link>
            ))}
          </div>
        </div>
        <PostTypeDialog>
          <Button
            size="lg"
            className="font-heading mx-auto w-10/12 rounded-full border-2 border-black px-3 py-7 text-2xl font-semibold">
            Post
          </Button>
        </PostTypeDialog>
        <div className="bg-background mx-auto mb-3 mt-auto flex h-36 w-full flex-col items-center justify-center gap-3 rounded-lg p-2 px-4 lg:w-[95%]">
          <div className="flex w-full items-center justify-between gap-3">
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
              <span className="font-heading mt-1 text-base font-bold">{session?.user.stars} Stars</span>
            </Badge>
            <Button>Buy Stars</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
