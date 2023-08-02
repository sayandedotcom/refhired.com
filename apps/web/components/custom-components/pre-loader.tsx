"use client";

import { Icons } from "../icons/icons";

export function PreLoader() {
  return (
    <div className="h-screen w-full flex justify-center items-center font-heading gap-3">
      <Icons.logo />
      <h3 className="font-heading mt-2">Refhired.com</h3>
    </div>
  );
}
