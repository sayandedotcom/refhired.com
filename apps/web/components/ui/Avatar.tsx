"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@referrer/ui";
import avatar from "../../public/avatar/avatar.png";

type AvatarDemoProps = {
  image?: any;
  fullName?: string;
};

export function AvatarDemo({ image, fullName }: AvatarDemoProps) {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='profile img' />
      <AvatarFallback>{fullName}</AvatarFallback>
    </Avatar>
  );
}

// image || avatar;
