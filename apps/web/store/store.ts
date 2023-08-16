import { create } from "zustand";

type Store = {
  userName: string;
  postType: string;
  joyRide: string;
  authDialogOpen: boolean;
  claimUserName: (userName: any) => void;
  setPostType: (postType: any) => void;
  setJoyRide: (joyRide: any) => void;
  setAuthDialogOpen: (authDialogOpen: any) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  postType: null,
  joyRide: null,
  authDialogOpen: null,
  // claimUserName: () => set((state) => ({ userName: state.userName })),
  claimUserName: (userName) => set({ userName }),
  setPostType: (postType) => set({ postType }),
  setJoyRide: (joyRide) => set({ joyRide }),
  setAuthDialogOpen: (authDialogOpen) => set({ authDialogOpen }),
}));
