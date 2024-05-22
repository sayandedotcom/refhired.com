"use client";

import Image from "next/image";

import { cn } from "@/utils";

import { AnimatedList } from "./animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  src: string;
}

let notifications = [
  {
    name: "Jack receives a referral from Google",
    description: "@jack22",
    src: "https://avatar.vercel.sh/jill",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "John giving referrals to Meta",
    description: "@john12",
    src: "https://avatar.vercel.sh/jill",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Mark receives a referral from Microsoft",
    description: "@zuck",
    src: "https://avatar.vercel.sh/jill",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Sayan receives a referral from Tesla",
    description: "@sayandeten",
    src: "https://avatar.vercel.sh/jill",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time, src }: Item) => {
  // max-w-[400px]
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}>
      <div className="flex flex-row items-center gap-3">
        <Image
          src={src}
          alt="Img"
          height={10}
          width={10}
          className="flex h-10 w-10 items-center justify-center rounded-full"
        />
        {/* <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}>
          <span className="text-lg">{icon}</span>
        </div> */}
        <div className="flex flex-col overflow-hidden">
          {/* text-lg */}
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function List({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `bg-background relative mx-auto flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border p-6 shadow-lg ${className}`
      )}>
      <AnimatedList delay={7000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export function TopNotificationList({ className }: { className?: string }) {
  return (
    <div
      className={`bg-background mx-auto flex h-[87px] max-h-[400px] w-full max-w-[400px] flex-col overflow-hidden rounded-lg shadow-lg ${className}`}>
      <AnimatedList delay={3000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
