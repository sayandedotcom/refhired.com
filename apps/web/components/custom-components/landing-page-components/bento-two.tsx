import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { MousePointerClick, Search } from "lucide-react";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { AnimatedGradientHeading, MagicBentoCard, MagicBentoGrid } from "@/components/ui";

import { cn } from "@/utils";

import Marquee from "./marquee";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Browse through referrals",
    description: "You can browse through unlimited number of referralss.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] ">
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">{f.name}</figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: MousePointerClick,
    name: "Easy Apply",
    description: "One click apply for referrals.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: Icons.findReferrer,
    name: "Find Referrer",
    description: "Find Referrer for specific company or startups you want.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: InputIcon,
    name: "Search for referrals",
    description: "Search through all referrals in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Search Referrals..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Referrals at Google</CommandItem>
            <CommandItem>Referrals at Meta</CommandItem>
            <CommandItem>Referrals at Microsoft</CommandItem>
            <CommandItem>Referrals at Apple</CommandItem>
            <CommandItem>Referrals at Tesla</CommandItem>
            <CommandItem>Referrals at Amazon</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
];

export const MagicBentoTwo = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-5 py-3 md:py-16">
      <AnimatedGradientHeading>
        <h2 className="font-heading flex items-center px-2 text-start text-[30px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-[50px]">
          <Search className="mb-2 mr-5 hidden h-16 w-16 origin-left transform-gpu text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75 md:block" />
          Search referrals in a new way
        </h2>
      </AnimatedGradientHeading>
      <MagicBentoGrid>
        {features.map((feature) => (
          <MagicBentoCard key={feature.name} {...feature} />
        ))}
      </MagicBentoGrid>
    </section>
  );
};
