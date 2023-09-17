"use client";

import { LayoutDashboard } from "lucide-react";
import { AiFillHome, AiFillMail, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaBookmark, FaRegBookmark, FaRegUser, FaUserAlt } from "react-icons/fa";
import {
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
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
    icon: <RiSearchLine />,
    activeIcon: <RiSearchFill />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <IoNotificationsOutline />,
    activeIcon: <IoNotificationsSharp />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <FaRegBookmark />,
    activeIcon: <FaBookmark />,
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
    link: "/settings",
    icon: <IoSettingsOutline />,
    activeIcon: <IoSettingsSharp />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <AiOutlineMail />,
    activeIcon: <AiFillMail />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
    activeIcon: <LayoutDashboard />,
  },
  {
    name: "Profile",
    link: null,
    icon: <FaRegUser />,
    activeIcon: <FaUserAlt />,
  },
];
