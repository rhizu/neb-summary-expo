import { themeMap, usePersistedBearStore } from "@/store";
import "@/styles/global.css";
import { NavyTheme } from "@/styles/themes";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const themeName = usePersistedBearStore((state) => state.themeName);
  const theme = themeMap[themeName] ?? NavyTheme;

  return (
    <ThemeProvider value={theme}>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              animation: "fade",
              title: "Choose Subject",
            }}
          />
          <Stack.Screen
            name="(drawer)"
            options={{
              animation: "slide_from_right",
              title: "Chapters",
            }}
          />
          <Stack.Screen
            name="notes/[chapterId]/index"
            options={{
              title: "Notes",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
