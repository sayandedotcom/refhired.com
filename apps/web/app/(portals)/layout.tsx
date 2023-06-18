"use client";

import { Metadata } from "next";
import { Separator } from "@referrer/ui";
import "../../styles/globals.css";

const metadata: Metadata = {
  title: {
    default: "Referrer",
    template: " %s | Referrer",
  },
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-center lg:w-[1200px] w-full'>
      <section className='bg-red-400'>Icons</section>
      <section className='bg-green-300 w-[38rem]'>{children}</section>
      <section className='bg-yellow-200'>Extras</section>
    </div>
  );
}
