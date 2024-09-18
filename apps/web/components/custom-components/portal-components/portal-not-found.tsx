"use client";

import { ArrowRight, Frown, RotateCcw } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

export const PortalsNotFound = ({ text }) => {
  const { data } = useSession();
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-5">
      {data ? (
        <>
          <p>
            <Frown className="mr-2 inline h-5 w-5" /> Ooops ! You have no {text} !
          </p>
          <Button className="rounded-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </>
      ) : (
        <>
          <p>
            <Frown className="mr-2 inline h-5 w-5" /> Ooops ! Login or Sign Up to see your {text}....
          </p>
          <Button className="rounded-full">
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
};
