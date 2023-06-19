"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@referrer/ui";
import avatar from "../../assests/avatar/avatar.png";

export function AvatarDemo({ image }) {
  return (
    <Avatar>
      <AvatarImage src={image || avatar} alt='profile img' />
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
  );
}

// https://github.com/shadcn.png
