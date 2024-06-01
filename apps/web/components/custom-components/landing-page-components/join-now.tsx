"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";

import { ShimmerButtonComponent } from "./shimmer-button-component";

export const Joinnow = () => {
  return (
    <section className="mx-auto py-32 text-center">
      <GradualSpacing
        className="font-display text-center text-xl font-bold tracking-[-0.1em] text-black  dark:text-white md:text-6xl md:leading-[5rem]"
        text=" Don't waste your time !"
      />
      {/* <h1 className="font-heading text-xl font-extrabold dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-6xl">
        Don't waste your time !
      </h1> */}
      <h4 className="font-extrabold sm:block">Get / Referrer a Job now</h4>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* <ShimmerButtonComponent href={"/"}>Log In</ShimmerButtonComponent>
        <ShimmerButtonComponent href={"/"}>Sign Up</ShimmerButtonComponent> */}
        <ShimmerButtonComponent href={"/"}>Join the waitlist</ShimmerButtonComponent>
      </div>
    </section>
  );
};
