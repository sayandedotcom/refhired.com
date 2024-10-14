"use client";

import { useCallback } from "react";

import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/navigation";
import { Frown, RotateCcw } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

export const PortalsNotFound = ({ text }) => {
  const { data } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-5 font-sans">
      {data ? (
        <>
          <p className="font-semibold">
            <Frown className="mr-2 inline h-5 w-5 font-bold" /> Ooops ! You have no {text} !
          </p>
          <Button className="rounded-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </>
      ) : (
        <>
          <p className="font-semibold">
            <Frown className="mb-1 mr-1 inline h-5 w-5 font-bold" /> Ooops ! Login to see your {text}
            ....
          </p>
          <Button
            className="font-heading rounded-full px-6 text-sm transition active:scale-95"
            onClick={() => router.push("/auth/login" + "?" + createQueryString("callbackUrl", pathName))}>
            Log In
          </Button>
        </>
      )}
    </div>
  );
};
