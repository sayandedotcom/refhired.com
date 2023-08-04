import { create } from "zustand";

type Store = {
  userName: string;
  postType: string;
  claimUserName: (userName: any) => void;
  setPostType: (postType: any) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  postType: null,
  // claimUserName: () => set((state) => ({ userName: state.userName })),
  claimUserName: (userName) => set({ userName }),
  setPostType: (postType) => set({ postType }),
}));
