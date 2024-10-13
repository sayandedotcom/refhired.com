// "use client";
import {
  Bell,
  Bookmark,
  DollarSign,
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
    name: "Settings",
    link: "/settings/profile",
    icon: <Settings />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Buy Stars",
    link: "/payments",
    icon: <DollarSign />,
  },
  {
    name: "Profile",
    link: null,
    icon: <User />,
  },
];
