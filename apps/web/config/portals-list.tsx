// "use client";
import { Bell, Bookmark, LayoutDashboard, Mail, Search, Settings, User } from "lucide-react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline, IoDocumentsSharp } from "react-icons/io5";
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
    icon: <Settings />,
    activeIcon: <Settings fill="#ffff" />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <Mail />,
    activeIcon: <Mail fill="#ffff" />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
    activeIcon: <LayoutDashboard fill="#ffff" />,
  },
  {
    name: "Profile",
    link: null,
    icon: <User />,
    activeIcon: <User fill="#ffff" />,
  },
];
