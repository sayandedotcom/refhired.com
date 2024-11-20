import { create } from "zustand";

import { TDashboardDisplayRequestsData } from "@/types/posts";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";

type Store = {
  userName: string;
  postType: string;
  joyRide: string;
  toastPosition: Position;
  authDialogOpen: boolean | null;
  authDialogTitle: string;
  displayRequest: TDashboardDisplayRequestsData | null;
  claimUserName: (userName: any) => void;
  setPostType: (postType: any) => void;
  setJoyRide: (joyRide: any) => void;
  setToastPosition: (toastPosition: any) => void;
  setAuthDialogOpen: (authDialogOpen: any) => void;
  setAuthDialogTitle: (authDialogTitle: any) => void;
  setDisplayRequest: (displayRequest: TDashboardDisplayRequestsData) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  postType: null,
  joyRide: null,
  toastPosition: "bottom-right",
  authDialogOpen: null,
  authDialogTitle: "Enjooy",
  displayRequest: null,
  claimUserName: (userName) => set({ userName }),
  setPostType: (postType) => set({ postType }),
  setJoyRide: (joyRide) => set({ joyRide }),
  setToastPosition: (toastPosition) => set({ toastPosition }),
  setAuthDialogOpen: (authDialogOpen) => set({ authDialogOpen }),
  setAuthDialogTitle: (authDialogTitle) => set({ authDialogTitle }),
  setDisplayRequest: (displayRequest) => set({ displayRequest }),
}));
