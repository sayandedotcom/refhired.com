"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useLoading, useWindowSize } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Bookmark, MessageCircle, Share2, Star } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

import { ShareDialog } from "@/components/dialog";
import { Badge, TooltipDemo, sonerToast } from "@/components/ui";

import { request } from "@/lib/axios";

export const ApplyButton = ({ stars }) => {
  const [applied, setApplied] = useState(false);
  const { loadingValue, setLoadingValue } = useLoading();
  const apply = () => {
    setLoadingValue("apply");
    setApplied(!applied);
    setLoadingValue("");
  };
  return (
    <TooltipDemo text="Apply">
      <Button
        id="post-apply"
        disabled={applied}
        isLoading={loadingValue === "apply"}
        iconBefore={applied && <Bookmark className="mr-2 h-4 w-4 text-green-400" />}
        onClick={apply}
        className="h-9 w-3/12 rounded-full text-sm">
        {applied ? "Applied !" : `Apply (⭐ ${stars})`}
      </Button>
    </TooltipDemo>
  );
};

export const MultipleButtons = ({ children }: { children?: any }) => {
  return (
    <div className="text-muted-foreground flex items-center justify-center gap-9 text-xl md:text-xl">
      {children}
    </div>
  );
};

export const ShareButton = ({ link, title }: { link?: any; title?: any }) => {
  return (
    <TooltipDemo text="Share">
      <ShareDialog shareUrl={link} title={title}>
        <Share2 id="options" className="h-5 w-5 cursor-pointer" />
      </ShareDialog>
    </TooltipDemo>
  );
};

export const CommentButton = () => {
  return (
    <TooltipDemo text="Comment">
      <MessageCircle id="options" className="h-5 w-5 cursor-pointer" />
    </TooltipDemo>
  );
};

export const BookmarkButton = ({ postId }: { postId?: string }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [bookmark, setBookmark] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: ["bookmarks"],
    mutationFn: ({ postId }: { postId: string }) => {
      return request.post("/bookmarks", null, {
        params: {
          postId: postId,
        },
        headers: {
          Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
        },
      });
    },
    onSuccess(data, variables) {
      setBookmark(!bookmark);
      sonerToast({
        severity: "neutral",
        title: (
          <div className="my-auto mr-4 flex items-center gap-3">
            <p className="text-sm">{bookmark ? "Removed from Bookmarks" : "Added to Bookmarks"}</p>
          </div>
        ),
        actions: (
          <Button onClick={() => setBookmark(!bookmark)} className="h-6" variant="secondary">
            Undo
          </Button>
        ),
      });
    },
    onError(error) {
      if (axios.isAxiosError(error) && error?.response.status === 401) {
        router.push("/auth/login");
        sonerToast({
          severity: "error",
          title: "Error !",
          message: error?.response.data.message,
        });
      }
      axios.isAxiosError(error) &&
        error?.response.status != 401 &&
        sonerToast({
          severity: "info",
          title: "Error !",
          message: error?.response.data.message,
        });
    },
  });

  const bookmarked = () => {
    mutate({
      postId: postId,
    });
    // sonerToast({
    //   severity: "neutral",
    //   title: (
    //     <div className="my-auto mr-4 flex items-center gap-3">
    //       <p className="text-sm">{bookmark ? "Removed from Bookmarks" : "Added to Bookmarks"}</p>
    //     </div>
    //   ),
    //   actions: (
    //     <Button onClick={() => setBookmark(!bookmark)} className="h-6" variant="secondary">
    //       Undo
    //     </Button>
    //   ),
    // });
  };

  return (
    <>
      <TooltipDemo text={`${bookmark ? "Add to Bookmark" : "Remove from Bookmark"}`}>
        <Bookmark
          fill={`${bookmark ? "#ffff" : ""}`}
          onClick={bookmarked}
          id="options"
          className="h-5 w-5 cursor-pointer"
        />
      </TooltipDemo>
    </>
  );
};

export const StarButton = ({ star }: { star?: any }) => {
  return (
    <TooltipDemo text="Star">
      <div className="flex h-5 items-center gap-1">
        <Star id="options" className="h-full" /> <p className="mt-1 text-base">{star}</p>
      </div>
    </TooltipDemo>
  );
};

export const ApplyStatus = ({ totalApplied, acceptLimit }: { totalApplied?: any; acceptLimit?: any }) => {
  const percentage = acceptLimit ? Math.round((100 / acceptLimit) * totalApplied) : 0;
  return (
    <TooltipDemo text={`${totalApplied} / ${acceptLimit} Applied`}>
      <div
        className={`flex items-center text-base ${totalApplied === acceptLimit ? "text-red-600" : ""} ${
          acceptLimit ? "" : "hidden"
        } `}>
        <svg height="18" width="18" viewBox="0 0 20 20">
          <circle r="10" cx="10" cy="10" fill="#a1a1aa" />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke={totalApplied === acceptLimit ? "#cb2424" : "#ffff"}
            strokeWidth="10"
            strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)"
          />
          <circle r="6" cx="10" cy="10" fill="black" />
        </svg>
      </div>
    </TooltipDemo>
  );
};

export const Tags = ({
  allTags,
  companyName,
  locationType,
  location,
  experience,
  jobType,
  salary,
  role,
  skills,
  jobCode,
  jobURL,
}: any) => {
  const { width } = useWindowSize();

  return (
    <>
      <Badge
        search={companyName}
        search_query={"companyName"}
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        {companyName}
      </Badge>

      {role && (
        <Badge
          search={role}
          search_query={"jobRole"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          💼 {role}
        </Badge>
      )}

      {locationType && (
        <Badge
          search={locationType}
          search_query={"jobLocationType"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          {locationType}
        </Badge>
      )}

      {location && (
        <Badge
          search={location}
          search_query={"jobLocation"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          📍 {location}
        </Badge>
      )}

      {experience && (
        <Badge
          search={experience}
          search_query={"jobExperience"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          🧑‍💻 {experience} + years of experience
        </Badge>
      )}

      {jobType && (
        <Badge
          search={jobType}
          search_query={"jobType"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          🧑‍💼 {jobType}
        </Badge>
      )}

      {allTags && (
        <>
          <Badge
            className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
            variant="secondary">
            💵 {salary}
          </Badge>
          {skills?.map(({ __typename, name }, i) => (
            <Badge
              key={i}
              search={name}
              search_query={"skills"}
              className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
              variant="secondary">
              {name}
            </Badge>
          ))}
        </>
      )}

      {allTags ? (
        <></>
      ) : (
        <Badge
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          +7
        </Badge>
      )}

      {jobURL && (
        <Badge
          search={jobURL}
          search_query={"jobURL"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          {jobURL}
        </Badge>
      )}

      {jobCode && (
        <Badge
          search={jobCode}
          search_query={"jobCode"}
          className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
          variant="secondary">
          {jobCode}
        </Badge>
      )}
    </>
  );
};

// bg-[#18273f]  text-[#3382e4] hover:bg-[#146de2] hover:text-white
