import Image from "next/image";

import { MoreHorizontal } from "lucide-react";

import { Separator } from "@referrer/ui";

import { PostHoverCard } from "@/components/ui";

import AltImage from "../../../public/avatar/avatar.png";
import { ApplyButton, MultipleButtons, Tags } from "./post-buttons";
import { ComboboxDropdownMenu } from "./post-more-menu";

const tag = ["1-5 Years", "Full Time", "Front-End Developer", "150-250k", "JavaScript", "React"];

export const PostCard = () => {
  return (
    <>
      <Separator />
      <div className="mx-auto flex w-full gap-2 p-1 md:gap-3 md:p-4">
        <div className="w-[12%]">
          <PostHoverCard>
            <Image alt="img" src={AltImage} width={64} height={64} className="cursor-pointer rounded-full" />
          </PostHoverCard>
        </div>
        <div className="flex w-[88%] flex-col gap-2 md:w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <PostHoverCard>
                <span className="cursor-pointer">Full Name</span>
              </PostHoverCard>
              •
              <PostHoverCard>
                <span className="cursor-pointer font-thin dark:text-gray-200">@username</span>
              </PostHoverCard>
              •<small>1h ago</small>
              <small className="hidden md:block">• &nbsp; &nbsp;2d Left</small>
            </div>
            <ComboboxDropdownMenu>
              <div className="cursor-pointer rounded-full hover:bg-muted">
                <MoreHorizontal className="w-5" />
              </div>
            </ComboboxDropdownMenu>
          </div>
          <p className="cursor-pointer text-[15px] md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, beatae vitae repellendus saepe
            laudantium totam asperiores, nisi, repudiandae hic tenetur porro dolore consequuntur est. Beatae
            ipsa nesciunt itaque expedita tempora?
            <span className="float-right text-xs md:text-sm">....Show more</span>
          </p>
          <div className="flex h-5 gap-1">
            <Tags tag={tag} />
          </div>
          <div className="flex items-center justify-between">
            <MultipleButtons />
            <ApplyButton />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
// (200 Applied)
