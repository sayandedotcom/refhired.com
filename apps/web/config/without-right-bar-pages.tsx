import { dashboardNavigation } from "./dashboard-navigation";

const dashboard = dashboardNavigation.map((path) => path.path);

export const withoutRightBarPages = [
  "/auth",
  "/purchase",
  "/requests",
  "/applied",
  "/settings/profile",
  "/settings/appearance",
  "/settings/notifications",
  ...dashboard,
];
