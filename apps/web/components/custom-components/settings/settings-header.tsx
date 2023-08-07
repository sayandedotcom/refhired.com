"use client";

import { usePathname } from "next/navigation";

export function SettingsHeader({ settingsNav }) {
  const pathName = usePathname();
  return (
    <>
      {settingsNav.map(
        (item) =>
          pathName.split("/")[2] === item.title && (
            <>
              <h2 className="text-2xl font-bold capitalize tracking-tight">{`${pathName.split("/")[2]}`}</h2>
              <p key={item.title} className="text-muted-foreground">
                {item.info}
              </p>
            </>
          )
      )}
    </>
  );
}
