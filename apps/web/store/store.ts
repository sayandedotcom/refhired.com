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
  referralPostFromDraft: any;
  findReferrerPostFromDraft: any;
  postFromDraft: any;
  claimUserName: (userName: any) => void;
  setPostType: (postType: any) => void;
  setJoyRide: (joyRide: any) => void;
  setToastPosition: (toastPosition: any) => void;
  setAuthDialogOpen: (authDialogOpen: any) => void;
  setAuthDialogTitle: (authDialogTitle: any) => void;
  setDisplayRequest: (displayRequest: TDashboardDisplayRequestsData) => void;
  setReferralPostFromDraft: (referralPostFromDraft: any) => void;
  setFindReferrerPostFromDraft: (findReferrerPostFromDraft: any) => void;
  setPostFromDraft: (postFromDraft: any) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  postType: null,
  joyRide: null,
  toastPosition: "bottom-right",
  authDialogOpen: null,
  authDialogTitle: "Enjooy",
  displayRequest: null,
  referralPostFromDraft: null,
  findReferrerPostFromDraft: null,
  postFromDraft: null,
  claimUserName: (userName) => set({ userName }),
  setPostType: (postType) => set({ postType }),
  setJoyRide: (joyRide) => set({ joyRide }),
  setToastPosition: (toastPosition) => set({ toastPosition }),
  setAuthDialogOpen: (authDialogOpen) => set({ authDialogOpen }),
  setAuthDialogTitle: (authDialogTitle) => set({ authDialogTitle }),
  setDisplayRequest: (displayRequest) => set({ displayRequest }),
  setReferralPostFromDraft: (referralPostFromDraft: any) => set({ referralPostFromDraft }),
  setFindReferrerPostFromDraft: (findReferrerPostFromDraft: any) => set({ findReferrerPostFromDraft }),
  setPostFromDraft: (postFromDraft) => set({ postFromDraft }),
}));
