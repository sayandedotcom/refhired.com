"use client";

import { useRouter } from "next/navigation";

import Login from "@/app/(auth)/auth/login/page";

import { Dialog, DialogContent } from "@referrer/ui";

export default function LoginModal() {
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      {/* <DialogTrigger>{children}</DialogTrigger> */}
      <DialogContent className="flex items-center justify-center p-[7px] lg:w-[450px] lg:p-[1px]">
        <Login />
      </DialogContent>
    </Dialog>
  );
}
