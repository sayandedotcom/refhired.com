"use client";

import { Step } from "react-joyride";

export const PostSteps: Step[] = [
  {
    title: "👋 Take a short tour of Post !",
    placement: "center",
    target: "section",
    content: "Introduce to some features and options",
    locale: {
      skip: "Skip",
      next: "Next",
      last: <p className="font-heading text-base">Finish</p>,
      close: <p className="font-heading text-base">Close</p>,
      open: <p className="font-heading text-base">Open</p>,
    },
  },
  {
    title: "Home",
    placement: "right",
    target: "#home",
    content: "This is my awesome feature!",
  },
  {
    title: "Search",
    placement: "right",
    target: "#search",
    content: "This is my awesome feature!",
  },
  {
    title: "Notifications",
    placement: "right",
    target: "#notifications",
    content: "This is my awesome feature!",
  },
  {
    title: "Bookmarks",
    placement: "right",
    target: "#bookmarks",
    content: "This is my awesome feature!",
  },
  {
    title: "Requests",
    placement: "right",
    target: "#requests",
    content: "This is my awesome feature!",
  },
  {
    title: "Applied",
    placement: "right",
    target: "#applied",
    content: "This is my awesome feature!",
  },
  {
    title: "Settings",
    placement: "right",
    target: "#settings",
    content: "This is my awesome feature!",
  },
  {
    title: "Messages",
    placement: "right",
    target: "#messages",
    content: "This is my awesome feature!",
  },
  {
    title: "Dashboard",
    placement: "right",
    target: "#dashboard",
    content: "This is my awesome feature!",
  },
  {
    title: "Profile",
    placement: "right",
    target: "#profile",
    content: "This is my awesome feature!",
  },
];
