"use client";

import { useCallback } from "react";

import { useSearchParams } from "next/navigation";

import { useRouter } from "@/navigation";
import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel2,
  AlertDialogContent,
  AlertDialogDescription, // AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-row items-center justify-between">
          <AlertDialogTitle>What you want to Post ?</AlertDialogTitle>
          <AlertDialogCancel2>
            <X />
          </AlertDialogCancel2>
        </AlertDialogHeader>
        <AlertDialogDescription>Select one</AlertDialogDescription>
        <div className="flex items-center justify-center gap-5">
          <AlertDialogAction
            onClick={() => {
              router.push("/post" + "?" + createQueryString("tab", "referral"));
            }}>
            Referral Post
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => {
              router.push("/post" + "?" + createQueryString("tab", "normal"));
            }}>
            Normal Post
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => {
              router.push("/post" + "?" + createQueryString("tab", "find"));
            }}>
            Find Referer
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
