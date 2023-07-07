"use client";

import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@referrer/ui";

export function PostTypeDialog({ children }: { children: React.ReactNode }) {
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
          <AlertDialogAction>Referral Post</AlertDialogAction>
          <AlertDialogAction>Normal Post</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
