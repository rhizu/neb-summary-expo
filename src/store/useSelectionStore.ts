import { create } from "zustand";

interface SelectionState {
  grade: string | null;
  subject: string | null;
  setSelection: (grade: string, subject: string) => void;
  reset: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  grade: null,
  subject: null,
  setSelection: (grade, subject) => set({ grade, subject }),
  reset: () => set({ grade: null, subject: null }),
}));
