import { BellIcon, Fingerprint, GlobeIcon, Image, Rocket, Search } from "lucide-react";

import { Globe, MagicBentoCard, MagicBentoGrid } from "@/components/ui";

import { FeatureNotificationList } from "./list";

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
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 40+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: (
      <Globe className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Fingerprint,
    name: "Passwordless Auth",
    description: "Passwordless auth either with Email Verification or OAuth.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Search,
    name: "SEO Optimized",
    description: "Your post can be found within a simpele google search.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Image,
    name: "Dynamic Opengraph",
    description: "Dynamic Opengraph to make referrals look good when shared.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when someone asks referrals or apply for referral.",
    href: "/",
    cta: "Learn more",
    background: <FeatureNotificationList className="absolute -right-16 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export const MagicBentoComponent = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-5 py-3 md:py-16">
      <h2 className="font-heading flex items-center justify-center px-2 text-[30px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-[50px]">
        <Rocket className="mb-2 mr-5 hidden h-16 w-16 origin-left transform-gpu text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75 md:block" />
        Features
      </h2>
      <MagicBentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <MagicBentoCard key={feature.name} {...feature} />
        ))}
      </MagicBentoGrid>
    </section>
  );
};
