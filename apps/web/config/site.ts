import { SiteConfig } from "@/types";

// const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://refhired.sayande.com";

const siteUrl =
  (process.env.NODE_ENV === "development" && "http://localhost:3000") ||
  (process.env.NODE_ENV === "production" && "https://refhired.com");

export const siteConfig: SiteConfig = {
  name: "Refhired.com",
  description: "Get job referrals from employees of top best companies of the world.",
  url: siteUrl,
  ogImage: "https://refhired.com/api/og",
  email: "sayandeten@gmail.com", // ! noreply@refhired.com
  links: {
    twitter: "https://twitter.com/sayandedotcom",
    github: "https://github.com/sayandedotcom/refhired.com",
  },
  waitlist: false,
};
