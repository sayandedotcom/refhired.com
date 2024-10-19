import Image from "next/image";

import parse from "html-react-parser";
import { MoreHorizontal } from "lucide-react";

import { PostHoverCard } from "@/components/ui";
import UsernameNavigate from "@/components/wrappers/username-navigator";

import { Tags } from "./post-buttons";
import { ComboboxDropdownMenu } from "./post-more-menu";

export const PostCard = ({ children }: { children: any }) => {
  return (
    <div className="border-border mx-auto my-2 flex gap-2 rounded-lg border-2 p-1 md:w-11/12 md:gap-3 md:p-4">
      {children}
    </div>
  );
};

function ProfileImage({ src }: { src: any }) {
  return (
    <div className="w-[12%]">
      <PostHoverCard>
        <Image
          id="profile-picture"
          alt="img"
          src={src}
          width={64}
          height={64}
          className="mx-auto cursor-pointer rounded-full"
        />
      </PostHoverCard>
    </div>
  );
}

PostCard.Image = ProfileImage;

function PostCardContent({ children }: { children: any }) {
  return <div className="flex w-[88%] flex-col gap-2 md:w-full">{children}</div>;
}

PostCard.Content = PostCardContent;

function PostCardHeader({
  name,
  userName,
  time,
  timeLeft,
}: {
  name: string;
  userName: string;
  time?: any;
  timeLeft?: any;
}) {
  return (
    <div className="font-heading flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm md:text-base">
        <PostHoverCard>
          <UsernameNavigate userName={userName}>
            <span id="post-name" className="cursor-pointer hover:underline">
              {name}
            </span>
          </UsernameNavigate>
        </PostHoverCard>
        •
        <PostHoverCard>
          <UsernameNavigate userName={userName}>
            <span id="post-username" className="dark:text-foreground cursor-pointer hover:underline">
              @{userName}
            </span>
          </UsernameNavigate>
        </PostHoverCard>
        •<small id="post-uploaded">{time}</small>•
        <small id="post-time-left" className="hidden md:block">
          {timeLeft}
        </small>
      </div>
      <ComboboxDropdownMenu>
        <div className="hover:bg-muted cursor-pointer rounded-full">
          <MoreHorizontal id="post-options" className="w-5" />
        </div>
      </ComboboxDropdownMenu>
    </div>
  );
}

PostCard.Header = PostCardHeader;

function PostCardDescription({ children }: { children: any }) {
  return (
    <div id="post-content" className="cursor-pointer text-xs md:text-base">
      {parse(children)}
      <span className="float-right text-xs md:text-sm">....Show more</span>
    </div>
  );
}

PostCard.Description = PostCardDescription;

function PostCardTags({
  allTags = false,
  location,
  experience,
  jobType,
  salary,
  role,
  skills,
}: {
  allTags: boolean;
  location: string;
  experience: string;
  jobType: string;
  salary: string;
  role: string;
  skills?: any;
}) {
  return (
    <div id="post-tags" className="font-heading">
      <Tags
        allTags={allTags}
        location={location}
        salary={salary}
        role={role}
        experience={experience}
        jobType={jobType}
        skills={skills}
      />
    </div>
  );
}

PostCard.Tags = PostCardTags;

function PostCardFooter({ children }: { children: any }) {
  return <div className="font-heading mt-2 flex items-center justify-between">{children}</div>;
}

PostCard.Footer = PostCardFooter;
