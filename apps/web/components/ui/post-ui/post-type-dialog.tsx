"use client";

import { useCallback } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@referrer/ui";

export function PostTypeDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  //  const setPostType = useStore((state) => state.setPostType);
  // const postType = (type: string) => {
  //   setPostType(type);
  //   router.push("/post");
  // };
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-muted/40 sm:max-w-[445px]">
        <DialogHeader>
          <DialogTitle>What you want to Post ?</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        <DialogFooter className="flex flex-row items-center sm:justify-between">
          <DialogClose asChild>
            <Button
              onClick={() => {
                router.push("/post" + "?" + createQueryString("tab", "referral"));
              }}>
              Referral Post
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => {
                router.push("/post" + "?" + createQueryString("tab", "find"));
              }}>
              Find Referer
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => {
                router.push("/post" + "?" + createQueryString("tab", "post"));
              }}>
              Post Anything
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
