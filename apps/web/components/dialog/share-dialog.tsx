"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { useCopyToClipboard } from "usehooks-ts";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@referrer/ui";

import { siteConfig } from "@/config";

export function ShareDialog({
  children,
  shareUrl,
  title,
}: {
  children: React.ReactNode;
  shareUrl?: string;
  title?: string;
}) {
  const [copiedText, copy] = useCopyToClipboard();

  const [isCopied, setIsOnCopied] = useState<Boolean>(false);

  const url = `${siteConfig.url}/${shareUrl}`;

  const size = 50;

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        // console.log("Copied!", { text });
        setIsOnCopied(!isCopied);
        // sonerToast({
        //   title: "Copied to your clipboard !",
        //   severity: "neutral",
        // });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-muted sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share !</DialogTitle>
          <DialogDescription>Share on your Social Media sitess</DialogDescription>
        </DialogHeader>
        <div className="scrollbar-hide flex gap-4 overflow-hidden overflow-x-scroll">
          <div className="Demo__some-network">
            <WhatsappShareButton
              url={url}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button">
              <WhatsappIcon size={size} round />
            </WhatsappShareButton>
          </div>
          <div className="Demo__some-network">
            <TwitterShareButton url={url} title={title} className="Demo__some-network__share-button">
              <XIcon size={size} round />
            </TwitterShareButton>
          </div>
          <div className="Demo__some-network">
            <FacebookShareButton url={url} className="Demo__some-network__share-button">
              <FacebookIcon size={size} round />
            </FacebookShareButton>
          </div>
          <div className="Demo__some-network">
            <EmailShareButton
              url={url}
              subject={title}
              body="body"
              className="Demo__some-network__share-button">
              <EmailIcon size={size} round />
            </EmailShareButton>
          </div>
          <div className="Demo__some-network">
            <LinkedinShareButton url={url} className="Demo__some-network__share-button">
              <LinkedinIcon size={size} round />
            </LinkedinShareButton>
          </div>
          <div className="Demo__some-network">
            <RedditShareButton
              url={url}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button">
              <RedditIcon size={size} round />
            </RedditShareButton>
          </div>
          <div className="Demo__some-network">
            <LinkedinShareButton url={url} className="Demo__some-network__share-button">
              <LinkedinIcon size={size} round />
            </LinkedinShareButton>
          </div>
        </div>
        <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 transition active:scale-95"
            onClick={handleCopy(url)}>
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
