// "use client";
import { Bell, Bookmark, DollarSign, LayoutDashboard, Search, User } from "lucide-react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline, IoDocumentsSharp, IoSettingsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TiTick, TiTickOutline } from "react-icons/ti";

export const portalsList = [
  {
    name: "Home",
    link: "/home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    name: "Search",
    link: "/search",
    icon: <Search />,
    activeIcon: <Search fill="#ffff" />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <Bell />,
    activeIcon: <Bell fill="#ffff" />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <Bookmark />,
    activeIcon: <Bookmark fill="#ffff" />,
  },
  {
    name: "Requests",
    link: "/requests",
    icon: <IoDocumentsOutline />,
    activeIcon: <IoDocumentsSharp />,
  },
  {
    name: "Applied",
    link: "/applied",
    icon: <TiTickOutline />,
    activeIcon: <TiTick />,
  },
  {
    name: "Settings",
    link: "/settings/profile",
    icon: <IoSettingsOutline />,
    activeIcon: <IoSettingsSharp />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
    activeIcon: <LayoutDashboard fill="#ffff" />,
  },
  {
    name: "Buy Stars",
    link: "/payments",
    icon: <DollarSign />,
    activeIcon: <DollarSign />,
  },
  {
    name: "Profile",
    link: null,
    icon: <User />,
    activeIcon: <User fill="#ffff" />,
  },
];
