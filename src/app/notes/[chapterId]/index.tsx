import {
  Redirect,
  router,
  Stack,
  useLocalSearchParams,
} from "expo-router";
import { Platform, ScrollView, Text, View } from "react-native";

import AppButton from "@/components/AppButton";
import { chapters } from "@/lib/notes";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NotePage() {
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  const { chapterId } = useLocalSearchParams<{
    chapterId: string;
  }>();

  let chapterIndex = 0;
  const chapter = chapters.find((chapter, index) => {
    if (chapter.id === chapterId) {
      chapterIndex = index;
      return true;
    }
    return false;
  });

  if (!chapter) {
    return <Redirect href="/" />;
  }

  const previousChapterId =
    chapters[chapterIndex - 1]?.id &&
    chapters[chapterIndex - 1].subject === chapter.subject &&
    chapters[chapterIndex - 1].grade === chapter.grade
      ? chapters[chapterIndex - 1].id
      : undefined;

  const nextChapterId =
    chapters[chapterIndex + 1]?.id &&
    chapters[chapterIndex + 1].subject === chapter.subject &&
    chapters[chapterIndex + 1].grade === chapter.grade
      ? chapters[chapterIndex + 1].id
      : undefined;

  if (!chapter) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Note not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        name="[chapterId]/index"
        options={{
          headerShown: true,
          animation: Platform.select({
            ios: "flip",
            android: "fade_from_bottom",
          }),
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                overflow: "hidden",
              }}
            />
          ),
          headerTintColor: "#fff",
          headerTitle: chapter.name,
        }}
      />
      <View className="flex flex-1 bg-gray-200">
        <View
          className="flex-1"
          style={{
            paddingBottom: !bottom ? 12 : bottom, // Add padding to avoid overlap with the bottom safe area
          }}
        >
          <View className="p-5 flex-1 pb-0">
            <View className="p-2 bg-white rounded-xl flex-1">
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex flex-col justify-center items-center p-2 gap-2">
                  <Text className="font-bold text-2xl">
                    {chapter.name}
                  </Text>
                  <View>
                    <Text className="text-left text-base">
                      {chapter.note || "Note not found."}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View className="flex-row gap-x-4 mt-4">
              {previousChapterId && (
                <AppButton
                  className="flex-1"
                  title={"Previous Chapter"}
                  onPress={() =>
                    router.replace({
                      pathname: "/notes/[chapterId]",
                      params: {
                        chapterId: previousChapterId,
                      },
                    })
                  }
                />
              )}
              {nextChapterId && (
                <AppButton
                  className="flex-1"
                  title={"Next Chapter"}
                  onPress={() =>
                    router.replace({
                      pathname: "/notes/[chapterId]",
                      params: { chapterId: nextChapterId },
                    })
                  }
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
