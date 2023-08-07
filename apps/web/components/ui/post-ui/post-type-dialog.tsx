"use client";

import { useRouter } from "next/navigation";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription, // AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@referrer/ui";

import { useStore } from "@/store/store";

export function PostTypeDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const setPostType = useStore((state) => state.setPostType);
  const postType = (type: string) => {
    setPostType(type);
    router.push("/post");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex-row items-center justify-between">
          <AlertDialogTitle>What you want to Post ?</AlertDialogTitle>
          <AlertDialogCancel className="rounded-full">
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription>Select one</AlertDialogDescription>
        <div className="flex items-center justify-center gap-5">
          <AlertDialogAction onClick={() => postType("Referral")}>Referral Post</AlertDialogAction>
          <AlertDialogAction onClick={() => postType("Normal")}>Normal Post</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
