import "@/styles/global.css";
import {
  BlueTheme,
  CyanTheme,
  DarkThemeCustom,
  GreenTheme,
  LightTheme,
  MagentaTheme,
  NavyTheme,
  PinkTheme,
  PurpleTheme,
  RedTheme,
  YellowTheme,
} from "@/styles/themes";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const themeMap = {
  light: LightTheme,
  dark: DarkThemeCustom,
  red: RedTheme,
  yellow: YellowTheme,
  green: GreenTheme,
  cyan: CyanTheme,
  blue: BlueTheme,
  navy: NavyTheme,
  purple: PurpleTheme,
  magenta: MagentaTheme,
  pink: PinkTheme,
};

export default function RootLayout() {
  const systemScheme = useColorScheme(); // 'light' | 'dark'
  const [themeName, setThemeName] = useState<
    | "light"
    | "dark"
    | "red"
    | "yellow"
    | "green"
    | "cyan"
    | "blue"
    | "navy"
    | "purple"
    | "magenta"
    | "pink"
  >("pink");
  const theme = themeMap[themeName] ?? LightTheme;

  return (
    <ThemeProvider value={theme}>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              animation: "fade",
            }}
          />
          <Stack.Screen name="(drawer)" />
          <Stack.Screen name="notes/[chapterId]/index" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
