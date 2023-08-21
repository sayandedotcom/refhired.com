import { create } from "zustand";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";

type Store = {
  userName: string;
  postType: string;
  joyRide: string;
  toastPosition: Position;
  authDialogOpen: boolean | null;
  authDialogTitle: string;
  claimUserName: (userName: any) => void;
  setPostType: (postType: any) => void;
  setJoyRide: (joyRide: any) => void;
  setToastPosition: (toastPosition: any) => void;
  setAuthDialogOpen: (authDialogOpen: any) => void;
  setAuthDialogTitle: (authDialogTitle: any) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  postType: null,
  joyRide: null,
  toastPosition: "top-center",
  authDialogOpen: null,
  authDialogTitle: "Enjooy",
  // claimUserName: () => set((state) => ({ userName: state.userName })),
  claimUserName: (userName) => set({ userName }),
  setPostType: (postType) => set({ postType }),
  setJoyRide: (joyRide) => set({ joyRide }),
  setToastPosition: (toastPosition) => set({ toastPosition }),
  setAuthDialogOpen: (authDialogOpen) => set({ authDialogOpen }),
  setAuthDialogTitle: (authDialogTitle) => set({ authDialogTitle }),
}));
