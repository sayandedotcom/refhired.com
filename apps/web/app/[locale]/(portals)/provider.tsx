"use client";

import { useEffect, useState } from "react";

import { useLocalStorage } from "usehooks-ts";

import { Walkthrough } from "@/components/custom-components";

import { PostSteps, Steps } from "@/config";

import { useStore } from "@/store/store";

export function Provider({ children }: { children: React.ReactNode }) {
  const [run, setRun] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [countIntro, setCountIntro] = useLocalStorage("count-intro", 0);
  const joyRide = useStore((state) => state.joyRide);

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
      <Walkthrough steps={PostSteps} run={!!joyRide} setRun={setRun} />
      {children}
    </>
  );
}
