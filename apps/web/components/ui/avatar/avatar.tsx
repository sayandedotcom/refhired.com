"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@referrer/ui";

type AvatarDemoProps = {
  image?: string;
  fullName?: string;
  className?: string;
};

export function AvatarDemo({ image, fullName, className }: AvatarDemoProps) {
  const fallbackName = (name: string) => {
    let initials: any = name.split(" ");
    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 2);
    }
    return initials.toUpperCase();
  };
  return (
    <Avatar className={className}>
      <AvatarImage src={image ?? "/images/avatar/avatar.png"} alt="profile" />
      <AvatarFallback>{fallbackName(fullName)}</AvatarFallback>
    </Avatar>
  );
}
