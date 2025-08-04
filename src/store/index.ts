import { Subject, subjectToHeadingMap } from "@/lib/notes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const usePersistedBearStore = create<{
  grade: (typeof subjectToHeadingMap)[Subject]["grade"] | null;
  setGrade: (
    grade: (typeof subjectToHeadingMap)[Subject]["grade"] | null
  ) => void;
}>()(
  persist(
    (set, get) => ({
      grade: null,
      setGrade: (grade) => set({ grade }),
    }),
    {
      name: "food-storage",
      storage:
        Platform.OS === "web"
          ? undefined
          : createJSONStorage(() => AsyncStorage),
    }
  )
);
