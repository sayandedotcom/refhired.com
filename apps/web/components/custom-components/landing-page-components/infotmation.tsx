import { Link } from "@/navigation";
import { ChevronRight } from "lucide-react";

import { AnimatedGradientText } from "@/components/ui";

import { cn } from "@/utils";

export const Information = () => {
  return (
    <Link href="/blogs" className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        📣 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}>
          Important Notice
        </span>
        <ChevronRight className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </Link>
  );
};
