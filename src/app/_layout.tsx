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
