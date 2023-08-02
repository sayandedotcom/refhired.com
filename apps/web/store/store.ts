import { create } from "zustand";

type Store = {
  userName: string;
  claimUserName: (userName: any) => void;
};

export const useStore = create<Store>((set) => ({
  userName: "",
  // claimUserName: () => set((state) => ({ userName: state.userName })),
  claimUserName: (userName) => set({ userName }),
}));
