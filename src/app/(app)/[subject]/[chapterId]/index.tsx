import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import AppButton from "@/components/AppButton";
import Header from "@/components/Header";
import { notes, Subject, subjectToHeadingMap } from "@/lib/notes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NotePage() {
  const { bottom } = useSafeAreaInsets();
  const { subject, chapterId } = useLocalSearchParams<{
    subject: Subject;
    chapterId: string;
  }>();

  let chapterIndex = 0;
  const chapter = notes[subject]?.find((note, index) => {
    if (note.id === chapterId) {
      chapterIndex = index;
      return true;
    }
    return false;
  });

  const previousChapterId =
    chapterIndex > 0
      ? notes[subject][chapterIndex - 1].id
      : undefined;
  const nextChapterId = notes[subject][chapterIndex + 1]?.id;

  if (!chapter) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Note not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      <Header title={subjectToHeadingMap[subject].name} />
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
                <Text className="font-bold">{chapter.name}</Text>
                <View>
                  <Text className="text-left">
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
                    pathname: "/[subject]/[chapterId]",
                    params: { subject, chapterId: previousChapterId },
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
                    pathname: "/[subject]/[chapterId]",
                    params: { subject, chapterId: nextChapterId },
                  })
                }
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
