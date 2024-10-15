"use client";

import { Loader } from "lucide-react";

export function SpinLoader() {
  return (
    <div
      className="fixed left-2/4 top-2/4"
      style={{
        translate: "-50% -50%",
      }}>
      <Loader className="h-14 w-14 animate-spin" />
    </div>
  );
}
