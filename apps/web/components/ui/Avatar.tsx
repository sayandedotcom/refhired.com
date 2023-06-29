"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@referrer/ui";
import avatar from "../../public/avatar/avatar.png";

type AvatarDemoProps = {
  image?: any;
};

export function AvatarDemo({ image }: AvatarDemoProps) {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='profile img' />
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
  );
}

// image || avatar;
