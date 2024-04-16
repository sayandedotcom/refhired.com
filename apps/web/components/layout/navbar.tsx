"use client";

import { Link } from "@/navigation";
import { useSession } from "next-auth/react";

import { siteConfig } from "@/config";

import { Icons } from "../icons/icons";
import { TooltipDemo } from "../ui";
import { MobileNavigation } from "./mobile-navbar";
import { NavButtonsAuthenticated, NavButtonsUnAuthenticated } from "./navbar-components";
import { Navigation } from "./navigation";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="top-0 z-20 w-full">
      <div className="mx-auto max-w-screen-2xl items-center px-4 md:px-6 lg:flex">
        <div className="flex items-center justify-between py-3 lg:block lg:py-4">
          <TooltipDemo text={siteConfig.name}>
            <Link href="/" className="flex items-center justify-around gap-3">
              <Icons.logo />
              <h4 className="font-heading mt-2">{siteConfig.name}</h4>
            </Link>
          </TooltipDemo>
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </div>
        <div
          className={`hidden flex-1 flex-row-reverse items-center justify-between lg:flex lg:h-auto lg:overflow-visible lg:pb-0
          lg:pr-0`}>
          <div>{session ? <NavButtonsAuthenticated session={session} /> : <NavButtonsUnAuthenticated />}</div>
          <div className="flex-1">
            <Navigation />
          </div>
        </div>
      </div>
    </nav>
  );
}

// {
//   state ? (
//     <MobileNavigation>
//       <X />
//     </MobileNavigation>
//   ) : (
//     <MobileNavigation>
//       <Menu />
//     </MobileNavigation>
//   );
// }
// ${ state ? "h-screen overflow-auto pb-20 pr-4" : "
