"use client";

import { useState } from "react";

import { useLoading, useWindowSize } from "@/hooks";
import { MapPin } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiLink2, FiMessageCircle, FiShare2 } from "react-icons/fi";

import { Button } from "@referrer/ui";

import { ApplyDialog, Badge, TooltipDemo, toastMessage } from "@/components/ui";

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
          disabled={applied}
          isLoading={loadingValue === "apply"}
          iconBefore={applied && <AiOutlineCheckCircle className="mr-2 h-4 w-4 text-green-400" />}
          onClick={apply}
          className="h-9 w-3/12 rounded-full text-sm">
          {applied ? "Applied !" : "Apply"}
        </Button>
      </ApplyDialog>
    </TooltipDemo>
  );
};

export const MultipleButtons = () => {
  const [bookmark, setBookmark] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const bookmarked = () => {
    setBookmark(!bookmark);
    toastMessage({ type: "neutral", title: bookmark ? "Removed from Bookmarks" : "Added to Bookmarks" });
  };
  const copied = () => {
    setLinkCopied(!linkCopied);
    // toastMessage({ type: "neutral", title: linkCopied ? "Link Copied" : "Link Copied" });
    toastMessage({
      children: (
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
              <p className="mt-1 text-sm text-gray-500">Sure! 8:30pm works great!</p>
            </div>
          </div>
        </div>
      ),
    });
  };

  return (
    <div className="flex gap-9 text-xl md:text-xl">
      <TooltipDemo text="Comment">
        <FiMessageCircle className="w-5 cursor-pointer" />
      </TooltipDemo>
      <TooltipDemo text="Share">
        <FiShare2 className="w-5 cursor-pointer" />
      </TooltipDemo>
      <TooltipDemo text="Copy Link">
        <FiLink2 onClick={copied} className="w-5 cursor-pointer" />
      </TooltipDemo>
      {!bookmark ? (
        <TooltipDemo text="Add to Bookmark">
          <FaRegBookmark onClick={bookmarked} className="w-5 cursor-pointer" />
        </TooltipDemo>
      ) : (
        <TooltipDemo text="Remove from Bookmark">
          <FaBookmark onClick={bookmarked} className="w-5 cursor-pointer" />
        </TooltipDemo>
      )}
    </div>
  );
};

export const Tags = ({ tag }) => {
  const { width } = useWindowSize();
  return (
    <>
      <Badge
        className="cursor-pointer border border-black dark:border-gray-200 hover:bg-foreground hover:text-background"
        variant="secondary">
        <MapPin className="h-3" />
        Location
      </Badge>
      {tag.map((item, i) =>
        width < 1000
          ? i < 1
          : i < 3 && (
              <Badge
                className="cursor-pointer border
                bg-[#18273f]  text-[#3382e4] hover:bg-[#146de2] hover:text-white
                 "
                variant="secondary">
                {item}
              </Badge>
            )
      )}
      <Badge
        className="cursor-pointer border border-black dark:border-gray-200 hover:bg-foreground hover:text-background"
        variant="secondary">
        +7
      </Badge>
    </>
  );
};
