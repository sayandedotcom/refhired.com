import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@referrer/ui";

export function PostHoverCard({ children, name, userName, image, bio }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="md:w-96">
        <div className="flex gap-2">
          <div className="w-[20%]">
            <Image alt="img" src={image} width={64} height={64} className="cursor-pointer rounded-full" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-start gap-2">
              <span className="text-base font-semibold">{name}</span>•
              <span className="text-base font-semibold">@{userName}</span>
              {/* <Button className="ml-auto h-9 rounded-full">Follow</Button> */}
            </div>
            <p className="text-sm">{bio}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-muted-foreground text-xs">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
