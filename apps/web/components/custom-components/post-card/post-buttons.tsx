"use client";

import { useState } from "react";

import { MapPin } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiLink2, FiMessageCircle, FiShare2 } from "react-icons/fi";

import { Button } from "@referrer/ui";

import { ApplyDialog, Badge, TooltipDemo, customToast } from "@/components/ui";

import { useWindowSize } from "@/lib/hooks";

export const ApplyButton = () => {
  const [applied, setApplied] = useState(false);
  return (
    <TooltipDemo text="Apply">
      <ApplyDialog>
        <Button
          disabled={applied}
          iconBefore={applied && <AiOutlineCheckCircle className="mr-2 h-4 w-4 text-green-400" />}
          onClick={() => setApplied(!applied)}
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
    customToast("neutral", bookmark ? "Removed from Bookmarks" : "Added to Bookmarks");
  };
  const copied = () => {
    setLinkCopied(!linkCopied);
    customToast("neutral", linkCopied ? "Link Copied" : "Link Copied");
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
      <Badge className="border border-black dark:border-gray-200" variant="secondary">
        <MapPin className="h-3" />
        Location
      </Badge>
      {tag.map((item, i) =>
        width < 1000
          ? i < 1
          : i < 3 && (
              <Badge className="border border-black dark:border-gray-200" variant="secondary">
                {item}
              </Badge>
            )
      )}
      <Badge className="border border-black dark:border-gray-200" variant="secondary">
        +7
      </Badge>
    </>
  );
};
