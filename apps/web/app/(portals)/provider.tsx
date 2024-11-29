"use client";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import setupIndexedDB from "use-indexeddb";
import { useLocalStorage } from "usehooks-ts";

import { Walkthrough } from "@/components/custom-components";
import { SessionExpiredDialog } from "@/components/ui/session-expired-dialog";

import { PostSteps, Steps } from "@/config";

import { useStore } from "@/store/store";

const idbConfig = {
  databaseName: "refhired-db",
  version: 1,
  stores: [
    {
      name: "posts", // Store name
      id: { keyPath: "id", autoIncrement: true }, // Primary key setup
      indices: [
        { name: "body", keyPath: "body", options: { unique: false } }, // Index for the "body" field
      ],
    },
  ],
};

export function Provider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  const [run, setRun] = useState(false);
  const [open, setOpen] = useState(false);

  const [showComponent, setShowComponent] = useState(false);
  const [countIntro, setCountIntro] = useLocalStorage("count-intro", 0);

  const joyRide = useStore((state) => state.joyRide);

  useEffect(() => {
    if (session?.error !== "RefreshTokenError") return;
    setOpen(true);
    // signIn("google"); // Force sign in to obtain a new set of access and refresh tokens
  }, [session?.error]);

  useEffect(() => {
    setupIndexedDB(idbConfig)
      .then(() => console.log("success"))
      .catch((e) => console.error("error / unsupported", e));

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
