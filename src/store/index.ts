import { Subject, subjectToHeadingMap } from "@/lib/notes";
import {
  BlueTheme,
  CyanTheme,
  GreenTheme,
  MagentaTheme,
  NavyTheme,
  PinkTheme,
  Purple2Theme,
  PurpleTheme,
  RedTheme,
  YellowTheme,
} from "@/styles/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const themeMap = {
  red: RedTheme,
  yellow: YellowTheme,
  green: GreenTheme,
  cyan: CyanTheme,
  blue: BlueTheme,
  navy: NavyTheme,
  purple: PurpleTheme,
  purple2: Purple2Theme,
  magenta: MagentaTheme,
  pink: PinkTheme,
};

type ThemeName = keyof typeof themeMap;

export const usePersistedBearStore = create<{
  grade: (typeof subjectToHeadingMap)[Subject]["grade"] | null;
  setGrade: (
    grade: (typeof subjectToHeadingMap)[Subject]["grade"] | null
  ) => void;
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
}>()(
  persist(
    (set, get) => ({
      grade: null,
      setGrade: (grade) => set({ grade }),
      themeName: "navy",
      setThemeName: (themeName) => {
        if (themeName in themeMap) {
          set({ themeName: themeName as ThemeName });
        }
      },
    }),
    {
      name: "food-storage",
      storage:
        Platform.OS === "web"
          ? createJSONStorage(() => localStorage)
          : createJSONStorage(() => AsyncStorage),
    }
  )
);
