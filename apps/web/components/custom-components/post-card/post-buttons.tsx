"use client";

import { useState } from "react";

import { useLoading, useWindowSize } from "@/hooks";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiLink2, FiMessageCircle, FiShare2 } from "react-icons/fi";

import { Button } from "@referrer/ui";

import { ApplyDialog, Badge, TooltipDemo, sonerToast } from "@/components/ui";

import { useStore } from "@/store/store";

export const ApplyButton = () => {
  const [applied, setApplied] = useState(false);
  const { loadingValue, setLoadingValue } = useLoading();
  const apply = () => {
    setLoadingValue("apply");
    setApplied(!applied);
    setLoadingValue("");
  };
  return (
    <TooltipDemo text="Apply">
      <ApplyDialog>
        <Button
          id="post-apply"
          disabled={applied}
          isLoading={loadingValue === "apply"}
          iconBefore={applied && <AiOutlineCheckCircle className="mr-2 h-4 w-4 text-green-400" />}
          onClick={apply}
          className="h-9 w-3/12 rounded-full text-sm">
          {applied ? "Applied !" : "Apply (⭐ 200)"}
        </Button>
      </ApplyDialog>
    </TooltipDemo>
  );
};
// (200 Applied)

export const MultipleButtons = () => {
  const [bookmark, setBookmark] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const setToastPosition = useStore((state) => state.setToastPosition);
  const bookmarked = () => {
    setBookmark(!bookmark);
    setToastPosition("bottom-left");
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
  const copied = () => {
    setLinkCopied(!linkCopied);
    sonerToast({
      title: "Hi this is the first Toasts",
      message: "Lorem sum dolor sit amet consectetur adipisicing elit. Adipisci modi, ",
      severity: "warning",
    });
  };

  return (
    <div className="flex gap-9 text-xl md:text-xl">
      <TooltipDemo text="Comment">
        <FiMessageCircle id="options" className="w-5 cursor-pointer" />
      </TooltipDemo>
      <TooltipDemo text="Share">
        <FiShare2 id="options" className="w-5 cursor-pointer" />
      </TooltipDemo>
      <TooltipDemo text="Copy Link">
        <FiLink2 onClick={copied} id="options" className="w-5 cursor-pointer" />
      </TooltipDemo>
      {!bookmark ? (
        <TooltipDemo text="Add to Bookmark">
          <FaRegBookmark onClick={bookmarked} id="options" className="w-5 cursor-pointer" />
        </TooltipDemo>
      ) : (
        <TooltipDemo text="Remove from Bookmark">
          <FaBookmark onClick={bookmarked} id="options" className="w-5 cursor-pointer" />
        </TooltipDemo>
      )}
    </div>
  );
};

export const Tags = ({ location, experience, jobType, salary, role, skills }) => {
  const { width } = useWindowSize();
  return (
    <>
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        💼 {role}
      </Badge>
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        📍 {location}
      </Badge>
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        🧑‍💻 {experience}
      </Badge>
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        🧑‍💼 {jobType}
      </Badge>
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        💵 {salary}
      </Badge>
      {skills.map((item, i) =>
        width < 1000
          ? i < 1
          : i < 100 && (
              <Badge
                className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
                variant="secondary">
                {item}
              </Badge>
            )
      )}
      <Badge
        className="hover:bg-foreground hover:text-background cursor-pointer border border-black dark:border-gray-200"
        variant="secondary">
        +7
      </Badge>
    </>
  );
};

// bg-[#18273f]  text-[#3382e4] hover:bg-[#146de2] hover:text-white
