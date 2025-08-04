import "@/styles/global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const scheme = useColorScheme(); // light or dark

  return (
    <ThemeProvider
      value={scheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
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
