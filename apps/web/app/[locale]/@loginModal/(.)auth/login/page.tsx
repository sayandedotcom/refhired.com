"use client";

import Login from "@/app/[locale]/(auth)/auth/login/page";
import { useRouter } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { Dialog, DialogContent } from "@referrer/ui";

export default function LoginModal({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      {/* <DialogTrigger>{children}</DialogTrigger> */}
      <DialogContent className="flex w-[450px] items-center justify-center p-1">
        <Login />
      </DialogContent>
    </Dialog>
  );
}
