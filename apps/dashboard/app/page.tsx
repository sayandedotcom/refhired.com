// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }
import { getTranslations } from "next-intl/server";

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

export default async function Home() {
  // function onChange(value: string) {
  //   const locale = value as Locale;
  //   startTransition(() => {
  //     setUserLocale(locale);
  //   });
  const t = await getTranslations("Index");
  return (
    <div>
      <h1>{t("log_in")}</h1>
    </div>
  );
}
