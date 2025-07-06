"use client";

import * as React from "react";

import numeral from "numeral";

import { cn } from "@/utils";

import { buttonVariants } from "../components/button";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const InputWithIconStart = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, value, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center gap-1 rounded-md")}>
        <span className={cn(buttonVariants({ variant: "secondary" }), "absolute left-1 h-8 w-8 text-lg")}>
          {icon}
        </span>
        <input
          value={value && numeral(value).format("0,0")}
          type={type}
          className={cn(
            "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pl-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputWithIconStart.displayName = "InputWithIconStart";

const InputWithIconEnd = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center gap-1 rounded-md")}>
        <input
          type={type}
          className={cn(
            "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className={cn(buttonVariants({ variant: "secondary" }), "absolute right-1 h-8 w-8 text-lg")}>
          {icon}
        </span>
      </div>
    );
  }
);

InputWithIconEnd.displayName = "InputWithIconEnd";

export { InputWithIconStart, InputWithIconEnd };
