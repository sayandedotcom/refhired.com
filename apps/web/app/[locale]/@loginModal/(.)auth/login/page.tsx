"use client";

import Login from "@/app/[locale]/(auth)/auth/login/page";

import { Dialog, DialogContent, DialogTrigger } from "@referrer/ui";

export default function LoginModal({ children }: { children: any }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="border-foreground flex w-[450px] items-center justify-center p-1">
        <Login className="w-full border-none px-0" />
      </DialogContent>
    </Dialog>
  );
}
