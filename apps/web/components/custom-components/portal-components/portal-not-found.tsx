"use client";

import { Link } from "@/navigation";
import { ArrowRight, Frown, RotateCcw } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button, buttonVariants } from "@referrer/ui";

export const PortalsNotFound = ({ text }) => {
  const { data } = useSession();
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
            <Frown className="mb-1 mr-1 inline h-5 w-5 font-bold" /> Ooops ! Login or Sign Up to see your{" "}
            {text}
            ....
          </p>
          <Link
            href={"/auth/login"}
            className={`rounded-full transition active:scale-95 ${buttonVariants()}`}>
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </>
      )}
    </div>
  );
};
