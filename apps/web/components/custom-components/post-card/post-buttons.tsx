"use client";

import { useState } from "react";

import { useLoading, useWindowSize } from "@/hooks";
import { Star } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiMessageCircle, FiShare2 } from "react-icons/fi";

import { Button } from "@referrer/ui";

import { ShareDialog } from "@/components/dialog";
import { Badge, TooltipDemo, sonerToast } from "@/components/ui";

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
        iconBefore={applied && <AiOutlineCheckCircle className="mr-2 h-4 w-4 text-green-400" />}
        onClick={apply}
        className="h-9 w-3/12 rounded-full text-sm">
        {applied ? "Applied !" : `Apply (⭐ ${stars})`}
      </Button>
    </TooltipDemo>
  );
};
// (200 Applied)

export const MultipleButtons = ({ children }: { children?: any }) => {
  return <div className="flex justify-center  gap-9 text-xl md:text-xl">{children}</div>;
};

export const ShareButton = ({ link, title }: { link?: any; title?: any }) => {
  return (
    <TooltipDemo text="Share">
      <ShareDialog shareUrl={link} title={title}>
        <FiShare2 id="options" className="w-5 cursor-pointer" />
      </ShareDialog>
    </TooltipDemo>
  );
};

export const CommentButton = () => {
  return (
    <TooltipDemo text="Comment">
      <FiMessageCircle id="options" className="w-5 cursor-pointer" />
    </TooltipDemo>
  );
};

export const BookmarkButton = () => {
  const [bookmark, setBookmark] = useState(false);

  const bookmarked = () => {
    setBookmark(!bookmark);
    sonerToast({
      severity: "neutral",
      title: (
        <div className="my-auto mr-4 flex items-center gap-3">
          <p className="text-sm">{bookmark ? "Removed from Bookmarks" : "Added to Bookmarks"}</p>
          <Button onClick={() => setBookmark(!bookmark)} className="h-6" variant="secondary" size="sm">
            Undo
          </Button>
        </div>
      ),
    });
  };

  return (
    <>
      {!bookmark ? (
        <TooltipDemo text="Add to Bookmark">
          <FaRegBookmark onClick={bookmarked} id="options" className="w-5 cursor-pointer" />
        </TooltipDemo>
      ) : (
        <TooltipDemo text="Remove from Bookmark">
          <FaBookmark onClick={bookmarked} id="options" className="w-5 cursor-pointer" />
        </TooltipDemo>
      )}
    </>
  );
};

export const StarButton = ({ star }: { star?: any }) => {
  return (
    <TooltipDemo text="Star">
      <div className="flex gap-2">
        <Star id="options" className="w-5 cursor-pointer" /> {star}
      </div>
    </TooltipDemo>
  );
};

export const ApplyStatus = ({ totalApplied, acceptLimit }: { totalApplied?: any; acceptLimit?: any }) => {
  return (
    <TooltipDemo text="Comment">
      <>
        {totalApplied} / {acceptLimit}
      </>
    </TooltipDemo>
  );
};

export const Tags = ({ allTags, location, experience, jobType, salary, role, skills }) => {
  const { width } = useWindowSize();
  console.log(skills);

  return (
    <>
      <Badge
        search={role}
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        💼 {role}
      </Badge>
      <Badge
        search={location}
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        📍 {location}
      </Badge>
      <Badge
        search={experience}
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        🧑‍💻 {experience}
      </Badge>
      <Badge
        search={jobType}
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        🧑‍💼 {jobType}
      </Badge>
      {allTags && (
        <>
          <Badge
            search={salary}
            className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
            variant="secondary">
            💵 {salary}
          </Badge>
          {skills.map(({ __typename, name }, i) => (
            <Badge
              key={i}
              search={name}
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
    </>
  );
};

// bg-[#18273f]  text-[#3382e4] hover:bg-[#146de2] hover:text-white
