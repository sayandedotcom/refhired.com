// "use client";
import {
  Bell,
  Bookmark,
  Coins,
  FileInput,
  FileOutput,
  Home,
  LayoutDashboard,
  Search,
  Settings,
  User,
} from "lucide-react";

export const portalsList = [
  {
    name: "Home",
    link: "/home",
    icon: <Home />,
  },
  {
    name: "Search",
    link: "/search",
    icon: <Search />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <Bell />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <Bookmark />,
  },
  {
    name: "Settings",
    link: "/settings/profile",
    icon: <Settings />,
  },
  {
    name: "Requests",
    link: "/requests",
    icon: <FileInput />,
  },
  {
    name: "Applied",
    link: "/applied",
    icon: <FileOutput />,
  },
  {
    name: "Dashboard",
    link: "/dashboard/overview",
    icon: <LayoutDashboard />,
  },
  {
    name: "Purchase",
    link: "/purchase",
    icon: <Coins />,
  },
  {
    name: "Profile",
    link: null,
    icon: <User />,
  },
];
