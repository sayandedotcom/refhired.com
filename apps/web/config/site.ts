import { SiteConfig } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://chadnext.moinulmoin.com";

export const siteConfig: SiteConfig = {
  name: "Refhired.com",
  description: "Get job referrals from employees of top best companies of the world.",
  url: siteUrl,
  ogImage: "https://tx.shadcn.com/og.jpg",
  email: "sayandeten@gmail.com", // ! noreply@refhired.com
  links: {
    twitter: "https://twitter.com/sayande2002",
    github: "https://github.com/shadcn/taxonomy",
  },
};
