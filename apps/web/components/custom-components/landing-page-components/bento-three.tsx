import { CircleDollarSign, Folder, Gauge, Send, Sparkles, User } from "lucide-react";

import { AnimatedGradientHeading, MagicBentoCard, MagicBentoGrid, VelocityScroll } from "@/components/ui";

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
    Icon: Gauge,
    name: "Dashboard",
    description: "Dashboard for managing large amount of referrals.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      // /images/dashboard-overview.png"
      <img src="" className="border-foreground absolute -right-20 top-5 rounded-lg border opacity-60" />
    ),
  },
  {
    Icon: User,
    name: "Refer",
    description: "Refer referral seeker with just one click.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: CircleDollarSign,
    name: "Earn",
    description: "Monitize you referral giving side passion.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    Icon: Sparkles,
    name: "AI support",
    description: "Filter best candidate with AI support.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <img src="" className="absolute -right-20 -top-20 opacity-60" />,
  },
];

export const MagicBentoThree = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-5 py-3 md:py-16">
      <AnimatedGradientHeading className="ml-auto">
        <h2 className="flex items-center justify-end px-2 text-[30px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-[50px]">
          <Folder className="mb-2 mr-5 hidden h-16 w-16 origin-left transform-gpu text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75 md:block" />
          Manage referrals in a new way
        </h2>
      </AnimatedGradientHeading>
      <VelocityScroll
        text={<> &nbsp; • &nbsp; Refer Now &nbsp; • &nbsp; Post Now &nbsp; </>}
        top
        default_velocity={5}
        className="font-heading flex h-14 w-full items-center text-2xl font-extralight tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-xl md:leading-[5rem]"
      />
      <MagicBentoGrid>
        {features.map((feature) => (
          <MagicBentoCard key={feature.name} {...feature} />
        ))}
      </MagicBentoGrid>
    </section>
  );
};
