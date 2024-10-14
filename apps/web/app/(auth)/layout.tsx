import { unstable_setRequestLocale } from "next-intl/server";

export default function AuthLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  unstable_setRequestLocale(locale);
  return <div className="bg-muted flex flex-col items-center justify-center lg:h-screen">{children}</div>;
}
