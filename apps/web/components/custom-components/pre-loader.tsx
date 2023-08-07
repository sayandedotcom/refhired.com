"use client";

import { Icons } from "../icons/icons";

export function PreLoader() {
  return (
    <div className="font-heading flex h-screen w-full items-center justify-center gap-3">
      <Icons.logo />
      <h3 className="font-heading mt-2">Refhired.com</h3>
    </div>
  );
}
