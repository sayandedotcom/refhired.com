import { Metadata } from "next";

import { Provider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Refhired.com",
    template: `%s | Refhired.com`,
  },
  description: "Get job referrals to the top best companies of the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
