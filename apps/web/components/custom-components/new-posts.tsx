"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

import { cn } from "@/utils";

import { Badge } from "../ui";
import { AvatarCircles } from "./avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
  },
];

export function NewPosts({ fetch }: { fetch?: boolean }) {
  const [visible, setvisible] = useState(fetch);

  useEffect(() => {
    if (fetch === true) {
      setvisible(fetch);
    }
  }, [fetch]);

  return (
    <>
      {visible && (
        <Badge
          onClick={() => {
            setvisible(!visible);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant",
            });
          }}
          className={cn("fixed left-2/4 top-4  -translate-x-1/2 transform cursor-pointer")}>
          <ArrowUp />
          <AvatarCircles numPeople={10} avatarUrls={avatars} />
        </Badge>
      )}
    </>
  );
}
