"use client";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useLocalStorage } from "usehooks-ts";

import { Walkthrough } from "@/components/custom-components";
import { SessionExpiredDialog } from "@/components/ui/session-expired-dialog";

import { PostSteps, Steps } from "@/config";

import { useStore } from "@/store/store";

export function Provider({ children }: { children: React.ReactNode }) {
  const [run, setRun] = useState(false);
  const [open, setOpen] = useState(false);

  const [showComponent, setShowComponent] = useState(false);
  const [countIntro, setCountIntro] = useLocalStorage("count-intro", 0);
  const joyRide = useStore((state) => state.joyRide);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error !== "RefreshTokenError") return;
    setOpen(true);
    // signIn("google"); // Force sign in to obtain a new set of access and refresh tokens
  }, [session?.error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showComponent, setShowComponent]);

  return (
    <>
      {showComponent && countIntro < 2 && (
        <Walkthrough steps={Steps} countIntro={countIntro} setCountIntro={setCountIntro} />
      )}
      <SessionExpiredDialog open={open} setOpen={setOpen} />
      <Walkthrough steps={PostSteps} run={!!joyRide} setRun={setRun} />
      {children}
    </>
  );
}
