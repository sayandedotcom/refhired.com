// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }
"use client";

import DashboardPage from "@/components/dashboard-page";

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

// import DashboardPage from "@/components/dashboard-page";
// export default function Home() {
//   return <DashboardPage />;
// }

export default function Home() {
  return <DashboardPage />;
}

// export default function Home() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const createQueryString = useCallback(
//     (name: string, value: string) => {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set(name, value);

//       return params.toString();
//     },
//     [searchParams]
//   );
//   // function onChange(value: string) {
//   //   const locale = value as Locale;
//   //   startTransition(() => {
//   //     setUserLocale(locale);
//   //   });
//   return (
//     <div>
//       <Button
//         onClick={() =>
//           router.push(
//             "http://localhost:3000/auth/login" +
//               "?" +
//               createQueryString("callbackUrl", "http://localhost:4000")
//           )
//         }>
//         Login
//       </Button>
//     </div>
//   );
// }
