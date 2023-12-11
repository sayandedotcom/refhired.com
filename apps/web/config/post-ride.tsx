// "use client";
import { Step } from "react-joyride";

export const PostSteps: Step[] = [
  {
    title: "👋 Take a short tour of Post Cards !",
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
    target: "#profile-picture",
    content: "This is my awesome feature!",
  },
  {
    title: "Search",
    placement: "right",
    target: "#post-name",
    content: "This is my awesome feature!",
  },
  {
    title: "Notifications",
    placement: "right",
    target: "#post-username",
    content: "This is my awesome feature!",
  },
  {
    title: "Bookmarks",
    placement: "right",
    target: "#post-time-left",
    content: "This is my awesome feature!",
  },
  {
    title: "Requests",
    placement: "right",
    target: "#post-options",
    content: "This is my awesome feature!",
  },
  {
    title: "Applied",
    placement: "right",
    target: "#post-content",
    content: "This is my awesome feature!",
  },
  {
    title: "Settings",
    placement: "right",
    target: "#post-tags",
    content: "This is my awesome feature!",
  },
  {
    title: "Settings",
    placement: "right",
    target: "#post-apply",
    content: "This is my awesome feature!",
  },
];
