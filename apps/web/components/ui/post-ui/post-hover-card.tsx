import { CalendarDays } from "lucide-react";
import Image from "next/image";

import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@referrer/ui";
import AltImage from "../../../public/avatar/avatar.png";

export function PostHoverCard({ children }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="md:w-96">
        <div className="flex gap-2">
          <div className="w-[20%]">
            <Image alt="img" src={AltImage} width={64} height={64} className="cursor-pointer rounded-full" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-start gap-2">
              <span className="text-base font-semibold">Full Name</span>•
              <span className="text-base font-semibold">@username</span>
              <Button className="ml-auto h-9 rounded-full">Follow</Button>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum quisquam molestias
              voluptas maiores mollitia dolor facere sunt odio accusantium fuga, modi similique nemo corrupti
              iste aliquam fugit laborum tempora?
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
