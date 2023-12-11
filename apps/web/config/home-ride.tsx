// "use client";
import { Step } from "react-joyride";

// {
// content: React.ReactNode;
// disableBeacon?: boolean;
// event?: string;
// floaterProps?: FloaterType;
// hideFooter?: boolean;
// isFixed?: boolean;
// offset?: number;
// placement?: Placement | 'auto' | 'center';
// placementBeacon?: Placement;
// target: string | HTMLElement;
// title?: React.ReactNode;
// },

export const Steps: Step[] = [
  {
    title: "👋 Take a short tour !",
    placement: "center",
    target: "section",
    // disableBeacon: true,
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
    // disableBeacon: true,
    content: "Shows the lists of all the posts will be shown here",
  },
  {
    title: "Search",
    placement: "right",
    target: "#search",
    // disableBeacon: true,
    content: "You can search for posts or persons here",
  },
  {
    title: "Notifications",
    placement: "right",
    target: "#notifications",
    // disableBeacon: true,
    content: "All notifications will be shown here",
  },
  {
    title: "Bookmarks",
    placement: "right",
    target: "#bookmarks",
    // disableBeacon: true,
    content: "All bookmarks will be shown here",
  },
  {
    title: "Requests",
    placement: "right",
    target: "#requests",
    // disableBeacon: true,
    content: "All referrals requests will be shown here",
  },
  {
    title: "Applied",
    placement: "right",
    target: "#applied",
    // disableBeacon: true,
    content: "All applied referrals will be shown here",
  },
  {
    title: "Settings",
    placement: "right",
    target: "#settings",
    // disableBeacon: true,
    content: "All settings will be shown here",
  },
  {
    title: "Messages",
    placement: "right",
    target: "#messages",
    // disableBeacon: true,
    content: "All messages will be shown here",
  },
  {
    title: "Dashboard",
    placement: "right",
    target: "#dashboard",
    // disableBeacon: true,
    content: "Your dashboard to manage your requests will be shown here",
  },
  {
    title: "Profile",
    placement: "right",
    target: "#profile",
    // disableBeacon: true,
    content: "Your profile will be shown here",
  },
];
