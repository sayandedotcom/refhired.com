"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@referrer/ui";

type AvatarDemoProps = {
  image?: any;
  fullName?: string;
};

export function AvatarDemo({ image, fullName }: AvatarDemoProps) {
  return (
    <Avatar>
      <AvatarImage
        src='https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c'
        alt='profile img'
      />
      <AvatarFallback>{fullName}</AvatarFallback>
    </Avatar>
  );
}

// image || avatar;
